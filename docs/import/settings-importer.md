# Settings Importers

For lack of a better word, _Settings Importers_ refer to any importers that don't benefit from using the Element API to import data. While all Elements follow a similar import structure, settings may vary significantly from one another. Some examples include Fields, Entry Types, Asset Sources, and User Groups.

Add support for importing any Craft or custom plugin settings by creating a Settings Importer integration.

To add support for your custom Settings you will need to:

1. Create an Settings Importer class that extends `barrelstrength\sproutbase\contracts\sproutimport\SettingsImporter`
2. Register your Settings Importer

To register your Element Importer, you can register your custom Element Importer class using the `EVENT_REGISTER_IMPORTER_TYPES` event:

``` php
use barrelstrength\sproutbase\services\sproutimport\Importers;

Event::on(Importers::class, Importers::EVENT_REGISTER_IMPORTER_TYPES, function(RegisterComponentTypesEvent $event) {
    $event->types[] = CustomSettingsImporter::class;
});
```

Please refer to example Settings Importers in `sproutimport/src/integrations/sproutimport/settings` and `sproutbase/src/contracts/sproutimport/Importer` and `sproutbase/src/contracts/sproutimport/SettingsImporter` for more details.

## Settings Integrations

The following plugins have Settings Importer integrations:

- Sprout Email Campaign Type Settings