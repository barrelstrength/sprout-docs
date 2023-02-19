---
date: 2023-02-19
description: Sprout Email adds a centralized way to manage transactional email in Craft along with the ability to log and resend Sent Email.
---

# About Sprout Email

Sprout Email adds a centralized way to manage transactional email in Craft along with the ability to log and resend Sent Email. Notification Emails support several Notification Event Integrations, customizable Email Templates, and the ability to send to dynamic Mailing Lists using Sprout Reports for list management.

- See [Sprout Sent Email](../sent-email/README.md) for documentation of the Sent Email features
- See [Sprout Reports](../data-studio/mailing-lists.md) for documentation on creating custom Mailing Lists and Segments

## Email Overview

- **The Goods (Payload Concerns)** - The email Subject, Content, Templates, Field Layout,
- **The Carrier (Delivery Concerns)** - The Mailer Adapter, API endpoints, validation rules
- **The Package (Goods + Carrier)** - The instructions on how the carrier should deliver the goods

### Email Element Types

Emails are where you define your content and presentation. In the lifecycle of an Email the Email Element begins as standalone content, exists as relational content when defining your Package, and a static instance of an email content is saved as a Sent Email for every recipient to which it is sent.

| Email Types   | Delivery Type | Created From |
|:----          |:----          |:----         |
| Transactional | Transactional | Transactional Tab |
| Broadcast     | Broadcast     | Broadcast Tab |
| Resend        | Broadcast     | Sent Email Tab |
| Test          | Broadcast     | Test Modal |

validation requ

### Package Element Types

Packages are where you define where and how to send your email content.

| Package Types   | Email Types | Layout Options |
|:----          |:----          |:----          |
| Broadcast | Broadcast | Send Now vs Scheduled |
| Transactional | Transactional | Event, Recurring, Cron |
| Drip Campaign | Broadcast/Transactional | Condition Builder |

Packages can be sent to one or more recipients.

| Email Types | To | CC | BCC | Lists | On The Fly |
|:-- |:-- |:-- |:-- |:-- |:-- |
| Transactional | √ | √ | √ | √ | – |
| Broadcast | √ | √ | √ | √ | – |
| Message | √ | √ | √ | √ | – |
| Resend | √ | √ | √ | √ | – |
| Test | – | – | – | – | √ |

### Workflow

#### Prepare The Goods

- Create a reusable **Email Theme** (Templates + Field Layout)
- Sprout provides a Default Email Theme with a single Textarea field and basic templates
- Email Themes can be restricted to **Email Elements** with certain **Package Types** (Broadcast vs Transactional vs Message)
- Resent and Test emails will use whatever Email Theme was defined for the Email they act on
- Create a new Email based on available Email Theme

#### Prepare The Carrier

- Update Craft's Email settings to use the **Mailer Adapter** that will be used to send your email
- In the future, you may be able to override Craft's settings when defining a new Package

#### Prepare The Package

- Create a new **Package Element** with a chosen **Delivery Type** (Broadcast vs Transactional vs Message)

