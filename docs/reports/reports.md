_Note: Report integrations have been deprecated and removed in Craft 3. Similar saved reports will be possible using Sprout Import. Examples will be posted once we get those featured released with Sprout Import for Craft 3._

You can create as many Reports as you'd like from a Data Source. Reports are saved instances of your Data Sources and their selected options. While Users can easily create Reports from existing Data Sources within Craft, developers can also create Reports that can be installed programmatically and reused.

## Custom Reports

Custom Reports integrations allow you to define a Report and install it when your plugin is installed. Any number of custom Report integrations can be created by a plugin.

Once we reach Sprout Reports 1.0, we will write up more complete documentation on Custom Report integrations.  For now, please see `sproutreports/integrations/sproutreports/reports/SproutReportsUsersReport.php` for an example on how to create your own Report integration.

The key things you will need to do are:

1. Create a class for your Report integration

Reports follow the naming convention `[PluginName][ReportName][Report]`

``` php
class SproutReportsUsersReport extends SproutReportsBaseReport
{
}
```

2. Load your report integrations in your primary plugin class init method

``` php
public function init()
{
	Craft::import('plugins.sproutreports.integrations.sproutreports.reports.*');
}
```

3. Install your Reports:

``` php
public function onAfterInstall()
{
	$this->init();

	Craft::import('plugins.sproutreports.integrations.sproutreports.reports.SproutReportsUsersReport');

	if (craft()->plugins->getPlugin('sproutreports'))
	{
		sproutReports()->reports->register(new SproutReportsUsersReport());
	}
}
```

Once Reports are installed, they can be updated and manipulated independently of the source files used to create them.