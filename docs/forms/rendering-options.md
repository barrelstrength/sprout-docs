# Rendering Options

Rendering options allow you to customize form and field output without having to override the templates. If your needs go beyond the supported rendering options, see [Template Overrides](./template-overrides.md).

Rendering options can be passed as a twig object to the `displayForm()` or `displayField()` tags.

``` twig
{% set options = {
    "id": "my-form"
} %}

{{ craft.sproutForms.displayForm("formHandle", options) }}

```

## Options

Sprout Forms and Sprout Fields support the following rendering options. Any custom fields that extend the Sprout Fields API should make an effort to support these settings as well.

### Form tag options

The following options will modify the `<form>` tag.

| Option  | Type     | Default                     | Description                                                             |
|---------|----------|-------------------|---------------------------------------------------------------|
| `id`    | `string` | `formHandle-form` | The id to assign to the form tag                              |
| `class` | `string` | `formHandle-form` | A space-separated list of classes to apply to the form tag    |
| `errorClass` | `string` | `errors` | A space separated list of classes to apply to the form tag when errors are found |

### Field wrapper and input tag options

The following options will modify the `<input>` field and the wrapper `<div>` and related tags that surround each `<input>` field. (See the `displayField()` example below.)

| Option  | Type     | Default                     | Description                                                             |
|---------|----------|-----------------------------|-------------------------------------------------------|
| `id`    | `string` | `fieldHandle-field`  | The id to assign to the input tag                            |
| `class` | `string` | `fieldHandle-field` | A space separated list of classes to apply to the input tag     |
| `errorClass` | `string` | `errors` | A space separated list of classes to apply to theinput tag when errors are found |
| `data` | `{}` | | An object (associative array) of data attributes to set on the form or input tag

## Examples

### displayField()

The `displayField()` method accepts rendering options for the field only and all options are passed as top level key/value pairs.

```twig
{# Prepare our options #}
{% set options = {
    "id": "my-field",	
    "class": "my-fancy-class",
    "errorClass": "field-has-error",
    "data": {
        "hidden": "false",
    }
} %}

{{ craft.sproutForms.displayField("formHandle.fieldHandle", options) }}
```

```twig
{# The above settings output: #}
<div id="fields-my-field" class="field plaintext field my-fancy-class required field-has-error">
	<div class="heading">
		<label for="fields-fieldHandle">Field Name</label>
	</div>
	<div class="input">
		<input type="text" id="fields-my-field" class="field my-fancy-class" name="fields[fieldHandle]" required data-hidden="false" />
	</div>
</div>
```

### displayForm()

The `displayForm()` accepts rendering options for the form tag and input fields. To provide rendering options for your fields, you must create a `fields` object and use the field handle to identify the fields that the containing rendering options should be applied to.

```twig
{% set options = {
    "id": "myform",
    "class": "form-class form-class-customized",
    "errorClass": "form-has-error",
    "fields": {
        "fieldHandle": {
            "id": "myfield",
            "class": "my-fancy-class",
            "errorClass": "field-has-error",
            "data": {
                "hidden": "false",
            }
        }
    }
} %}

{{ craft.sproutForms.displayForm("formHandle", options) }}

```

```twig
{# The above settings output: #}
<form method="post" id="myform" class="form-class form-class-customized form-has-error">

      {# The output of the displayField() tag above would display here. #}

</form>
```