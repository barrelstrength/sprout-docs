# Sitemaps

To output the complete XML for your Sitemap, add the following tag to your sitemap template:

```
{{ craft.sproutSeo.sitemap() }}
```

The `sitemap()` tag generates XML data so you'll want to be sure your Craft template file uses the `.xml` filetype: `sitemap.xml`

::: warning
This method of generating your sitemap has been deprecated and has been removed in Craft 3.
:::