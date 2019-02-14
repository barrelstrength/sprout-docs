# Set Default Attributes

Default attributes can be set in your Elements `settings` array using the `defaults` key. Default values will be used if no other value is defined in the `attributes` array. This can be helpful in scenarios such as when the data you are migrating exists for some Elements and not for other Elements. 

Sprout Import will check for default attributes in the `defaults` key of the `settings` array. You can set a default for any attribute that exists on the Element Model that is being imported.

In this example, in the first Entry, the values provided in the `attributes` array will be used. In the second Entry, since the attributes `authorId` and `postDate` are not defined in the primary `attributes` array, Sprout Import will use the values provided by the `defaults` settings. 

::: code

``` json Craft 3
[
  {
    "@model": "barrelstrength\\sproutbaseimport\\importers\\elements\\Entry",
    "attributes": {
      "authorId": 4,
      "postDate": "2016-10-18 00:00:00"
    },
    "content": { ... },
    "settings": {
      "defaults": {
        "authorId": 1,
        "postDate": "2016-01-01 00:00:00"
      }
    }
  },
  {
    "@model": "barrelstrength\\sproutbaseimport\\importers\\elements\\Entry",
    "attributes": {
      "authorId": null,
      "postDate": null
    },
    "content": { ... },
    "settings": {
      "defaults": {
        "authorId": 1,
        "postDate": "2016-01-01 00:00:00"
      }
    }
  }
]
```

``` json Craft 2
[
  {
    "@model": "EntryModel",
    "attributes": {
      "authorId": 4,
      "postDate": "2016-10-18 00:00:00"
    },
    "content": { ... },
    "settings": {
      "defaults": {
        "authorId": 1,
        "postDate": "2016-01-01 00:00:00"
      }
    }
  },
  {
    "@model": "EntryModel",
    "attributes": {
      "authorId": null,
      "postDate": null
    },
    "content": { ... },
    "settings": {
      "defaults": {
        "authorId": 1,
        "postDate": "2016-01-01 00:00:00"
      }
    }
  }
]
```
:::