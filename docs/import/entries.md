# Entries

## Authors

Often, it's a good idea to import existing Users into Craft first, as they frequently have no relations to other content that needs to exist before their Elements are created.

When importing Entries, the Authors of those Entries will already need to exist in Craft as Users.

If you know the authorId, you can use it when you are importing your entries. In many cases, it may be easier to refer to identify the author with some other value such as an email or username. 

See [Related Attributes](./related-attributes.md) for more information on how to match authors and other attributes as you import your content. Below, are three examples with common author scenarios:

### Match by ID

``` json
[
    {
        "@model": "EntryModel",
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
        "@model": "EntryModel",
        "attributes": {
            "authorId": "hello@website.com"
        },
        "content": { ... }
    }
]
```

### Match by Username

``` json
[
    {
        "@model": "EntryModel",
        "attributes": {
            "authorId": "anotheruser"
        },
        "content": { ... }
    }
]
```