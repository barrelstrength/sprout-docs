---
date: 2018-06-25
description: Requirements for using the Sprout Plugins.
---

# Requirements

- Craft CMS v4.0.0 or a more recent version of Craft
- Sprout v4.44.444 (all Sprout Marketing Suite plugins added Craft 4 support at version 4.44.444)
- All [requirements for running Craft 4](https://craftcms.com/docs/4.x/requirements.html)

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
composer require barrelstrength/sprout-forms
```

3. In the Control Panel, go to _Settings → Plugins_ and select “Install”

## Upgrading to Craft 4

::: danger BEFORE YOU UPDATE!
Make sure you have updated to the latest version of all Sprout Plugins on Craft 3.x before updating your plugins to Craft 4.x. View the [Update Guides](./updates.md) for more details.
:::
