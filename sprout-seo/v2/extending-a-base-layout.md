Start by creating a base layout template `_layouts/base.html`.  In your layout, you will call the `craft.sproutSeo.optimize()` tag which will hand processing all of your meta output.

``` twig
<html>
  <head>
  		{{ craft.sproutSeo.optimize() }}
  </head>
  <body>

      {% set content %}{% endset %}

  </body>
</html>
```

With your layout in place, all of your other pages can now extend that layout and pass in unique SEO metadata or change the behavior of the default behavior of the `optimize()` tag.  Here is an example home page (`index.html`) where the home page uses an SEO fallback template you created called `homepage`.

``` twig
{% extends "_layouts/base" %}

{% do craft.sproutSeo.meta({ 
    default: 'homepage' 
}) %}

{% set content %}
    Home Page Content
{% endset %}
```

Here is an example blog index page (`blog/index.html`) where the blog index page uses an SEO fallback template you created called `blog`.

``` twig
{% extends "_layouts/base" %}

{% do craft.sproutSeo.meta({ 
    default: 'blog' 
}) %}

{% set content %}
    Blog Index Page Content
{% endset %}
```

Here is an example blog detail page (`blog/_entry.html`) where the blog detail page uses the same fallback template you created called `blog`, but overrides the title and description values dynamically for each individual blog entry.

``` twig
{% extends "_layouts/base" %}

{% do craft.sproutSeo.meta({ 
    default: 'blog',
    title: entry.title,
    description: entry.body|striptags|slice(0, 160)                                    
}) %}

{% set content %}
    
    Blog Detail Page Content
    
    {% for block in entry.matrixBody %}
        {% include '_partial/matrixBlocks' %}
    {% endfor %}

{% endset %}
```

As long as `craft.sproutSeo.meta()` gets called with a Twig `do` statement before the `craft.sproutSeo.optimize()` tag, your meta data will be updated.  This means you can update your meta data inside `{% include %}` tags and nested `{% include %}` tags.

In our last example with the blog detail page (`blog/_entry.html`), we have an included file within our set tag called `_partial/matrixBlocks.html`.  Within that file, we can also update our meta data using the `craft.sproutSeo.meta()` tag just as before.

``` twig
{% if block.type == 'descriptionBlock' %}
    
    {% do craft.sproutSeo.meta({ 
        description: block.description|striptags|slice(0, 160)                                    
    }) %}

{% endif %}
```

_Note: In our examples we have chosen to use the `{% set %}` tag to build our layouts because it gets processed in the same way as all of the other Twig tags - from top to bottom.  The `{% block %}` tag, while useful for many use cases in your templates, does not get processed until last, so we're unable to update our meta data using `craft.sproutSeo.meta()` in a `{% block %}` tag because our `craft.sproutSeo.optimize()` tag gets processed before the `{% block %}` tag runs._

_If you'd like to learn more about the Twig processing order, have a look at the [The Twig Processing Order in Craft Templates](straightupcraft.com/articles/twig-processing-order) article on Straight Up Craft._