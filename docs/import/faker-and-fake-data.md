# Generating Fake Data

The Seed tab in Sprout Import provides and easy way to generate certain types of fake content. If you wish to customize your fake content with more control, you can create a custom import template using Faker to fit your needs.

Sprout Import includes a `faker` variable which gives you the power of Faker in your Twig templates. [Faker](https://github.com/fzaninotto/Faker) is a PHP library that generates fake data. 

Faker can be accessed in your templates by creating a `faker` variable:

``` twig
{%- set faker = craft.sproutImport.faker -%}
```

The Faker documentation has several [examples of the data types it supports](https://github.com/fzaninotto/Faker#formatters). It's very comprehensive and will allow you to generate and customize fake data such as Names, Emails, Phone Numbers, Dates, Paragraphs of Text, User Agents, Payment Info, and more.

## Entries

In this example, we'll create 100 fake entries using faker. The entries will be generated in a Craft template and you can download the JSON file that is created and use Sprout Import to import it into Craft as seed data when you are done. 

::: code

``` twig Craft 3
{%- set faker = craft.sproutImport.faker -%}
{%- set paragraphs = "<p>" ~ faker.paragraphs(5)|join('</p><p>')|raw ~ "</p>" -%}
[
{%- for i in 0..99 %}
  {
    "@model": "barrelstrength\\sproutbase\\app\\import\\importers\\elements\\Entry",
    "attributes": {
      "sectionId": 2,
      "typeId": 2,
      "authorId": 1,
      "slug": "{{ faker.slug }}",
      "postDate": "{{ faker.dateTimeBetween('-2 years', 'now')|date('Y-m-d h:m:s') }}",
      "expiryDate": null,
      "enabled": true
    },
    "content": {
      "title": "{{ faker.text(40) }}",
      "fields": {
        "body": "{{ paragraphs|raw }}",
        "categories": {{ random(["[4, 5]", "[4, 5, 6]", "[4]", "[6]", "[]"]) }}
      }
    }
  }{% if not loop.last %},{% endif %}
{%- endfor -%}
]
```

``` twig Craft 2
{%- set faker = craft.sproutImport.faker -%}
{%- set paragraphs = "<p>" ~ faker.paragraphs(5)|join('</p><p>')|raw ~ "</p>" -%}
[
{%- for i in 0..99 %}
  {
    "@model": "EntryModel",
    "attributes": {
      "sectionId": 2,
      "typeId": 2,
      "authorId": 1,
      "slug": "{{ faker.slug }}",
      "postDate": "{{ faker.dateTimeBetween('-2 years', 'now')|date('Y-m-d h:m:s') }}",
      "expiryDate": null,
      "enabled": true
    },
    "content": {
      "title": "{{ faker.text(40) }}",
      "fields": {
        "body": "{{ paragraphs|raw }}",
        "categories": {{ random(["[4, 5]", "[4, 5, 6]", "[4]", "[6]", "[]"]) }}
      }
    }
  }{% if not loop.last %},{% endif %}
{%- endfor -%}
]
```

:::

## Users

In this example, we'll create 100 fake users using faker. 

::: code

``` twig Craft 3
{%- set faker = craft.sproutImport.faker -%}
[
{%- for i in 0..99 %}
  {
    "@model": "barrelstrength\\sproutbase\\app\\import\\importers\\elements\\User",
    "attributes": {
      "username": "{{ faker.username }}",
      "firstName": "{{ faker.firstName }}",
      "lastName": "{{ faker.lastName }}",
      "email": "{{ faker.email }}",
      "preferredLocale": "en_us",
      "pending": {{ random([0,0,0,0,1]) }},
      "lastLoginDate": "{{ faker.dateTimeBetween('-2 years', 'now')|date('Y-m-d h:m:s') }}"
    }
  }{% if not loop.last %},{% endif %}
{%- endfor -%}
```

``` twig Craft 2
{%- set faker = craft.sproutImport.faker -%}
[
{%- for i in 0..99 %}
  {
    "@model": "UserModel",
    "attributes": {
      "username": "{{ faker.username }}",
      "firstName": "{{ faker.firstName }}",
      "lastName": "{{ faker.lastName }}",
      "email": "{{ faker.email }}",
      "preferredLocale": "en_us",
      "pending": {{ random([0,0,0,0,1]) }},
      "lastLoginDate": "{{ faker.dateTimeBetween('-2 years', 'now')|date('Y-m-d h:m:s') }}"
    }
  }{% if not loop.last %},{% endif %}
{%- endfor -%}
```
:::

Generating fake data in this way is very flexible. You can customize how many Elements to generate at once and each time you reload the page you will generate a new set of data to work with.