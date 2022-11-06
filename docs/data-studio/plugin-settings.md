---
date: 2018-06-25
description: Settings can be managed in the Control Panel or via a config file in config/sprout-reports.php
---

# Settings

Settings can be managed in the Control Panel _Sprout Reports → Settings_ or via a config file in `config/sprout-reports.php`

``` php
<?php

return [
    // The name to display in the control panel in place of the plugin name
    'pluginNameOverride' => 'Sprout Reports',

    // Set the number of results to initially display when a report is run
    'defaultPageLength' => 50
];
```