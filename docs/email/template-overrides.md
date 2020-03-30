# Template Overrides

Sprout Email gives you 100% control over your email templates using the Template Overrides. If you wish to reuse your Template Overrides on multiple projects, you can create [Custom Email Templates](./custom-email-templates.md).

## Customizing Templates

Once you have enabled Template Overrides, you can override two email files. **Both files must be named 'email'. Files named something else will not be found**:

| File        | Craft 3  | Craft 2  |
|:----------- |:--------:|:--------:|
| email.twig (or email.html)  | required | required |
| email.txt   | optional | required |

::: tip
If you don't provide a template for the Text version of your email in Craft 3, Sprout Forms will convert your HTML email to Markdown and use that for the Text version of your email. 
:::

### Personalization

See the documentation on [Personalization](./personalization.md) to learn more about available variables and how to customize your email templates.


### Getting Started

To get started, copy the default Sprout Email templates to your Custom Template Overrides folder. You can find the templates in Sprout Email here:
 
::: code

``` html Craft 3
vendor/barrelstrength/sprout-base/src/app/email/templates/_components/emailtemplates/basic
```

``` html Craft 2
No defaults Email Templates available.
```

:::

## Settings

### Global settings

Setup a Global Email Template override in the Sprout Email settings and add the path to the template folder where you wish to place your overrides:

::: code

``` html Craft 3
Sprout Email → Settings → Default Email Templates → Add Custom
```

``` html Craft 2
No Global Email Template setting available.
```

:::

If you wish to customize Form Templates on a per-form basis, enable the setting:

``` 
Enable custom Email Templates on a per-email basis
```

::: tip
Setting the Custom Template Folder value to `_emails` would allow you to place your override templates in the `craft/templates/_emails` folder.
:::

### Per-form settings

When you _Enable custom Email Templates on a per-email basis_, you'll have to add the override folder in your Email Element settings.  

When creating a new Email, in the Email Settings sidebar, select the Email Template or add the Email Template folder you wish to use for your overrides.