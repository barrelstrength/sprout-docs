---
date: 2023-02-19
description: Sprout Forms installation and update instructions for Craft 3.
---

# Craft 3

Sprout Forms installation and update instructions for Craft 3.

## Requirements

* Craft CMS 3.3.0 or a more recent version of Craft

## Installation via Plugin Store

1. Find the plugin in the Plugin Store in your Craft Control Panel
2. Go to _Settings → Plugins_ and select “Install”

## Installation via Composer

1. Open your terminal and go to your Craft project:<br>`cd /path/to/project`
2. Then tell Composer to load the plugin:<br>`composer require barrelstrength/sprout-forms`
3. In the Control Panel, go to _Settings → Plugins_ and select “Install”

## Upgrading to Craft 3

::: warning BEFORE YOU UPDATE
Make sure you have updated to the latest version of Sprout Forms 2.x before updating to Sprout Forms 3.x for Craft 3
:::

### Form Field changes

In Craft 2, Sprout Forms extended the Craft Field Layout Editor and allowed you to add any field that Craft supported to a Form. While you could add any field on the back-end, Sprout only supported output the HTML for a subset of the fields on the front-end. In particular, more advanced fields like the Matrix had to supported manually in the templates.

In Craft 3, Sprout Forms added a new Form Field API that now requires Form Fields to have both front-end and back-end support. If you happen to be using a more advanced field type that was supported by Craft but not by Sprout Forms in Craft 2, you may need to develop a [Custom Form Field](./custom-form-fields.md) to support that field in Craft 3.

### Template Changes

