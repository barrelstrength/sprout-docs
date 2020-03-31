# Custom Sections

Custom Sections allow you to add arbitrary page URLs to your XML Sitemap and manage metadata for pages that may not be otherwise supported using the URL-Enabled Sections or Element Metadata field.

::: danger
Custom Sections have been deprecated in Sprout SEO 4.

We strongly recommend using the [Element Metadata Field](../element-metadata-field.md) instead. The same functionality can be achieved with the right configuration and upgrading to the latest version of Sprout SEO will be easier if you do. Custom Pages are now handled entirely in the Sitemaps section.
:::

Consider a User Profile section where all User data is managed in the Users section, however no specific page exists for the listing page of all the User Profiles on the front-end. In this case, you may want to create a Custom Section for your User Profile listing page.

Custom Sections probably only need to be used for more advanced situations. Managing metadata and XML sitemaps via the default URL-Enabled Settings will likely require less overhead to get setup and be easier for the average user to understand.

Custom Sections can be enabled in Sprout SEO's Advanced settings and will require additional, manual updates to your template to add to the metadata cascade.

To indicate that you want a specific Custom Section added to the metadata processed in a template, use the Sprout SEO `meta` tag and set the `section` attribute to the handle of your Custom Section. All custom section handles should be prefixed with `sproutseo_section`:

``` twig
{% do craft.sproutSeo.meta({
  section: 'sproutseo_section:customSectionHandle'
}) %}
```

By default, the value you use in the Custom Sections URL setting will be used for the URL. This URL is not monitored in any way dynamically, only output in your metadata when you specifically tell it to be output with the code above.

As you can only define one URL in a Custom Section, if you plans to use the Custom Section as fallback metadata in more than one template, you can further customize your meta override tag to output a unique URL on each page where the override exists:

``` twig
{% do craft.sproutSeo.meta({
  section: 'sproutseo_section:customSectionHandle',
  canonical: craft.request.url,
  ogUrl: craft.request.url,
  twitterUrl: craft.request.url
}) %}
```