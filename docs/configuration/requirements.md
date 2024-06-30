---
date: 2023-02-19
description: Requirements for using the Sprout Plugins.
---

# Requirements

- Craft CMS `5.3.0` and all [requirements for running Craft 5](https://craftcms.com/docs/5.x/requirements.html)
- Sprout Framework `5.0.0` (included with all Sprout plugins)

## Installation via Plugin Store

1. Find one or more Sprout plugin from the _Craft Plugin Store_ and select “Install”
3. Go to _Settings → Plugins_ in your Craft Control Panel and select “Install”

## Installation via Composer

1. Open your terminal and go to your Craft project.

```
cd /path/to/project
```

2. Run Composer to retrieve the plugin

```
composer require barrelstrength/sprout-data-studio
```

3. In the Control Panel, go to _Settings → Plugins_ and select “Install”

## Upgrading to Craft 5

::: danger BEFORE YOU UPDATE!
Make sure you have updated to the latest version of all Sprout Plugins on Craft 4.x before updating your plugins to Craft 5.x. View the [Update Guides](/update-guides/index.md) for more details.
:::
