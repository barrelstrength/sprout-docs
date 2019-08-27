# Craft 3

Sprout SEO installation and update instructions for Craft 3.

## Requirements

* Craft CMS 3.0.0 or a more recent version of Craft

## Installation via Plugin Store

1. Find the plugin in the Plugin Store in your Craft Control Panel 
2. Go to _Settings → Plugins_ and select “Install”

## Installation via Composer 

1. Open your terminal and go to your Craft project:<br>`cd /path/to/project`
2. Then tell Composer to load the plugin:<br>`composer require barrelstrength/sprout-seo`
3. In the Control Panel, go to _Settings → Plugins_ and select “Install”

## Upgrading to Sprout SEO 4

Upgrading to Sprout SEO 4 requires upgrading to Craft 3.

::: warning BEFORE YOU UPDATE
Make sure you have updated to the latest version of Sprout SEO 3.x before updating to Sprout SEO 4.x for Craft 3. The update from Sprout SEO 2 to 3 on Craft 2 was a larger update than the update from Sprout SEO 3 to 4 when migrating from Craft 2 to Craft 3. See the [Sprout SEO 3 upgrade documentation](./installing-and-updating-craft-2.md#updating-to-sprout-seo-3) for more details.
:::

### Breaking changes

#### Sections

Sprout SEO 4 removes Section Metadata as it was largely not necessary and can be easily created within an existing site architecture using Singles, Channels, and the provided Metadata field. Any Section Metadata will need to be manually moved to an appropriate section and Element Metadata field.


