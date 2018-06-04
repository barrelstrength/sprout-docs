# About Sprout SEO

## Content strategy and SEO strategy side by side

Sprout SEO provide you an intuitive, seamless, and flexible way to manage your SEO strategy within Craft CMS. Content editors will enjoy a clear visual relationship between content and metadata where they can focus on content and maximize visibility.

Sprout SEO helps manage several types of metadata:

<i class="fa fa-search fa-fw update-improved"></i> Search<br>
<i class="fa fa-share fa-fw update-improved"></i> Social Sharing<br>
<i class="fa fa-puzzle-piece fa-fw update-improved"></i> Structured Data<br>
<i class="fa fa-sitemap fa-fw update-improved"></i> Sitemaps<br>
<i class="fa fa-arrow-circle-right fa-fw update-improved"></i> Redirects<br>

Refine your Metadata across three different levels of priority:

<i class="fa fa-globe fa-fw update-improved"></i> Global Metadata<br>
<i class="fa fa-files-o fa-fw update-improved"></i> Section Metadata<br>
<i class="fa fa-file-o fa-fw update-improved"></i> Entry Metadata<br>

## Metadata is content too

Often, the first time one of your visitors sees your content it is in search results or from a shared link. Make sure you're treating your metadata like a first class citizen alongside your content. 

Edit your content confidently. Throughout your content management experience, Sprout SEO will indicate which fields power the metadata on your site and provide some additional information about the scope and priority of how that field will affect your metadata.

![Element Metadata Hints]({asset:2578:url})

## Global Metadata

**Global Metadata** is managed from the Globals tab and filled out once on when you setup Sprout SEO. Globals ensure you have metadata in place for your website identity and prepare Structured Data for your brand. Globals will help you communicate to the search engines information about your brand identity, how to get in touch, and general details so you always have something relevant about your business in search results and social sharing.

![Global Metadata]({asset:2581:url})

## Section Metadata

**Section Metadata** allows you to refine your global metadata and set more sensible defaults for your content at the Section level. All URL-enabled Elements are configurable at the Section level. By default, this includes Entries, Categories, Craft Commerce Products, and Sprout Email Campaign Emails. Each group of Elements can be configured to have general metadata specific to that section for Search, Social Sharing, Structured Data, and Sitemaps.

![Section Metadata]({asset:2576:url})

## Element Metadata

**Element Metadata** is managed with the powerful Element Metadata field. The Element Metadata field allows you to configure how your metadata is handled for every entry. If you want to have a tight integration with your existing content fields, you can reuse existing fields and the Element Metadata field will blend right into your existing content. If you want detailed control, you can enable overrides for each type of metadata and manage it all manually.

![Element Metadata Field]({asset:2577:url})



## One line of code, 100% control.

Sprout SEO is powered by a single tag to your templates. Place the optimize tag within the `<head>` tag of your HTML page and you're up and running:

``` twig
{% sproutseo 'optimize' %}
```

While the simple setup above should handle most use cases, Sprout SEO is also extremely customizable and gives you fine-grained control over all of your metadata. Sprout SEO also supports:

- An API to add support for additional types of URL-enabled Elements
- An API to add support for additional types of Structured Data schemas
- Adding metadata overrides at the template level
- Overriding the default metadata templates

## Detailed overview of all metadata

If you want to have a detailed understanding of all of the types of metadata supported by Sprout SEO and how the fields relate to those different types of metadata an their priorities, we have prepared a spreadsheet with all the details:

- [Sprout SEO - Metadata Levels & Priorities](https://docs.google.com/spreadsheets/d/1OWvJVPkxdiqiemT2AMX76yPacLfi3aBuyRhgRy4_NIU/edit?usp=sharing)

![Metadata Levels and Priorities Spreadsheet]({asset:2607:url})

_Note: We use the term **Metadata** to refer to all types of Metadata together. More specifically we may refer to Meta Tags, which are traditional metadata, Social Sharing, which relies on a series of more specific Meta Tags around two specifications (Open Graph and Twitter) but applies to many other mediums as well from Pinterest to Slack chat, etc. Sprout SEO also let's you manage Structured Data (Knowledge Graph, Rich Cards) which supports many different Schemas and is output as JSON-LD in your templates. Finally, Sitemap metadata, allows you to define a list of URLs that search engines should know about on your site._