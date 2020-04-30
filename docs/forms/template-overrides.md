---
date: 2018-06-25
description: Sprout Forms gives you 100% control over your form output using the Template Overrides.
---

# Template Overrides

Sprout Forms gives you 100% control over your form output using the Template Overrides. If you wish to reuse your Template Overrides on multiple projects, you can create [Custom Form Templates](./custom-form-templates.md).

## Customizing Templates

Once you have enabled Template Overrides, you can override one or all of the following template files:

| File        | Notes  |
|:----------- |:-----  |
| form.html   |  |
| tab.html    |  |
| field.html  | Also requires tab.html and errors.html |
| errors.html |  |
| fields/*    | See _Customizing Fields_ below. |

Your edits could be as small as adding a custom id to the `<form>` tag or reworking the entire HTML structure to work nicely with Foundation, Bootstrap, or your favorite front-end framework.

::: tip
Enabling template overrides gives you full control over the underlying template code. If something stops working as expected, test your form using the default Form Templates to help determine if you may have unintentionally bumped something.
:::

### Customizing Fields

All input fields can be overridden by placing an override template in the _fields_ folder: 

```
singleline/input.html
paragraph/input.html
phone/input.html
```

A field's folder name is the lowercase version of its field name without spaces and can be retrieved dynamically by calling `field.getFieldInputFolder()`.

### Customizing Email

For customizing email notifications, see [Email Templates](../email/template-overrides.md). 

### Getting Started

To get started, copy all of the default Sprout Forms templates to your Custom Template Overrides folder. You can find the templates in Sprout Forms here:

``` html
vendor/barrelstrength/sprout-forms/src/templates/_components/formtemplates/accessible
```

## Settings

### Global settings

Setup a Global Form Template override in the Sprout Forms settings and add the path to the template folder where you wish to place your overrides:

``` html
Sprout Forms → Settings → Default Form Templates → Add Custom
```

If you wish to customize Form Templates on a per-form basis, enable the setting:

``` 
Enable custom form templates on a per-form basis
```

::: tip
Setting the Custom Template Folder value to `_forms` would allow you to place your override templates in the `craft/templates/_forms` folder.
:::

### Per-form settings

When you _Enable custom form templates on a per-form basis_, you'll have to add the override folder in your form settings.  

When creating a new form, in the Form Settings sidebar, select the Form Template or add the Form Template folder you wish to use for your overrides.
