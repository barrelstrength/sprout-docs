# Predefined Date Field

The Predefined Date Field allows you parse Twig and define the value of a date ahead of time. This can be useful to help optimize queries or prepare data for a specific use case before it is needed. 

While similar to the [Predefined Field](./predefined-field.md), the Predefined Date Field stores it's value as a Date data type which can be useful when it is necessary to query results by date.

The Predefined Field is not editable.

## Settings

- **Field Format** - The value you want to prepare when the Predefined Field is saved.
- **Show Field** - Enable to display the value you saved in the Field Layout

### Field Format

The Field Format value must resolve to a proper date format:

``` twig
{matrixField.one().startDateField|date('Y-m-d h:m:s')}
```

See [Predefined Field](./predefined-field.md) for general usage.

### Matrix Field Usage

See [Predefined Field](./predefined-field.md) for usage.

::: warning
If you update the Field Format you will need to resave the Field Layout in your Craft Settings to ensure all Entries get re-saved and recalculate the value of your Predefined Field. 
:::

## Availability

| Craft Version | Available |
|:------------- |:---------:|
| Craft 3       | **✓** |
| Craft 2       | **✗** |