# Template Field

The Template Address field allows a user to select a template in your Craft templates folder using an Auto-suggest Field or Dropdown field.

This field should be used sparingly but can be useful for scenarios where independent content or a component may not be managed within Craft but needs to exist on a page within content managed by Craft.

## Templates

The Template field will store a templates path as it relates to the `/templates` folder in your Craft application. For example, the template `/templates/_components/interactive-map` would be stored as `_components/interactive-map` in the Template field.

``` twig
{{ entry.templateField }}
```

Or, more likely:

``` twig
{% include entry.templateField %}
```

## Settings

### Input Style

The field type that will displayed in the field layout to content authors. The Auto-suggest Field displays an open-ended input with search and template hints while a user types. The Dropdown Field displays all available options as a list.

### Suggested Templates

The templates a user will see as hints using the Auto-suggest Field or as options using the Dropdown Field.

- All Templates
- Templates within a specific folder

### limit suggestions to template folder

Limits the Suggested Templates shown to the templates within this folder.

