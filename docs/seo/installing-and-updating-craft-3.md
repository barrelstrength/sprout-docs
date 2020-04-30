---
date: 2018-06-25
description: Sprout SEO installation and update instructions for Craft 3.
---

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

## Upgrading to Sprout SEO 4.4

Sprout SEO 4.4 updates how metadata is normalized and processed. For most users, these changes will not be noticed as metadata is generated and output in the same way. For users with custom implementations, please read below. 

### Breaking changes

#### Metadata Model

Retrieving metadata from the Metadata model is no longer done directly on the model. Metadata is now stored in Meta Type classes on the Metadata Model's `$metaTypes` attribute. Values on the model represent the raw data necessary to calculate the final values. The raw data can be retrieved by calling the `getRawData()` method. The calculated values can be retrieved by calling the `getMetaTagData()` method. 

``` php
$metadata = new barrelstrength\sproutseo\models\Metadata();

// Get all the static values stored that will be used to calculate the final metadata
$metadata->getRawData()

// Get a multi-dimensional array metadata by Meta Type with key value arrays of all calculated metadata
$metadata->getMetaTagData()
```

Previously you could access meta attributes directly on the model. Using the updated Metadata model you will need to retrieve the calculated value by getting the metadata by type and calling the getter for the value you want to retrieve. See all Meta Types in the `sprout-seo/src/meta` folder of the plugin. 

``` php
# OLD
$prioritizedMetadataModel->title

# NEW
$searchMetaType = $prioritizedMetadataModel->getMetaTypes('search');
$searchMetaType->getTitle();
```

#### Custom Schema

Several values in Custom Schema are often determined by grabbing those metadata values from the Globals or Metadata models. As the Globals and Metadata models have changed, you will want to revisit any Custom Schema and ensure your data is being retrieved and processed properly.

Optimized metadata values should now be retrieved using their getters:

```php
$metadata = $this->prioritizedMetadataModel;

# OLD
$title = $metadata->optimizedTitle;
$description = $metadata->optimizedDescription;
$image = $metadata->optimizedImage;
$keywords = $metadata->optimizedKeywords;

# NEW
$title = $metadata->getOptimizedTitle();
$description = $metadata->getOptimizedDescription();
$image = $metadata->getOptimizedImage();
$keywords = $metadata->getOptimizedKeywords();
```

Previously image IDs were stored as arrays. They are now stored as the image ID as a string. 

``` php
$schema = $this->globals['identity'];

# OLD
$imageId = $schema['image'][0] ?? null;

# NEW
$imageId = $schema['image'] ?? null;
```

#### Globals meta column

The `sproutseo_globals.meta` column has been removed and Global Metadata is now calculated at the time it is needed. If you referenced the Globals::$meta column in any custom implementations, you can now just call the getter for the metadata you want from the final Metadata model. 
