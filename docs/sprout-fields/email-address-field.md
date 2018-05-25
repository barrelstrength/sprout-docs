The Email Address field allows you to require a valid email address using Craft and Sprout Forms front-end Fields.

## Email Address Field Type

![Sprout Email Field]({asset:5222:url})

When an email address is recognized, a _Send Email_ icon appears at the right hand side of an Email Address field.  If you click on the _Send Email_ link, your computer will open your primary mail program and populate the `to:` field with your email address.

## Sprout Forms Field

The Email Address field works with Sprout Forms and will be output dynamically along with all supported front-end fields.

Email Address supports HTML5 client-side validation including the `required` attribute, the `email` input type, and custom validation patterns and error messages.

## Validation

**Default**

The Email Address field is valid when your input has no spaces, an at sign `@`, and a period `.` followed by any number of characters.  

_Note: The default email validation is not meant to catch every email that is invalid, only reduce the chances that invalid emails are caused by small typos._

**Custom Validation and Error Messages**

If you have more specific email validation needs, you can select the _Email Addresses for this field have their own validation pattern_ setting and provide a custom **Validation Pattern** and **Error Message**.  Custom Validation Patterns support regular expressions and will be added as the pattern="" attribute on the front-end email `input` field.

**Require email address to be unique**

Enable the _Require email address to be unique_ option if you want to ensure that an email address can only be used once.  Duplicate emails using the same field will be considered invalid. Unique emails are only considered on a per-field basis.  If you create multiple Email Address fields with the _Require email address to be unique_ option, similar emails can be used across the different fields, but not for data using the same email field.

One use case where this might be handy is if you are running a contest and have a landing page form where you only want each person (identified by email address) to be able to submit one entry.

## Templates

``` twig
{# Email Field #}
{{ entry.emailField }}
```