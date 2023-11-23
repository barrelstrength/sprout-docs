---
date: 2023-02-19
description: Sprout Data Studio allows you to create interactive data sets from customizable data sources.
---

# About Data Studio

Data Studio allows you to create interactive data sets from customizable data sources.

| Concept              | Description                                                                                                                                                         |
|:---------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Data&nbsp;Source** | A Data Source is the broadest concept of data and defines the entire universe of data that can be used.                                                             |
| **Data Set**         | A Data Set is an interactive view into a Data Source. The available settings in a Data Set allow a user to refine the results to view from the broader Data Source. |
| **Report**           | A Report is the output of a Data Set that represents the results of a specific combination of settings at a particular moment in time in a particular format.       |

## Data Sources

A Data Source defines a set of data that can be queried by a Data Set and which settings are available be used when querying that data.

A Data Source can define a subset of data that exists in your Craft database (such as Craft User data or Craft Commerce Product data) or from any source that you wish to query near or far. For example, a custom Data Source could query data from a third-party API and return the results to a Data Set to display.

Sprout Data Studio provides a few Data Sources out of the box:

- **Custom Query** - Create data sets using custom database queries
- **Twig Template Query** - Create data sets using custom queries in a Twig Template
- **Users** - Create data sets with User and User Group data
- **Order History** - Create data sets with Craft Commerce Order History data
- **Product Revenue** - Create data sets with Craft Commerce Product Revenue data

## Data Sets

Data Sets allow you to create queries into the data defined by a Data Source. You can create one or more Data Sets from a single Data Source and each Data Set can [define unique query settings](https://demo.projectmothership.com/docs/craft-v4/data-studio.html).

Data Sets can be organized into groups and customized so that you can conveniently interact with data set results in the Control Panel or export it as you need.

Explore a few Data Sets using [Twig Template Queries](./examples-data-studio/custom-twig-template-report.md) and [Custom SQL Queries](./examples-data-studio/sql-queries.md) in our examples section.

## Reports

When a Data Set is configured to display the desired data, a user can generate a report of that data in HTML or in CSV format. 

## Developers

### Custom Data Sources

To add Custom Data Sources, extend the `DataSource` class and register your new class via `EVENT_REGISTER_DATA_SOURCES`.

``` php
use BarrelStrength\Sprout\datastudio\datasources\DataSource;

class MyCustomDataSource extends DataSource
{
  ...
}
```

See the Sprout codebase for examples.

## Settings

Read the [Config Settings](./configuration/sprout-config.md) documentation to explore and customize settings.

## Updates

See [update guides](./update-guides/index.md) for the Data Studio and Framework modules.
