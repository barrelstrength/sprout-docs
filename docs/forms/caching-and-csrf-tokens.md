# Caching & CSRF Tokens

Many websites take steps to improve performance by caching web pages. However, be mindful when caching pages with Forms. Forms depend on a CSRF token for security. This CSRF token is required to be unique each time a form is submitted so you do not want to cache it.

You can avoid this issue by dynamically loading the CSRF token or excluding the pages on your website with forms from being cached.

## Blitz Plugin

If using Blitz for static caching, you will need to update your Form Templates to dynamically load the CSRF token. Blitz provides a tag for you to do this: 

``` twig
{{ craft.blitz.csrfInput() }}
```
 
 