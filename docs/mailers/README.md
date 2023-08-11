---
date: 2023-07-30
description: Mailers enable you to customize the email author experience and configure how your emails are sent. 
---

# About Mailers

Mailers enable you to customize the email author experience and configure how your emails are sent. Use the default Transactional Mailer to lean on the same settings you've used to configure Craft or create a custom Mailer for your application requirements.

## Mailer: Transactional Mailer

Simple Message is the default Transactional Email Template. It tries to be as simple and un-opinionated as possible so it's handy when branding is not a concern and you just want to get an email working.


::: tip
If you don't provide a template for the Text version of your email, Sprout Email will convert your HTML email to Markdown and use that for the Text version of your email.
:::

## Developers

### Custom Mailers

To create a custom Mailer that integrates with third-party email services, extend the base `Mailer` class and register your new class via `EVENT_REGISTER_MAILER_TYPES`.

``` php
use BarrelStrength\Sprout\mailer\mailers\Mailer;

class MyMailer extends Mailer
{
  ...
}
```

See the Sprout codebase for examples.

## Settings

Read the [Config Settings](./../configuration/sprout-config.md) documentation to explore and customize settings.

## Updates

See [update guides](../configuration/updates.md) for the Mailer and Framework modules.
