---
date: 2020-04-27
description: Sprout Sent Email installation and update instructions for Craft 3.
---

# Craft 3

Sprout Sent Email installation and update instructions for Craft 3.

## Requirements

* Craft CMS 3.4.0 or a more recent version of Craft

## Installation via Plugin Store

1. Find the plugin in the Plugin Store in your Craft Control Panel 
2. Go to _Settings → Plugins_ and select “Install”

## Installation via Composer 

1. Open your terminal and go to your Craft project:<br>`cd /path/to/project`
2. Then tell Composer to load the plugin:<br>`composer require barrelstrength/sprout-sent-email`
3. In the Control Panel, go to _Settings → Plugins_ and select “Install”

## Migrating from Sprout Email

If you've been using Sprout Email only for the Sent Email feature, you may be able to upgrade and just use this more focused plugin now. To do so, and preserve your data you will want to:
 
 1. Backup your database
 2. Upgrade to Sprout Email v4.3.0 (to make sure you trigger all the necessary migrations that make Sprout Sent Email an independent module)
 3. Install Sprout Sent Email and enable it
 4. Uninstall Sprout Email
 
 ## Upgrading to Sent Email 2.0.0 - UNRELEASED

Upgrade to the latest before updating.
Purge old SENT EMAIL before updating.

Any custom integrations implementing Sent Email tracking will need to update the following method:
 
``` php
// OLD
public function createInfoTableModel($pluginHandle, array $values = [])

NEW
public function createInfoTableModel($sourceName, $sourceVersion = '', array $values = [])
```
