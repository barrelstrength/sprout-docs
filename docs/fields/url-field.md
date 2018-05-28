# URL Field

**_Note: The Link Field has be renamed to the URL Field in Craft 3._**

The URL field allows you to require a valid URL using Craft and Sprout Forms front-end Fields.

## URL Field Type

![Sprout URL Field]({asset:2267:url})

When a URL is recognized, a `Visit URL` icon appears on the right side of the input field. You can test the URL in the field by opening it in a new window.

## Sprout Forms Field

The URL field works with Sprout Forms and will be output dynamically along with all supported front-end fields.

Sprout URL Field supports HTML5 client-side validation including the `required` attribute, the `url` input type, and custom validation patterns and error messages.

## Validation

**Default**

For the URL field to validate, your input must begin with `http://`, `https://`, or `ftp://`; have some number of characters followed by a period  `.`, and then some other number of characters. Query strings are permitted after the initial period.  

_Note: The default link validation is not meant to catch every link that is invalid, only reduce the chances that invalid emails are caused by small typos._

**Custom Validation and Error Messages**

If you have more specific URL validation needs, you can select the _Links for this field have their own validation pattern_ setting and provide a custom **Validation Pattern** and **Error Message**.  Custom Validation Patterns support regular expressions and will be added as the pattern="" attribute on the front-end url `input` field.

Below are a few regular expressions for common services. These types of patterns may help enforce that a URL submitted is associated with a specific domain. You can adjust them to meet your specific needs or create your own patterns. These are only provided as examples to help get you started:

- ^https://www.facebook.com/(.*)
- ^https://www.linkedin.com/(.*)
- ^https://www.pinterest.com/(.*)
- ^https://twitter.com/(.*)

## Templates

Display your URL field value in your templates:

``` twig
{# URL #}
{{ entry.urlField }}
```