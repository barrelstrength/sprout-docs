# URL Field

The URL field allows you to require a valid URL using Craft and Sprout Forms front-end Fields.

![Sprout URL Field](./../images/fields/example-url-field.gif)

When a URL is recognized, a `Visit URL` icon appears on the right side of the input field. You can test the URL in the field by opening it in a new window.

## Templates

Display your URL field value in your templates:

``` twig
{{ entry.urlField }}
```

## Settings

For the URL field to validate, your input must begin with `http://`, `https://`, or `ftp://`; have some number of characters followed by a period  `.`, and then some other number of characters. Query strings are permitted after the initial period.  

::: warning
The default URL validation is not meant to catch every link that is invalid. The URL Field is designed to reduce the chances that invalid emails are caused by small typos.
:::

**Custom Validation and Error Messages**

If you have more specific URL validation needs, you can select the _Links for this field have their own validation pattern_ setting and provide a custom **Validation Pattern** and **Error Message**.  Custom Validation Patterns support regular expressions.

Below are a few regular expressions for common services. These types of patterns may help enforce that a URL submitted is associated with a specific domain. You can adjust them to meet your specific needs or create your own patterns. These are only provided as examples to help get you started:

| Regular Expression | Notes  |
|:------------------ |:------ |
| ^https://www.facebook.com/(.*) | Match URLs that begin with `https://www.facebook.com/` |
| ^https://www.linkedin.com/(.*) | Match URLs that begin with `https://www.linkedin.com/` |
| ^https://www.pinterest.com/(.*) | Match URLs that begin with `https://www.pinterest.com/` |
| ^https://twitter.com/(.*) | Match URLs that begin with `https://www.twitter.com/` |