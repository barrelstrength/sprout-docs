# Importing Dates

Dates in the Craft database are stored in UTC time. This means that if you import your data with a Date/Time based on New York time (UTC−05:00) Craft will store that data in the database with a date that appears to be 5 hours in the future. When retrieving that data, Craft will convert the stored time into the users timezone allowing not only a user from New York to see the stored time in their timezone, but any user in any timezone to view the date adjusted for their own timezone as well.

When importing dates, by default, Craft will assume you are storing things in UTC time. 

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
    "content": { ... }
  }
]
```

If you would like to import a date with a more specific timezone, you can provide additional information using the full date format:

``` json
[
  {
    "@model": "barrelstrength\\sproutbaseimport\\importers\\elements\\Entry",
    "attributes": {
      "sectionId": 1,
      "typeId": 1,
      "authorId": 1,
      "slug": "entry-slug",
      "date": "2/27/2015",
        "timezone": "America/New_York",
        "time": "4:43 PM"
      },
      "expiryDate": null,
      "enabled": true
    },
    "content": { ... }
  }
]
```