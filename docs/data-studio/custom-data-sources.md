---
date: 2023-02-19
description: Custom Data Sources can be created by plugins. You can create as many Data Sources as you'd like.
---

# Data Sources

Custom Data Sources can be created by plugins. You can create as many Data Sources as you'd like.

Please see the Sprout Reports codebase for examples on how to create your own datasource. Sprout Reports' native Data Sources are written in the same way that you would write a custom Data Source.

Explore the default data sources in the plugin folder:

- `vendor/barrelstrength/sprout/src/datastudio/components/datasources`

To create a Data Source you will need to:

1) Create a class for your Data Source(s)

Data Sources extend the `DataSource` class:

``` php
class MyCustomDataSource extends DataSource
{
  ...
}
```

2. Install your Data Source (optional)

You can install your Data Source via an install script or migration or just let users hit the "Install" button on the Data Sources tab. To install a Data Source from your plugin or module, in your primary plugin, run Sprout Base Report's `installDataSources` method after installation:

``` php
protected function afterInstall()
{
    $dataSourceTypes = [
        MyCustomDataSource::class
    ];

    SproutBaseReports::$app->dataSources->installDataSources($dataSourceTypes);
}
```
