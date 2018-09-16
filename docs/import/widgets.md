# Widgets

Import customized dashboard widgets using Sprout Import.

::: code

``` craft3
[
  {
    "@model": "barrelstrength\\sproutimport\\importers\\settings\\Widget",
    "type": "craft\\widgets\\Feed",
    "title": "Craft News",
    "url": "https://craftcms.com/news.rss",
    "limit": 5
  },
  {
    "@model": "barrelstrength\\sproutimport\\importers\\settings\\Widget",
    "type": "craft\\widgets\\NewUsers",
    "userGroupId":null,
    "dateRange":"d7"
  },
  {
    "@model": "barrelstrength\\sproutimport\\importers\\settings\\Widget",
    "type": "craft\\widgets\\RecentEntries",
    "section":"*",
    "siteId":"1",
    "limit":"10"
  }
]
```

:::


## Sprout Notes

``` craft3
[
  {
    "@model": "barrelstrength\\sproutimport\\integrations\\sproutimport\\settings\\Widget",
    "type": "barrelstrength\\sproutnotes\\widgets\\Notes",
    "heading": "Camping Checklist",
    "notes": "<p><strong>Must Haves</strong></p><ul><li>Tent</li><li>Sleeping Bag</li><li>Stove</li></ul><p><strong>Nice to Haves</strong></p><ul><li>Salt and Pepper</li><li>Red Flashlight</li></ul>",
    "output": "richText"
  }
]
```