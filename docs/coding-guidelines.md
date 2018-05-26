# Coding Guidelines

Wherever possible, we try to match Craft's conventions outlined in the [Coding Guidelines](https://github.com/craftcms/docs/blob/master/en/coding-guidelines.md). Some tools to help achieve that include:

- [PhpStorm Settings for Craft CMS](https://github.com/PhpStorm-Live-Templates-Craft-CMSs/phpstorm-settings)
- [PhpStorm Live Templates for Craft CMS](https://github.com/barrelstrength/PhpStorm-Live-Templates-Craft-CMS)
- [PhpStorm Live Templates for Twig](https://github.com/barrelstrength/PhpStorm-Live-Templates-Twig-Extended)
- [Craft Twig for Sublime Text](https://github.com/barrelstrength/Craft-Twig.tmbundle)

## Sprout Guidelines

We also have several conventions that are specific to our Sprout plugins. Where we can, we try to align these with conventions in the Craft community.

## Naming

github repo: craft-sprout-forms
composer require: barrelstrength/craft-sprout-forms
plugin folder: sprout-forms
namespace: barrelstrength/sproutforms

## Git Workflow and Branching

We largely follow the [Git branching model](http://nvie.com/posts/a-successful-git-branching-model/) popularized by Vincent Driessen with a few updates to better fit our workflow.

As we have to maintain multiple master copies of our plugins, instead of a `master` branch, we maintain multiple master version branches. These branches are named using the format `v[Version Number]` where `v2` would represent all releases for the `v2.x.x` branch of the software. These version numbers correlate with the plugin version numbers, not the Craft version number, as we may have multiple major releases of a plugin for a single release of Craft.

- v1
- v2
- v3

## Tickets

When a customer contacts us with an issue or feature request that can't be resolved immediately, add a todo to the Issue in github that links to the support ticket. To respect the customer's privacy, we'll just link to the ID of the conversation and the private ticket URL that only we can access.

```
### Notify 

- [ ] [11812629123](https://app.intercom.io/a/apps/dfa064eb83c11784117312bve407fb3d35e00fa7/respond/inbox/27020/conversations/11812629123)
```

## Common Functionality

Link to Sprout Base Documentation. Normalize plugin behavior where we can.

- Use BaseSproutTrait for ::error, ::warning, ::info
- Use default Craft::t for translations
- Macros (manage in Sprout Base)
- Helpers
- Use Sprout Core for settings managment
- Use Sprout Core for all plugin icons
- Fields, and Fields in the UI
- Email, Import, Reports
- Add Plugin Name Override setting if CP section exists
- All custom fields should be managed in Sprout Fields
- Add CHANGELOG file to all plugins (only update this when preparing release)

## Pre-Release Checklist

- Run "yarn outdated" to test before releases and on projects to determine what needs updated.
- Run PHPStorm Inspections (Craft Inspections, general PHP inspections) and make sure there are no errors we need to fix
- Run PHPStorm Reformat Code (Command+Option L) on all files (PHP, Twig, Javascript, CSS). Ensure all code has proper formatting.
- Confirm all @todo flags in the codebase are still relevant or removed
- Confirm all @deprecated flags in the codebase are still relevant or removed
- Ensure all methods have proper comment blocks
- Run any tests we can programatically
- After database updates, ensure db schema for a fresh install and after an update are the same
- Update any translations in the default en translation file using Craft::t and the PhpStorm inspection

_Note: where we can, we want to automate these tasks and incorporate them into our workflow_


------------------------------------------------------------

Exclude vendor folder from repos (ADD to GUIDLINES DOC)
Devs should run this locally and Craft will install this for us at the application level.
Get this into our basic gitignore.
