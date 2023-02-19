---
date: 2023-02-19
description: If you prefer to have full control over the metadata and how it is output on your pages, you can stop Sprout SEO from outputting metadata for you and just let it generate the metadata and make it available to your Twig template as a variable.
---

# Custom Metadata Variable

Sprout SEO generates the metadata that is output to your pages with the `sproutseo` tag:

``` twig
{% sproutseo 'optimize' %}
```

If you prefer to have full control over the metadata and how it is output on your pages, you can stop Sprout SEO from outputting metadata for you and just let it generate the metadata and make it available to your Twig template as a variable.

This will give you control to change the output format, stop certain items from being output, and even output additional metadata in new ways to meet your needs. To give yourself control over your metadata variable, you'll need to update two Advanced settings:

| Setting          | Description |
|:---------------- |:----------- |
| **Automatically&nbsp;render&nbsp;metadata** | Disable this setting to stop Sprout SEO from outputting your metadata. |
| **Enable&nbsp;custom&nbsp;metadata&nbsp;variable** | Enable this setting and give your custom metadata variable a name. Sprout SEO will process your metadata and make it available to your template as this variable. |

![Custom Metadata Variable](../images/seo/sprout-seo-metadata-variable.png)

To manage the metadata that Sprout SEO generates as a custom variable in your templates, you can do something like the following. Reference Sprout SEO's own template in `sproutseo/templates/_special/metadata.html` and be sure to continue to use the `{% sproutseo 'optimize' %}` tag _before_ you access your `metadata` variable in your templates (it's necessary to process your metadata and make the variable available):

``` twig
{% sproutseo 'optimize' %}

{%- set globals = metadata.globals -%}
{%- set meta    = metadata.meta -%}
{%- set schema  = metadata.schema %}

{% for name, value in meta.search %}
{% switch name %}
{% case "title" %}
  <title>{{ value }}</title>
{% case "author" %}
  <link href="{{ value }}" rel="author">
{% case "publisher" %}
  <link href="{{ value }}" rel="publisher">
{% default %}
  <meta name="{{ name }}" content="{{ value }}">
{% endswitch %}
{% endfor %}
{% for name, value in meta.robots %}
{% switch name %}
{% case "canonical" %}
  <link rel="canonical" href="{{ value }}">
{% default %}
  <meta name="{{ name }}" content="{{ value }}">
{% endswitch %}
{% endfor %}
{% for name, value in meta.geo %}
  <meta name="{{ name }}" content="{{ value }}">
{% endfor %}
{% for name, value in meta.openGraph %}
  <meta property="{{ name }}" content="{{ value }}">
{% endfor %}
{% for name, value in meta.twitterCard %}
  <meta name="{{ name }}" content="{{ value }}">
{% endfor %}
{% for property in globals.ownership %}
  <meta name="{{ property.metaTag }}" property="{{ property.metaTag }}" content="{{ property.verificationCode }}">
{% endfor %}

{%- for item in schema -%}
  {% if item %}
    {{ item.getSchema() }}
  {% endif %}
{%- endfor %}
```
