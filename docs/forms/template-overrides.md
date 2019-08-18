# Template Overrides

Sprout Forms gives you 100% control over your form output using the Template Overrides. If you wish to reuse your Template Overrides on multiple projects, you can create [Custom Form Templates](./custom-form-templates.md).

## Customizing Templates

Once you have enabled Template Overrides, you can override one or all of the following template files:

| File        | Craft 3 | Craft 2 | Notes  |
|:----------- |:-------:|:-------:|:-----  |
| form.html   | **✓**   | **✓**   |  |
| tab.html    | **✓**   | **✓**   |  |
| field.html  | **✓**   | **✓**   | Also requires tab.html and errors.html |
| errors.html | **✓**   | **✓**   |  |
| email.html  | **✗**   | **✓**   | Override using [Email Templates](../email/template-overrides.md) in Craft 3 |
| fields/*  | **✓**   | **✗**   | See _Customizing Fields_ below. |

Your edits could be as small as adding a custom id to the `<form>` tag or reworking the entire HTML structure to work nicely with Foundation, Bootstrap, or your favorite front-end framework.

::: tip
Enabling template overrides gives you full control over the underlying template code. If something stops working as expected, test your form using the default Form Templates to help determine if you may have unintentionally bumped something.
:::

### Customizing Fields

#### Craft 3

All input fields can be overridden in Craft 3 by placing an override template in the _fields_ folder: 

```
singleline/input.html
paragraph/input.html
phone/input.html
```

A field's folder name is the lowercase version of its field name without spaces and can be retrieved dynamically by calling `field.getFieldInputFolder()`.

#### Craft 2

Field inputs in Craft 2 are managed via each individual field and only overridable at the field level. This makes it a bit harder to support some override behavior by default. If you need to override an input field in Craft 2, consider:

- Updating your CSS to target the field wrapper instead of the input field: `.required input` vs. `input.required`
- Targeting the specific fields you need to update via [Rendering Options](./rendering-options.md)
- Creating a [Custom Form Field](./custom-form-fields.md)  

### Getting Started

To get started, copy all of the default Sprout Forms templates to your Custom Template Overrides folder. You can find the templates in Sprout Forms here:
 
::: code

``` html Craft 3
vendor/barrelstrength/sprout-forms/src/templates/_components/formtemplates/accessible
```

``` html Craft 2
craft/plugins/sproutforms/templates/_special/templates
```

:::

## Settings

### Global settings

Setup a Global Form Template override in the Sprout Forms settings and add the path to the template folder where you wish to place your overrides:

::: code

``` html Craft 3
Sprout Forms → Settings → Default Form Templates → Add Custom
```

``` html Craft 2
Sprout Forms → Settings → Advanced → Enable custom form templates globally
```

:::

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
