---
date: 2024-03-18
description: Sprout SEO update guide.
---

# Updating SEO

## v4.44.444 - UNRELEASED

This release adds Craft 4 support and simplifies the feature set around managing and rendering metadata.

### Breaking Changes

Review the following notes carefully as you will need to take at least one manual step after updating to ensure your templates load metadata correctly.

----

#### Metadata is now rendered automatically

In Craft 3, the `{% sproutseo 'optimize' %}` tag was necessary to render metadata. 

In Craft 4, metadata is rendered automatically. The `{% sproutseo 'optimize' %}` tag is no longer necessary and must be removed from your templates. Metadata will be rendered dynamically.

----

#### Template tags have been updated

In Craft 3, the `craft.sproutSeo` tag was used in templates (i.e. `craft.sproutSeo.meta`).

In Craft 4, use the `sprout.meta` tag (i.e. `sprout.meta.update`).

----

#### Editable Field Metadata Field setting has been removed

In Craft 3, a developer could configure a Metadata field to use the Editable Field setting and Sprout would output Title, Description, and Image fields for content editors to use in their SEO workflow.

In Craft 4, the Editable Field setting has been removed and any metadata using Editable Fields has migrated to use the Search Meta Details settings. The migration respects the priority of the existing metadata. If a Search Metadata field was null, the Editable Field value will be used. If the Search Metadata field was not null, the Search Metadata field value will be used.

::: warning CUSTOM ELEMENTS
Editable Field migration handles Elements that store their content in the primary content table. If you are using an Element Metadata field on a custom or third-party element that stores it's data in a different content table, you will need to handle that migration on your own.
:::

### Framework

- See the general [upgrade guide][#400-framework] for Sprout Modules to 4.0

[#400-framework]: /update-guides/sprout.md

