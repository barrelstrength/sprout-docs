# Thank You Page

For most of your forms, you will want some sort of confirmation page letting the user know that the form was completed successfully.

## Using a query string to display a custom thank you message

Within your form, add a hidden field with the name `redirect`. This line of code will redirect your form on a successful submission to any template you wish:

``` html
<input type="hidden" name="redirect" value="contact?message=thankyou">
```

You can redirect a user to the same template as that you form or a completely different template. You can also pass that template a query string which you can use to conditionally display content in your thank you page template.  In the example above, we are passing the query string `?message=thankyou` and we can use that query string in a conditional statement like so:

``` twig
{% if craft.request.getParam('message') == 'thankyou' %} ... {% endif %}
```

The query string method is the easiest way to setup a thank you page.

## Using a url segment to display a custom thank you message

If you don't want to use a query string for some reason, you can also add a segment to your redirect URL and setup a route.

To use this method you will need to create a redirect value that just uses URL segments:

``` html
<input type="hidden" name="redirect" value="contact/thankyou">
```

By default, when your form redirects, that page won't load properly because Craft doesn't know where to route that URL to yet.

You can setup a route in the Control Panel `Settings->Routes->Create New Route` or in the `craft/config/routes` template.

For our example, if we setup our route in the control panel we would use the following settings to tell Craft to display the `contact` template when a user is redirected to `contact/thankyou`.

URI<br>
**contact/thankyou**

Template<br>
**contact**

Once we've routed the user to the correct template, we can display our thank you message using a conditional statement that tests for our `thankyou` slug in the second segment of the URL:

``` twig
{% if craft.request.getSegment(2) == 'thankyou' %} ... {% endif %}
```