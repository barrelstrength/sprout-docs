---
date: 2023-07-30
description: Mailers enable you to customize the email author experience and configure how your emails are sent. 
---

# About Mailers

Mailers enable you to customize the email author experience and configure how your emails are sent. 

Each Email Type can select one Mailer.

## Mailer: Craft Mailer Settings

The default Mailer wraps Craft's default email settings.

## Mailer: Transactional Mailer

The Transactional Mailer allows you to customize Approved Senders, Reply-To Addresses, and Mailer Fields.

## Developers

### Custom Mailers

To create a custom Mailer that integrates with third-party email services, extend the base `Mailer` class and register your new class via `EVENT_REGISTER_MAILERS`.

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
