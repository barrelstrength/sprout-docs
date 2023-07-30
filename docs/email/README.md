---
date: 2023-02-19
description: Sprout Email adds a centralized way to manage transactional email in Craft along with the ability to log and resend Sent Email.
---

# About Transactional Email

Sprout Email adds a centralized way to manage transactional email in Craft. Transactional Emails support several Notification Events, customizable Email Templates, and the ability to send to dynamic
Mailing Lists using Audiences for list management.
along with the ability to log and resend [Sent Email](../sent-email/README.md)

- See [Sent Email](../sent-email/README.md) for documentation of the Sent Email features
- See [Sprout Reports](../data-studio/mailing-lists.md) for documentation on creating custom Mailing Lists and Segments

## Email Overview

- **The Goods (Payload Concerns)** - The email Subject, Content, Templates, Field Layout,
- **The Carrier (Delivery Concerns)** - The Mailer Adapter, API endpoints, validation rules
- **The Package (Goods + Carrier)** - The instructions on how the carrier should deliver the goods

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

## Audiences

## Mailers

## Email Themes

The theme defines the Field Layout for your email content and the design of your email templates.

The Transactional module comes with one default Email Theme. We keep the default as simple and un-opinionated as we can. You can style the default templates as you see fit or update the templates
for your particular project. Notification Emails are fully customizable using [Email Themes](./../email-themes).

## Settings

Read the [Config Settings](./../configuration/sprout-config.md) documentation to explore and customize settings.

## Updates

See [update guides](../configuration/updates.md) for the Transactional Email and Framework modules.

