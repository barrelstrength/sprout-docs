# Notes Field

The Notes Field is a Matrix-style, information-only field for Craft CMS that allows you to add supplementary information to a Field Layout.

![Notes Field](./../images/fields/sprout-notes-field-output.png)

## Custom Styles

To add custom styles, create a new CSS file with your styles in the `config/sproutnotes` folder.

The name of your CSS file will display in the _Style_ dropdown of your Notes field settings. For example, if you name your file `Zebra Stripes.css` the option _Zebra Stripes_ will appear in your Style settings dropdown.

Field styles depend on dynamic field names so your classes will need to include the `FIELDHANDLE` placeholder in order for Sprout Fields to swap out the placeholder with the right Field ID for your styles to display properly.

See our Default CSS styles for an example and use your browsers Inspect Code feature to explore how these styles are applied to your Notes field.

``` twig
.field[id=fields-FIELDHANDLE-field] {
    background-color: #fafafa;
    border: 1px solid #e3e5e8;
    padding: 0;
    border-radius: 5px;
}
.field[id=fields-FIELDHANDLE-field] .heading {
    background: #ebedef;
    padding: 7px 14px 7px;
    margin: 0;
}
.field[id=fields-FIELDHANDLE-field] .input {
    padding: 7px 14px 14px;
}
.field[id=fields-FIELDHANDLE-field] label {
    color: #576575;
    cursor: pointer;
    display: block;
    font-size: 1em;
    font-weight: bold;
    padding-right: 100px;
}
.field[id=fields-FIELDHANDLE-field] ul {
    color: #232323;
    list-style-type: disc;
    margin: 0 0 1em 3em;
}
```

## Availability

| Craft Version | Available |
|:------------- |:---------:|
| Craft 3       | **✓** |
| Craft 2       | **✓** |


See here for documentation on the [Notes Field for Craft 2](./notes-field-c2.md).