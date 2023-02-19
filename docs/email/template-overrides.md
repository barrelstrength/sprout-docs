---
date: 2023-02-19
description: Sprout Email gives you 100% control over your email templates using the Template Overrides.
---

# Template Overrides

Sprout Email gives you 100% control over your email templates using the Template Overrides. If you wish to reuse your Template Overrides on multiple projects, you can create [Custom Email Templates](./custom-email-templates.md).

## Customizing Templates

Once you have enabled Template Overrides, you can override two email files. **Both files must be named 'email'. Files named something else will not be found**:

| File        |   |
|:----------- |:--------:|
| email.twig (or email.html)  | required |
| email.txt   | optional |

::: tip
If you don't provide a template for the Text version of your email, Sprout Email will convert your HTML email to Markdown and use that for the Text version of your email.
:::

### Personalization

See the documentation on [Personalization](./personalization.md) to learn more about available variables and how to customize your email templates.

### Getting Started

To get started, copy the default Sprout Email templates to your Custom Template Overrides folder. You can find the templates in Sprout Email here:

``` html
vendor/barrelstrength/sprout/templates/email
```

## Settings

### Global settings

Setup a Global Email Template override in the Sprout Email settings and add the path to the template folder where you wish to place your overrides:

``` html
Sprout Email → Settings → Default Email Templates → Add Custom
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
