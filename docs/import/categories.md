# Categories

Use the Category Element Importer to import categories.

::: code

``` craft3
[
  {
    "@model": "barrelstrength\\sproutimport\\importers\\elements\\Category",
    "attributes": {
      "groupId": 1,
      "slug": "category-slug",
      "dateCreated": "2016-01-13 01:25:57",
      "dateUpdated": "2016-01-13 01:25:57",
      "enabled": true
    },
    "content": {
      "title": "Category Title"
    }
  },

```

:::

## Hierarchy

There are several ways to import categories with hierarchy. For small data sets the easiest may be to just import your categories without hierarchy and then manually drag them into the right order within the Craft user interface.

### Parent ID

To import categories with a hierarchy where you know the parentId, you can set the `newParentId` attribute:

::: code


``` craft3
[
  {
    "@model": "barrelstrength\\sproutimport\\importers\\elements\\Category",
    "attributes": {
      "groupId": 1,
      "slug": "category-slug",
      "dateCreated": "2016-01-13 01:25:57",
      "dateUpdated": "2016-01-13 01:25:57",
      "enabled": true,
      "newParentId": 123
    },
    "content": { ... }
  }
]
```

:::

### Parent Params

As you may not always know the `parentId`, you can let Sprout Import find the `parentId` value for you by providing alternate values for `parentId`. Below, we look up the parent ID by matching it by `slug`.

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

In the following example, we import Categories with three levels of hierarchy. Be sure to import the parent categories before you target them via the children categories.

::: code

``` craft3
[
  {
    "@model": "barrelstrength\\sproutimport\\importers\\elements\\Category",
    "attributes": {
      "groupId": 1,
      "slug": "parent-one",
      "dateCreated": "2016-01-13 01:25:57",
      "dateUpdated": "2016-01-13 01:25:57",
      "enabled": true
    },
    "content": {
      "title": "Parent 1"
    }
  },
  {
    "@model": "barrelstrength\\sproutimport\\importers\\elements\\Category",
    "attributes": {
      "groupId": 1,
      "slug": "parent-two",
      "dateCreated": "2016-01-13 01:25:57",
      "dateUpdated": "2016-01-13 01:25:57",
      "enabled": true
    },
    "content": {
      "title": "Parent 2"
    }
  },
  {
    "@model": "barrelstrength\\sproutimport\\importers\\elements\\Category",
    "attributes": {
      "groupId": 1,
      "slug": "child-one-level-one",
      "dateCreated": "2016-01-13 01:25:57",
      "dateUpdated": "2016-01-13 01:25:57",
      "enabled": true,
      "related": {
        "newParentId": {
          "@model": "barrelstrength\\sproutimport\\importers\\elements\\Category",
          "params": {
            "slug": "parent-one"
          }
        }
      }
    },
    "content": {
      "title": "Child 1 - Level 1"
    }
  },
  {
    "@model": "barrelstrength\\sproutimport\\importers\\elements\\Category",
    "attributes": {
      "groupId": 1,
      "slug": "child-two-level-one",
      "dateCreated": "2016-01-13 01:25:57",
      "dateUpdated": "2016-01-13 01:25:57",
      "enabled": true,
      "related": {
        "newParentId": {
          "@model": "barrelstrength\\sproutimport\\importers\\elements\\Category",
          "params": {
            "slug": "parent-two"
          }
        }
      }
    },
    "content": {
      "title": "Child 2 - Level 1"
    }
  },
  {
    "@model": "barrelstrength\\sproutimport\\importers\\elements\\Category",
    "attributes": {
      "groupId": 1,
      "slug": "child-one-level-two",
      "dateCreated": "2016-01-13 01:25:57",
      "dateUpdated": "2016-01-13 01:25:57",
      "enabled": true,
      "related": {
        "newParentId": {
          "@model": "barrelstrength\\sproutimport\\importers\\elements\\Category",
          "params": {
            "slug": "child-one-level-one"
          }
        }
      }
    },
    "content": {
      "title": "Child 1 - Level 2"
    }
  }
]
```

:::