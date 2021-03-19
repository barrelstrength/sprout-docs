---
date: 2018-06-25
description: There are various methods to block robots from indexing your website. The Moz article 'Robots.txt and Meta Robots' discusses some of the methods in greater detail.
---

# Block Search Robots

There are various methods to block robots from indexing your website. The Moz article [Robots.txt and Meta Robots](https://moz.com/learn/seo/robotstxt) discusses some of the methods in greater detail.

If you would like to block robots using the meta `noindex` robots tag, you can do so with the following technique:

1. Setup a Craft multi-environment configuration
2. Define a custom environment variable that you can use in your templates
3. Conditionally output the `noindex` tag in all environments that are not the live environment using the `sprout.seo.meta` variable

In the example below, the conditional statement assumes we have created an `env` variable in our `general.php` that is set to `live` in our Live environment and not set to live in all of our other environments: 

``` twig
{% if craft.config.env != 'live' %}
  {% do sprout.seo.meta({
    robots: { 'noindex': 1, 'nofollow': 1 }
  }) %}
{% endif %}
```