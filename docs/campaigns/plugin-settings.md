---
date: 2023-02-19
description:
---

# Settings

Customize the details of your email configuration and workflows with the following settings.

## General

### Plugin Name

Update this setting to rename **Sprout Email** in your Control Panel.

### Choose which features to enable

Sprout Email includes features for Notification Emails, Campaign Emails, and Sent Email tracking. Sent Email tracking is disabled by default.

Customize which features display in the Sprout Forms sidebar and only include the features you need.

### Default Email Templates

By default, Sprout Email uses our simple, base Basic Notification Email Templates. If you would like to customize the default Email Templates used on all of your Notification Emails, select the Email Template you wish to use here or setup [Template Overrides](../email/template-overrides.md).

### Enable custom Email Templates on a per-email basis

If you need multiple base Email Templates for your Notification Emails, you can enable this setting and select the specific Email Template you wish to use on each Notification Email you set up.

## Campaign Types

Campaign Types allow you to configure how a specific Campaign should work. Choose a Mailer, Email Templates, customize your Field Layout, and more.

## Mailers

The Mailers tab will list all available Mailers. Custom Mailers can be installed as separate plugins. Mailers that need to be configured will display a link to manage their settings.

## Config Settings

You can add the following settings to your `general.php` file.

### Mailer API settings

``` php
'sproutEmail' => array(
  'campaignmonitor' => array(
    'apiKey' => 'CONFIG OVERRIDE',
    'clientId' => 'CONFIG OVERRIDE'
  ),
  'mailchimp' => array(
    'apiKey' => 'CONFIG OVERRIDE',
    'inlineCss' => 'CONFIG OVERRIDE'
  ),
  'mailgun' => array(
    'apiKey' => 'CONFIG OVERRIDE',
    'domain' => 'CONFIG OVERRIDE'
    'tagPattern' => 'CONFIG OVERRIDE'
  ),
)
```

### Scheduled Emails

Display Date Scheduled is currently a hidden config setting. It will enabled a `Date Scheduled` field for your campaigns and an option to mark a Campaign Email with a `Scheduled` status. Enabling this does not enabling scheduled emails. At this point, adding support for scheduling functionality would have to be done via a separate custom plugin.

``` php
'sproutEmail' => array(
  'displayDateScheduled' => true
)
```
