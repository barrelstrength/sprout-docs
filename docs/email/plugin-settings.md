---
date: 2023-02-19
description: Settings can be managed in the Control Panel or via a config file in config/sprout-email.php
---

# Settings

Settings can be managed in the Control Panel _Sprout Email → Settings_ or via a config file in `config/sprout-email.php`

## Notification Email

``` php
<?php

return [
    // The name to display in the control panel in place of the plugin name
    'pluginNameOverride' => 'Sprout Email',

    // Enable Notification Emails for sending and management within the
    // Control Panel
    'enableNotificationEmails' => true,

    // The templates that will be used to display your Notification Emails
    //
    // Email Template Class:
    // barrelstrength\sproutbaseemail\emailtemplates\BasicTemplates
    //
    // Custom Templates Folder:
    // _emails/notification
    'emailTemplateId' => 'barrelstrength\sproutbaseemail\emailtemplates\BasicTemplates',

    // Allow admins to (optionally) choose custom Email Templates for each
    // email created
    'enablePerEmailEmailTemplateIdOverride' => false
];
```

## Sent Email

- See [Sprout Sent Email](../sent-email/plugin-settings.md) for documentation of the Sent Email settings
