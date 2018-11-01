# Importing Data

Sprout Forms adds support for importing and seeding data to the following Sprout Forms data types:

- Form Elements
- Form Entry Elements
- Form Relations Fields
- Form Entry Relations Fields

## Forms

Define your forms as JSON and import them into any project you'd like. A basic example of the format is below and more advanced form examples are linked after the code example. 

::: code

``` craft3
[
  {
    "@model": "barrelstrength\\sproutforms\\integrations\\sproutimport\\elements\\Form",
    "attributes": {
      "name": "Contact Form",
      "handle": "contact",
      "titleFormat": "{dateCreated|date('Y-m-d')} – {fullName} – {message|slice(0,22)}...",
      "redirectUri": "?message=thank-you",
      "displaySectionTitles": false
    },
    "settings": {
      "fieldLayout": {
        "Section 1": [
          {
            "@model": "barrelstrength\\sproutbase\\app\\import\\importers\\settings\\Field",
            "type": "barrelstrength\\sproutforms\\fields\\formfields\\SectionHeading",
            "name": "Section Heading",
            "handle": "sectionHeading",
            "notes": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "hideLabel": "default",
            "output": "richText"
          },
          {
            "@model": "barrelstrength\\sproutbase\\app\\import\\importers\\settings\\Field",
            "type": "barrelstrength\\sproutforms\\fields\\formfields\\SingleLine",
            "name": "Single Line",
            "handle": "singleLine",
            "instructions": "Example instructions",
            "placeholder": "Example placeholder",
            "charLimit": null,
            "required": true
          }
        ]
      }
    }
  }
]

```

:::

### Additional Examples

- [Form Fields (Basic)](https://github.com/barrelstrength/sprout-docs/blob/master/docs/import/examples/sprout-plugins/settings/SproutForms-BasicFields.json)

## Form Entries

Import real or test Form Entry Elements to Sprout Forms using Sprout Import.

::: code

``` craft3
[
  {
    "@model": "barrelstrength\\sproutforms\\integrations\\sproutimport\\elements\\Entry",
    "attributes": {
      "formId": 711,
      "ipAddress": "127.0.0.1",
      "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.116 Safari/537.36",
      "dateCreated": "2015-08-21 01:08:38",
      "dateUpdated": "2015-10-09 03:10:03"
    },
    "content": {
      "title": "Form Entry Title",
      "fields": { ... }
    }
  }
]
```

``` craft2
[
  {
    "@model": "SproutForms_Entry",
    "attributes": {
      "formId": 711,
      "ipAddress": "127.0.0.1",
      "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.116 Safari/537.36",
      "dateCreated": "2015-08-21 01:08:38",
      "dateUpdated": "2015-10-09 03:10:03"
    },
    "content": {
      "title": "Form Entry Title",
      "fields": { ... }
    }
  }
]
```

:::

### Seeding

#### Seed Tab

On the Sprout Import Seed tab, select **Sprout Forms Entries** as the _Type of Content_ to generate fake Form Entries.


#### Generate custom seed data

If you prefer to have more control over how your fake entries are generated, generate a custom seed file to import manually.

In the example below, we generate 100 fake Form Entries with the help of faker, which is available as avariable when you have Sprout Import installed.

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
