---
date: 2023-02-19
description: Rendering options allow you to customize form and field output without having to override the templates.
---

# Rendering Options

Rendering options allow you to customize form and field output without having to override the templates. Rendering options can be passed as a twig object to the `displayForm`, `displayTab` or `displayField` tags.

``` twig
{% set options = {
    id: "my-form"
} %}

{{ sprout.forms.displayForm("formHandle", options) }}
```

Rendering Options may be handy to solve a specific situation, however, can become harder to maintain or reuse across multiple forms.

::: tip Note
For 100% control over your Form Templates, see [Template Overrides](./template-overrides.md).
:::

## Options

Sprout Forms supports the following rendering options.

### Form tag options

The following options will modify the `<form>` tag.

| Option  | Type     | Default                     | Description                                                             |
|---------|----------|-------------------|---------------------------------------------------------------|
| `id`    | `string` | `formHandle-form` | The id to assign to the form tag                              |
| `class` | `string` | `formHandle-form` | A space-separated list of classes to apply to the form tag    |
| `errorClass` | `string` | `errors` | A space separated list of classes to apply to the form tag when errors are found |

### Field wrapper and input tag options

The following options will modify the `<input>` field and the wrapper `<div>` and related tags that surround each `<input>` field. Field-specific options will override global options and be applied to a specific field. Target all fields using the "*" option. (See the example below.)

| Option  | Type     | Default                     | Description                                                             |
|---------|----------|-----------------------------|-------------------------------------------------------|
| `id`    | `string` | `fieldHandle-field`  | The id to assign to the input tag. Not available as a global option. |
| `class` | `string|array` | `fieldHandle-field` | A space separated list of classes to apply to the field container and input element. Optionally, you can pass an array with the keys `container` or `input` to target the field container and field input independently. See example below. |
| `errorClass` | `string` | `errors` | A space separated list of classes to apply to the field container when errors are found. Optionally, you can pass an array with the keys `container` or `input` to target the field container and field input independently. See example below. |
| `data` | `{}` | | An object (associative array) of data attributes to set on the form or input tag

::: tip Custom Fields
Custom Form Fields will need to add support for these options on their own. If you are using Rendering Options with a custom Form Field and they are not behaving as expected, you may need to reach out to the respective plugin developer.
:::

## Examples

### Overriding values via the displayForm tag

The `displayForm()` accepts rendering options for the form tag and input fields. To provide rendering options for your fields, you must create a `fields` object and use the field handle to identify the fields that the containing rendering options should be applied to.

#### Override all fields

```twig
{% set options = {
    id: "my-form",
    class: "form-class form-class-customized",
    errorClass: "form-has-error",
    fields: {
        "*": {
            class: "all-fields-class",
            errorClass: "all-fields-error",
            data: {
                thing: "all-fields-data-attribute"
            }
        }
    }
} %}

{{ sprout.forms.displayForm("formHandle", options) }}
```

#### Rendered HTML

```twig
<form method="post" id="my-form" class="form-class form-class-customized form-has-error">

    {# The example assumes our field is a Single Line field #}
    <div id="fields-fieldHandle-field" class="field singleline all-fields-class all-fields-error required">
        <div class="heading">
            <label for="fields-fieldHandle">Single Line</label>
        </div>
        <div class="input">
            <input type="text" name="fields[fieldHandle]" id="fields-fieldHandle" class="all-fields-class" required="" aria-required="true" data-thing="all-fields-data-attribute">
        </div>
    </div>
</form>

```

#### Target field wrapper and inputs separately

```twig
{% set options = {
    id: "my-form",
    class: "form-class form-class-customized",
    errorClass: "form-has-error",
    fields: {
        "*": {
            class: {
                container: 'field-container-class',
                input: 'field-input-class'
            },
            errorClass: {
                container: 'field-container-error-class',
                input: 'field-input-error-class'
            },
            data: {
                thing: "all-fields-data-attribute"
            }
        }
    }
} %}

{{ sprout.forms.displayForm("formHandle", options) }}
```

#### Rendered HTML

```twig
<form method="post" id="my-form" class="form-class form-class-customized form-has-error">

    {# The example assumes our field is a Single Line field #}
    <div id="fields-fieldHandle-field" class="field singleline field-container-class field-container-error-class required">
        <div class="heading">
            <label for="fields-fieldHandle">Single Line</label>
        </div>
        <div class="input">
            <input type="text" name="fields[fieldHandle]" id="fields-fieldHandle" class="field-input-class field-input-error-class" required="" aria-required="true" data-thing="all-fields-data-attribute">
        </div>   
    </div>

</form>
```

#### Global and specific classes

```twig
{% set options = {
    id: "my-form",
    class: "form-class form-class-customized",
    errorClass: "form-has-error",
    fields: {
        "*": {
            class: {
                container: 'field-container-class',
                input: 'field-input-class'
            },
            errorClass: {
                container: 'field-container-error-class',
                input: 'field-input-error-class'
            },
            data: {
                thing: "all-fields-data-attribute"
            }
        },
        fieldHandle: {
            class: {
                container: 'specific-field-container-class',
                input: 'specific-field-input-class'
            },
            errorClass: {
                input: 'specific-field-input-error-class'
            },
            data: {
                thing: "specific-field-data-attribute",
            }
        }
    }
} %}

{{ sprout.forms.displayForm("formHandle", options) }}
```

#### Rendered HTML

```twig
<form method="post" id="my-form" class="form-class form-class-customized form-has-error">

    {# The example assumes our field is a Single Line field #}
    <div id="fields-fieldHandle-field" class="field singleline field-container-class specific-field-container-class field-container-error-class required">
        <div class="heading">
                <label for="fields-fieldHandle">Single Line</label>
            </div>
        <div class="input">
            <input type="text" name="fields[fieldHandle]" id="fields-fieldHandle" class="field-input-class specific-field-input-class field-input-error-class specific-field-input-error-class" required="" aria-required="true" data-thing="specific-field-data-attribute">
        </div>
    </div>

</form>
```

::: warning Field Prefixes
The ID you specific will be prefixed with `field-`. This prefix is added by the `{% namespace %}` tag in the Form Templates `field.twig` file and also adds the `fields` namespace around the `fieldHandle` on the Form Field input tags (i.e. `name="fields[fieldHandle]"`).
:::
