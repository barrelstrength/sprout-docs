You can override an Open Graph or Twitter Card image in your templates.  

## Overriding Open Graph Images

When overriding the image attribute dynamically in your templates, you need to use an absolute url.

``` twig
{% do craft.sproutSeo.meta({ 
	default: 'blog',
	ogImage: 'https://website.com/images/share.jpg',
}) %}
```

Open Graph images have the option to set several additional attributes.

``` twig
{% do craft.sproutSeo.meta({ 
	default: 'blog',
	ogImage: entry.assets.first().getUrl(),
	ogImageHeight: entry.assets.first().getHeight(),
	ogImageWidth: entry.assets.first().getWidth(),
	ogImageType: entry.assets.first().mimeType
}) %}
```

## Overriding Twitter Card Images

Twitter Cards images only need the image url.

``` twig
{% do craft.sproutSeo.meta({ 
	default: 'blog',	
	twitterImage: entry.assets.first().getUrl()
}) %}
```