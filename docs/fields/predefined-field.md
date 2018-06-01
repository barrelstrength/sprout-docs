# Predefined Field

The Predefined Field allows you parse Twig and define the value of your field ahead of time. This can be useful to help optimize queries or prepare data for a specific use case before it is needed.

The Predefined Field is not editable.

## Settings

Define the value you want using the **Field Format** setting when you create your field. The Field Format setting can parse Twig and process values from the element being saved. 

The Field Format setting accepts Craft object syntax using the `object` variable to reference the current Element being saved:

``` twig
{{ object.title }}
{{ object.customField }}
{{ object.customField.first().id }}
```

And shorthand syntax:

``` twig
{title}
{customField}
{customField.first().id}
```

### Matrix Field Usage

Matrix Blocks are Elements too. If you use a Predefined Field within a matrix block, the `object` available to the Predefined Field is a `MatrixBlockModel` and any custom fields available in the Matrix Block:

``` twig
{{ object.type }}
{type}
```

To reference the parent Element of the Matrix Block, you can use the `owner` property:

``` twig
{{ object.owner.title }}
{{ object.owner.customField }}
{{ object.owner.customField.first().id }}
```

Or shorthand:

``` twig
{owner.title}
{owner.customField}
{owner.customField.first().id}
```

## Availability

| Craft Version | Available |
|:------------- |:---------:|
| Craft 3       | **✓** |
| Craft 2       | **✗** |