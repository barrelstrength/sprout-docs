# Users

Use the User Element Importer to import users.
 
::: code

``` craft3
[
  {
    "@model": "barrelstrength\\sproutimport\\importers\\elements\\User",
    "attributes": {
      "username": "beryl01",
      "firstName": "Luigi",
      "lastName": "Bednar",
      "email": "muller.giuseppe@howell.com",
      "pending": 1,
      "lastLoginDate": "2014-12-11 04:12:06",
      "dateCreated": "2014-04-09 12:04:04",
      "dateUpdated": "2015-04-04 06:04:08"
    }
  }
]
```

:::

## User Groups

To assign a user to a group add the `groups` attribute and provide an array of the User Group IDs that should be assigned to the user.

To assign a user to the Admin group, use the `admin` attribute.

::: code

``` craft3
[
  {
    "@model": "barrelstrength\\sproutimport\\importers\\elements\\User",
    "attributes": {
      "username": "beryl01",
      "firstName": "Luigi",
      "lastName": "Bednar",
      "email": "muller.giuseppe@howell.com",
      "pending": 1,
      "lastLoginDate": "2014-12-11 04:12:06",
      "dateCreated": "2014-04-09 12:04:04",
      "dateUpdated": "2015-04-04 06:04:08",
      "admin": "1",
      "groups": [1,2]
    }
  }
]
```

:::