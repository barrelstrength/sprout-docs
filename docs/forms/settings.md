# Settings

## Redirects

Sprout Forms allows you to set a redirect for your Form in the Form Settings or in the template.

``` twig
<form method="post" action="" accept-charset="UTF-8">

    <input type="hidden" name="action" value="sproutForms/entries/saveEntry">
    <input type="hidden" name="handle" value="contact">
    <input type="hidden" name="redirect" value="contact?message=thankyou">

    {# All of your fields here #}

    <input type="submit" value="Submit">

</form>
```

Your redirect value can be an absolute URL, relative URL, or use an environmentVariable. 

### Example redirect values:

- /thank-you
- thank-you
- ?message=success
- thank-you?message=success
- {siteUrl}
- http://website.com/thank-you