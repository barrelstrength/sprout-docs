---
date: 2023-02-19
description:
---

# Craft 3

Sprout Email installation and update instructions for Craft 3.

## Requirements

* Craft CMS 3.0.0 or a more recent version of Craft

## Installation via Plugin Store

1. Find the plugin in the Plugin Store in your Craft Control Panel
2. Go to _Settings → Plugins_ and select “Install”

## Installation via Composer

1. Open your terminal and go to your Craft project:<br>`cd /path/to/project`
2. Then tell Composer to load the plugin:<br>`composer require barrelstrength/sprout-forms`
3. In the Control Panel, go to _Settings → Plugins_ and select “Install”

## Upgrading to Craft 3 - UNRELEASED

::: warning BEFORE YOU UPDATE
Make sure you have updated to the latest version of Sprout Email 3.x before updating to Sprout Email 4.x for Craft 3
:::

CampaignEmail element no longer provides an 'entry' variable to the template, only `email` variable
