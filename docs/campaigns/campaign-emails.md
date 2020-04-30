---
date: 2018-06-25
description: 
---

# Campaign Emails

Campaign Email Elements allow you to build and manage marketing and bulk email right within Craft and send those emails via your favorite Email Service Providers.

| Mailer   | Description  |
|:----------------- |:------ |
| [Copy/Paste](./copy-paste-mailer.md) | Copy and paste your email campaigns to better (or worse) places |
| [MailChimp](https://github.com/barrelstrength/craft-sprout-mailchimp)        | Send your email campaigns via MailChimp |
| [Campaign Monitor](https://github.com/barrelstrength/craft-sprout-mailchimp) | Send your email campaigns via Campaign Monitor |
| Custom            | Via a [Custom Mailer](../email/custom-mailers.md) or [Get in touch](mailto:sprout@barrelstrengthdesign.com)! |

## Campaign Types

When you first setup your Campaign Emails you will need to select a **Campaign Type**. The Campaign Type defines which Mailer you want to use and will affect several things about your Campaign Email Workflow.

### Service Provider

The selected Campaign Type will determine which Email Service is used when sending your Campaign Emails. Each Mailer will have settings necessary for connecting and sending emails via the Mailer's email service provider.

### Lists

If a Mailer supports Lists, a dropdown with all available email lists will appear in the sidebar settings when creating a new Campaign Email.  

## Email Templates

Email Templates for your Campaign Emails can be managed via [Template Overrides](../email/template-overrides.md) or via a [Custom Email Template](../email/custom-email-templates.md).

## Test Emails

Each email service provider handles tests differently. The _Send Test_ behavior may vary depending on the Campaign Type you are using.

## Templating

To output your Campaign emails in your templates you can use the `craft.sproutEmail.entries` tag.  Here is a basic overview of what is available:

```twig
{% set id = craft.sproutEmail.entries.id(1).first() %}
{% set slug = craft.sproutEmail.entries.slug('my-email-slug').first() %}
{% set campaignId = craft.sproutEmail.entries.campaignId(1).find() %}
{% set campaignHandle = craft.sproutEmail.entries.campaignHandle('myCampaign').find() %}
```