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