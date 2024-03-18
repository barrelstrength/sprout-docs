---
date: 2023-09-10
description: Update guides for Sprout plugins.
---

# Updating Sprout

The Sprout plugins are built using the Sprout Framework – a collection of modules - so that plugins can share core functionality. Plugin changelogs reference the modules that have changed, and the [Sprout Framework Changelogs](https://github.com/barrelstrength/sprout/tree/v4/CHANGELOG) document all the updates in the underlying modules.

The upgrade guides are organized by plugin and releases are listed by date. Where appropriate, a plugin might link to update notes in another plugin. For example, the Sprout Forms changelog might link to the Sprout Email changelog for a particular update if notable changes have been made to email-specific features.

::: warning Migrations and Craft Commands
Sprout plugins for Craft 4 currently require that you update via the browser to trigger migrations. Running `./craft migrate/all` will not trigger the Sprout module migrations.

Each Sprout module has its own migration track and a single migration might get triggered by one or more modules. Sprout plugins manage the order that migrations need to run and ensure that migrations only run once, but, currently, Craft's CLI commands for migrations do not consider the scenario where a plugin runs migrations that are not using the plugin migration track. We're working on finding a Craft-friendly way to handle this scenario, but for now, to ensure all Sprout migrations run correctly you'll need to run migrations via the Update button in the browser.  
:::

## Update Guides

The update guides are primarily for notable changes. Not all plugin versions will appear here in the update guides. See the changelogs for a given plugin for more detailed notes on every release.

- [Sprout Data Studio](./data-studio.md)
- [Sprout Email](./email.md)
- [Sprout Redirects](./redirects.md)
- [Sprout Seo](./seo.md)
- [Sprout Sitemaps](./sitemaps.md)
