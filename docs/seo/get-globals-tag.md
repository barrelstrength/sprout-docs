# getGlobals

You can display all Global Metadata in your template using the `getGlobals` tag.

``` twig
{% set globals = craft.sproutSeo.getGlobals() %}
```

## Website Identity

``` twig
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
{% set contacts = globals.contacts %}

{% for contact in contacts %}
  {{ contact.type }}
  {{ contact.telephone }}
{% endfor %}
```

## Social Profiles

``` twig
{% set social = globals.social %}

{% for social in socials %}
  {{ social.name }}
  {{ social.url }}
{% endfor %}
```

## Verify Ownership Tags

``` twig
{% set ownership = globals.ownership %}

{% for item in ownership %}
  {{ item.service }}
  {{ item.metaTag }}
  {{ item.verificationCode }}
{% endfor %}
```

## Customization Settings

``` twig
{% set settings = globals.settings %}

{{ settings.seoDivider }}
{{ settings.defaultOgType }}
{{ settings.ogTransform }}
{{ settings.twitterTransform }}
{{ settings.defaultTwitterCard }}
{{ settings.appendTitleValueOnHomepage }}
{{ settings.appendTitleValue }}
```

## Robots Settings

```
{% set robots = globals.robots %}

{% for key,enabled in robots %}
  {{ key }}
  {{ enabled }}
{% endfor %}
```
