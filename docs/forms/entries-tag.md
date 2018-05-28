# Entries Tag

You can fetch form Entries using the [same options you have for all Elements](http://buildwithcraft.com/docs/templating/elementcriteriamodel) as described in the Craft documentation.

Here are a few examples.  

## Craft 2

### Get all Form Entries from the Contact Form

``` twig
{% for formEntry in craft.sproutForms.entries.formHandle('contact') %}

	{{ formEntry.title }}

{% endfor %}
```

### Get the first 3 Form Entries from the Contact Form 

``` twig
{% for formEntry in craft.sproutForms.entries.formHandle('contact').limit(3).order('dateCreated asc') %}

	{{ formEntry.title }}

{% endfor %}
```

### Get the latest Form Entry from the Contact Form

``` twig
{% set formEntry = craft.sproutForms.entries.formHandle('contact').last() %}

{{ formEntry.title }}
```

### Output the total number of Form Entries from the Contact Form

``` twig
{{ craft.sproutForms.entries.formHandle('contact').total() }}
```

### Output Entries with a specific status by Status ID or by Status Handle

``` twig
{% for formEntry in craft.sproutForms.entries.formHandle('contact').statusId(2) %}
  {{ formEntry.title }}
{% endfor %}

{% for formEntry in craft.sproutForms.entries.formHandle('contact').statusHandle('pending') %}
  {{ formEntry.title }}
{% endfor %}
````
