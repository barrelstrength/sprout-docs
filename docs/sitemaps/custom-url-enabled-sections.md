---
date: 2023-02-19
description: Sprout SEO does not just help you manage extensive metadata for Entries. It can also help you manage metadata for all URL-Enabled Element Types.
---

# URL-Enabled Sections

Sprout SEO does not just help you manage extensive metadata for Entries. It can also help you manage metadata for all URL-Enabled Element Types. This includes:

- Entries
- Categories
- Craft Commerce Products

Support can be added for additional Element Types using the URL-Enabled Section Type API.

URL-Enabled Section Types are an advanced and powerful integration that helps us standardize differences across Element Types, so Sprout SEO can treat all of your Elements like you do – as content. This enables users to easily manage metadata in the same way across all element types and easily add any URL-Enabled content to an XML sitemap.

You can create your own URL-Enabled Section Type by:

1. Extending `UrlEnabledSectionType` with your Custom URL-Enabled Section Type
2. Register your Custom URL-Enabled Section Type using the `registerSproutSeoUrlEnabledSectionTypes()` hook

The best place to get started with building your own URL Enabled Section Type is by looking at the existing integrations withing Sprout SEO (sproutseo/integrations/sproutseo/sectiontypes)
