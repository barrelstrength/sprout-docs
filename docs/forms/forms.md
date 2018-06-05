# Forms

Form Elements allow users to create and manage single and multi-page online forms within Craft CMS.

Content authors can add [Form Fields](./form-fields.md), tabs, and customize a form's [settings](plugin-settings.md) such as a custom Title Format, Redirect, or Submit Button text.

When forms are submitted, an [Entry](./entries.md) will be created in your Craft database. Send [Notification Emails](notifications.md) to confirm receipt with the user or notify admins that a new Entry is ready for review. Run and export [Reports](./reports.md) to learn more.   

## Form Templates

Forms are displayed on your website using Form Templates. Sprout Forms comes with two [Default Form Templates](./default-form-templates.md) and your web team can customize and style those templates using [Template Overrides](./template-overrides.md) or by building a [Custom Form Template] plugin.

Front-end validation, error states, accessibility, and submitting your form data will be managed from your Form Templates. 

Form Templates can be set globally or customized on a per-form basis. You can switch between Form Templates via the Form Templates dropdown field in the global settings or (if enabled) on an individual form's settings.

## Templating

To make a form available to your users, you will need to display it in your templates. This can be done for a specific form or, for scenarios such as landing pages, you can let your content authors select or build a custom form for a specific page.

### A specific form

Display a specific form on a specific page in your templates like so:

``` twig
{{ craft.sproutForms.displayForm('contactForm') }}
```

### A chosen form

Add a Form Relations Field to a Field Layout to allow a content author to select any available Form to display on a particular page.

::: code

``` craft3
{% set formHandle = entry.formFieldHandle.one().handle %}

{{ craft.sproutForms.displayForm( formHandle ) }}
```

``` craft2
{% set formHandle = entry.formFieldHandle.first().handle %}

{{ craft.sproutForms.displayForm( formHandle ) }}
```

:::

### Template Tags

While the primary tag you will use in your templates is the `displayForm` tag, there are several tags to be aware of if you wish to get into more advanced use cases.

#### displayForm

The `displayForm` tag renders the HTML for all files defined in your Form Templates.

``` twig
{{ craft.sproutForms.displayForm('contactForm') }}
```

#### displayTab

The `displayTab` tag is called within the `displayForm` tag and renders each individual tab defined in your form and all fields within it.

::: code

``` craft3
{% for tab in form.getFieldLayout().getTabs() %}
    {{ craft.sproutForms.displayTab(form, tab.id, renderingOptions) }}
{% endfor %}
```

``` craft2
{{ craft.sproutForms.displayTab('contact.tab1') }}

{# Examples of how Tab Handles get processed:

Tab Name             Tab Handle
----------           ----------
Tab 1                tab1
Section One          sectionone
Personal Questions   personalquestions
#}
```

:::

#### displayField

The `displayField` tag is called within the `displayTab` tag and renders each individual field defined in your Tab's Field Layout.

::: code

``` craft3
{% set layoutFields = tab.getFields() %}

{% for field in layoutFields -%}
    {{ craft.sproutForms.displayField(form, field, renderingOptions) }}
{% endfor %}
```

``` craft2
{{ craft.sproutForms.displayField('contact.email') }}
```

:::

#### form

You can access your Form Element directly using the `form` tag.

::: code

``` craft3
{# Returns a barrelstrength\sproutforms\elements\Form #}
{% set form = craft.sproutForms.form('contact') %}
```

``` craft2
{# Returns a SproutForms_FormModel #}
{% set form = craft.sproutForms.form('contact') %}
```

:::

## Form Relations Field

Sprout Forms adds a Form Relations Field to Craft CMS:
 
- **Forms (Sprout Forms)**

## Settings

### Redirects

Sprout Forms allows you to set a redirect for your Form in the Form Settings or in the template.

``` twig
<form method="post" action="" accept-charset="UTF-8">

    <input type="hidden" name="action" value="sproutForms/entries/saveEntry">
    <input type="hidden" name="handle" value="contact">
    <input type="hidden" name="redirect" value="contact?message=thankyou">

    {# All of your fields here #}

    <input type="submit" value="Submit">

</form>
```

Your redirect value can be an absolute URL, relative URL, or use an environmentVariable. 

#### Example redirect values:

- /thank-you
- thank-you
- ?message=success
- thank-you?message=success
- {siteUrl}
- http://website.com/thank-you
 