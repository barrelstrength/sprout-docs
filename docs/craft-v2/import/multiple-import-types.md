# Multiple Import Types

You can combine Elements and Settings into a single JSON file or combine multiple files importing different things. Just be aware that things will be imported in the order you provide them in, so if you want to import one item (say, authors or assets) before you import another item (say, entries that have authors and relations to asset fields) be sure you import items in the right order or break things into multiple imports to ensure that you do.
 
::: code

``` json
[
  {
    "@model": "barrelstrength\\sproutbaseimport\\importers\\settings\\Field",
    "groupId": 1,
    "name": "Lonely Field",
    "handle": "lonelyField1",
    "type": "craft\\fields\\PlainText"
  },
  {
    "@model": "barrelstrength\\sproutbaseimport\\importers\\settings\\Field",
    "groupId": 1,
    "name": "Lonely Field 2",
    "handle": "lonelyField2",
    "type": "craft\\fields\\PlainText"
  },
  {
    "@model": "barrelstrength\\sproutbaseimport\\importers\\settings\\Section",
    "name": "Field section",
    "handle": "fieldSection",
    "type": "channel",
    "maxLevels": null,
    "enableVersioning": 1,
    "sites": {
      "default": {
        "enabled": 1,
        "singleUri": "",
        "uriFormat": "fieldone/{slug}",
        "template": "section-one/_entry",
        "enabledByDefault": 1
      },
      "craftUk": {
        "enabled": 1,
        "singleUri": "",
        "uriFormat": "fieldonetwo/{slug}",
        "template": "section-one/_entry",
        "enabledByDefault": 1
      }
    },
    "entryTypes": [
      {
        "@model": "barrelstrength\\sproutbaseimport\\importers\\settings\\EntryType",
        "name": "Posts",
        "handle": "posts",
        "showTitles": true,
        "titleLabel": "Title",
        "fieldLayout": {
          "fieldLayoutTab": {
            "name": "Content",
            "fields": [
              {
                "@model": "barrelstrength\\sproutbaseimport\\importers\\settings\\Field",
                "groupId": 1,
                "name": "Blog Field 1",
                "handle": "blogField1",
                "type": "craft\\fields\\PlainText"
              },
              {
                "@model": "barrelstrength\\sproutbaseimport\\importers\\settings\\Field",
                "groupId": 1,
                "name": "Blog Field 2",
                "handle": "blogField2",
                "type": "craft\\fields\\PlainText"
              }
            ]
          }
        }
      }
    ]
  }
]
```

:::