---
date: 2023-09-25
description: Sprout Sitemaps update guide.
---

# Updating Sitemaps

## v4.44.444 - September 25, 2023

This release adds Craft 4 support and a few new features such as Content Query Sitemaps and improved navigation.

Sitemaps now has a Lite and Pro version. License holders can continue to use their existing license key for as a Pro license on Craft 4.

### Breaking Changes

- See the general [upgrade guide][#400-framework] for Sprout Modules to 4.0
- Lite Edition allows managing up to 5 Content and Content Query Sitemaps per Site
- Custom Sitemap Metadata integration has been updated from `barrelstrength\sproutbaseuris\services\UrlEnabledSections::EVENT_REGISTER_URL_ENABLED_SECTION_TYPES` => `BarrelStrength\Sprout\sitemaps\sitemapmetadata\SitemapMetadata::EVENT_REGISTER_ELEMENT_SITEMAP_METADATA`

### Notable Changes

#### Generated URLs for individual sitemaps have changed

Your `/sitemap.xml` Sitemap index exists at the same URL, however, the URLs listed in the Sitemap Index have changed.

In Craft 3, Content Sitemaps displayed with a 12 character key:

``` xml{4,8}
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <sitemap>
        <loc>{{ siteUrl }}sitemap-G76D5Oizt4fH-1.xml</loc>
        <lastmod>{{ now|date('Y-m-d') }}</lastmod>
    </sitemap>
    <sitemap>
        <loc>{{ siteUrl }}sitemap-9O2U0q1gdvPM-1.xml</loc>
        <lastmod>{{ now|date('Y-m-d') }}</lastmod>
    </sitemap>
</sitemapindex>
```

In Craft 4, Content Sitemaps display using the Sitemap Metadata UID key:

``` xml{4,8}
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <sitemap>
        <loc>{{ siteUrl }}sitemap-0a0c9e98-fe8b-430a-9b47-f3e521dd048e-1.xml</loc>
        <lastmod>{{ now|date('Y-m-d') }}</lastmod>
    </sitemap>
    <sitemap>
        <loc>{{ siteUrl }}sitemap-0a0c9e98-fe8b-430a-9b47-f3e521dd048e-2.xml</loc>
        <lastmod>{{ now|date('Y-m-d') }}</lastmod>
    </sitemap>
</sitemapindex>
```

[#400-framework]: /update-guides/sprout.md

