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
{% set form = craft.sproutForms.form('contact') %}
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
 
::: code

``` twig Craft 3
{# form.html #}
{%- for tab in form.getFieldLayout().getTabs() %}
    {{ craft.sproutForms.displayTab(form, tab.id, renderingOptions) }}
{% endfor -%}

{# tab.html #}
{% for field in layoutFields -%}
    {{- craft.sproutForms.displayField(form, field, renderingOptions) }}
{%- endfor %}
```

``` twig Craft 2
{# form.html #}
{{ body | raw }}

{# tab.html #}
{% for layoutField in layoutFields -%}
    {%- set field     = layoutField.getField() -%}
    {%- set required  = layoutField.required -%}
    {%- set formField = craft.sproutForms.getRegisteredField(field.type) -%}

    {%- do field.setAttribute('required', layoutField.required) -%}

    {%- if formField -%}
        {% include "field" with {
            form:                 form,
            field:                field,
            element:              entry,
            required:             required,
            formField:            formField,
            renderingOptions:     renderingOptions,
            thirdPartySubmission: thirdPartySubmission,
        } only %}
    {%- endif %}
{%- endfor %}
```

:::

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
new Craft.SproutForms.Integration({
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
{% for formEntry in craft.sproutForms.entries
  .formHandle('contact')
  .statusHandle('pending')
  .all() %}
  {{ formEntry.title }}
{% endfor %}

NEW
{% for formEntry in craft.sproutForms.entries
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


			




    