# Canonical Overrides

If you need to override the `canonical` meta tag at the Entry level, you can do so by creating a custom field for your override and updating the value in your template.

If your Canonical override field handle has the value of `canonicalOverrideFieldHandle`, you would add the following snippet to the pages where you wanted to allow overrides:

``` twig
{% do craft.sproutSeo.meta({
  canonical: entry.canonicalOverrideFieldHandle
}) %}
```

If you'd like to validate and ensure your Canonical override field is a URL, check out the Sprout Fields [URL Field](../fields/url-field.md).