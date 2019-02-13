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

### @model syntax

::: code

``` json Craft 3
[
  {
    "@model": "barrelstrength\\sproutbase\\app\\import\\importers\\elements\\Entry",
    "attributes": { ... },
    "content": { ... }
  }
]
```

``` json Craft 2
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

``` json Craft 3
"@model": "barrelstrength\\sproutbase\\app\\import\\importers\\elements\\Entry"
"@model": "barrelstrength\\sproutbase\\app\\import\\importers\\elements\\Category"
"@model": "barrelstrength\\sproutbase\\app\\import\\importers\\elements\\User"
"@model": "barrelstrength\\sproutbase\\app\\import\\importers\\settings\\Field"
"@model": "barrelstrength\\sproutbase\\app\\import\\importers\\settings\\Section"
"@model": "barrelstrength\\sproutbase\\app\\import\\importers\\settings\\Widget"
```

``` json Craft 2
"@model": "EntryModel"
"@model": "CategoryModel"
"@model": "UserModel"
"@model": "FieldModel"
"@model": "SectionModel"
```

:::

See the `/examples` folder within each respective plugin for more examples.

### Other Considerations

Craft 3 now uses Sites in place of Locales. All `localeId` and other Locale references will need to be updated to use `siteId` and respective Site references.

## Upgrading to v1.0.0-beta.17 

Sprout Import v1.0.0-beta.17 includes a breaking change that will require you to update any `@model` namespaces. This update to the application structure was made to add more flexible import, seeding, and more to all plugins within the Sprout Plugin Suite.

| Previous Namespace | New Namespace |
|:------------------ |:------------- |
| barrelstrength\\sproutimport\\importers\\elements\\Asset | barrelstrength\\sproutbase\\app\\import\\importers\\elements\\Asset |
| barrelstrength\\sproutimport\\importers\\elements\\Category | barrelstrength\\sproutbase\\app\\import\\importers\\elements\\Category |
| barrelstrength\\sproutimport\\importers\\elements\\Entry | barrelstrength\\sproutbase\\app\\import\\importers\\elements\\Entry |
| barrelstrength\\sproutimport\\importers\\elements\\Order | barrelstrength\\sproutbase\\app\\import\\importers\\elements\\Order |
| barrelstrength\\sproutimport\\importers\\elements\\Product | barrelstrength\\sproutbase\\app\\import\\importers\\elements\\Product |
| barrelstrength\\sproutimport\\importers\\elements\\Tag | barrelstrength\\sproutbase\\app\\import\\importers\\elements\\Tag |
| barrelstrength\\sproutimport\\importers\\elements\\User | barrelstrength\\sproutbase\\app\\import\\importers\\elements\\User |
| barrelstrength\\sproutimport\\importers\\fields\\Assets | barrelstrength\\sproutbase\\app\\import\\importers\\fields\\Assets |
| barrelstrength\\sproutimport\\importers\\fields\\Categories | barrelstrength\\sproutbase\\app\\import\\importers\\fields\\Categories |
| barrelstrength\\sproutimport\\importers\\fields\\Checkboxes | barrelstrength\\sproutbase\\app\\import\\importers\\fields\\Checkboxes |
| barrelstrength\\sproutimport\\importers\\fields\\Color | barrelstrength\\sproutbase\\app\\import\\importers\\fields\\Color |
| barrelstrength\\sproutimport\\importers\\fields\\Date | barrelstrength\\sproutbase\\app\\import\\importers\\fields\\Date |
| barrelstrength\\sproutimport\\importers\\fields\\Dropdown | barrelstrength\\sproutbase\\app\\import\\importers\\fields\\Dropdown |
| barrelstrength\\sproutimport\\importers\\fields\\Email | barrelstrength\\sproutbase\\app\\import\\importers\\fields\\Email |
| barrelstrength\\sproutimport\\importers\\fields\\Entries | barrelstrength\\sproutbase\\app\\import\\importers\\fields\\Entries |
| barrelstrength\\sproutimport\\importers\\fields\\Lightswitch | barrelstrength\\sproutbase\\app\\import\\importers\\fields\\Lightswitch |
| barrelstrength\\sproutimport\\importers\\fields\\Matrix | barrelstrength\\sproutbase\\app\\import\\importers\\fields\\Matrix |
| barrelstrength\\sproutimport\\importers\\fields\\MultiSelect | barrelstrength\\sproutbase\\app\\import\\importers\\fields\\MultiSelect |
| barrelstrength\\sproutimport\\importers\\fields\\Number | barrelstrength\\sproutbase\\app\\import\\importers\\fields\\Number |
| barrelstrength\\sproutimport\\importers\\fields\\PlainText | barrelstrength\\sproutbase\\app\\import\\importers\\fields\\PlainText |
| barrelstrength\\sproutimport\\importers\\fields\\RadioButtons | barrelstrength\\sproutbase\\app\\import\\importers\\fields\\RadioButtons |
| barrelstrength\\sproutimport\\importers\\fields\\Redactor | barrelstrength\\sproutbase\\app\\import\\importers\\fields\\Redactor |
| barrelstrength\\sproutimport\\importers\\fields\\Table | barrelstrength\\sproutbase\\app\\import\\importers\\fields\\Table |
| barrelstrength\\sproutimport\\importers\\fields\\Tags | barrelstrength\\sproutbase\\app\\import\\importers\\fields\\Tags |
| barrelstrength\\sproutimport\\importers\\fields\\Url | barrelstrength\\sproutbase\\app\\import\\importers\\fields\\Url |
| barrelstrength\\sproutimport\\importers\\fields\\Users | barrelstrength\\sproutbase\\app\\import\\importers\\fields\\Users |
| barrelstrength\\sproutimport\\importers\\settings\\EntryType | barrelstrength\\sproutbase\\app\\import\\importers\\settings\\EntryType |
| barrelstrength\\sproutimport\\importers\\settings\\Field | barrelstrength\\sproutbase\\app\\import\\importers\\settings\\Field |
| barrelstrength\\sproutimport\\importers\\settings\\Section | barrelstrength\\sproutbase\\app\\import\\importers\\settings\\Section |
| barrelstrength\\sproutimport\\importers\\settings\\UserGroup | barrelstrength\\sproutbase\\app\\import\\importers\\settings\\UserGroup |
| barrelstrength\\sproutimport\\importers\\settings\\Widget | barrelstrength\\sproutbase\\app\\import\\importers\\settings\\Widget |
