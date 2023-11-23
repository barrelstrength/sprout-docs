---
date: 2023-02-19
description: The Hidden Field allows you to define the value of a field on your form ahead of time without displaying that field to the user.
---

# Hidden Field

The Hidden Field allows you to define the value of a field on your form ahead of time without displaying that field to the user. This can be useful to help prepare information that will need to be associated with a form but doesn't necessarily need to be seen or filled out by the user.

The Hidden Field does display the value that you set in the templates so an enterprising user could view the code on your page and see the value you have prepared, and if they truly desire, even modify it directly in the code on the page. If you want to predefine a value that your user will never see and can never modify, see the [Invisible Field](./invisible-field.md).

## Settings

### Hidden Field Value

This setting let's you predefine the value you want to see in your Hidden Field. It can parse Twig and any values provided via the `addFieldVariables` template tag. See the Field Variables section below for more info.

### Allow edits

Enable this setting if you wish to allow users in the Control Panel to edit this Hidden Field value. By default, the field will display the value but not allow any edits.

## Field Variables

When using the default Form Templates, the Hidden Field has access to several common variables that are also available as Craft Global Variables. The default variables include:

- craft
- currentSite
- currentUser
- now
- siteName
- siteUrl
- systemName

These default values can be customized when using [Template Overrides](./template-overrides.md) and additional variables can be made available using the `addFieldVariables` tag. To add additional variables, pass those variables to the `addFieldVariables` tag in your templates before the `displayForm` tag.

``` twig
{% do sprout.forms.addFieldVariables({
    'entry': entry,
    'category': category,
    'hiddenEmail': 'email@website.com'
}) %}

{{ sprout.forms.displayForm('application') }}
```

The Hidden Field Value setting is processed like a Twig Template and you can target the available variables are all made available to the field using the `object` variable. The variables can be accessed using standard Twig syntax or shortcut syntax:

``` twig
{{ object.craft.app.getRequest().getAbsoluteUrl() }}
{{ object.entry.title }}
{{ object.entry.customField }}
{{ object.entry.customField.first().id }}
{{ object.hiddenEmail }}
```

And shortcut syntax:

``` twig
{craft.app.getRequest().getAbsoluteUrl()}
{entry.title}
{entry.customField}
{entry.customField.first().id}
{hiddenEmail}
```
