---
date: 2023-07-30
description: Customize Email Types for Craft CMS email communications.
---

# About Email Types

Sprout provides you fine-grain control over your email template design, configuration, and author permissions using Email Types.

Email Types are created globally and can be selected when creating a new email.

## Email Type: Simple Message

Simple Message is the default Transactional Email Type. It tries to be as simple and un-opinionated as possible so it's handy when branding is not a concern and you just want to get an email working.

## Email Type: Form Summary

The Form Summary Email Type is available along with the Forms Module. This template makes it easy to send an email with a summary of all the fields in a form submission.

## Email Type: Custom Templates

The Custom Templates Email Type is where you can shine. This email type allows you to select your own email templates and custom field layout.

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

### Custom Email Types

To create a custom Email Type that goes beyond the Custom Templates Email Type, extend the base `EmailType` class and register your new class via `EVENT_REGISTER_EMAIL_TYPES`.

``` php
use BarrelStrength\Sprout\mailer\emailtypes\EmailType;

class MyEmailType extends EmailType
{
  ...
}
```

See the Sprout codebase for examples.

## Settings

Read the [Config Settings](./../configuration/sprout-config.md) documentation to explore and customize settings.

## Updates

See [update guides](../configuration/updates.md) for the Mailer and Framework modules.
