# Template Overrides

Sprout Forms allows you to have 100% control over your dynamic form output using the Template Overrides feature.

To enable this feature, go to `Sprout Forms->Settings->Advanced` and enable the override method you wish to use:

- Enable custom form templates globally
- Enable custom form templates on a per-form basis

## Settings

### Global settings

When you enable overrides globally, you will be able to set your global overrides path in the advanced settings.

### Per-form settings

When you enable overrides on a per-form basis, you'll have to add the override folder in your form settings.  

When creating a new form, on the Advanced tab, select _Enable Custom Template Overrides Folder_ and set the _Template Overrides Folder_ to the front-end folder in your `templates` directly you wish to use for your overrides.

Setting this value to `_forms` would allow you to place your override templates in the `craft/templates/_forms` folder.




## Custom Form Templates

Once you have enabled template overrides, you can override one or all of the following template files:

- form.html
- tab.html
- field.html (also requires tab.html and errors.html)
- errors.html
- email.html

Your edits could be as small as adding a custom id to the `<form>` tag or reworking the entire HTML structure to work nicely with Foundation, Bootstrap, or your favorite front-end framework.

_**NOTE: Enabling template overrides gives you full control over the underlying template code. With great power...**_

If you'd like to copy the default Sprout Forms templates to get started, you can find them in `sproutforms/templates/_special/templates`.

## Custom Field Templates 