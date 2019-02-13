# Submission Limit

If you want to disable your form after a certain number of submissions, conditionally display your form based on the entry count.
  
::: code

``` twig Craft 3
{% set totalEntries = craft.sproutForms.entries.formHandle('contact').count() %}

{# Use a specific number or a dynamic value like globalSet.submissionLimit #}
{% if totalEntries > 49 %}
    Try again next time!
{% else %}
    {{ craft.sproutForms.displayForm('contact') }}
{% endif %}
```

``` twig Craft 2
{% set totalEntries = craft.sproutForms.entries.formHandle('contact').total() %}

{# Use a specific number or a dynamic value like globalSet.submissionLimit #}
{% if totalEntries > 49 %}
    Try again next time!
{% else %}
    {{ craft.sproutForms.displayForm('contact') }}
{% endif %}
```

:::
 