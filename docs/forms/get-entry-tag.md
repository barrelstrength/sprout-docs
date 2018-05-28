# getEntry tag

The `getEntry` tag retrieves the `SproutForms_EntryModel` of the active submission. If an active Form Entry doesn't exist, it returns an empty `SproutForms_EntryModel`.

The `getEntry` method is useful if you need to setup your template to manage your Form submission values and errors but you don't know the handle of your Form.  This scenario can arise when you are using the Sprout Forms Relations field to dynamically output a form in your template.


``` twig
{% set submittedEntry = craft.sproutForms.getEntry(form) %}

{% if submittedEntry.getErrors()|length %}

  {# Display All Errors at the top of your page (assumes you have an errorList macro) #}
  {% for errors in submittedEntry.getErrors() %}
    {{ errorList(errors) }}
  {% endfor %}

{% endif %}
```