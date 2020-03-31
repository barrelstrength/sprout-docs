# Element Importers

Add support for importing any custom Element by creating a custom Element Importer integration. Element Importers allow you to take advantage of Craft's Element API and common behaviors consistent across Elements.

To add support for your custom Element you will need to:

1. Create an Element Importer class that extends BaseSproutImportElementImporter
2. Register your Element Importer

Sprout Import extends itself to add support for the default Element Importers for Craft and Craft Commerce. Please refer to example Element Importers in `sproutimport/integrations/sproutimport` and the `BaseSproutImportElementImporter` and `BaseSproutImportImporter` Classes for more details. 

Once you have created your custom Element Importer you will need to register it in your primary plugin class via the `registerSproutImportImporters` hook. For example:

``` php
public function registerSproutImportImporters()
{
	return array(
		new SproutEmail_CampaignEmailSproutImportElementImporter(),
		new SproutEmail_NotificationEmailSproutImportElementImporter()
	);
}
```

## Element Integrations

The following Elements have Element Importer integrations:

- Sprout Email Campaign Email Element
- Sprout Email Notification Email Element
- Sprout Forms Form Element
- Sprout Forms Form Entry Element
- Sprout SEO Redirect Element