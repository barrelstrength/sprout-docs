---
date: 2018-06-25
description: The Changelog reflects the most recent updates to a plugin and can be found at the top level in the Github repo for each plugin.
---

# Update Guides

The [Sprout Framework Changelog](https://github.com/barrelstrength/craft-sprout#changelog) reflects the most recent updates to all of our plugins and can be found at the top level in the Github repo.

The guides below provide details for noteworthy upgrades such as breaking changes, new things to be aware of, or planned deprecation notices. For the best experience while upgrading, please review the relevant upgrade guides _before_ you upgrade.

### Craft 4

| Upgrading&nbsp;To          | Notes                                    | 
|:---------------------------|:-----------------------------------------|
| [v4.40.0][#Upgradev440] ⚠️ | Added Craft 4 Support. **Major update!** |

[#Upgradev440]: ./../updates/v4.40.0.md

#### Avoid incremental updates to older versions of Craft and Sprout

::: warning THERE IS A BETTER WAY
Sprout 4.40.x added Craft 4 support, introduced a new plugin architecture, and solved several migration issues that had arisen in the older architecture. Before upgrading to Craft 4 and Sprout 4.40.x, upgrade your site to the latest version of Craft 3.x and the most recent Sprout releases on Craft 3 all in one go.

We recommend avoiding incremental upgrades (e.g. from 3.2 to 3.3 to 3.4, etc.) as Craft 3 and Sprout did not play nicely together between Craft 3.2 and 3.7 and many of those issues are resolved if you can upgrade to the most recent version of Sprout on the latest version of Craft 3 with a single migration.
:::

To upgrade Craft and Sprout to a version earlier than Craft v3.7.x and Sprout 4.40.x, please review the [Installing &amp; Updating][#v3Docs] section in the Sprout v3 documentation for the specific plugins you are updating.

[#v3Docs]: https://sprout.barrelstrengthdesign.com/docs/v3/
