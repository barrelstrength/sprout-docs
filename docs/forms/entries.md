# Entries

You can fetch form Entries using the [same options you have for all Elements](http://buildwithcraft.com/docs/templating/elementcriteriamodel) as described in the Craft documentation.

## entries 

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

## lastEntry

When a form has been submitted successfully, the user will be redirected to wherever the redirect setting points to.

To display content from the submitted form after the form has been submitted, you can use the `lastEntry()` tag.

``` twig
{# Check for the last entry submitted #}
{% set lastEntry = craft.sproutForms.lastEntry() %}

{% if lastEntry %}
	
	{# If the last entry exists, we can output any of the variables
	   that were present in the form submission. #}
	<p>Thanks <strong>{{ lastEntry.fullName }}</strong>! We'll be in touch soon! Did you know you can display any of the values that were submitted in the form?  Here's a list of all the values in the last form submission:</p>
	
	<p>
		Full Name: <em>{{ lastEntry.fullName }}</em><br/>
		Email: <em>{{ lastEntry.email }}</em><br/>
		Message: <em>{{ lastEntry.message }}</em><br/>
	</p>

{% endif %}
```

## getEntry

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
