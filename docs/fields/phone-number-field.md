# Phone Number Field

**_Note: The Phone Field has been reinvented for Craft 3 and will support more extensive International validation. Due to these updates, your data will be migrated to use a Plain Text field in Craft 3 and you can migrate to or use the new Phone Field in Craft 3 as appropriate._**

The Phone Number Field Type helps you manage valid international phone numbers with a custom Phone Field.

When a phone number is recognized, a _Phone_ icon appears at the right hand side of the phone field.  If you click on the _Phone_ link, your computer will open your primary phone program to initiate a call.

## Craft 3

The Phone Number Field Type for Craft 3 helps parse, format, and validate phone numbers for all countries and regions of the world. 

The field is powered by Google's international phone number library `libphonenumber`.

![Sprout Phone Field]({asset:5224:url})

## Craft 2

The Phone Number field for Craft 2 allows you to require a valid phone number pattern using Craft and Sprout Forms front-end Fields.

![Sprout Phone Field]({asset:2266:url})

In the Control Panel, the Phone Field optionally supports masking which allows the user to see (as they type) the pattern of the required phone number format.

## Sprout Forms Field

The Phone Number Field works with Sprout Forms and will be output dynamically along with all supported front-end fields.

Sprout Phone Field supports HTML5 client-side validation including the `required` attribute, the `phone` input type, and custom validation patterns and error messages.

## Validation

**Default**

For the phone field to validate, your input must match the number mask in your settings. By default, the mask is set to `###-###-####`.

**Custom Validation and Error Messages**

If you have more specific Phone Number validation needs, you can select the _Phone Numbers for this field have their own validation pattern_ setting and provide a custom **Validation Pattern** and **Error Message**.  Custom Validation Patterns support regular expressions and will be added as the pattern="" attribute on the front-end phone `input` field.