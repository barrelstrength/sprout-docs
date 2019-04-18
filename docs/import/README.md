# About Sprout Import

::: danger DISCONTINUED
Sprout Import has been retired. We recommend using the free, first-party [Feed Me](https://plugins.craftcms.com/feed-me) plugin instead. These docs remain online for reference only.

We will continue to offer support and bugfixes for existing license holders for the duration of the license terms but will not be planning any new features unless contracted to do so.
:::

Import data to Craft, Craft Commerce, the Sprout Plugin Suite, and add your own custom integrations. Sprout Import is an extremely flexible and extensible import plugin that makes it easy to:

- Import simple or complex data into Craft
- Import settings and common patterns to get your projects started quickly
- Seed your database with fake data (which can later be removed without affecting your real data) 

View the list of [over 40 importable data-types](./supported-data-types.md).

## Seeding and Weeding

When you import data using Sprout Import, you can choose to mark that data as Seed data. All items marked as seed data can later be removed (weeded) from the database. You can manage your seed data – and select what you wish to keep or remove – on the Weed tab.

All mock data generated from the Seed tab will be automatically marked as seed data. 

## Import Format

Sprout Import supports importing data in JSON format. Examples of several different data models for Elements, Fields, and Settings can be found throughout the documentation.

## Import Methods

Once your data is prepared as valid JSON, you can import it into Craft using Sprout Import via:

- Copy/Paste
- File Upload (via one or more json files)
- Programmatically

## Plugin Development

If you wish to add support for additional data types, see our documentation on Plugin Development. Sprout Import supports three types of integrations:

- [Element Importers](./element-importers.md) - for importing Element Types and their related attributes
- [Settings Importers](./settings-importer.md) - for non-Elemental things
- [Field Importers](./field-importers.md) - for generating fake data
