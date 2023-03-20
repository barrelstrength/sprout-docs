---
date: 2023-02-19
description: The Changelog reflects the most recent updates to a plugin and can be found at the top level in the Github repo for each plugin.
---

# Update Guides

The [Sprout Framework Changelog](https://github.com/barrelstrength/craft-sprout#changelog) reflects the most recent updates to all of our plugins and can be found at the top level in the Github repo.

The guides below provide details for noteworthy upgrades such as breaking changes, new things to be aware of, or planned deprecation notices. For the best experience while upgrading, please review the relevant upgrade guides _before_ you upgrade.

### Craft 4

| Upgrading to Plugin | Update Guides                         | Notes                                    | 
|:--------------------|:--------------------------------------|:-----------------------------------------|
| Data Studio 4.44.444 | [Data Studio][#444444-data-studio] ⚠️ | New Lite version. **Major update!**      |
| Redirects 4.44.444   | [Redirects][#444444-redirects]        | Improved workflow options.               |
| Framework 4.0.0     | [All Modules][#400-framework] ⚠️      | Added Craft 4 Support. **Major update!** |

#### Craft 3 Migration Path

Avoid incremental updates to older versions of Craft and Sprout.

::: warning THERE IS A BETTER WAY
Sprout `4.44.444` added Craft 4 support, introduced a new plugin architecture, and solved several migration issues that had arisen in the older architecture. Before upgrading to Craft 4 and Sprout `4.44.444`, upgrade your site to the latest version of Craft 3.x and the most recent Sprout releases on Craft 3 all in one go.

We recommend avoiding incremental upgrades (e.g. from `3.2` to `3.3` to `3.4`, etc.) as Craft 3 and Sprout did not play nicely together between Craft `3.2` and `3.7` and many of those issues are resolved if you can upgrade to the most recent version of Sprout on the latest version of Craft 3 with a single migration.
:::

To upgrade Craft and Sprout to a version earlier than Craft `3.7.x` and Sprout `4.40.x`, please review the [Installing &amp; Updating][#v3Docs] section in the Sprout v3 documentation for the specific plugins you are updating.

[#v3Docs]: https://sprout.barrelstrengthdesign.com/docs/v3/

[//]: # (ALL UPGRADE GUIDE LINKS BELOW)

[#444444-data-studio]: ../updates/4.44.444-data-studio.md

[#444444-redirects]: ../updates/4.44.444-redirects.md

[#400-framework]: ../updates/4.0.0-framework.md
