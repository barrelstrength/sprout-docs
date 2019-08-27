# Craft 3

Sprout Forms installation and update instructions for Craft 3.

## Requirements

* Craft CMS 3.0.0 or a more recent version of Craft

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

### Template Changes

Read over the [Changes in Craft 3](https://docs.craftcms.com/v3/changes-in-craft-3.html) for a general overview of things that have changed. These changes have affected Sprout Forms in several ways and if you have built any Forms with custom HTML you will likely need to update your code.

#### The Action URL format and Redirect URL format

::: code

``` twig Craft 3
<form method="post" accept-charset="utf-8" enctype="multipart/form-data">
	{{ getCsrfInput() }}
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