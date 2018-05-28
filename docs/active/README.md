# Introduction

Sprout Active makes it simple to control the active classname in your navigation or conditional content based on your URL segments or your full URL.

## Managing Navigation and Selected States

Sprout Active provides two Twig Filters, `active()` and  `activeClass()`, to test for matching URL segments and output a class to make an element active.

By default, the `activeClass()` filter tests for the first URL segment against your matching copy, and outputs the string: `class="active"`

For example, the most simple version of these filters will match the first segment in the URL `http://example.com/about-us`.  If no match is found, they will return blank.

``` twig
{{ active('about-us') }}

{{ activeClass('about-us') }}

{{ activeClass(entry.slug) }}
```

To target your home page, you can just reference a blank value.  This example will match the home page URL `http://example.com`.

``` twig
{{ active('') }}

{{ activeClass('') }}
```

## Targeting a different URL segment

To target other parts of your URL, pass the number of the URL segment you want to match as the second argument in the active or activeClass functions.

This example will look for a match in the second segment of the URL `http://example.com/about/meet-the-team`.

``` twig
{{ active('meet-the-team', 2) }}

{{ activeClass('meet-the-team', 2) }}
```

## Using a different class name

If you prefer to use a different class name, you can provide the class you want to use as the third argument in the active and activeClass functions.

This example, will look for a match in the first segment of your URL, and return the text `highlight` for the active function and `class="highlight"` for the activeClass function.

``` twig
{{ active('about-us', 1, 'highlight') }}

{{ activeClass('about-us', 1, 'highlight') }}
```

## Testing for multiple values

In a situation where you need to test for multiple values, you can use the pipe delimiter.

This example will find a match if the first segment is either 'about-us' or 'meet-the-team'.

``` twig
{{ active('about-us|meet-the-team') }}

{{ activeClass('about-us|meet-the-team') }}
```

## Targeting the Full URL

Sometimes, such as when using Structure sections, you may need to target the full URL.  In these cases, instead of passing a segment number you can pass the keyword `url`. In the following code, if the page.url variable matches the current page url, the 
	
``` twig
{{ active(page.url, 'url') }}

{{ activeClass(page.url, 'url') }}
```

And, just for good measure, if you need to target only the part of the URL that comes after the domain (the path), you can target it specifically too:

``` twig
{{ active('blog/my-first-blog-post', 'path') }}

{{ activeClass('blog/my-first-blog-post', 'path') }}
```

Sometimes you may need something more descriptive than just a generic active state.  If you need to use a URL segment as a class name, you can use the segment function:

``` twig
{{ segment(2) }}
```

This will get us the same result as using the craft.request tag:

``` twig
{{ craft.request.getSegment(2) }}
```

## Using the active filter to conditionally display content

Sprout Active also provides us a short syntax to use for conditional statements.  The following code will return content when the third segment doesn't exist.

``` twig
{% if active('', 3) %} ... {% endif %}
```

Doing this is the same as using the craft.request tag:

``` twig
{% if craft.request.getSegment(3) %} ... {% endif %}
```

To give a second example, the following code will return content when the third segment matches "overview".

``` twig
{% if active('overview', 3) %} ... {% endif %}
```

We can achieve the same result using the native craft.request variable:

``` twig
{% if craft.request.getSegment(3) == "overview" %} ... {% endif %}
```

We can also check for a path or full URL in a conditional:

``` twig
{% if active(page.url, 'url') %} ... {% endif %}

{% if active('blog/my-first-blog-post', 'path') %} ... {% endif %}
```