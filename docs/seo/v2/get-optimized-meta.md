# getOptimizedMeta

The `getOptimizedMeta` tag will provide you a multi-dimensional array with all of your prioritized meta data to output and customize however you'd like.

The content of the array will be grouped into the same groups you will find in the tabs of your Meta Defaults and the Meta Field Types.

- Basic
- Robots
- Geo
- Open Graph
- Twitter

``` twig
{# Retrieve the optimized meta data #}
{% set meta = craft.sproutSeo.getOptimizedMeta() %}

{# Loop through the basic meta data and customize the output #}
{% for name, value in meta.basic %}
{% switch name %}
{% case "title" %}
	<title>{{ value }}</title>
{% case "author" %}
	<link href="{{ value }}" rel="author" />
{% case "publisher" %}
	<link href="{{ value }}" rel="publisher" />
{% default %}
	<meta name='{{ name }}' content='{{ value }}' />
{% endswitch %}
{% endfor %}

{# Loop through the robots meta data and customize the output #}
{% for name, value in meta.robots %}
{% switch name %}
{% case "canonical" %}
	<link rel='canonical' href='{{ value }}' />
{% default %}
	<meta name='{{ name }}' content='{{ value }}' />
{% endswitch %}
{% endfor %}

{# Loop through the geo meta data and customize the output #}
{% for name, value in meta.geo %}
	<meta name='{{ name }}' content='{{ value }}' />
{% endfor %}

{# Loop through the Open Graph meta data and customize the output #}
{% for name, value in meta.openGraph %}
	<meta property='{{ name }}' content='{{ value }}' />
{% endfor %}

{# Loop through the Twitter meta data and customize the output #}
{% for name, value in meta.twitter %}
	<meta name='{{ name }}' content='{{ value }}'>
{% endfor %}
```