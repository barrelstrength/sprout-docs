---
date: 2023-07-30
description: Customize Email Themes for Craft CMS email communications.
---

# About Email Themes

Sprout provides you 100% control over your email template design and branding using Email Themes.

Email Themes are created globally and can be selected on a per-email basis.

## Theme: Simple Message

Simple Message is the default Transactional Email Template. It tries to be as simple and un-opinionated as possible so it's handy when branding is not a concern and you just want to get an email working.

## Theme: Form Summary

The Form Summary Theme is available along with the Forms Module. This template makes it easy to send an email with a summary of all the fields in a form submission.

## Theme: Custom Templates

The Custom Templates theme is where you can shine. This theme allows you to select your own email templates and custom field layout.

Several template variables are available to help you customize your email templates.

``` twig
{{ recipient }} // The Recipient info
{{ email }}     // The Email Element
{{ object }}    // Notification Events provide an Event Object 
```

::: tip
If you don't provide a template for the Text version of your email, Sprout Email will convert your HTML email to Markdown and use that for the Text version of your email.
:::

## Developers

### Custom Email Themes

To create a custom Email Theme that goes beyond the Custom Templates theme, extend the base `EmailTheme` class and register your new class via `EVENT_REGISTER_SPROUT_EMAIL_THEMES`.

``` php
use BarrelStrength\Sprout\mailer\emailthemes\EmailTheme;

class MyEmailTheme extends EmailTheme
{
  ...
}
```

See the Sprout codebase for examples.

## Settings

Read the [Config Settings](./../configuration/sprout-config.md) documentation to explore and customize settings.

## Updates

See [update guides](../configuration/updates.md) for the Mailer and Framework modules.
