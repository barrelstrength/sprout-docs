# Global Metadata

### Website Identity

``` twig
{% set globals = craft.sproutSeo.getGlobals() %}
{% set identity = globals.identity %}

{{ identity.name }}
{{ identity.alternateName }}
{{ identity.description }}

{{ identity.image }} {# Image URL without transform #}
{{ identity.keywords }}
{{ identity.url }}
{{ identity.email }}
{{ identity.telephone }}
{{ identity.latitude }}
{{ identity.longitude }}
{{ identity.foundingDate }}
{{ identity.priceRange }}

{# Opening Hours Start on Sunday #}
{% set days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] %}

{% for day in identity.openingHours %}
  {{ days[loop.index0] }} {{ day.open.time }}-{{ day.close.time }}
{% endfor %}

{{ identity.organization }}
{{ identity.address.countryCode }}
{{ identity.address.administrativeArea }}
{{ identity.address.locality }}
{{ identity.address.postalCode }}
{{ identity.address.address1 }}
{{ identity.address.address2 }}
```

## Contacts

``` twig
{% set globals = craft.sproutSeo.getGlobals() %}
{% set contacts = globals.contacts %}

{% for contact in contacts %}
  {{ contact.type }}
  {{ contact.telephone }}
{% endfor %}
```

### getContacts

You can display a list of the Contacts from your Global Sprout SEO settings on your website using the `getContacts` tag:

``` twig
{% set contacts = craft.sproutSeo.getContacts() %}

<ul>
  {% for contact in contacts %}
    <li><a href="tel:{{ contact.telephone }}">{{ contact.type }}</a></li>
  {% endfor %}
</ul>
```

## Social Profiles

``` twig
{% set globals = craft.sproutSeo.getGlobals() %}
{% set social = globals.social %}

{% for social in socials %}
  {{ social.name }}
  {{ social.url }}
{% endfor %}
```

### getSocialProfilesTag

You can display a list of the Social Profiles in your Global Sprout SEO settings on your website using the `getSocialProfiles` tag:

``` twig
{% set socialProfiles = craft.sproutSeo.getSocialProfiles() %}

<ul>
  {% for socialProfile in socialProfiles %}
    <li><a href="{{ socialProfile.url }}">{{ socialProfile.name }}</a></li>
  {% endfor %}
</ul>
```

## Verify Ownership

``` twig
{% set globals = craft.sproutSeo.getGlobals() %}
{% set ownership = globals.ownership %}

{% for item in ownership %}
  {{ item.service }}
  {{ item.metaTag }}
  {{ item.verificationCode }}
{% endfor %}
```

## Customization

``` twig
{% set globals = craft.sproutSeo.getGlobals() %}
{% set settings = globals.settings %}

{{ settings.seoDivider }}
{{ settings.defaultOgType }}
{{ settings.ogTransform }}
{{ settings.twitterTransform }}
{{ settings.defaultTwitterCard }}
{{ settings.appendTitleValueOnHomepage }}
{{ settings.appendTitleValue }}
```

## Robots

```
{% set globals = craft.sproutSeo.getGlobals() %}
{% set robots = globals.robots %}

{% for key,enabled in robots %}
  {{ key }}
  {{ enabled }}
{% endfor %}
```