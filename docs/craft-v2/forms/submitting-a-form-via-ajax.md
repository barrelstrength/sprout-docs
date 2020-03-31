# Submitting a Form via AJAX

To submit a Sprout Form via AJAX, you can do so just as you would any other form.

Display your form on the page: 

``` twig
{{ craft.sproutForms.displayForm('contact') }}
```

We'll use JQuery in our example.

``` html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script type="text/javascript">
	
	// watch the form submit event
	$('#contact-form').submit(function(event) {

		event.preventDefault();
    
		// prepare some variables
		var postUrl = 'sproutForms/entries/saveEntry';
		var formData = $(this).serialize();

		// process the form
		$.ajax({
			type : 'POST',
			url : postUrl,
			data : formData,
			dataType : 'json',
			encode : true
		})
		.done(function(data) {

			// Sprout Forms will give you back a success or error response in JSON
			if (data.success == true)
			{
				console.log('success');
				console.log(data);

				// RESPONSE
				// {success: true}

				// var redirect = $('#contact-form input[name=redirect]').val();
				// $(location).attr('href', redirect);
			}
			else
			{
				console.log('error');
				console.log(data);

				// REPONSE 
				// "errors": {
				// 	"fieldHandle": {
				// 		"message": "Error message"
				// 	}
				// }
			}
		});
	});
</script>
```

_Note: This behavior may require some knowledge of javascript to implement._
