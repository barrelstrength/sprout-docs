# Elements Without URLs

The [Metadata Field](./element-metadata-field.md) can also be used on Elements like Users and Tags, that do not support URLs by default.

To manage metadata on Non-URL-Enabled Elements you will need to:

- Setup a custom route in Craft to load your element on a specific page
- Add a Metadata Field to the Element's Field Layout
- Define the Element ID in your template's Sprout Seo `meta` tag

## User Metadata

``` twig
{# Determine the User Element for your page #}
{% set user = craft.users.id(1).one() %}

{# Set the `id` variable to the Element ID that has your Metadata field #}
{% do craft.sproutSeo.meta({
    id: user.id
}) %}

{# Prepare your metadata #}
{% sproutseo 'optimize' %}
```