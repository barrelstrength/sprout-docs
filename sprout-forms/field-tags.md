If you need more control over your forms, you can start outputting your fields one by one.  The `displayField()` tag handles inline error messages for you and retains any submitted values if a form doesn't validate.

The field tag is handy when we might be able to use the default output for most of our fields, but may need to specifically customize one field in HTML.

``` twig 
<form method="post" action="" accept-charset="UTF-8">
  
  {{ getCsrfInput() }}

  {# Required: Our Sprout Forms action will always be sproutForms/entries/saveEntry #}
  <input type="hidden" name="action" value="sproutForms/entries/saveEntry">

  {# Required: The handle tells our form where to send our data #}
  <input type="hidden" name="handle" value="contact">

  {# Optional: 
    The page/url to which the user should be redirected upon form submission
    By default, the user will be redirected back to the same page. #}
  <input type="hidden" name="redirect" value="contact?message=thankyou">
  
  {# Output individual fields using the displayField() tag 
     The displayField tag requires the Form Handle and Field Handle #}

  {{ craft.sproutForms.displayField('contact.fullName') }}
  
  {{ craft.sproutForms.displayField('contact.email') }}

  {{ craft.sproutForms.displayField('contact.message') }}
		   			
  <p><input type="submit" value="Submit"></p>

</form>