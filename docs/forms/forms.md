# Forms


## Templating

### displayForm

Output your form in a single line:

``` twig
{{ craft.sproutForms.displayForm('contactForm') }}
```

The `displayForm` tag supports several included field types and any additional custom fields that have added front-end field support.

### displayTab

Display all of the fields and the field errors from one of your Form's tabs with a single line using the `displayTab` tag.

::: code

``` craft3
{% for tab in form.getFieldLayout().getTabs() %}
    {{ craft.sproutForms.displayTab(form, tab.id, renderingOptions) }}
{% endfor %}
```

``` craft2
{{ craft.sproutForms.displayTab('contact.tab1') }}
```

:::

In Craft 2, your tab handle is the lowercase name of your tab with all spaces removed.  Some examples:

```
Tab Name             Tab Handle
----------           ----------
Tab 1                tab1
Section One          sectionone
Personal Questions   personalquestions
```

### displayField

Display your fields and field errors with a single line using the `displayField` tag.

::: code

``` craft3
{% set layoutFields = tab.getFields() %}

{% for field in layoutFields -%}
    {{ craft.sproutForms.displayField(form, field, renderingOptions) }}
{% endfor %}
```

``` craft2
{{ craft.sproutForms.displayField('contact.email') }}
```

:::

### form

The `form` tag returns a `SproutForms_FormModel` with all your form and custom field information. See our documentation on [Working with a Custom HTML Form]({entry:542:url}) for some examples on how to use the `form` tag.

``` twig
{% set form = craft.sproutForms.form('contact') %}
```

## Captchas

...