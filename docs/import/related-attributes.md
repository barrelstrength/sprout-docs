# Related Attributes

In some cases you may not know the value of the attribute you are trying to match. You can use the `related` flag with attributes to find Elements and return the ID of a particular attribute.

The `related` key for attributes works just like the `related` key for content as described in [Resolving Relationships](./related-attributes.md) when targeting an attribute that uses an Element ID as a value.

Attributes that don't resolve to Element IDs will need to be supported by a Settings integration in order to resolve properly. For example, to resolve the `sectionId` attribute on an Entry Element, you will need to rely on the Settings Importer for Sections.    

## Entries 

Below are a few examples of some attributes that can be looked up when importing Entries.

| Attribute  | @model   |
|:---------- |:-------- |
| authorId   | barrelstrength\\sproutimport\\importers\\elements\\User |
| sectionId  | barrelstrength\\sproutimport\\importers\\settings\\Section |
| typeId     | barrelstrength\\sproutimport\\importers\\settings\\EntryType |

::: code

``` craft3
[
  {
    "@model": "barrelstrength\\sproutimport\\importers\\elements\\Entry",
    "attributes": {
      "slug": "entry-slug",
      "postDate": "2017-04-27 16:00:00",
      "expiryDate": null,
      "dateCreated": "2017-06-27 16:00:00",
      "dateUpdated": "2017-05-27 16:51:42",
      "enabled": true,
      "related": {
        "authorId": {
          "@model": "barrelstrength\\sproutimport\\importers\\elements\\User",
          "params" {
            "email": "muller.giuseppe@howell.com"
          }
        },
        "sectionId": {
          "@model": "barrelstrength\\sproutimport\\importers\\settings\\Section",
          "params": {
            "handle": "news"
          }
        },
        "typeId": {
          "@model": "barrelstrength\\sproutimport\\importers\\settings\\EntryType",
          "params": {
            "handle": "post"
          }
        }
      }
    },
    "content": { ... }
  }
]
```

:::


## Categories 

Below is an example of importing categories where you may not know the ID of the parent category but can match the parent category by it's slug.

| Attribute   | @model   |
|:----------- |:-------- |
| newParentId | barrelstrength\\sproutimport\\importers\\elements\\Category |

::: code

``` craft3
[
  {
    "@model": "barrelstrength\\sproutimport\\importers\\elements\\Category",
    "attributes": {
      "groupId": 1,
      "slug": "category-slug-child",
      "dateCreated": "2016-01-13 01:25:57",
      "dateUpdated": "2016-01-13 01:25:57",
      "enabled": true,
      "related": {
        "newParentId": {
          "@model": "barrelstrength\\sproutimport\\importers\\elements\\Category",
          "params": {
            "slug": "category-slug"
          }
        }
      }
    },
    "content": { ... }
  }
]
```

:::

## Users 

Below, we match the Users Photo ID attribute by looking up the photo we want to match using the filename in a specific volume.

| Attribute   | @model   |
|:----------- |:-------- |
| photoId | barrelstrength\\sproutimport\\importers\\elements\\Asset |

::: code

``` craft3
[
  {
    "@model": "barrelstrength\\sproutimport\\importers\\elements\\User",
    "attributes": {
      "username": "beryl01",
      "firstName": "Luigi",
      "lastName": "Bednar",
      "email": "muller.giuseppe@howell.com",
      "pending": 1,
      "lastLoginDate": "2014-12-11 04:12:06",
      "dateCreated": "2014-04-09 12:04:04",
      "dateUpdated": "2015-04-04 06:04:08",
      "related": {
        "photoId": {
          "@model": "barrelstrength\\sproutimport\\importers\\elements\\Asset",
          "params": {
            "filename": "headshot.jpg",
            "volumeId": 1
          }
        }
      }
    }
  }
]
```

:::