You can use the Sprout Forms field to create a relation between your Form and another element in Craft. On the Entry page where you wish to display your form, the Sprout Forms field will give you access to the complete Form Model.

## Dynamically display a related form using a single line

In this example, your Sprout Forms field is named `entry.formFieldHandle`.  And you can output your form using the [displayForm()](http://sprout.barrelstrengthdesign.com/craft-plugins/forms/docs/templating/craft-sproutforms-displayform) method.

``` twig
{% set formHandle = entry.formFieldHandle.first().handle %}

{{ craft.sproutForms.displayForm( formHandle ) }}
```