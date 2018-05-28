# getContacts

You can display a list of the Contacts from your Global Sprout SEO settings on your website using the `getContacts` tag:

``` twig
{% set contacts = craft.sproutSeo.getContacts() %}

<ul>
  {% for contact in contacts %}
    <li><a href="tel:{{ contact.telephone }}">{{ contact.type }}</a></li>
  {% endfor %}
</ul>
```