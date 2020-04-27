# Settings

Settings can be managed in the Control Panel _Sprout SEO → Settings_ or via a config file in `config/sprout-seo.php`. As Redirect and Sitemap functionality are managed in separate modules, for file-based config overrides you'll want to use the config overrides for each respective module: `config/sprout-redirects.php` and `config/sprout-sitemaps.php`. See below for links to the documentation of each module.


## Metadata

``` php
<?php

return [
    // The name to display in the control panel in place of the plugin name
    'pluginNameOverride' => 'Sprout SEO',

    // The maximum number of characters to allow for Meta Description fields
    'maxMetaDescriptionLength' => 160,

    // Sprout SEO prepares and outputs all of your metadata in your template
    'enableRenderMetadata' => true,

    // Make a global `metadata` variable available to all of your templates
    'useMetadataVariable' => false,

    // The name of the metadata variable available to your templates
    // 'metadataVariable' => 'metadata'

    // Display field handle next to the field name in your Element Metadata 
    // field settings
    'displayFieldHandles' => false
];
```

## Redirects

- See [Sprout Redirects](../redirects/plugin-settings.md) for documentation of the Redirects settings

## Sent Email

- See [Sprout Sitemaps](../sitemaps/plugin-settings.md) for documentation of the Sitemap settings