---
date: 2023-02-19
description: You have multiple options to customize the canonical URLs that appear in your metadata or in your XML sitemaps.
---

# Canonical URLs

If you need to customize the `canonical` URLs that appear in your metadata or in your XML sitemap you have multiple options:

- Custom Pages
- Metadata Field
- Template Overrides

## Custom Pages

To add support for a custom page with Canonical URL that does not exist in other URL-Enabled Sections, toggle the global plugin setting for "Enable Custom Pages" and a new section will appear on your Sitemaps management page that allows you to add custom URLs to the XML sitemap.

## Metadata Field

To allow overrides to the Canonical URL of a page for an individual entry, enable the "Canonical URL" setting when you set up your metadata field. This will display an additional Canonical URL option for your Metadata field that can be updated by content managers.

## Template Overrides

::: warning
Overriding Canonical URLs in your templates breaks the relationship with XML Sitemaps and the awareness Sprout SEO has about Canonical URL overrides. To add Custom URLs in a supported way to your XML Sitemaps see the documentation on [Custom Pages](./../sitemaps/sitemaps.md#custom-urls).
:::

To override the `canonical` meta value on any given page in your templates, use the `sprout.seo.meta` tag and set the `canonical` attribute to the appropriate URL:

``` twig
{% do sprout.seo.meta({
    canonical: customUrl,
}) %}

{% sproutseo 'optimize' %}
```
