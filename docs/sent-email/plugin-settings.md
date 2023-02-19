---
date: 2023-02-19
description: Settings can be managed in the Control Panel or via a config file in config/sprout-sent-email.php
---

# Settings

Settings can be managed in the Control Panel _Sprout Sent Email → Settings_ or via a config file in `config/sprout-sent-email.php`

``` php
<?php

return [
    // The name to display in the control panel in place of the plugin name
    'pluginNameOverride' => 'Sprout Sent Email',

    // Enable Sent Email tracking
    'enableSentEmails' => false,

    // The total number of Sent Emails that will be stored
    // in the database per-site
    'sentEmailsLimit' => 5000,

    // The probability that the Sent Emails cleanup task will run
    // each time a Sent Email is tracked
    'cleanupProbability' => 1000
];
```
