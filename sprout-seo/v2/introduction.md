# How to optimize your website with Sprout SEO

Sprout SEO makes it simple to optimize your website for search engines.  It's designed to allow you to set sensible defaults for each section of your website, dynamically override those defaults in the code with page specific content, and, if that's not enough, have custom control over your meta-data on entry by entry basis.

To fully understand Sprout SEO you must understand its order of priorities.

1. **Default Meta Templates**<br> First, create sensible default meta templates for each section of your website
2. **On-page Overrides**<br> Dynamically override your default meta templates with content from your entries to make your SEO more relevant and specific to the content on your page.
3. **Custom Overrides**<br> If a default meta template or on-page override is not enough, you can manually adjust each piece of your metadata to be exactly what you want on a per-entry basis.

In the example below, our default meta template could be used on the main page of our Sprout website. However, on a more specific page of our website, such as the Sprout SEO plugin page, we could override those defaults in the page code.  If, for some reason, we wanted to get even more specific, we could override what is happening in the code by using custom overrides with our Sprout SEO fields on each individual entry.  Here we have manually overridden the text for our open graph title.

<table>
    <thead>
        <tr>
            <th style="width:20%;">Meta Tag</th>
            <th style="width:20%;">Default Meta Templates</th>
            <th style="width:20%;">On-page Overrides</th>
            <th style="width:20%;">Custom Overrides</th>
            <th style="width:20%;">Result</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>title</code></td>
            <td style="color:#999;">Sprout Plugins</td>
            <td>Sprout SEO</td>
            <td></td>
            <td><strong>Sprout SEO</strong></td>
        </tr>
        <tr>
            <td><code>description</code></td>
            <td style="color:#999;">Business and marketing tools</td>
            <td>SEO Plugin for Craft CMS</td>
            <td></td>
            <td><strong>SEO Plugin for Craft CMS</strong></td>
        </tr>
        <tr>
            <td><code>keywords</code></td>
            <td style="color:#999;">craft cms, craft plugins</td>
            <td>craft seo plugin</td>
            <td></td>
            <td><strong>craft cms, craft seo plugin</strong></td>
        </tr>
        <tr>
            <td><code>og:title</code></td>
            <td style="color:#999;">Sprout Plugins</td>
            <td style="color:#999;">Sprout SEO</td>
            <td>Sprout SEO plugin for Craft CMS</td>
            <td><strong>Sprout SEO plugin for Craft CMS</strong></td>
        </tr>
    </tbody>
</table>

## Managing your SEO metadata in your template

First, let's add one line of code to the `<head>` tag in the header of our templates where we want our metadata to be placed.

``` twig
{{ craft.sproutSeo.optimize() }}
```

Adding the optimize tag, prepares your header to output your meta information.  By itself, nothing will be output, but we'll look at how to begin to customize your meta data and this tag will manage all of your output.

At the highest level, you can set a *Global Default*.

When you create a new `Default Template` in Sprout SEO, you will have the option to select a checkbox for "Use this default as my global fallback".  You can only select that checkbox for a single `Default Template` and when you do, any meta value that is not defined in a more specific way, will fallback to the value you have set in your Default template when the `optimize()` tag is processed.

If you wish to override specific pages to use a different default template, you can begin to override the metadata on you page using the Sprout SEO `meta()` tag and Twig's `do` statement.

``` twig
{% do craft.sproutSeo.meta({ default: 'default' }) %}
```

On an individual entry page, we can get more specific, and use the Craft `entry` variable to make our metadata more specific.
			
``` twig
{% do craft.sproutSeo.meta({ 
        default: 'default',
        title: entry.title,
	description: entry.body|striptags|slice(0, 160)     
}) %}
```	  

If we want to override any of our Default Meta Template values or On-Page Override values from our entries in the Control Panel, we can setup a Sprout SEO FieldType and update our code to pass the entry ID that we want to override. 
							
``` twig			
{% do craft.sproutSeo.meta({ 
	id: entry.id,    
        default: 'default',
        title: entry.title,
	description: entry.body|striptags|slice(0, 160)
}) %}
```

The `craft.sproutSeo.meta()` tag can update any of your meta information as your page is loading, and as long as you call it in your templates before the `optimize()` tag is rendered, you can nest it as deeply as you would like.
      
The `craft.sproutSeo.optimize()` function will loop through our meta values and output our meta data in html.  All Sprout SEO keywords use the same value as their HTML counterparts where possible.  For geo, Open Graph, and Twitter Card values we remove the period and colon in the HTML names and camel case the full name for reference.  For example, *geo.placename* can be accessed as `geoPlacename`, *og:title* can be accessed as `ogTitle`, and *twitter:creator* can be accessed as `twitterCreator`.

## A list of all available meta tags

``` html
<!-- Basic SEO -->
<title></title>
<meta name="description" content="" />
<meta name="keywords" content="" />
<meta name="robots" content="" />

<!-- Advanced SEO -->
<link rel='canonical' href='' />
<meta name='robots' content='nofollow, noarchive, nosnippet, noimageindex, noodp, noydir' />

<!-- Geographic -->
<meta name="geo.position" content=""> 
<meta name="geo.placename" content=""> 
<meta name="geo.region" content="">

<!-- Open Graph -->
<meta property='og:title' content='' />
<meta property='og:type' content='' />
<meta property='og:url' content='' />
<meta property='og:image' content='' />
<meta property='og:image:width' content='' />
<meta property='og:image:height' content='' />
<meta property='og:image:type' content='' />

<meta property='og:author' content='' />
<meta property='og:publisher' content='' />
<meta property='og:site_name' content='' />
<meta property='og:description' content='' />
<meta property='og:audio' content='' />
<meta property='og:video' content='' />
<meta property='og:locale' content='' />

<!-- Twitter Card -->
<meta property='twitter:card' content='' />
<meta property='twitter:site' content='' />
<meta property='twitter:creator' content='' />
<meta property='twitter:title' content='' />
<meta property='twitter:description' content='' />
<meta property='twitter:url' content='' />
<meta property='twitter:image' content='' />

<meta property='twitter:player' content='' />
<meta property='twitter:player:stream' content='' />
<meta property='twitter:player:stream:content_type' content='' />
<meta property='twitter:player:width' content='' />
<meta property='twitter:player:height' content='' />
```

## An Example of Overriding all Meta Variables
			
``` twig
{% do craft.sproutSeo.meta({ 
    id: entry.id,
    default: 'default',
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

**Note**: The `id` parameter is only necessary if you want to use custom overrides using the Sprout SEO fields.  The rest of the parameters are optional.
									
												
## SEO FieldTypes

If you need it, Sprout SEO gives you complete control over your SEO metadata at the entry level as well.  You can assign any of the SEO Fieldtypes to any section you choose.
              
- Meta: Basic
- Meta: Geographic
- Meta: Robots 
- Meta: Open Graph
- Meta: Twitter Card              