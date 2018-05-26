The syntax for importing data using Sprout Import is slightly different between Craft 3 and Craft 2. As the only attribute that differs is the `@model` attribute, the examples throughout the docs are shown with Craft 3 syntax and this page is referenced to clarify the differences between Craft 2 and Craft 3. 

In Craft 3, the `@model` attribute should reference the full class name of the Importer. In Craft 2, as Craft did not yet support namespaces in plugins, `@import` just uses the short class name of the Importer.

### Craft 3 @model syntax

``` json
[
  {
    "@model": "barrelstrength\\sproutimport\\integrations\\sproutimport\\elements\\Entry",
    "attributes": { ... },
    "content": { ... }
  }
]
```

### Craft 2 @model syntax

``` json
[
  {
    "@model": "EntryModel",
    "attributes": { ... },
    "content": { ... }
  }
]
```

### Additional Examples

#### Craft 3

```
"@model": "barrelstrength\\sproutimport\\integrations\\sproutimport\\elements\\Entry"
"@model": "barrelstrength\\sproutimport\\integrations\\sproutimport\\elements\\Category"
"@model": "barrelstrength\\sproutimport\\integrations\\sproutimport\\elements\\User"
"@model": "barrelstrength\\sproutimport\\integrations\\sproutimport\\settings\\Field"
"@model": "barrelstrength\\sproutimport\\integrations\\sproutimport\\settings\\Section"
"@model": "barrelstrength\\sproutimport\\integrations\\sproutimport\\settings\\Widget"
```

#### Craft 2

```
"@model": "EntryModel"
"@model": "CategoryModel"
"@model": "UserModel"
"@model": "FieldModel"
"@model": "SectionModel"
```

See the `/examples` folder within each respective plugin for more examples.

## Other Considerations

Craft 3 now uses Sites in place of Locales. All `localeId` and other Locale references will need to be updated to use `siteId` and respective Site references.