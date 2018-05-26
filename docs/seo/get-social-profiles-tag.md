You can display a list of the Social Profiles in your Global Sprout SEO settings on your website using the `getSocialProfiles` tag:

``` twig
{% set socialProfiles = craft.sproutSeo.getSocialProfiles() %}

<ul>
  {% for socialProfile in socialProfiles %}
    <li><a href="{{ socialProfile.url }}">{{ socialProfile.name }}</a></li>
  {% endfor %}
</ul>
```