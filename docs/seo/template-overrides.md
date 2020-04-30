---
date: 2018-06-25
description: Template Overrides allow you to modify your metadata in your Craft templates.
---

# Template Overrides

Template Overrides allow you to modify your metadata in your Craft templates. While this can help with some scenarios, it is not always ideal as it makes it harder to give content authors control over all metadata in the Control Panel and increases the complexity of the codebase that needs to be managed over time. 
 
 ::: warning PROCEED WITH CAUTION
 Template Overrides should be considered a last resort. If you feel you have no other options and need to use them, reach out and [let us know](mailto:sprout@barrelstrengthdesign.com). We'd love to understand your use case so we can improve Sprout SEO and make it less likely you need to use Template Overrides in the future.
 :::
 
## Templating 

Metadata defined in templates gets the highest priority when metadata is processed.

The `meta` variable allows you to override metadata within templates. The `meta` variable must use the `do` tag syntax and must be run _before_ the  `{% sproutseo 'optimize' %}` tag in your templates.

### A Simple Page

#### page.twig

``` twig
{% do craft.sproutSeo.meta({
    title: entry.title,
}) %}

{% sproutseo 'optimize' %}
```

### Extending a Layout

#### _layout.twig

``` twig
{% sproutseo 'optimize' %}
```

#### section/_entry.twig (extends your layout)

Below is an example of all of the values you can override.

``` twig
{% do craft.sproutSeo.meta({ 
    title: entry.title,
    description: entry.body|striptags|slice(0, 150),
    canonical: '',
    robots: 'noindex,nofollow',
    region: '',
    placename: '',
    latitude: '',
    longitude: '',
    ogTitle: '',
    ogType: '',
    ogUrl: '',
    ogImage: '',
    ogImageWidth: '',
    ogImageHeight: '',
    ogImageType: '',            
    ogSiteName: '',
    ogAuthor: '',
    ogPublisher: '',        
    ogDescription: '',
    ogAudio: '',
    ogVideo: '',
    ogLocale: '',
    twitterCard: '',
    twitterSite: '',
    twitterCreator: '',
    twitterTitle: '',
    twitterDescription: '',
    twitterUrl: '',
    twitterImage: '',
    twitterPlayer: '',
    twitterPlayerStream: '', 
    twitterPlayerStreamContentType: '', 
    twitterPlayerWidth: '', 
    twitterPlayerHeight: '',                                        
}) %}
```
