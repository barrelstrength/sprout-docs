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

``` craft3
<form method="post" accept-charset="utf-8" enctype="multipart/form-data">
	{{ getCsrfInput() }}
	<input type="hidden" name="action" value="sprout-forms/entries/save-entry">
	{{ redirectInput("/contact?message=thankyou") }}
	<input type="hidden" name="handle" value="formHandle">
	
	...

	<input type="submit" value="Submit">	
</form>
```

``` craft2
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

::: code

``` craft3
{% set form = craft.sproutForms.form('contact').one() %}
```

``` craft2
{% set form = craft.sproutForms.form('contact') %}
```

:::

#### Identifying a field by type

Where `field` is a Form Field model:

::: code

``` craft3
{% if field.getFieldInputFolder() == 'dropdown' %}
    ...
{% endif %}
```

``` craft2
{% if field.type|lower == 'dropdown' %}
    ...
{% endif %}
```

:::

#### Displaying Tabs and Fields in Custom Templates
 
::: code

``` craft3
{# form.html #}
{%- for tab in form.getFieldLayout().getTabs() %}
    {{ craft.sproutForms.displayTab(form, tab.id, renderingOptions) }}
{% endfor -%}

{# tab.html #}
{% for field in layoutFields -%}
    {{- craft.sproutForms.displayField(form, field, renderingOptions) }}
{%- endfor %}
```

``` craft2
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