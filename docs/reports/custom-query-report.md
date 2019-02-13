# Custom Query Reports

The **Custom Query** Data Source allows you to create Reports in the Craft Control Panel using a Custom MySQL Query.

### Query all data in the Users table 

The following example query assumes you setup Craft with the default database table naming conventions.

::: code

``` mysql Craft 3
SELECT *
FROM users;
```

``` mysql Craft 2
SELECT *
FROM craft_users;
```

:::