# Creating Elements On The Fly

There are two methods to make sure that related items exist during your imports. The appropriate method for you will depend on your preference and your specific data set.

1. Import the related items first, then use the `related` key to match them based on a known attribute. See [Resolving Relationships]({entry:1567:url}) for more info on this method.
2. Try to match related items using the `related` key, and dynamically create the related items if no match is found using the `createIfNotFound` and `newElements` keys.

## Example using the createIfNotFound and newElements keys

In this example, we first try to match related categories by slug, and if we don't find them, we also define the elements so they can be created on the fly.

``` json
[
  {
    "@model": "barrelstrength\\sproutimport\\integrations\\sproutimport\\elements\\Entry",
    "attributes": { ... },
    "content": {
      "title": "In quaerat maiores sit est rerum iusto.",
      "fields": { ... },
      "related": {
        "categoryHandle": {
          "@model": "CategoryModel",
          "matchBy": "slug",
          "matchValue": ["san-francisco", "london"],
          "createIfNotFound": true,
          "newElements": [
            {
              "@model": "barrelstrength\\sproutimport\\integrations\\sproutimport\\elements\\Category"
              "attributes": {
                "groupId": 1,
                "enabled": true
              },
              "content": {
                "title": "San Francisco"
              }
            },
            {
              "@model": "barrelstrength\\sproutimport\\integrations\\sproutimport\\elements\\Category"
              "attributes": {
                "groupId": 1,
                "enabled": true
              },
              "content": {
                "title": "London"
              }
            }
          ]
        }
      }
    }
  }
]
```

_Use "@model": "EntryModel" and "@model": "CategoryModel" in Craft 2_

This behavior requires two keys within the `related` tag.

- **createIfNotFound** must be set to `true`, to trigger this behavior
- **newElements** must provide one or more model definitions of an Element that matches the type of Element allowed by the Relation. Each item defined within the `newElements` key, follows the same Craft JSON Format syntax as importing an element on its own.

