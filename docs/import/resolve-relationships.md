# Resolving Relationships

Sprout Import can help you resolve relationships based on attributes and query parameters. In the most direct way, you can import known relational data using the same data structure as Craft – an array of Element IDs `[4, 5, 6]`:

::: code

``` craft3
[
  {
    "@model": "barrelstrength\\sproutimport\\importers\\elements\\Entry",
    "attributes": { ... },
    "content": {
      "title": "In quaerat maiores sit est rerum iusto.",
      "fields": {
        "categoryRelationsHandle": [4, 5, 6]
      }
    }
  }
]
```

``` craft2
[
  {
    "@model": "EntryModel",
    "attributes": { ... },
    "content": {
      "title": "In quaerat maiores sit est rerum iusto.",
      "fields": {
        "categoryRelationsHandle": [4, 5, 6]
      }
    }
  }
]
```

:::

## The Related Key

Sometimes you know you want to populate a relations field but you don't know the Element ID in Craft. In these cases, the `related` key can come in handy. The `related` key is available to supported `attributes` and Element Relations fields in your `content`.

Here's a general example of how to structure an import using the `related` key:

::: code

``` craft3
[
  {
    "@model": "barrelstrength\\sproutimport\\importers\\elements\\Entry",
    "attributes": { 
      ...
      "related": {
        "attributeToTarget": {
          "@model": "importer\\for\\target\\attribute",
          "params": { ... }
        }
      }
    },
    "content": {
      "title": "In quaerat maiores sit est rerum iusto.",
      "fields": { ... },
      "related": {
        "relationsFieldToTarget": {
          "@model": "importer\\for\\target\\Element",
          "params": { ... }
        }
      }
    }
  }
]
```

``` craft2
[
  {
    "@model": "EntryModel",
    "attributes": { ... },
    "content": {
      "title": "In quaerat maiores sit est rerum iusto.",
      "fields": { ... },
      "related": {
        "relationsFieldToTarget": {
          "@model": "ImporterModel",
          "matchBy": "paramName",
          "matchValue": "paramValue",
          "matchCriteria": {
            ...
          }
        }
      }
    }
  }
]
```

:::

Consider the following, more-specific scenarios:

### Match Relations by slug

The code below says _if you find any Categories that are using the values “category-slug-one” or “category-slug-two” as their slug in the Category Group with ID number 1, then create a relationship with that category to the “categoryRelationsHandle” field on this Entry Element._

::: code

``` craft3
[
  {
    "@model": "barrelstrength\\sproutimport\\importers\\elements\\Entry",
    "attributes": { ... },
    "content": {
      "title": "In quaerat maiores sit est rerum iusto.",
      "fields": { ... },
      "related": {
        "categoryRelationsHandle": {
          "@model": "barrelstrength\\sproutimport\\importers\\elements\\Category",
          "params": {
            "slug": ["category-slug-one","category-slug-two"],
            "groupId": 1
          }
        }
      }
    }
  }
]
```

``` craft2
[
  {
    "@model": "EntryModel",
    "attributes": { ... },
    "content": {
      "title": "In quaerat maiores sit est rerum iusto.",
      "fields": { ... },
      "related": {
        "categoryRelationsHandle": {
          "@model": "CategoryModel",
          "matchBy": "slug",
          "matchValue": ["category-slug-one","category-slug-two"],
          "matchCriteria": {
            "groupId": 1
          }
        }
      }
    }
  }
]
```

:::

### Match Assets by filename

The code below says _if you find any Assets that are using the value “ImageName03.jpg” as their filename in the Asset Source "images" in the folder with "folderId" equal to 8, then create a relationship with that Asset to the “thumbnailImage” field on this Entry Element._

::: code

``` craft3
[
  {
    "@model": "barrelstrength\\sproutimport\\importers\\elements\\Entry",
    "attributes": { ... },
    "content": {
      "title": "In quaerat maiores sit est rerum iusto.",
      "fields": { ... },
      "related": {
        "thumbnailImage": {
          "@model": "barrelstrength\\sproutimport\\importers\\elements\\Asset",
          "params": {
            "filename": ["ImageName03.jpg"],
            "source": "images",
            "folderId": 8
          }
        }
      }
    }
  }
]
```

``` craft2
[
  {
    "@model": "EntryModel"
    "attributes": { ... },
    "content": {
      "title": "In quaerat maiores sit est rerum iusto.",
      "fields": { ... },
      "related": {
        "thumbnailImage": {
          "@model": "AssetModel",
          "matchBy": "filename",
          "matchValue": ["ImageName03.jpg"],
          "matchCriteria": {
            "source": "images",
            "folderId": 8
          }
        }
      }
    }
  }
]
```

:::

### Match a Legacy ID

In this example we'll match User Relations to a custom field with an old ID for the User you wish to relate to.

Let's say you are migrating content from an another database. You migrate over the users but when you import them into Craft, the IDs for that user are different. To help with the migration process it's sometimes helpful to create a custom field called "Old ID" and import the ID that identified the item you are importing in the old system. 

Once that is in place, you can prepare your import to match content related to that particular User based on the Old ID value that the user was related with in the old system.

The code below says _if you find any Users that have the values 89, 139 or 95 in the custom field with the handle "oldId" in the User Group with ID number 3, then create a relationship with that User to the “relatedAuthors” field on this Entry Element._

::: code

``` craft3
[
  {
    "@model": "barrelstrength\\sproutimport\\importers\\elements\\Entry",
    "attributes": { ... },
    "content": {
      "title": "In quaerat maiores sit est rerum iusto.",
      "fields": { ... },
      "related": {
        "relatedAuthors": {
          "@model": "barrelstrength\\sproutimport\\importers\\elements\\User",
          "params": {
            "oldId": [
              89,
              139,
              95
            ],
            "groupId": 3
          }
        }
      }
    }
  }
]
```

``` craft2
[
  {
    "@model": "EntryModel",
    "attributes": { ... },
    "content": {
      "title": "In quaerat maiores sit est rerum iusto.",
      "fields": { ... },
      "related": {
        "relatedAuthors": {
          "@model": "UserModel",
          "matchBy": "oldId",
          "matchValue": [
            89,
            139,
            95
          ],
          "matchCriteria": {
            "groupId": 3
          }
        }
      }
    }
  }
]
```

:::

### Partial Matching

In this example we'll match any related entries that use a particular keyword in the title field.

::: code

``` craft3
[
  {
    "@model": "barrelstrength\\sproutimport\\importers\\elements\\Entry",
    "attributes": { ... },
    "content": {
      "title": "In quaerat maiores sit est rerum iusto.",
      "fields": { ... },
      "related": {
        "relatedPosts": {
          "@model": "barrelstrength\\sproutimport\\importers\\elements\\Entry",
          "params": {
            "search": "title:*keyword*" 
          }
        }
      }
    }
  }
]
```

:::

----

### Attribute Relations 

The `related` key is also supported within the `attributes` array. See the docs on [Related Attributes](./related-attributes.md) for more info.

----

### Matrix Relations 

The `related` key is also supported within the Matrix Block `fields` array. See the docs on [Importing a Matrix Field](./matrix-field.md) for more info.

----

### Non-Existent Relations

If you need relate and item but you can't be certain the related item is already in the database, see [Creating Elements on The Fly](./create-elements-on-the-fly.md)