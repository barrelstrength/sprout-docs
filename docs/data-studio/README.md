---
date: 2023-02-19
description: Sprout Data Studio allows you to create interactive data sets from customizable data sources.
---

# About Data Studio

Sprout Data Studio allows you to create interactive data sets from customizable data sources.

Data sets can be created from our default Data Sources or you can create your own. Multiple Data Sources are provided out of the box and additional Data Sources are available via custom plugins.

## Data Sources

A Data Source defines a set of data that can be queried by a Data Set and which settings are available be used when querying that data. A Data Source can define a subset of data that exists in your Craft database (such as Craft User data or Craft Commerce Product data) or from any source that you wish to query near or far. For example, a custom Data Source could query data from a third-party API and return the results to a Data Set to display.

Sprout Data Studio provides a few Data Sources out of the box:

- **Custom Query** - Create data sets using custom database queries
- **Twig Template Query** - Create data sets using custom queries in a Twig Template
- **Users** - Create data sets with User and User Group data
- **Order History** - Create data sets with Craft Commerce Order History data
- **Product Revenue** - Create data sets with Craft Commerce Product Revenue data

## Data Sets

Data Sets allow you to create queries into the data defined by a Data Source. You can create one or more Data Sets from a single Data Source and each Data Set can define unique query settings.

Data Sets can be organized into groups and customized so that you can conveniently interact with data set results in the Control Panel or export it as you need.

## Settings

Read the [Config Settings](./../configuration/sprout-config.md) documentation to explore and customize settings.

## Updates

See [update guides](../configuration/updates.md) for the Data Studio and Framework modules.