Read over the [Changes in Craft 3](https://docs.craftcms.com/v3/changes-in-craft-3.html) for a general overview of things that have changed. These changes have affected Sprout Forms in several ways and if you have built any Forms with custom HTML you will likely need to update your code.

#### The Action URL format and Redirect URL format

::: code

``` twig Craft 3
<form method="post" accept-charset="utf-8" enctype="multipart/form-data">
    {{ csrfInput() }}
    <input type="hidden" name="action" value="sprout-forms/entries/save-entry">
    {{ redirectInput("/contact?message=thankyou") }}
    <input type="hidden" name="handle" value="formHandle">
    
    ...
    
    <input type="submit" value="Submit">	
</form>
```

``` twig Craft 2
<form method="post" accept-charset="utf-8" enctype="multipart/form-data">
    {{ getCsrfInput() }}
    <input type="hidden" name="action" value="sproutForms/entries/saveEntry">
    <input type="hidden" name="redirect" value="/contact?message=thankyou">
    <input type="hidden" name="handle" value="formHandle">
    
    ...
    
    <input type="submit" value="Submit">	
</form>
```

:::

#### Retrieving a form

``` twig
{% set form = sprout.forms.form('contact') %}
```

#### Identifying a field by type

Where `field` is a Form Field model:

::: code

``` twig Craft 3
{% if field.getFieldInputFolder() == 'dropdown' %}
    ...
{% endif %}
```

``` twig Craft 2
{% if field.type|lower == 'dropdown' %}
    ...
{% endif %}
```

:::

#### Displaying Tabs and Fields in Custom Templates

``` twig
{# form.html #}
{%- for tab in form.getFieldLayout().getTabs() %}
    {{ sprout.forms.displayTab(form, tab.id, renderingOptions) }}
{% endfor -%}

{# tab.html #}
{% for field in layoutFields -%}
    {{- sprout.forms.displayField(form, field, renderingOptions) }}
{%- endfor %}
```

### Notification Email Changes

The default Notification Email will now exclude several fields that may include sensitive or irrelevant information for a Notification Email. These fields include:

- Custom HTML
- Hidden Field
- Invisible Field
- Private Notes Field
- Section Heading Field

If you require these fields to be displayed in a Notification Email or wish to update the logic around which of them that do, you will need to override the default template and customize it to your needs. See [this response](https://craftcms.stackexchange.com/a/29650/115) on Stack Exchange for more info.

## Upgrading to Forms 3.4.1

Sprout Forms v3.4.1 introduces a handful of changes to make the Integrations API more flexible for custom Integrations. The general Integration architecture has stayed the same but several methods have been renamed. Please be sure to test any Custom Integrations while upgrading to 3.4.1 and consider the following changes:

### Removed

- Removed base Integration `updateTargetFieldsAction` and `updateSourceFieldsAction` dependencies in favor of `updateTargetFieldsOnChange` to allow Integrations to dynamically target fields to watch for changes
- Removed `prepareFieldTypeSelection` and `prepareIntegrationTypeSelection` variables and methods and simplified how Integration Types field is populated in modal templates

### Moved

- Moved `getFieldsAsOptionsByRow`, `getCompatibleFields`, and `getTargetIntegrationFieldsAsMappingOptions` from `IntegrationsController` to `EntryElementIntegration` class

### Renamed

- Renamed `getFormFieldsAsMappingOptions` => `getSourceFormFieldsAsMappingOptions`
- Renamed `actionGetElementEntryFields` => `actionGetTargetIntegrationFields` and updated it to instantiate and populate an Integration dynamically and trigger the `getTargetIntegrationFieldsAsMappingOptions` on a given Integration
- Renamed `prepareFieldMapping` => `refreshFieldMapping` and moved to base Integration class init method
- Renamed `resolveFieldMapping` => `getTargetIntegrationFieldValues` and moved to base Base Integration class
- Renamed IntegrationTrait property `entry` => `formEntry`

## Upgrading to Forms v3.5.0

Sprout Forms v3.5.0 adds support for Field Rules and includes updates to the Form Templates and Email Templates to support the new conditional behavior. In addition, Form Templates have been optimized to simplify the amount of javascript required in the templates. Form Templates and all javascript can still be customized however you need.

If your Forms use the Form Templates and Email Templates provided by Sprout Forms, no updates are needed. For Forms using custom Form Templates:

### Form Templates

Several updates have been made to the Form Templates to optimize the javascript used in the templates and add support for Field Rules.

#### Added support for rules

``` twig
ADDED RULES VARIABLE
{%- set rules = form.getRules() -%}

ADDED RULES DATA ATTRIBUTE
<form method="post" accept-charset="utf-8" enctype="multipart/form-data"
    {%- if id %} id="{{ id }}"{% endif -%}
    {%- if class %} class="{{ class -}}{%- if errors %} {{ errorClass }}{% endif -%}"{% endif -%}
    data-rules="{{ rules|json_encode|raw|e('html') }}"
>
```

#### Updated javascript

The latest form templates remove most JS from the templates and now include it via files. JS classes that require initialization have been simplified to only require the ID. The JS has also been updated to set the CSRF token name. The CSRF token value will be retrieved dynamically as necessary.

``` twig
OLD
<script>
// ... Lots of JS
</script>

NEW
{%- set accessibilityJsUrl = view.getAssetManager().getPublishedUrl(
    '@sproutforms/web/assets/formtemplates/dist/js/accessibility.js',
    true) -%}
{%- do view.registerJsFile(accessibilityJsUrl, {
    position: 3
}) -%}

{%- set rulesJsUrl = view.getAssetManager().getPublishedUrl(
    '@sproutforms/web/assets/formtemplates/dist/js/rules.js',
    true) -%}
{%- do view.registerJsFile(rulesJsUrl) -%}

{%- set addressFieldJsUrl = view.getAssetManager().getPublishedUrl(
    '@sproutforms/web/assets/formtemplates/dist/js/addressfield.js',
    true) -%}
{%- do view.registerJsFile(addressFieldJsUrl) -%}

{% js at endBody %}
    (function() {
    window.csrfTokenName = "{{ craft.app.getConfig().getGeneral().csrfTokenName|e('js') }}";
    new SproutFormsAddressField('{{ id }}');
    new SproutFormsCheckableInputs('{{ id }}');
    new SproutFormsRules('{{ id }}');
    })();
{% endjs -%}
```

### Email Templates

Email Templates can now check if a field is hidden by a field rule:

``` twig
OLD
{% for field in fields if not field.isPlainInput() %}

NEW
{% for field in fields if not field.isPlainInput() and not entry.getIsFieldHiddenByRule(field.handle) %}
```

### Other changes

- Removed `barrelstrength\sproutforms\elements\Form::deleteById()`. Use Elements Service `deleteElementById` instead.
- Removed `barrelstrength\sproutforms\web\twig\variables\getIntegrationById()`. Use Integrations service via Template API instead.

Custom integrations may also need to update how they initialize the target field column in the Field Mapping table:

``` twig
// OLD
new sprout.forms.Integration({
  integrationType: '{{ className(integration)|e('js') }}'
});

// NEW
new SproutFormsIntegration({
  integrationType: '{{ className(integration)|e('js') }}'
});
```

### Updating to Forms v3.6.0

This release adds several improvements to Spam workflows and has touched on several areas of the Entry Submission workflow. Some breaking changes have been introduced so users with more custom form implementations will want to review what has changed to get things updated properly.

### Form Templates

Custom Form Templates will need to update the class name used in the default conditional logic to correctly hide fields used in conditional logic rules.

``` twig
OLD
{% css %}
    .hidden {
    display: none !important;
    }
{% endcss %}

NEW
{% css %}
    .sprout-hidden {
    display: none !important;
    }
{% endcss %}
```

### Entry Queries using Status Handles

The `statusHandle` attribute has been removed as the same behavior is available via the Element `status` attribute.

``` twig
OLD
{% for formEntry in sprout.forms.entries
  .formHandle('contact')
  .statusHandle('pending')
  .all() %}
  {{ formEntry.title }}
{% endfor %}

NEW
{% for formEntry in sprout.forms.entries
  .formHandle('contact')
  .status('pending')
  .all() %}
  {{ formEntry.title }}
{% endfor %}
```

### Custom Captchas

The Captcha API has been updated.

``` php
OLD (OnBeforeSaveEntryEvent)
$event->isValid = true;
$event->fakeIt = true;
$event->entry->addError(Entry::CAPTCHA_ERRORS_KEY, $errorMessage);

NEW (OnBeforeValidateEntryEvent)
// isValid is now handled by checking for Errors on the model
// fakeIt is now handled via the 'Spam Redirect Behavior' setting in the CP
$this->addError(self::CAPTCHA_ERRORS_KEY, $errorMessage);
```

Previously, captcha validation ran during the `OnBeforeSaveEntryEvent` Event and used the `isValid` and `fakeIt` attributes on the event to control the flow of how the rest of the request got processed. Now, the active Captchas get processed on the `OnBeforeValidateEntryEvent` Event, errors are added to the Captcha models, and the Captcha models are added to the `Entry::captchas` attribute. This gives us a lot more flexibility on how to give the user control over this workflow in the CP and how we track errors when entries are flagged as Spam.

### Events

#### OnBeforePopulateEntryEvent

The `isValid` and `fakeIt` attributes have been removed as they were never used in the validation workflow.

``` php
REMOVED
$event->isValid
$event->fakeIt
```

#### OnBeforeValidateEntryEvent

The `isValid` and `fakeIt` attributes have been removed as they were never used in the validation workflow.

``` php
REMOVED
$event->isValid
$event->fakeIt
```

#### OnBeforeSaveEntryEvent

The `fakeIt` attribute has been removed as it is not longer used in the validation workflow. Use the 'Spam Redirect Behavior' setting instead. The `isValid` and `errors` attributes remain on this event and can be used by developers as a final opportunity to add custom validation behavior. However, it is recommended to create a Custom Captcha and add errors to the Captcha model when `verifySubmission` is validated.

``` php
REMOVED
$event->fakeIt
```

## Upgrading to Forms v3.9.0

Sprout Forms 3.9.0 is a recommended upgrade and fixes a vulnerability that could occur in some scenarios with custom Email Templates.

This release adds native support for AJAX submissions, global Success and Error Messages, and an improved Javascript submission event API. These features are provided out of the box if you are using our default Accessible Form Templates but will require manual updates to any custom template used in your project.

An updated Email Template API improves support for extending layouts from within your templates folder. If you have created any custom [Email Templates Integrations](../email/custom-email-templates.md), you will need to make a small change to the paths in your custom Email Templates Integration to support this behavior.

### AJAX Submissions

If you currently have a custom AJAX implementation to submit your forms, consider checking out our new AJAX submission feature and new [Javascript Events](./javascript-events.md). Let us know if it doesn't do something you need it to do. We'd love to help you have less code to manage!

Custom Form Templates will need to add support for AJAX submissions. Several individual Form settings (Submission Method, Success Message, Error Message, Error Display Method) may not work as expected until these updates are made to the templates.

#### Updates to form.twig

``` html
<!-- Add `data-submission-method` attribute to form tag -->
<form method="post" accept-charset="utf-8" enctype="multipart/form-data" data-submission-method="{{ form.submissionMethod }}">
    ...
</form>
```

#### Updates to form.twig

``` twig
{# Register Submit Handler JS file #}
{%- set submitHandlerJsUrl = view.getAssetManager().getPublishedUrl(
    '@sproutforms/web/assets/formtemplates/dist/js/submit-handler.js',
    true) -%}
{%- do view.registerJsFile(submitHandlerJsUrl) -%}

...
{# Initialize SproutFormsSubmitHandler #}
{% js at endBody %}
    (function() {
    window.csrfTokenName = "{{ craft.app.getConfig().getGeneral().csrfTokenName|e('js') }}";
    new SproutFormsAddressField('{{ id }}');
    new SproutFormsCheckableInputs('{{ id }}');
    new SproutFormsDisableSubmitButton('{{ id }}');
    new SproutFormsRules('{{ id }}');
    new SproutFormsSubmitHandler('{{ id }}');
    })();
{% endjs -%}
```

### Global Success and Error Messages

The default Accessible Templates have been updated to support global Success and Error messages when using AJAX submission or when a form is redirected back to the same page after submission. This code could also be used as a starting point for similar behavior if redirecting to a different page after the form is submitted.

#### Updates to form.twig

``` twig
{# Set these new variables at the top of the form.twig template #}
{% set globalErrorsEnabled = form.errorDisplayMethod in ['global', 'both'] ? true : false %}
{% set lastEntry = sprout.forms.lastEntry(form.id) %}

{# Define globalErrorListHtml if it exists #}
{%- set globalErrorListHtml -%}
    {% set globalErrors = [] %}
    {% for errors in entry.getErrors() %}
        {% for error in errors %}
            {% set globalErrors = globalErrors|merge([error]) %}
        {% endfor %}
    {% endfor %}
    {% include "errors" with {
        errors: globalErrors
    } %}
{%- endset -%}

{# Conditionally output the global Success and Error messages within the form.twig template #}
{% if globalErrorsEnabled and errors|length and (form.errorMessage or globalErrorListHtml) %}
    {% set errorMessage = view.renderObjectTemplate(form.errorMessage, entry) %}
    <div id="{{ id }}-message-box" class="sproutforms-message-errors">
        {{ errorMessage|markdown }}
        {{ globalErrorListHtml }}
    </div>
{% endif %}

{% if lastEntry and form.id == lastEntry.getForm().id and form.successMessage %}
    {% set successMessageTemplate = form.successMessage ?? '' %}
    {% set successMessage = view.renderObjectTemplate(successMessageTemplate, lastEntry) %}
    <div id="{{ id }}-message-box" class="sproutforms-message-success">{{ successMessage|markdown }}</div>
{% endif %}
```

#### Updates to field.twig

``` twig
{# Set this new variables at the top of the field.twig template #}
{% set inlineErrorsEnabled = form.errorDisplayMethod in ['inline', 'both'] ? true : false %}

{# Update the field.twig template to only output the errors if `inlineErrorsEnabled` is true #}
{% if inlineErrorsEnabled %}
    {% include "errors" with {
        errors: errors,
        name: name
    } %}
{% endif %}
```

### Javascript Events

Anything previously watching the `submit` event should probably be update to use the new `sproutFormsSubmit` event. As Sprout Forms watches the `submit` event issues can arise if third-party javascript also attempts to watch the same event. See the new [Javascript Events](./javascript-events.md) documentation for additional options you have to customize the submission process via Javascript.

``` javascript
OLD
form.addEventListener('submit', function(event) {
    // ...
}, false);

NEW
form.addEventListener('onSproutFormsSubmit', function(event) {
    // ...
}, false);
```

### Email Templates API

Sprout Forms v3.9.0 uses the updated Email Templates Integrations API. See the Sprout Email upgrade notes for details: [Upgrading to Email v4.2.0](../email/installing-and-updating-craft-3.md#upgrading-to-email-v4-2-0).

## Upgrading to Forms v3.10.0

#### Captcha Config Overrides

While the file-based config `config/sprout-forms.php` had not yet been documented, if you were using it to define Captcha settings these settings will need to be updated.

``` php
// OLD
'captchaSettings' => [
    'sproutforms-duplicatecaptcha' => [
        'enabled' => true,
    ],
    'sproutforms-javascriptcaptcha' => [
        'enabled' => true,
    ],
    'sproutforms-honeypotcaptcha' => [
        'enabled' => true,
        'honeypotFieldName' => 'beesknees',
        'honeypotScreenReaderMessage' => 'Leave this field blank'
    ],
],

// NEW
'captchaSettings' => [
    'barrelstrength\sproutforms\captchas\DuplicateCaptcha' => [
        'enabled' => true,
    ],
    'barrelstrength\sproutforms\captchas\JavascriptCaptcha' => [
        'enabled' => true,
    ],
    'barrelstrength\sproutforms\captchas\HoneypotCaptcha' => [
        'enabled' => true,
        'honeypotFieldName' => 'beesknees',
        'honeypotScreenReaderMessage' => 'Leave this field blank'
    ],
],
```

## Upgrading to Forms v3.12.0

Sprout Forms v3.12.0 includes a small breaking change to the `getFrontEndInputHtml` method in your Form Field classes. This was necessary to support more refined targeting for Rendering Options including the targeting of error classes on `input` fields to better support using Rendering Options for front-end frameworks such as Bootstrap.

### Custom Form Fields

Custom Form fields will need to update the `getFrontEndInputHtml` method signature to include a new second argument for the Form Entry Element and pass that `entry` variable to your input template:

``` php
// OLD
public function getFrontEndInputHtml($value, array $renderingOptions = null): Markup
{
    $rendered = Craft::$app->getView()->renderTemplate('dropdown/input', [
            'name' => $this->handle,
            'value' => $value,
            'field' => $this,
            'renderingOptions' => $renderingOptions
        ]
    );

    return TemplateHelper::raw($rendered);
}

// NEW
use barrelstrength\sproutforms\elements\Entry;

public function getFrontEndInputHtml($value, Entry $entry, array $renderingOptions = null): Markup
{
    $rendered = Craft::$app->getView()->renderTemplate('dropdown/input', [
            'name' => $this->handle,
            'value' => $value,
            'field' => $this,
            'entry' => $entry,
            'renderingOptions' => $renderingOptions
        ]
    );

    return TemplateHelper::raw($rendered);
}
```

### Rendering Options Error Classes

Additionally, to support Rendering Options error classes in your custom Form Field input template, you will want to update the Form Field input template to check for errors and update the `class` to include any error classes if they exist:

``` twig
// OLD
{%- set class = renderingOptions.class ?? name %}

// NEW
{%- set class = renderingOptions.class ?? name %}
{%- set errors = entry is not empty ? entry.getErrors(name) : null %}
{%- set errorClass = renderingOptions.errorClass ?? null %}
{%- set class = errors and errorClass ? class~' '~errorClass : class %}
``` 

## Upgrading to Forms 4.0.0 - UNRELEASED

Upgrade to the latest before updating.
Purge SPAM and delete old entries.

REMOVE Remove Basic Form templates. Link to old Repo if folks want to download them and use them as overrides.

Sprout Forms 4 is a major release the includes an update to the underlying architecture. The Sprout Forms user experience will remain familiar but several conventions have changed. Most notably, the core codebase for `barrelstrength/sprout-forms` has been moved to the `barrelstrength/sprout-base` package so any custom code, translations, or direct links to the Sprout Forms Control Panel will need to be updated to target the new naming conventions. Plugin-specific Control Panel settings have also moved to the Craft settings area.

Sidebar navigation has been updated to be independent of plugins and specific to the modules being used
If you had custom code adjusting the sidebar, you may need to revisit it.
Plugin features now default to their module names in the sidebar.

If you'd have questions and would like support at any time during the upgrade process, please reach out to support or schedule a half-hour consultation.

| Feature | Old Name | New Name |
|:------- |:------   |:------   |
| CP URL | `admin/sprout-forms` | `admin/sprout/forms` |
| Template Variables | `craft.sproutForms` | `sprout.forms` |
| Translation Category | `sprout-forms` | `sprout` |
| Controller Namespace | `barrelstrength/sproutforms/controllers` | `barrelstrength/sproutbase/app/forms/controllers`  |
| Service Namespace | `barrelstrength/sproutforms/services` | `barrelstrength/sproutbase/app/forms/services`  |

### Front-end Form Overrides

Front End Form Asset Resource paths changed:
Update path of formtemplates resources into web/assets/public/dist folder.

You will need to update the Form submission action in any template overrides:

``` twig
{# OLD #}
<input type="hidden" aria-hidden="true" name="action" value="sprout-forms/entries/save-entry">

{# NEW #}
<input type="hidden" aria-hidden="true" name="action" value="sprout/form-entries/save-entry">
```

| Old | New |
|:------   |:------   |
| `@sproutforms/web/assets/formtemplates/dist/js/submit-handler.js` | `@sproutbase/web/public/formtemplates/dist/js/SubmitHandler.js` |
| `@sproutforms/web/assets/formtemplates/dist/js/rules.js` | `@sproutbase/web/public/formtemplates/dist/js/Rules.js` |
| `@sproutforms/web/assets/formtemplates/dist/js/addressfield.js` | `@sproutbase/web/public/formtemplates/dist/js/AddressField.js` |
| `@sproutforms/web/assets/formtemplates/dist/js/accessibility.js` | `@sproutbase/web/public/formtemplates/dist/js/Accessibility.js` |
| `@sproutforms/web/assets/formtemplates/dist/js/disable-submit-button.js` | `@sproutbase/web/public/formtemplates/dist/js/DisableSubmitButton.js` |

### Removed Basic Form Templates

Document way use can copy these over and use them as Custom Templates folder if they wish.

### Form Templates API

FormTemplates are using two methods instead of one to determine path:
use FormTemplates::getTemplateRoot and FormTemplates::getPath
updated FormTemplates::getPath to not refer to the full path...

### Form Field override template

The countries variable has been updated and may need updated if you have a phone form field template override:

``` twig
{# OLD #}
{%- for key, option in sprout.fields.getCountries() -%}

{# NEW #} 
{%- for key, option in countries -%}
```

### Controllers

Any forms you submit to controllers in your templates, will need to be updated to point to new controller endpoints:

| Old | New |
|:------   |:------   |
| `sprout-forms/entries/[action-id]` | `sprout/form-entries/[action-id]` |
| `sprout-forms/groups/[action-id]` | `sprout/form-groups/[action-id]` |
| `sprout-forms/entry-statuses/[action-id]` | `sprout/form-entry-statuses/[action-id]` |

The class names that changed are:

| Old | New |
|:------   |:------   |
| `barrelstrength\sproutforms\controllers\Entries` | `barrelstrength\sproutbase\app\forms\controllers\FormEntries` | 
| `barrelstrength\sproutforms\controllers\Fields` | `barrelstrength\sproutbase\app\forms\controllers\FormFields` |
| `barrelstrength\sproutforms\controllers\Groups` | `barrelstrength\sproutbase\app\forms\controllers\FormGroups` |
| `barrelstrength\sproutforms\controllers\EntryStatuses` | `barrelstrength\sproutbase\app\forms\controllers\FormEntryStatuses` |
| `barrelstrength\sproutforms\controllers\Integrations` | `barrelstrength\sproutbase\app\forms\controllers\FormIntegrations` |

### Services

| Old | New |
|:------   |:------   |
| `SproutForms::$app->entries` | `SproutBase::$app->formEntries` |
| `SproutForms::$app->fields` | `SproutBase::$app->formFields` |
| `SproutForms::$app->groups` | `SproutBase::$app->formGroups` |
| `SproutForms::$app->entryStatuses` | `SproutBase::$app->formEntryStatuses` |
| `SproutForms::$app->integrations` | `SproutBase::$app->formIntegrations` |
| `SproutForms::$app->rules` | `SproutBase::$app->formRules` |

| Old | New |
|:------   |:------   |
| `barrelstrength\sproutforms\services\Entries` | `barrelstrength\sproutbase\app\forms\services\FormEntries` |
| `barrelstrength\sproutforms\services\Fields` | `barrelstrength\sproutbase\app\forms\services\FormFields` |
| `barrelstrength\sproutforms\services\Groups` | `barrelstrength\sproutbase\app\forms\services\FormGroups` |
| `barrelstrength\sproutforms\services\EntryStatuses` | `barrelstrength\sproutbase\app\forms\services\FormEntryStatuses` |
| `barrelstrength\sproutforms\services\Integrations` | `barrelstrength\sproutbase\app\forms\services\FormIntegrations` |
| `barrelstrength\sproutforms\services\Rules` | `barrelstrength\sproutbase\app\forms\services\FormRules` |

### Event Updates

The `EVENT_REGISTER_FORM_TEMPLATES` has moved:

``` php
// OLD
use barrelstrength/sproutforms/services/Forms;

Event::on(Forms::class, Forms::EVENT_REGISTER_FORM_TEMPLATES, static function(RegisterComponentTypesEvent $event) {
    $event->types[] = CustomFormTemplates::class;
});

// NEW
use barrelstrength/sprout/app/forms/services/FormTemplates;

Event::on(FormTemplates::class, FormTemplates::EVENT_REGISTER_FORM_TEMPLATES, static function(RegisterComponentTypesEvent $event) {
    $event->types[] = CustomFormTemplates::class;
});
```

The `EVENT_REGISTER_CAPTCHAS` Event has moved:

``` php
// OLD
use barrelstrength/sproutforms/services/Forms;

Event::on(Forms::class, Forms::EVENT_REGISTER_CAPTCHAS, static function(RegisterComponentTypesEvent $event) {
    $event->types[] = GoogleRecaptcha::class;
});

// NEW
use barrelstrength/sprout/app/forms/services/FormCaptchas;

Event::on(FormCaptchas::class, FormCaptchas::EVENT_REGISTER_CAPTCHAS, static function(RegisterComponentTypesEvent $event) {
    $event->types[] = GoogleRecaptcha::class;
});
```




