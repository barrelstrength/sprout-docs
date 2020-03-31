# Data Sources

Custom Data Sources can be created by plugins. You can create as many Data Sources as you'd like.

Please see the Sprout Reports codebase for examples on how to create your own datasource. Sprout Reports' native Data Sources are written in the same way that you would write a custom Data Source.

| Folder |
|:------ |
| `sproutreports/integrations/sproutreports/datasources` |

The key things you will need to do are:

1) Create a class for your Data Source(s)

Data Sources extend the `DataSource` class:

``` php
class SproutReportsUsersDataSource extends DataSource
{
  ...
}
```

2) Load your Data Source(s) in your primary plugin class

``` php
public function init()
{
  Craft::import('plugins.sproutreports.integrations.sproutreports.datasources.*');
}
```

3) Register your Data Sources

Use the `registerSproutReportsDataSources` hook to register your Data Sources with Sprout Reports.

``` php
public function registerSproutReportsDataSources()
{
  return array(
    new SproutReportsCategoriesDataSource(),
    new SproutReportsUsersDataSource(),
    new SproutReportsQueryDataSource(),
  );
}
```