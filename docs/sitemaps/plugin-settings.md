---
date: 2023-02-19
description: Settings can be managed in the Control Panel or via a config file in config/sprout-sitemaps.php
---

# Settings

Settings can be managed in the Control Panel _Sprout Sitemaps → Settings_ or via a config file in `config/sprout-sitemaps.php`

``` php
<?php

return [
    // The name to display in the control panel in place of the plugin name
    'pluginNameOverride' => 'Sprout Sitemaps',

    // Output a dynamic XML sitemap of all pages in your URL-Enabled Sections.
    'enableDynamicSitemaps' => true,

    // The number of items that display on each page of your sitemap.
    'totalElementsPerSitemap' => 500,

    // Generate a single, multilingual sitemap.xml file for each Site Group.
    'enableMultilingualSitemaps' => false,

    // Add a section on the Sitemaps tab to manage Custom Pages that exist
    // outside of any URL-Enabled Sections.
    'enableCustomSections' => false
];
```
