If you would like to display errors at the top of your page, you can access those errors in the `form.getErrors()` method.

If your form submission does not validate, your page will reload with a variable that uses the same name as your form handle.  If you form handle is `contact` your errors will be available to you via `contact.getErrors()`.

You can display error messaging at the top of your page in several ways. 

## Display a global error message

``` twig
{% if contact is defined and contact.getErrors()|length %}
	Oh no! Errors.
{% endif %}
```

Your FormModel will only be defined if your form submission fails, so you'll need to ensure your FormModel is available before you check for errors by checking `if contact is defined`.  If the FormModel exists, you can then test if there are any errors by checking to see if the errors array has any items: `contact.getErrors()|length`.

## Loop through all error messages at the top of your form

To display all errors at the top of your form, you'll need to loop through your error object.  Your error object is two levels deep.  At the top level, is an array of the fields that have errors and within each field in the array is a list of errors associated with that field.

``` twig
{% if contact is defined and contact.getErrors() | length %}
	{% for errors in contact.getErrors() %}
		<ul class="errors">
			{% for error in errors %}
				<li>{{ error }}</li>
			{% endfor %}
		</ul>
	{% endfor %}
{% endif %}
```

## Access errors with dynamic form handles

If you are dynamically displaying a form on the page (perhaps via a Forms Relations field), you may not know the name of the form variable to use in the template. To access the error you will need to pass your entire FormModel to Twig's [attribute](http://twig.sensiolabs.org/doc/functions/attribute.html) tag along with the method that you want

``` twig
{# Identify your SproutForms_FormModel #}
{% set form = entry.formFieldHandle.first() %}

{# Use the `attribute` tag to access the `getErrors()` method #}
{% if form is defined and attribute(form, 'getErrors')|length %}
	Errors!
{% endif %}
```