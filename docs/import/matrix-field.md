# Matrix Field

Sprout Import supports importing Matrix fields on any supported Element using the Matrix; any number of block types; all supported fields used on those block types; and matching relational content and resolving relationships on block types. Hooray!

## Matrix Syntax

Here is an example of an Entry Model with a Matrix field and two blocks. When importing matrix blocks you will need to name each item in the matrix block array with the `new` prefix and increment each block by one: `new1`, `new2`, `new3`:

::: code

``` craft3
[  
  {
    "@model": "barrelstrength\\sproutbase\\app\\import\\importers\\elements\\Entry",
    "attributes": { ... },
    "content": {
      "title": "Aliquid vero ut libero nostrum soluta.",
      "fields": {
        "subheading": "Unde ut enim sed maxime.",
        "articleBody": {
          "new1": {
            "type": "heading",
            "enabled": 1,
            "fields": {
              "heading": "Hic suscipit esse temporibus quia."
            }
          },
          "new2": {
            "type": "image",
            "enabled": 1,
            "fields": {
              "image": [223],
              "caption": "Deserunt quam cupiditate fugit et dolorem saepe."
            }
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
      "title": "Aliquid vero ut libero nostrum soluta.",
      "fields": {
        "subheading": "Unde ut enim sed maxime.",
        "articleBody": {
          "new1": {
            "type": "heading",
            "enabled": 1,
            "fields": {
              "heading": "Hic suscipit esse temporibus quia."
            }
          },
          "new2": {
            "type": "image",
            "enabled": 1,
            "fields": {
              "image": [223],
              "caption": "Deserunt quam cupiditate fugit et dolorem saepe."
            }
          }
        }
      }
    }
  }
]
```

:::

## Matrix with Relationships

If you have Relations on your Matrix Blocks, you can also use the `related` key:

::: code

``` craft3
[  
  {
    "@model": "barrelstrength\\sproutbase\\app\\import\\importers\\elements\\Entry",
    "attributes": { ... },
    "content": {
      "title": "Aliquid vero ut libero nostrum soluta.",
      "fields": {
        "subheading": "Unde ut enim sed maxime.",
        "articleBody": {
          "new1": {
            "type": "heading",
            "enabled": 1,
            "fields": {
              "heading": "Hic suscipit esse temporibus quia."
            }
          },
          "new2": {
            "type": "image",
            "enabled": 1,
            "fields": {
              "caption": "Deserunt quam cupiditate fugit et dolorem saepe."
            },
            "related": {
              "assetsFieldHandle": {
                "@model": "barrelstrength\\sproutbase\\app\\import\\importers\\elements\\Asset",
                "params": {
                  "filename": ["ImageName03.jpg"],
                  "source": "images",
                  "folderId": 8
                }
              }
            }
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
      "title": "Aliquid vero ut libero nostrum soluta.",
      "fields": {
        "subheading": "Unde ut enim sed maxime.",
        "articleBody": {
          "new1": {
            "type": "heading",
            "enabled": 1,
            "fields": {
              "heading": "Hic suscipit esse temporibus quia."
            }
          },
          "new2": {
            "type": "image",
            "enabled": 1,
            "fields": {
              "caption": "Deserunt quam cupiditate fugit et dolorem saepe."
            },
            "related": {
              "assetsFieldHandle": {
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
      }
    }
  }
]
```

:::

See [Resolving Relationships](./resolve-relationships.md) for more examples of how to use the `related` key.

