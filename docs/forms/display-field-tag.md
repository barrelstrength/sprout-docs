# displayFieldsTag

Display your fields and field errors with a single line using the `displayField` tag.

### Craft 3

The `displayField` tag accepts a Form Model, Field Model, and optional rendering options.

``` twig
{% set layoutFields = tab.getFields() %}

{% for field in layoutFields -%}
    {{ craft.sproutForms.displayField(form, field, renderingOptions) }}
{% endfor %}
```

### Craft 2

The `displayField` tag will display a single field when referenced by the form handle and field handle.

``` twig
{{ craft.sproutForms.displayField('contact.email') }}
```

The `displayField` tag supports several native field types and any additional custom fields that have added front-end field support.