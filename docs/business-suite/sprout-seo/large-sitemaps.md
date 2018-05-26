Sprout SEO now supports large sitemaps. See the [Sitemap documentation]({entry:248:url}) for more information on how to enable Dynamic Sitemaps and customize the _Total Elements Per Sitemap_ setting for your needs.

![XML Sitemap Settings]({asset:4406:url})

_Note: The method below is here for reference only. The `craft.sproutSeo.sitemap()` tag is deprecated and will be removed in Craft 3._

----

If you have a large number of entries, you may need to break your sitemap into multiple sitemaps using a sitemap index.

_Note: We're evaluating ways to make this more user friendly.  For now, the larger sections of your site may have to be output in a manual way in conjunction with the `craft.sproutSeo.sitemap` tag._

Managing your larger number of entries with a sitemap index involves 3 steps:
1. Create a sitemapindex and the related sitemap files
2. Output all of your basic sections using the `sitemap` tag
3. Manually output the entries of your largest section in the appropriate sitemap file.

Here's an example of how to set this up with a sitemapindex and two specific sitemap files.

- **Sitemap Index**: templates/sitemap.xml
- **General Sitemap**: templates/sitemaps/sitemap-general.xml
- **Large Section Sitemap**: templates/sitemaps/sitemap-articles.xml

## Create your sitemapindex file

First, you can create an `<sitemapindex>` file that references all of the other sitemaps that you want included.  In this example, our `<sitemapindex>` references 2 other sitemaps: one for our general pages and one for the section where we have a large number of articles. 

In some cases, you may even need to break up your larger section into multiple sitemap files.

**templates/sitemap.xml**

``` twig
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
 <sitemap>
    <loc>{{ siteUrl }}sitemaps/sitemap-general.xml</loc>
    <lastmod>{{ now|date('Y-m-d') }}</lastmod>
 </sitemap>
 <sitemap>
    <loc>{{ siteUrl }}sitemaps/sitemap-articles.xml</loc>
    <lastmod>{{ now|date('Y-m-d') }}</lastmod>
 </sitemap>
</sitemapindex>
```

## Output your general pages using the sitemap tag

While one of your sections may be large, you can still simplify the output of all your singles and smaller sections in your general sitemap file.

**templates/sitemaps/sitemap-general.xml**

``` twig
{{ craft.sproutSeo.sitemap() }}
```

## Manually output the entries of your largest section

For your large section, make sure you deselect it in the Sitemap settings.  This will ensure it doesn't get included in the general sitemap file.  You can then manage the output of your largest section using Twig.  If you need to break it into multiple files you can reference additional sitemaps in your `<sitemapindex>` and use the `craft.entries` parameters `limit` and `offset` to control how many entries you are outputting in any particular sitemap.

**templates/sitemaps/sitemap-articles.xml**

``` twig
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  {% set articles =  craft.entries.find({section: 'articles', limit: '1000'}) %}

  {% for entry in articles %}
  <url>
    <loc>{{ entry.url }}</loc>
    <lastmod>{{ entry.dateUpdated|date('Y-m-d') }}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  {% endfor %}

</urlset>
```