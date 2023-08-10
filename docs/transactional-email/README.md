---
date: 2023-07-30
description: Sprout Email adds a centralized way to manage transactional email in Craft.
---

# About Transactional Email

Sprout Email adds a centralized way to manage transactional email in Craft. Transactional Emails support Notification Events, customizable Email Themes, and the ability to send to dynamic Mailing Lists using Audiences for list management.

See the related documentation pages for further detail:

- [Audiences](../audiences)
- [Email Themes](../email-themes)
- [Mailers](../mailers)
- [Sent Emails](../sent-email)

When you first install Sprout, you'll want to configure your Email Theme and Mailer settings to ensure they match the needs for your email author workflows.

## Transactional Email Elements

Transactional Email Elements unify the several email marketing and tooling concepts into a single element. 

- Email Metadata - Subject Line, Preheader Text
- Mailer - Sender, Reply To, Recipients
- Trigger Instructions - Notification Event, Send Rules, File Attachments
- Email Theme - Custom Fields, Field Layout, Templates

- **The Email (Content)** - The email Subject, Content, Templates, Field Layout,
- **The Carrier (Delivery)** - The Mailer Adapter, API endpoints, validation rules
- **The Instructions (Content + Delivery)** - The instructions on how the carrier should deliver the goods

### Email Element Types

Emails are where you define your content and presentation. In the lifecycle of an Email the Email Element begins as standalone content, exists as relational content when defining your Package, and a
static instance of an email content is saved as a Sent Email for every recipient to which it is sent.

| Email Types   | Delivery Type | Created From      |
|:--------------|:--------------|:------------------|
| Transactional | Transactional | Transactional Tab |
| Broadcast     | Broadcast     | Broadcast Tab     |
| Resend        | Broadcast     | Sent Email Tab    |
| Test          | Broadcast     | Test Modal        |

### Package Element Types

Packages are where you define where and how to send your email content.

| Package Types | Email Types             | Layout Options         |
|:--------------|:------------------------|:-----------------------|
| Broadcast     | Broadcast               | Send Now vs Scheduled  |
| Transactional | Transactional           | Event, Recurring, Cron |
| Drip Campaign | Broadcast/Transactional | Condition Builder      |

Packages can be sent to one or more recipients.

| Email Types   | To | CC | BCC | Lists | On The Fly |
|:--------------|:---|:---|:----|:------|:-----------|
| Transactional | √  | √  | √   | √     | –          |
| Broadcast     | √  | √  | √   | √     | –          |
| Message       | √  | √  | √   | √     | –          |
| Resend        | √  | √  | √   | √     | –          |
| Test          | –  | –  | –   | –     | √          |

## Notification Events

Many Notification Events allow you to use Craft's Condition Builder to fine-tune the scenario in which the event gets triggered. Sprout adds several Notification Events to assist with common scenarios.

- Is New Entry
- Is Updated Entry
- Is Draft
- Is Revision
- Twig Expression

### Twig Expression

Can we do this with the Twig Expression? Maybe just add as tooltip in UI?

``` twig
{% include '_email/send-rule-logic' %}
```

## Personalization

In many cases, when you trigger an event there may be some custom data you want to use in your notification. For example, when an Entry is saved you might want to know who the author was and where you can view the entry, when a form is submitted you may want to include the data from the Form submission in your notification, and when a product is purchased you might want to know which product and by whom.

Sprout Email allows you to personalize your email in several places including:

- Subject line
- From Name
- From Email (you probably don't want to use this)
- Reply To Email
- Recipients
- Default Body Field
- Templates (HTML and Text)


| Template |  Variables | Output  |
|:-------- |:---------- |:------- |
| Subject Line (Notification Email) | object | Subject Line (Message) |
| From Name (Notification Email) | object | From Name (Message) |
| From Email (Notification Email) | object | From Email (Message) |
| Reply To (Notification Email) | object | Reply To Email (Message) |
| Recipients (Notification Email) | object | Recipients (Message) |
| Default Body Field (Notification Email) | object | Default Body Field (Message Body) |
| Email Templates (Email Templates) |email, object | Email HTML & Text (Message Body) |

Personalization happens in phases.

- Notification Event
- Recipients
- Subject Line, Preheader Text, Default Message
- Email Templates

For all of these scenarios, you can use standard Twig syntax, however, in the control panel you can also use a shorthand Twig Expression syntax. 

``` twig
{# Notification Default Fields #}
{{ email.subjectLine }}<br/>
{{ email.slug }}<br/>
{{ email.status }}<br/>
{{ email.fromName }}<br/>
{{ email.fromEmail }}<br/>
{{ email.replyTo }}<br/>

{# Notification Custom Fields 
   These examples may not work in your project. You will need to
   update these examples to reference custom fields you are using.
------------------------------------------------------------ #}
{{ email.emailBody }}
{{ email.emailBanner.first().getUrl() }}
{{ email.emailFooter }}

{# Dynamic Data
   These examples may not work in your project. The available dynamic
   values depend on the event you have triggered.
------------------------------------------------------------ #}
{{ object.title }}
{{ object.applicantEmail }}
```

Personalize your email using [Twig Expressions](../configuration/twig-expressions.md) and [Email Themes](../email-themes).


::: tip
If you don't provide a template for the Text version of your email, Sprout Email will convert your HTML email to Markdown and use that for the Text version of your email.
:::

## Developers

### Custom Notification Events

To create a custom Notification Event, extend the base NotificationEvent class and register your new class via `EVENT_REGISTER_NOTIFICATION_EVENT_TYPES`.

``` php
use BarrelStrength\Sprout\transactional\notificationevents\NotificationEvent;

class MyNotificationEvent extends NotificationEvent
{
  ...
}
```

See related developer documentation for:

- [Audiences](../audiences)
- [Email Themes](../email-themes)

[//]: # (- [Mailers]&#40;../mailers&#41;)

### Custom Email Themes

To create a custom Email Theme that goes beyond the Custom Templates theme, extend the base EmailTheme class and register your new class via `EVENT_REGISTER_SPROUT_EMAIL_THEMES`.

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

See [update guides](../configuration/updates.md) for the Transactional, Mailer, and Framework modules.
