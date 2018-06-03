# Data Sources

Custom Data Sources can be created by plugins. You can create as many Data Sources as you'd like.

Once we reach Sprout Reports 1.0, we will write up more complete documentation on Data Sources.  For now, please see `sproutreports/integrations/sproutreports/datasources` for examples on how to create your own datasource. Sprout Reports' native Data Sources are written in the same way that you would write a custom Data Source.

The key things you will need to do are:

1) Create a class for your Data Source

Data Sources extend the `DataSource` class:

``` php
class SproutReportsUsersDataSource extends DataSource
{
  ...
}
```

2) Load your datasources in your primary plugin class init method

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