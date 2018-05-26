# Sprout Import

Import data to Craft, Craft Commerce, the Sprout Plugin Suite, and add your own custom integrations. Sprout Import is an extremely flexible and extensible import plugin that makes it easy to:

- Import simple or complex data into Craft
- Import settings and common patterns to get your projects started quickly
- Seed your database with fake data (which can later be removed without affecting your real data) 

View the list of [over 40 importable data-types]({entry:2215:url}).

## Seeding and Weeding

When you import data using Sprout Import, you can choose to mark that data as Seed data. All items marked as seed data can later be removed (weeded) from the database. You can manage your seed data – and select what you wish to keep or remove – on the Weed tab.

All mock data generated from the Seed tab will be automatically marked as seed data. 

## Craft Import Format

Currently, Sprout Import supports importing data in JSON format that maps to Craft's data models. We refer to this the _Craft Import Format_.

Examples of several different data models for Elements, Fields, and Settings can be found within the plugin in the `sproutimport/examples` folder.

## Importing your data

Once your data is prepared as valid Craft Import Format JSON, you can import it into Craft using Sprout Import via:

- Copy/Paste
- File Upload (via one or more json files)
- Programmatically

## Integrations

If you wish to add support for additional data types, see our documentation on Integrations. Sprout Import supports three types of integrations:

- **Element Importers** - for importing Element Types and their related attributes
- **Settings Importers** - for non-Elemental things
- **Field Importers** - for generating fake data
