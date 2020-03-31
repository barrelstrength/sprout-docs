# Email Field

The Email Address field allows you to require a valid email address using Craft and Sprout Forms front-end Fields.

![Sprout Email Field](./../images/fields/sprout-email-field.png) 

When an email address is recognized, a _Send Email_ icon appears at the right hand side of an Email Address field.  If you click on the _Send Email_ link, your computer will open your primary mail program and populate the `to:` field with your email address.

## Templates

You can access your Email Field in your templates via it's field handle.

``` twig
{{ entry.emailField }}
```

## Settings

The Email Address field uses PHPs [FILTER_VALIDATE_EMAIL](http://php.net/manual/en/filter.filters.validate.php) which states:

> In general, this validates e-mail addresses against the syntax in RFC 822, with the exceptions that comments and whitespace folding and dotless domain names are not supported.

### Custom Validation and Error Messages

If you have more specific email validation needs, you can select the _Email Addresses for this field have their own validation pattern_ setting and provide a custom **Validation Pattern** and **Error Message**.

### Require email address to be unique

Enable the _Require email address to be unique_ option if you want to ensure that an email address can only be used once.  Duplicate emails using the same field will be considered invalid. Unique emails are only considered on a per-field basis.  If you create multiple Email Address fields with the _Require email address to be unique_ option, similar emails can be used across the different fields, but not for data using the same email field.

One use case where this might be handy is if you are running a contest and have a landing page form where you only want each person (identified by email address) to be able to submit one entry.