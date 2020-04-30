---
date: 2019-05-01
description: Generate sitemaps for all of your URL-enabled content for one or more languages.
---

# Sitemaps

Generate sitemaps for all of your URL-enabled content for one or more languages.

Sitemaps currently support the following types of content:

1. Entries
2. Categories
3. Craft Commerce Products
4. Custom Page URLs

::: tip
Plugins can add XML Sitemap support for Custom Elements. See the developer documentation for [URL-Enabled Sections](./custom-url-enabled-sections.md).
:::

## Section Settings

All of your URL-enabled content types will appear on the Sitemap Settings page with the following settings:

| Setting             | Description |
|:------------------- |:---------------- |
| Enabled             | Enable it or disable it in your sitemap |
| Priority            | Update the Priority of the items in the Section relative to the other items in your Sitemap |
| Change&nbsp;Frequency    | Update the Change Frequency of the items in the Section relative to other items in your Sitemap |

## Sitemap XML

Your sitemap will consist of two or more XML Sitemap files. This will include a Sitemap Index file that lists all relevant sitemaps for your website and individual XML Sitemap files for each respective section. Individual Sitemap files will be broken into multiple files when the number of entries is more than the _Total Elements Per Sitemap_ setting value.

### Sitemap Index

Your Sitemap Index will be output when you visit the URL: `/sitemap.xml`

``` xml Craft 3
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <sitemap>
        <loc>{{ siteUrl }}sitemap-singles.xml</loc>
        <lastmod>{{ now|date('Y-m-d') }}</lastmod>
    </sitemap>
    <sitemap>
        <loc>{{ siteUrl }}sitemap-G76D5Oizt4fH-1.xml</loc>
        <lastmod>{{ now|date('Y-m-d') }}</lastmod>
    </sitemap>
    <sitemap>
        <loc>{{ siteUrl }}sitemap-9O2U0q1gdvPM-1.xml</loc>
        <lastmod>{{ now|date('Y-m-d') }}</lastmod>
    </sitemap>
    <sitemap>
        <loc>{{ siteUrl }}sitemap-1TGQYAvdWwEU-1.xml</loc>
        <lastmod>{{ now|date('Y-m-d') }}</lastmod>
    </sitemap>
    <sitemap>
        <loc>{{ siteUrl }}sitemap-custom-pages.xml</loc>
        <lastmod>{{ now|date('Y-m-d') }}</lastmod>
    </sitemap>
</sitemapindex>
```

::: tip Note
Individual XML Sitemap URLs will use a unique string of characters to hide the internal naming convention of your Craft content architecture. When `devMode` is enabled, a query string will be appended to Sitemap URLs so that you can more easily confirm what sections are appearing in the sitemap.
:::

### Section-specific Sitemaps (Single Language)

Each individual sitemap will list the URLs for the content in your URL-Enabled Sections.

```
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
    <url>
        <loc>http://website.com/example-url</loc>
        <lastmod>2017-08-08T03:08:03Z</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.5</priority>   
    </url>
        <url>
        <loc>http://website.com/example-url2</loc>
        <lastmod>2017-08-08T03:08:03Z</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.5</priority>   
    </url>
</urlset>
```

### Section-specific Sitemaps (Multi-language)

If you have a multi-language site, your sitemap will adjust to reference URLs for all related content across languages.

```
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
    <url>
        <loc>http://website.com/example-url</loc>
        <lastmod>2017-08-08T03:08:03Z</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.5</priority>
        <xhtml:link rel="alternate" hreflang="en_us" href="http://website.com/example-url" />
        <xhtml:link rel="alternate" hreflang="de" href="http://website.com/de/example-url" />
        <xhtml:link rel="alternate" hreflang="es" href="http://website.com/es/example-url" />     
    </url>
        <url>
        <loc>http://website.com/example-url2</loc>
        <lastmod>2017-08-08T03:08:03Z</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.5</priority>
        <xhtml:link rel="alternate" hreflang="en_us" href="http://website.com/example-url2" />
        <xhtml:link rel="alternate" hreflang="de" href="http://website.com/de/example-url2" />
        <xhtml:link rel="alternate" hreflang="es" href="http://website.com/es/example-url2" />     
    </url>
</urlset>
```

## Custom Pages

If you have more advanced Sitemap needs, Sprout SEO's Sitemap tool allows you to add any number of Custom Pages that will also be output in your Sitemap. Custom Pages can be managed in Multi-Site sitemaps on a per-site basis.

Enable Custom Pages management features in the Plugin Settings.
