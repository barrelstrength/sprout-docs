# Authors

Often, it's a good idea to import existing Users into Craft first, as they frequently have no relations to other content that needs to exist before their Elements are created.

When importing Entries, the Authors of those Entries will already need to exist in Craft as Users. Depending on your needs, you can pass three different values to the `authorId` attribute: 

- id
- email
- username

When the `authorId` attribute is processed it will confirm that a User Element that matches that `authorId` value exists, and then use the User ID for the import:

## Match by ID

::: code

``` craft3
[
    {
        "@model": "barrelstrength\\sproutimport\\importers\\elements\\Entry",
        "attributes": {
            "authorId": 1
        },
        "content": { ... }
    }
]
```

``` craft2
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

:::

## Match by Email

::: code

``` craft3
[
    {
        "@model": "barrelstrength\\sproutimport\\importers\\elements\\Entry",
        "attributes": {
            "authorId": "hello@website.com"
        },
        "content": { ... }
    }
]
```

``` craft2
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

:::

## Match by Username

::: code

``` craft3
[
    {
        "@model": "barrelstrength\\sproutimport\\importers\\elements\\Entry",
        "attributes": {
            "authorId": "anotheruser"
        },
        "content": { ... }
    }
]
```

``` craft2
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

:::