# Phone Field

The Phone Number field allows you to require a valid phone number pattern using Craft and Sprout Forms front-end Fields.

![Sprout Phone Field](./../images/fields/sprout-phone-field-c2.gif)

When a phone number is recognized, a _Phone_ icon appears at the right hand side of the phone field.  If you click on the _Phone_ link, your computer will open your primary phone program to initiate a call.

In the Control Panel, the Phone Field optionally supports masking which allows the user to see (as they type) the pattern of the required phone number format.

## Settings

For the phone field to validate, your input must match the number mask in your settings. By default, the mask is set to `###-###-####`.

**Custom Validation and Error Messages**

If you have more specific Phone Number validation needs, you can select the _Phone Numbers for this field have their own validation pattern_ setting and provide a custom **Validation Pattern** and **Error Message**.  Custom Validation Patterns support regular expressions and will be added as the pattern="" attribute on the front-end phone `input` field.