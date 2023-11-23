---
date: 2023-07-30
description: Sprout Email adds a centralized way to manage transactional email in Craft.
---

# About Transactional Email

Sprout Email adds a centralized way to manage transactional email in Craft. Transactional Emails support Notification Events, customizable Email Types, and the ability to send to dynamic Mailing 
Lists using Audiences for list management.

See the related documentation pages for further detail:
- [Audiences](./audiences)
- [Email Types](./email-types)
- [Mailer Settings](./mailers)
- [Sent Emails](./sent-email)

When you first install Sprout, you'll want to review your Email Type and Mailer Settings to ensure they match the needs for your email author workflows.

## Email Elements

Transactional Email Elements unify several email marketing and tooling concepts into a single element. 

- **Email Metadata** - Subject Line, Preheader Text
- **Mailer Settings** - Sender, Reply To, Recipients
- **Delivery Instructions** - Notification Event, Send Rules, File Attachments
- **Content** - Email Type, Custom Fields, Field Layout, Templates

## Notification Events

Notification Events give you the power to trigger transactional email exactly when you need it. Sprout provides several Notification Events to assist with common scenarios such as when an entry is saved or when a user is created.

## Condition Builder

Element-specific Notification Events allow you to use Craft's Condition Builder and Sprout provides several Condition Rules to help with fine-tune the conditions around when your Element events are triggered.

The Condition Builder gives you a lot of control over when your emails are triggered but also requires you take some time to understand how Elements are saved. It can easily feel like there are a lot of scenarios to be aware of.

### Multi-site

Use the `Site` Condition Rule to ensure your emails are triggered on the correct site(s).

### Twig Expression

The `Twig Expression` Condition Rule is a flexible way to add custom logic without writing a custom event. The Element that triggers the event is available as the `object` variable.

A simple rule could use a Twig Expression like so:

``` twig
{% if object.customField == true %}true{% endif %} 
```

More advanced rules can use an `include` to keep the CP setting simple:

``` twig
{# Twig Expression Condition Rule value #}
{% include "_notificationevents/twig-expression-rule.twig" %}

{# Template: _notificationevents/twig-expression-rule.twig #}
{% if object.customField == true %}true{% endif %}
```

See the doc page on [Twig Shortcut Syntax](./configuration/twig-shortcut-syntax.md) for more information.

## Personalization

Personalizing email communications can take place at several points in the email workflow. For example, when an Entry is saved you might want to know who the author was and where you can view the entry; when a form is submitted you may want to trigger a message to an email address provided in the form; and when a product is purchased you might want to include purchase details in confirmation message.

Personalization happens in phases and uses two different syntaxes. Fields that support personalization in the Control Panel are processed as object templates and can use [Twig Shortcut Syntax](./configuration/twig-shortcut-syntax.md). Email templates are processed as standard Twig.

### When a Notification Event is triggered

Each Notification Event defines **Notification Event Variables** that are available at the time the event is triggered. Entry events share the `entry` variable. User events share the `user` variable. But events are not limited to sharing just a single variable. Look in the right sidebar of the Control Panel when selecting an Event to see examples of which variables are available.

### Define recipients using event data

_Recipients_ can be set on the fly from data provided by the **Notification Event Variables**. For example, if your Form has an email field, you might set your recipient as:

```twig
{# Shortcut syntax #}
{submission.email}

{# Full syntax #}
{{ object.submission.email }}
```

### Fields that allow personalization

The _Subject Line_, _Preheader Text_, _Default Message_ also allow Twig Shortcut Syntax and can reference **Notification Event Variables** and **Recipient Variables** such as `{recipient.name}` and `{recipient.email}`.

### Customizing Email Templates

The Notification Event, Recipient, and Email Element variables are all available for use in your email templates. 

``` twig
{# Email Element Fields
------------------------------------------------------------ #}
{{ email.subjectLine }}<br/>
{{ email.preheaderText }}<br/>
{{ email.slug }}<br/>
{{ email.status }}<br/>
{{ email.fromName }}<br/>
{{ email.fromEmail }}<br/>
{{ email.replyTo }}<br/>

{# Recpient Variables
------------------------------------------------------------ #}
{{ recipient.email }}
{{ recipient.name }}

{# Email Type Custom Fields 
   These examples may not work in your project. You will need to
   update these examples to reference custom fields you are using.
------------------------------------------------------------ #}
{{ email.emailBanner.one().getUrl() }}
{{ email.leadText }}
{{ email.emailFooter }}

{# Notification Event Variables
   These variables will depend on what event you have triggered.
   The `entry` variable is available for the default Entry events.
   The `user` variable is available for the default User events.
------------------------------------------------------------ #}
{{ entry.title }}
{{ entry.getCpEditUrl() }}
{{ entry.customField }}

{{ user.email }}
{{ user.firstName }}
{{ user.getCpEditUrl() }}
{{ user.customField }}
```

::: tip
If you don't provide a template for the Text version of your email, Sprout Email will convert your HTML email to Markdown and use that for the Text version of your email.
:::

## Developers

### Custom Notification Events

To create a custom Notification Event, extend the base `NotificationEvent` class and register your new class via `EVENT_REGISTER_NOTIFICATION_EVENT_TYPES`.

``` php
use BarrelStrength\Sprout\transactional\notificationevents\NotificationEvent;

class MyNotificationEvent extends NotificationEvent
{
  ...
}
```

See related developer documentation for:

- [Audiences](./audiences)
- [Email Types](./email-types)
- [Mailer Settings](./mailers)

## Settings

Read the [Config Settings](/configuration/sprout-config.md) documentation to explore and customize settings.

## Updates

See [update guides](/update-guides/email.md) for the Transactional, Mailer, and Framework modules.
