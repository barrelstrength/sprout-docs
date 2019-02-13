# Coding Guidelines

A central principle of the Sprout Plugin Suite is to create an experience – for both users and developers – that looks and feels like the native experience with Craft CMS. Toward that end, wherever possible, Sprout adopts conventions set forth by Craft CMS. These conventions include

| Convention | Notes |
|:---------- |:----- |
| [Craft CMS codebase](https://github.com/craftcms/cms) | Use the Craft APIs in the same way that Craft uses them |
| [Coding Guidelines](https://docs.craftcms.com/v3/extend/coding-guidelines.html) | | 
| [Craft Code Style](https://github.com/craftcms/phpstorm-settings) | PhpStorm Craft Code Style settings |
| [Craft Inspections](https://github.com/craftcms/phpstorm-settings) | PhpStorm Craft Code Style settings |
| [Php Inspections (EA Extended)](https://plugins.jetbrains.com/plugin/7622-php-inspections-ea-extended-) | Help monitor and adhere to conventions in PhpStorm. |
| [Yii Inspections](https://plugins.jetbrains.com/plugin/7622-php-inspections-ea-extended-) | Adds some Yii 2 and Craft-specific inspections in PhpStorm. |
| [Sass Mixins for Craft CMS](https://github.com/craftcms/sass) | Extend Control Panel templates with Craft conventions |
| [Craft UI](https://www.npmjs.com/package/@pixelandtonic/craftui) | A collection of Vue.js components and styles for Craft CMS apps. | 

## Sprout Guidelines

We also have several conventions that are specific to our Sprout plugins. Where we can, we try to align these with conventions in the Craft community.

## Git Workflow and Branching

We largely follow the [Git branching model](http://nvie.com/posts/a-successful-git-branching-model/) popularized by Vincent Driessen with a few updates to better fit our workflow.

As we have to maintain multiple master copies of our plugins, instead of a `master` branch, we maintain multiple master version branches. These branches are named using the format `v[Version Number]` where `v2` would represent all releases for the `v2.x.x` branch of the software. These version numbers correlate with the plugin version numbers, not the Craft version number, as we may have multiple major releases of a plugin for a single release of Craft.

- develop
- feature/feature-name
- bugfix/bugfix-name
- v1
- v2
- v3

## Naming

| Use Case | Naming Convention |
|:----- |:----------------- |
| GitHub repo | craft-sprout-forms |
| Composer require | barrelstrength/craft-sprout-forms |
| Plugin folder | sprout-forms |
| Namespace | barrelstrength/sproutforms |

## Folder Structure

### The top level

- plugin-handle/lib - any third-party libraries
- plugin-handle/src - the plugin application
- plugin-handle/.gitignore - standard .gitignore
- plugin-handle/CHANGELOG.md - Follow Craft CHANGELOG docs
- plugin-handle/README.md - Very basic overview that points to main documentation. See format for both commercial and free plugins.
- plugin-handle/LICENSE.md - Craft License or MIT License
- plugin-handle/composer.json - See Craft composer.json docs. We keep this file light. Two things to note. Don't add schemaVersion, hasCpSection, hasCpSettings to this file. They should go in the primary plugin module class. Also, this file should set the 'extra->class' setting to define the Plugin.php as a file with the name of the plugin itself.

### The src folder - Craft Conventions

- plugin-handle/src/Plugin.php - This file will usually be renamed to a class with the same name as the plugin. i.e. SproutForms.php. If necessary, we also set schemaVersion, hasCpSection, hasCpSettings in this file as it's easier to toggle those settings in development as Craft doesn't cache them in Craft's plugins.php file.
- plugin-handle/src/translations/en - We prepare a single translation file in English that others can use to translate a plugin.
- plugin-handle/src/templates/_components - Any template partials needed for Craft or the plugin itself.
- plugin-handle/src/templates/_components/componenttype/ComponentClassName/template.html - All components should follow this general structure if possible. Third-party plugin integrations will use a similar structure in the `_integrations` folder.

### The src folder - Unique Plugin Components 

- plugin-handle/src/base/ComponentType.php - The base class for new components we add to the ecosystem
- plugin-handle/src/componenttype - If a plugin adds a custom component we include in a folder at the top level that references the name of the component type. 

### Front-end resources in the src folder

- plugin-handle/src/web - all things relating to Assets or Twig 
- plugin-handle/src/web/assets/assetbundlename/AssetBundleName.php
- plugin-handle/src/web/twig/ - Twig things Extensions, Nodes, etc.
- plugin-handle/src/web/variables/VariableName.php - Variable classes

### Integrations with other plugins

- plugin-handle/src/integrations/pluginname/componenttype/ComponentClassName.php
- plugin-handle/src/integrations/pluginname/componenttype/componentsubtype/ComponentClassName.php - for some components, we need an additional folder for a subtype
- plugin-handle/src/templates/_components/pluginname/componenttype/ComponentClassName/template.html - Integrations are structured like components but exist in a subfolder that namespaces them by the plugin they relate to `_components/pluginname/...`

## Common Functionality

Many Sprout plugins share functionality and this code is managed in shared Yii Modules.

| Module | Description | 
|:----- |:----------------- |
| barrelstrength/sprout-base | Common settings and UI components |
| barrelstrength/sprout-base-email | Common email functionality | 
| barrelstrength/sprout-base-reports | Common reporting functionality |
| barrelstrength/sprout-base-import | Common import functionality |
| barrelstrength/sprout-base-fields | Common field functionality |
| barrelstrength/sprout-base-lists | Common list functionality |

Link to Sprout Base Documentation. Normalize plugin behavior where we can.


- Macros (manage in Sprout Base)
- Helpers
- Use Sprout Core for settings management
- Use Sprout Core for all plugin icons
- Fields, and Fields in the UI
- Email, Import, Reports
- Add Plugin Name Override setting if CP section exists
- All custom fields should be managed in Sprout Fields
- Add CHANGELOG file to all plugins (only update this when preparing release)
- Event naming conventions should follow Craft conventions
    EVENT_AFTER_ELEMENT_SAVE
    EVENT_BEFORE_CREATE_BACKUP
    EVENT_REGISTER_WIDGET_TYPES
    EVENT_REGISTER_CP_TEMPLATE_ROOTS
    EVENT_REGISTER_IMPORTER
    EVENT_REGISTER_IMPORTER_TYPES
    EVENT_REGISTER_THEME_TYPES

## Translations

Use the default Craft conventions for translations. This allows us to benefit from the Yii Inspections that allow us to bulk add and remove translations.

PHP Craft::t('sprout-forms', 'Message');
Twig Templates {{ "Message"|t('sprout-forms) }} 
CP Javascript | Craft:t('sprout-forms')

Each plugin or module maintains it's own translation file. As some plugins depend on multiple modules for their functionality, this may mean that someone translating a plugin will also have to translate translation files in other modules. For example, to completely translate Sprout Forms one would need to translate the files in Sprout Forms, Sprout Base Fields, and Sprout Base.

## Database Queries

- Make sure columns are wrapped with double brackets: [[columnname]]
https://www.yiiframework.com/doc/guide/2.0/en/db-dao#quoting-table-and-column-names

## Migrations

Due to our application structure using shared modules, in some cases migrations may need to be run by multiple plugins and it may not be predictable which order they get run in. To address this, we use the following conventions:

- Make sure every migration can be run twice, without throwing errors if it has already been run once.
- All migrations that affect a plugin with a shared module should be placed in the base module and instances of those migrations should be created in each respective plugin where they are needed.

### Naming migrations

#### Order

Migration naming will use the date in the first segment and the second segment will just represent the order that they should be run in for a particular release. The following migrations are all be part of a release on the same day, and are ordered 1, 2, 3 in the order they should run: 

- m190101_000001_migration_description
- m190101_000002_migration_description
- m190101_000003_migration_description

#### Migrations used by multiple plugins

Any migration instance that is just running a migration in base module should use the same name as the base migration and append the plugin name that it is being run from.

| Migration Name  | Plugin/Module Name |
|:--------------- |:------------------ |
| m190101_000001_migration_description | Sprout Base Email |
| m190101_000001_migration_description_sproutemail | Sprout Email |
| m190101_000001_migration_description_sproutforms | Sprout Forms |

## The Plugin Class

### Using Sprout Base

To include Sprout Base, in your plugins init() method:

``` php
public function init()
{
    parent::init();

    SproutBaseHelper::registerModule();
}
```

### Including Base Sprout Trait

Include Base Sprout Trait to simplify logging Errors, Warnings, and Info. Requires setting the $pluginHandle variable.

``` php
class SproutForms extends Plugin
{
    use BaseSproutTrait;

    public static $pluginHandle = 'sprout-forms';

    public function init()
    {
        ...
    }
}
```

### Registering components

In many of our plugins, we setup a component named app. We do this in the plugin's primary module class

``` php
use barrelstrength\sproutforms\services\App;

public static $app;

public function init()
{
    parent::init();

    $this->setComponents([
        'app' => App::class
    ]);

    self::$app = $this->get('app');
}
```

## Console Requests

Any actions that are run via console, the queue, or might be used in a third-party plugin via a queue are considered console requests and we should support them by avoiding to use any Web-only methods.

Web-only Application methods can be seen in `craftcms/cms/src/config/app.web.php` and should only be used in Web Controllers. Logic in Models and the Service Layer should depend only on classes that are supported by both Web and Console requests.

Web-only Application classes include classes loaded as components in the `app.web.php` file:

- craft\web\AssetManager
- craft\web\Request
- craft\web\Response
- craft\web\Session
- craft\web\UrlManager
- craft\web\User
- craft\web\ErrorHandler

And any other classes found in the `craftcms/cms/src/web` folder:

- craft\web\AssetBundle
- craft\web\Controller
- craft\web\ServiceUnavailableHttpException
- craft\web\UploadedFile
- craft\web\UrlRule
- craft\web\View

Don't use Web-only methods outside of Web Controllers. Ways to test for this? Search for ann Craft::$app->getRequest methods outside of Web controllers. Run ./craft help and see if you get any errors.

----

Exclude vendor folder from repos. Add vendor to standard gitignore.

Devs should run composer update locally and Craft will install this for us at the application level.

## Pre-Release Checklist

- Run "yarn outdated" to test before releases and on projects to determine what needs updated.
- Run PHPStorm Inspections (Craft Inspections, general PHP inspections) and make sure there are no errors we need to fix
- Run PHPStorm Reformat Code (Command+Option L) on all files (PHP, Twig, Javascript, CSS). Ensure all code has proper formatting.
- Confirm all @todo flags in the codebase are still relevant or removed
- Confirm all @deprecated flags in the codebase are still relevant or removed
- Ensure all methods have proper comment blocks
- Run any tests we can programatically
- After database updates, ensure db schema for a fresh install and after an update are the same
- Make sure all text has translation categories in PHP and Twig and JS: t('sprout-forms-countries')
- Update any translations in the default en translation file using Craft::t and the PhpStorm inspection. Run various checks to make sure we are passing text through the necessary translate filters for PHP, HTML, and JS. 
- Make sure all database queries are compatible with MySQL and PostgreSQL

_Note: where we can, we want to automate these tasks and incorporate them into our workflow_
