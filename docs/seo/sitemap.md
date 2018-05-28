# Sitemap

Sprout SEO makes it easy to generate a Sitemap for all of your URL-enabled content for one or more languages. Your sitemap can be managed directly from the Craft admin area (no template updates required).

Sitemaps currently supports the following types of content:

1. Sections
2. Categories
3. Craft Commerce Products
4. Custom URLs
5. Custom URL-Enabled Element Integrations

![Sitemap Management]({asset:4405:url})

All of your URL-enabled content types will appear on the Sitemap Settings page. For each type of content, you can:

- *Enabled* - Enable it or disable it in your sitemap
- *Priority* - Update the Priority of the items in the Section relative to the other items in your Sitemap
- *Change Frequency* - Update the Change Frequency of the items in the Section relative to other items in your Sitemap

## Generate your Sitemap

Your Sitemap output is managed by two settings on the `Sprout Seo->Settings->General` tab.

![XML Sitemap Settings]({asset:4406:url})

- *Enable Dynamic Sitemaps* - Enabling this setting will display a sitemap for all your URL-Enabled sections when you visit the URL: `/sitemap.xml` on your website.
- *Total Elements Per Sitemap* - The number of items that display on each page of your sitemap. A lower number may be necessary for sitemaps with a large number of elements or limited server resources.

## Example Sitemap output

Your sitemap will consist of two or more XML Sitemap files. This will include a Sitemap Index file that lists all relevant sitemaps for your website and individual XML Sitemap files for each respective section. Individual Sitemap files will be broken into multiple files when the number of entries is more than the _Total Elements Per Sitemap_ setting value.

### Sitemap Index

Your Sitemap Index will be output when you visit the URL: `/sitemap.xml`

```
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
 <sitemap>
    <loc>{{ siteUrl }}singles-sitemap.xml</loc>
    <lastmod>{{ now|date('Y-m-d') }}</lastmod>
 </sitemap>
 <sitemap>
    <loc>{{ siteUrl }}channelnamehandle-entries-sitemap1.xml</loc>
    <lastmod>{{ now|date('Y-m-d') }}</lastmod>
 </sitemap>
 <sitemap>
    <loc>{{ siteUrl }}channelnamehandle-entries-sitemap2.xml</loc>
    <lastmod>{{ now|date('Y-m-d') }}</lastmod>
 </sitemap>
 <sitemap>
    <loc>{{ siteUrl }}channelnamehandle-entries-sitemap3.xml</loc>
    <lastmod>{{ now|date('Y-m-d') }}</lastmod>
 </sitemap>
 <sitemap>
    <loc>{{ siteUrl }}categorygrouphandle-categories-sitemap1.xml</loc>
    <lastmod>{{ now|date('Y-m-d') }}</lastmod>
 </sitemap>
 <sitemap>
    <loc>{{ siteUrl }}productypehandle-products-sitemap1.xml</loc>
    <lastmod>{{ now|date('Y-m-d') }}</lastmod>
 </sitemap>
 <sitemap>
    <loc>{{ siteUrl }}custom-sections-sitemap.xml</loc>
    <lastmod>{{ now|date('Y-m-d') }}</lastmod>
 </sitemap>
</sitemapindex>
```
### Individual Sitemaps

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

### Individual Sitemaps for Multi-Langauge Website

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

## Custom URLs

If you have more advanced Sitemap needs, Sprout SEO's Sitemap tool allows you to add any number of Custom URLs that will also be output in your Sitemap.

Enable Custom URL management features in the Advanced Settings (`Sprout SEO->Settings->Advanced->Enable Custom Sections`)

## Custom URL-Enabled Element Integrations

Plugins can [add sitemap support for custom URL-enabled content]({entry:3263:url}). For example, Sprout Email adds Sitemap support for Email Campaigns.

## [Deprecated] Generate your Sitemap Manually

_Note: This method of outputting your sitemap has been deprecated and will be removed for Craft 3._

To output the complete XML for your Sitemap, add the following tag to your sitemap template:

```
{{ craft.sproutSeo.sitemap() }}
```

The `sitemap()` tag generates XML data so you'll want to be sure your Craft template file uses the `.xml` filetype: `sitemap.xml`
