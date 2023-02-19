---
date: 2023-02-19
description: Frequently asked questions about Sprout SEO.
---

# FAQ

Frequently asked questions about Sprout SEO.

## My page is outputting the wrong metadata?

This is usually due to an incorrect setting or configuration somewhere. Check your settings and make sure you've assigned the right Element Metadata field to your Field Layout. Make sure your Custom Sections are enabled.

A tricker one to troubleshoot is when matched variable names may take priority over one another in your template. Make sure you don't override the primary variable (`entry`, `category`, `product`, etc.) that Craft or a Custom Element Type makes available to the page, or any other URL-enabled pages:

For example, a line that defines a `category` variable:

``` twig
{% set category = product.category.last() %}
```

May override the expected `category` variable that Craft makes available to a Category page with URLs and also may override the `entry` or `product` variables on an Entry or Product Page with URLs.

Avoid using the generic variable names that Craft depends on when possible and use more specific variable names such as `productCategory` to avoid unexpected behavior.
