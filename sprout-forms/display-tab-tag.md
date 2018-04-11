Display all of the fields and the field errors from one of your Form's tabs with a single line using the `displayTab` tag.

### Craft 3

The `displayTab` tag will display all fields in a tab directly via the form model, tab ID, and optional rendering options.

``` twig
{% for tab in form.getFieldLayout().getTabs() %}
    {{ craft.sproutForms.displayTab(form, tab.id, renderingOptions) }}
{% endfor %}
```

### Craft 2

The `displayTab` tag will display all fields in a tab directly via the form handle and tab handle.

``` twig
{{ craft.sproutForms.displayTab('contact.tab1') }}
```

Your tab handle is the lowercase name of your tab with all spaces removed.  Some examples:

```
Tab Name             Tab Handle
----------           ----------
Tab 1                tab1
Section One          sectionone
Personal Questions   personalquestions
```