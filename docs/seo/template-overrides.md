# Template-Level Overrides

When you need to customize your metadata at the template level, you can use the `do craft.sproutSeo.meta` tag.

Anywhere before the `{% sproutseo 'optimize' %}` tag in your templates, you can use the `do craft.sproutSeo.meta` to override any of the prioritized values that are being processed for the page.

Below is an example of the values you can override.

### _layout

``` twig
{% sproutseo 'optimize' %}
```

### section/_entry (extends your layout)

``` twig
{% do craft.sproutSeo.meta({ 
    section: 'customSectionHandle',
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