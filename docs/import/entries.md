# Entries

::: code

``` json Craft 3
[
  {
    "@model": "barrelstrength\\sproutbaseimport\\importers\\elements\\Entry",
    "attributes": {
      "sectionId": 1,
      "typeId": 1,
      "authorId": 1,
      "slug": "entry-slug",
      "postDate": "2015-02-27 16:43:52",
      "expiryDate": null,
      "enabled": true
    },
    "content": {
      "title": "Entry title",
      "fields": {
        "body": "Body content"
      }
    }
  }
]
```

:::

## Authors

Often, it's a good idea to import existing Users into Craft first, as they frequently have no relations to other content that needs to exist before their Elements are created.

When importing Entries, the Authors of those Entries will already need to exist in Craft as Users.

If you know the authorId, you can use it when you are importing your entries. In many cases, it may be easier to refer to identify the author with some other value such as an email or username. 

See [Related Attributes](./related-attributes.md) for more information on how to match authors and other attributes as you import your content. Below, are three examples with common author scenarios:


### Match by ID

``` json
[
    {
        "@model": "barrelstrength\\sproutbaseimport\\importers\\elements\\Entry",
        "attributes": {
            "authorId": 1
        },
        "content": { ... }
    }
]
```

### Match by Email

``` json
[
    {
        "@model": "barrelstrength\\sproutbaseimport\\importers\\elements\\Entry",
        "attributes": {
          "related": {
            "authorId": {
              "@model": "barrelstrength\\sproutbaseimport\\importers\\elements\\User",
              "params" {
                "email": "hello@website.com"
              }
            }
          }
        }
        "content": { ... }
    }
]
```

### Match by Username

``` json
[
    {
        "@model": "barrelstrength\\sproutbaseimport\\importers\\elements\\Entry",
        "attributes": {
          "related": {
            "authorId": {
              "@model": "barrelstrength\\sproutbaseimport\\importers\\elements\\User",
              "params" {
                "username": "targetUsername"
              }
            }
          }
        }
        "content": { ... }
    }
]
```

## Relations

``` json
[
  {
    "@model": "barrelstrength\\sproutbaseimport\\importers\\elements\\Entry",
    "attributes": { ... },
    "content": {
      "title": "In quaerat maiores sit est rerum iusto.",
      "fields": {
        "body": "<p>Et dolor consectetur quo ea recusandae aut aperiam. Deleniti at quisquam facere enim est est ea dignissimos. Et aspernatur perspiciatis iusto enim. Rem quas rerum quam incidunt.</p><p>Qui ut impedit nesciunt tempore doloribus. Sed culpa repellendus et maiores quisquam. Enim necessitatibus quos placeat pariatur ut.</p><p>Dolorem iure ratione consectetur dolores. Velit harum dolorem est fuga sunt. Iusto voluptatum eum quo ad nisi qui facere. Aut voluptas repudiandae quam expedita sunt.</p><p>Nulla voluptatem consequuntur laborum est earum eos voluptatem. Qui architecto autem consequatur est. Eveniet veniam sint autem exercitationem minima.</p><p>Sint soluta dolores dicta. Exercitationem ipsum et rerum laborum qui. Et sed possimus ut est quos sit.</p>",
        "testTable": [
          {
            "col1": "row 1 col 1",
            "col2": "row 1 col 2",
            "col3": "row 1 col 3"
          },
          {
            "col1": "row 2 col 1",
            "col2": "row 2 col 2",
            "col3": "row 2 col 3"
          }
        ]
      },
      "related": {
        "categoryHandle": {
          "@model": "barrelstrength\\sproutbaseimport\\importers\\elements\\Category",
          "params": {
            "slug": "slug-1"
          }
          "featureImage": {
            "@model": "barrelstrength\\sproutbaseimport\\importers\\elements\\Asset",
            "params": {
              "filename": "filename.png"
            }
          },
          "newElements": [
            {
              "@model": "barrelstrength\\sproutbaseimport\\importers\\elements\\Category",
              "attributes": {
                "groupId": 1,
                "enabled": true
              },
              "content": {
                "title": "San Francisco"
              }
            }
          ]
        }
      }
    },
    "settings": {
      "updateElement": {
        "matchBy": "id",
        "matchValue": 123,
        "matchCriteria": {
          "section": "news"
        }
      },
      "defaults": {
        "authorId": 76
      }
    }
  }
]
```


## Matrix Fields

``` json
[
  {
    "@model": "barrelstrength\\sproutbaseimport\\importers\\elements\\Entry",
    "attributes": {
      "sectionId": 2,
      "typeId": 2,
      "authorId": 1,
      "slug": "entry-slug",
      "postDate": "2016-02-26 08:02:39",
      "expiryDate": null,
      "enabled": true
    },
    "content": {
      "title": "Entry title",
      "fields": {
        "body": "Body content",
        "longformContentMatrix": {
          "new1": {
            "type": "headingBlock",
            "enabled": 1,
            "fields": {
              "heading": "Lorem ipsum dolor"
            }
          },
          "new2": {
            "type": "imageBlock",
            "enabled": 1,
            "fields": {
              "image": [
                72
              ],
              "caption": "Deserunt quam cupiditate fugit et dolorem saepe."
            }
          }
        }
      }
    }
  }
]
```

## Versions

``` json
[
  {
    "@model": "barrelstrength\\sproutbaseimport\\importers\\elements\\Entry",
    "attributes": {
      "sectionId": 1,
      "typeId": 1,
      "authorId": 1,
      "slug": "entry-slug",
      "postDate": "2015-02-27 16:43:52",
      "expiryDate": null,
      "enabled": true
    },
    "content": {
      "title": "Entry title",
      "fields": {
        "body": "Body content"
      }
    },
    "enableVersioning": true
  },
  {
    "@model": "barrelstrength\\sproutbaseimport\\importers\\elements\\Entry",
    "attributes": {
      "sectionId": 1,
      "typeId": 1,
      "authorId": 1,
      "slug": "entry-slug",
      "postDate": "2015-02-27 16:43:52",
      "expiryDate": null,
      "enabled": true
    },
    "content": {
      "title": "Entry title two",
      "fields": {
        "body": "Body content two",
        "plainText": "plain text version 2"
      }
    },
    "settings": {
      "updateElement": {
        "matchBy": "slug",
        "matchValue": "entry-slug",
        "matchCriteria": {
          "section": "blog"
        }
      }
    },
    "enableVersioning": true
  },
  {
    "@model": "barrelstrength\\sproutbaseimport\\importers\\elements\\Entry",
    "attributes": {
      "sectionId": 1,
      "typeId": 1,
      "authorId": 1,
      "slug": "entry-slug",
      "postDate": "2015-02-27 16:43:52",
      "expiryDate": null,
      "enabled": true
    },
    "content": {
      "title": "Entry title three",
      "fields": {
        "body": "Body content three",
        "testTable": [
          {
            "col1": "row 1 col 1",
            "col2": "row 1 col 2",
            "col3": "row 1 col 3"
          },
          {
            "col1": "row 2 col 1",
            "col2": "row 2 col 2",
            "col3": "row 2 col 3"
          }
        ]
      }
    },
    "settings": {
      "updateElement": {
        "matchBy": "slug",
        "matchValue": "entry-slug",
        "matchCriteria": {
          "section": "blog"
        }
      }
    },
    "enableVersioning": true
  }
]
```