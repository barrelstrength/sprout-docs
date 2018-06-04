# Importing Data

Sprout Forms adds support for importing and seeding data to the following Sprout Forms data types:

- Entry Elements
- Form Relations Fields
- Form Entry Relations Fields

## Seeding

Select **Sprout Forms Entries** as the _Type of Content_ from the Sprout Import Seed tab to generate fake Form Entries for testing.

## Importing

Import real or test Form Entry Elements to Sprout Forms.

In the following example, we'll create a JSON import file with 100 fake Form Entries using faker.

::: code

``` craft3
{%- set faker = craft.sproutImport.faker -%}
[
{%- for i in 0..99 %}
  {
    "@model": "barrelstrength\\sproutforms\\integrations\\sproutimport\\elements\\Entry",
    "attributes": {
      "formId": 42,
      "ipAddress": "{{ random([faker.ipv4,faker.ipv6]) }}",
      "userAgent": "{{ faker.userAgent }}",
      "dateCreated": "{{ faker.dateTimeBetween('-2 years', 'now')|date('Y-m-d h:m:s') }}",
      "dateUpdated": "{{ faker.dateTimeBetween('-2 years', 'now')|date('Y-m-d h:m:s') }}"
    },
    "content": {
      "title": "{{ faker.text(42) }}",
      "fields": {
        "fullName": "{{ faker.text(42) }}",
        "email": "{{ faker.email }}",
        "message": "{{ faker.text(42) }}"
      }
    }
  }{% if not loop.last %},{% endif %}
{%- endfor -%}
]
```

``` craft2
{%- set faker = craft.sproutImport.faker -%}
[
{%- for i in 0..99 %}
  {
    "@model": "SproutForms_Entry",
    "attributes": {
      "formId": 42,
      "ipAddress": "{{ random([faker.ipv4,faker.ipv6]) }}",
      "userAgent": "{{ faker.userAgent }}",
      "dateCreated": "{{ faker.dateTimeBetween('-2 years', 'now')|date('Y-m-d h:m:s') }}",
      "dateUpdated": "{{ faker.dateTimeBetween('-2 years', 'now')|date('Y-m-d h:m:s') }}"
    },
    "content": {
      "title": "{{ faker.text(42) }}",
      "fields": {
        "fullName": "{{ faker.text(42) }}",
        "email": "{{ faker.email }}",
        "message": "{{ faker.text(42) }}"
      }
    }
  }{% if not loop.last %},{% endif %}
{%- endfor -%}
]
```

:::
