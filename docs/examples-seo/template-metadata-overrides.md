---
date: 2023-02-19
description: You have multiple options to customize the canonical URLs that appear in your metadata or in your XML sitemaps.
---

### Templating

Metadata defined in templates gets the highest priority when metadata is processed.

The `sprout.meta.update` variable allows you to override metadata within templates. The `sprout.meta.update` variable must use the `do` tag syntax.

### A Simple Page

#### page.twig

``` twig
{% do sprout.meta.update({
    title: entry.title,
}) %}

{% sproutseo 'optimize' %}
```

### section/_entry.twig (extends your layout)

Below is an example of all of the values you can override.

``` twig
{% do sprout.meta.update({ 
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
