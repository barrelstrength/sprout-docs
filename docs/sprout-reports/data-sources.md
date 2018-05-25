A Data Source defines a set of data that can be queried by a Report and which options can be used when querying that data. A Data Source can define data that exists in your Craft installation or from any source that you wish to query near or far. For example, a custom Data Source could query data from a third-party API and return the results to Sprout Reports to display.

Sprout Reports provides a few Data Sources out of the box:

- **Custom Query** - Create reports using custom SQL queries.
- **Users** - Create reports with User and User Group data
- **Category Usage by Section** - See the breakdown of how many Categories are in use by Entries

## Custom Data Sources

Custom Data Sources can be created by plugins. You can create as many Data Sources as you'd like.

Once we reach Sprout Reports 1.0, we will write up more complete documentation on Data Sources.  For now, please see `sproutreports/integrations/sproutreports/datasources` for examples on how to create your own datasource. Sprout Reports' native Data Sources are written in the same way that you would write a custom Data Source.

The key things you will need to do are:

1) Create a class for your Data Source

Data Sources extend SproutReportsBaseDataSource and follow the naming convention [PluginName][DataSourceName][DataSource]:

``` php
class SproutReportsUsersDataSource extends SproutReportsBaseDataSource
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
