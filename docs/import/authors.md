# Authors

Often, it's a good idea to import existing Users into Craft first, as they frequently have no relations to other content that needs to exist before their Elements are created.

When importing Entries, the Authors of those Entries will already need to exist in Craft as Users. Depending on your needs, you can pass three different values to the `authorId` attribute: 

- id
- email
- username

When the `authorId` attribute is processed it will confirm that a User Element that matches that `authorId` value exists, and then use the User ID for the import:

## Matching an author by ID

``` json
[
    {
        "@model": "barrelstrength\\sproutimport\\integrations\\sproutimport\\elements\\Entry",
        "attributes": {
            "authorId": 1
        },
        "content": { ... }
    }
]
```

_Use "@model": "EntryModel" in Craft 2_

## Matching an author by email

``` json
[
    {
        "@model": "barrelstrength\\sproutimport\\integrations\\sproutimport\\elements\\Entry",
        "attributes": {
            "authorId": "hello@website.com"
        },
        "content": { ... }
    }
]
```

_Use "@model": "EntryModel" in Craft 2_

## Matching an author by username

``` json
[
    {
        "@model": "barrelstrength\\sproutimport\\integrations\\sproutimport\\elements\\Entry",
        "attributes": {
            "authorId": "anotheruser"
        },
        "content": { ... }
    }
]
```

_Use "@model": "EntryModel" in Craft 2_