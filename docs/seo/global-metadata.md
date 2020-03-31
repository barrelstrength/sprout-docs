# Global Metadata

Global Metadata is managed from the Globals tab and filled out once when you setup Sprout SEO. Globals ensure you have metadata in place for your website identity and prepare Structured Data for your brand. Globals will help you communicate to the search engines information about your brand identity, how to get in touch, and general details so you always have something relevant about your business in search results and social sharing.

## Website Identity

``` twig
{% set globals = craft.sproutSeo.getGlobalMetadata() %}
{% set identity = globals.identity %}

{{ identity.name }}
{{ identity.alternateName }}
{{ identity.description }}

{% set ogImage = craft.app.elements.getElementById(identity.image) %}
{% if ogImage %}
    {{ ogImage.getUrl() }}
{% endif %}

{{ identity.keywords }}
{{ identity.email }}
{{ identity.telephone.country }}
{{ identity.telephone.phone }}
{{ identity.latitude }}
{{ identity.longitude }}
{{ identity.foundingDate.date }}
{{ identity.priceRange }}

{# Opening Hours Start on Sunday #}
{% set days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] %}
{% for day in identity.openingHours %}
    {{ days[loop.index0] }} {{ day.open.time }}-{{ day.close.time }}
{% endfor %}

{{ identity.address.countryCode }}
{{ identity.address.administrativeAreaCode }}
{{ identity.address.locality }}
{{ identity.address.postalCode }}
{{ identity.address.address1 }}
{{ identity.address.address2 }}
```

## Contacts

``` twig
{% set globals = craft.sproutSeo.getGlobalMetadata(currentSite) %}
{% set contacts = globals.contacts %}

{% for contact in contacts %}
    {{ contact.contactType }}
    {{ contact.telephone }}
{% endfor %}
```

### getContacts

You can display a list of the Contacts from your Global Sprout SEO settings on your website using the `getContacts` tag:

``` twig
{% set contacts = craft.sproutSeo.getContacts(currentSite) %}

<ul>
    {% for contact in contacts %}
        <li><a href="tel:{{ contact.telephone }}">{{ contact.type }}</a></li>
    {% endfor %}
</ul>
```

## Social Profiles

``` twig
{% set globals = craft.sproutSeo.getGlobalMetadata(currentSite) %}
{% set social = globals.social %}

{% for profile in social %}
    {{ profile.profileName }}
    {{ profile.url }}
{% endfor %}
```

### getSocialProfilesTag

You can display a list of the Social Profiles in your Global Sprout SEO settings on your website using the `getSocialProfiles` tag:

``` twig
{% set socialProfiles = craft.sproutSeo.getSocialProfiles(currentSite) %}

<ul>
  {% for socialProfile in socialProfiles %}
    <li><a href="{{ socialProfile.url }}">{{ socialProfile.name }}</a></li>
  {% endfor %}
</ul>
```

## Verify Ownership

``` twig
{% set globals = craft.sproutSeo.getGlobalMetadata(currentSite) %}
{% set ownership = globals.ownership %}

{% for item in ownership %}
  {{ item.service }}
  {{ item.metaTag }}
  {{ item.verificationCode }}
{% endfor %}
```

## Customization

``` twig
{% set globals = craft.sproutSeo.getGlobalMetadata(currentSite) %}
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

``` twig
{% set globals = craft.sproutSeo.getGlobalMetadata(currentSite) %}
{% set robots = globals.robots %}

{% for key,enabled in robots %}
  {{ key }}
  {{ enabled }}
{% endfor %}
```