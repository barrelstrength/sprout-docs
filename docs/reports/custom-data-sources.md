# Data Sources

Custom Data Sources can be created by plugins. You can create as many Data Sources as you'd like.

Please see the Sprout Reports codebase for examples on how to create your own datasource. Sprout Reports' native Data Sources are written in the same way that you would write a custom Data Source.

| Release | Folder |
|:------- |:------ |
| Craft 3 | `vendor/barrelstrength/sprout-reports/src/datasources` |
| Craft 2 | `sproutreports/integrations/sproutreports/datasources` |

## Craft 3

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

## Craft 2

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