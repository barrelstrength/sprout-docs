# Craft 3

Sprout Import installation and update instructions for Craft 2.

## Requirements

* Craft CMS 3.0.0 or a more recent version of Craft

## Installation via Plugin Store

1. Find the plugin in the Plugin Store in your Craft Control Panel 
2. Go to _Settings → Plugins_ and select “Install”

## Installation via Composer 

1. Open your terminal and go to your Craft project:<br>`cd /path/to/project`
2. Then tell Composer to load the plugin:<br>`composer require barrelstrength/sprout-import`
3. In the Control Panel, go to _Settings → Plugins_ and select “Install”

## Upgrading to Craft 3

::: warning BEFORE YOU UPDATE
Make sure you have updated to the latest version of Sprout Import 0.x before updating to Sprout Import 1.x for Craft 3
:::

The syntax for importing data using Sprout Import is slightly different between Craft 3 and Craft 2. As the only attribute that differs is the `@model` attribute, the examples throughout the docs are shown with Craft 3 syntax and this page is referenced to clarify the differences between Craft 2 and Craft 3. 

In Craft 3, the `@model` attribute should reference the full class name of the Importer. In Craft 2, as Craft did not yet support namespaces in plugins, `@import` just uses the short class name of the Importer.

## @model syntax

::: code

``` craft3
[
  {
    "@model": "barrelstrength\\sproutimport\\importers\\elements\\Entry",
    "attributes": { ... },
    "content": { ... }
  }
]
```

``` craft2
[
  {
    "@model": "EntryModel",
    "attributes": { ... },
    "content": { ... }
  }
]
```

:::

### Additional Examples

::: code

``` craft3
"@model": "barrelstrength\\sproutimport\\importers\\elements\\Entry"
"@model": "barrelstrength\\sproutimport\\importers\\elements\\Category"
"@model": "barrelstrength\\sproutimport\\importers\\elements\\User"
"@model": "barrelstrength\\sproutimport\\importers\\elements\\Field"
"@model": "barrelstrength\\sproutimport\\importers\\elements\\Section"
"@model": "barrelstrength\\sproutimport\\importers\\elements\\Widget"
```

``` craft2
"@model": "EntryModel"
"@model": "CategoryModel"
"@model": "UserModel"
"@model": "FieldModel"
"@model": "SectionModel"
```

:::

See the `/examples` folder within each respective plugin for more examples.

## Other Considerations

Craft 3 now uses Sites in place of Locales. All `localeId` and other Locale references will need to be updated to use `siteId` and respective Site references.