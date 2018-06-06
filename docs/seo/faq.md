# FAQ

## My page is outputting the wrong metadata?

This is usually due to an incorrect setting or configuration somewhere. Check your settings and make sure you've assigned the right Element Metadata field to your Field Layout. Make sure your Custom Sections are enabled. 

A tricker one to troubleshoot is when matched variable names may take priority over one another in your template. Make sure you don't override the primary variable (`entry`, `category`, `product`, etc.) that Craft or a Custom Element Type makes available to the page, or any other URL-enabled pages:

For example, a line that defines a `category` variable:

``` twig
{% set category = product.category.last() %}
```

May override the expected `category` variable that Craft makes available to a Category page with URLs and also may override the `entry` or `product` variables on an Entry or Product Page with URLs.

Avoid using the generic variable names that Craft depends on when possible and use more specific variable names such as `productCategory` to avoid unexpected behavior.

## My sitemap is returning blank!?  What do I do?

Usually, this is because you have lots of entries and the sitemap tag is trying to output them all and running out of memory.

To troubleshoot, first de-select all of the sections in your sitemap and then add them back one by one, starting with your Singles or smaller sections.

Once you have identified the larger section that may be causing the issue, de-select it from your sitemap settings.  You'll need to manage the sitemap for this section manually.  Review our help doc on [Large Sitemaps](http://sprout.barrelstrengthdesign.com/craft-plugins/seo/docs/examples/large-sitemaps) for an example of how to manage a `sitemapindex` and multiple sitemaps.