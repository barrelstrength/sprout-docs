---
date: 2023-02-19
description: Settings can be managed in the Control Panel or via a config file in config/sprout-forms.php
---

# Settings

Settings can be managed in the Control Panel _Sprout Forms → Settings_ or via a config file in `config/sprout-forms.php`

``` php
<?php

return [
    // The name to display in the control panel in place of the plugin name
    'pluginNameOverride' => 'Sprout Forms',

    // The default templates that will be used to output your forms when using
    // the displayForm tag if no Form Templates are selected for a given form
    'formTemplateId' => 'barrelstrength\sproutforms\formtemplates\AccessibleTemplates',

    // Disable this setting to stop Sprout Forms from saving all
    // form submission data to the Craft database
    'enableSaveData' => true,

    // Whether to save Entries flagged as spam to the database
    'saveSpamToDatabase' => false,

    // The default behavior for saving data when a new Form is created
    'enableSaveDataDefaultValue' => true,

    // Enable to capture the IP Address used when a Form Entry is saved
    'trackRemoteIp' => false,

    // The form section that will be selected by default in the
    // sidebar navigation ('forms' or 'entries')
    'defaultSection' => 'entries',

    // Enable this setting to allow users to edit existing form entries in
    // front-end templates. Enabling this feature may have some workflow or
    // security considerations as forms allow anonymous submissions.
    'enableEditFormEntryViaFrontEnd' => false,

    // The behavior your user will see if a submission is flagged as spam
    // 'redirectAsNormal' - will simulate a successful submission and direct
    //   the user to the Redirect Page.
    // 'redirectBackToForm - will return the user to the form. All failed
    //   captchas are logged on the Spam Entries saved in the database.
    'spamRedirectBehavior' => 'redirectAsNormal',

    // The total number of Spam entries that will be stored in the database.
    // When the limit is reached, the least recently updated Spam entry will
    // be deleted from the database.
    'spamLimit' => 500,

    // The probability that the Spam cleanup task will run each time a
    // Form Entry is saved. A lower probability will trigger a cleanup task
    // less often and the number of Spam Entries stored in the database may
    // be higher than the Spam Limit target until the cleanup task is triggered.
    //
    // 0 - None
    // 100000 - 1 in 10
    // 10000 - 1 in 100
    // 1000 - selected>1 in 1,000
    // 100 - 1 in 10,000
    // 10 - 1 in 100,000
    // 1 - 1 in 1,000,000
    'cleanupProbability' => 1000,

    // Individual captcha settings
    //
    // Additional Captchas can be found in the Plugin Store:
    // https://plugins.craftcms.com/sprout-forms-google-recaptcha
    //
    // Custom Captchas can be added via the Captcha API
    'captchaSettings' => [
        'barrelstrength\sproutforms\captchas\DuplicateCaptcha' => [
            'enabled' => true,
        ],
        'barrelstrength\sproutforms\captchas\JavascriptCaptcha' => [
            'enabled' => true,
        ],
        'barrelstrength\sproutforms\captchas\HoneypotCaptcha' => [
            'enabled' => true,
            'honeypotFieldName' => 'beesknees',
            'honeypotScreenReaderMessage' => 'Leave this field blank'
        ],
    ],

    // Show/Hide the Notifications tab in Sprout Forms
    'showNotificationsTab' => true,

    // Show/Hide the Reports tab in Sprout Forms
    'showReportsTab' => true,
];
```

::: warning Front-end Editing
Forms are submitted anonymously by users, so unlike Entries which have Authors, you will need to manage and authenticate any users who are editing your front-end Forms.
:::

## Entry Statuses

Entry Status settings can only be edited in the Control Panel.

By default, Form Entries default to an **Unread** status and can be updated and marked **Read**. Entries that trigger Captcha errors will be given the **Spam** status. Rename the default statuses or customize additional Entry Statuses to fit your workflows in the settings.
