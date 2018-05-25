# Using Sprout Forms with Sprout Email

Sprout Forms integrates with Sprout Email to handle all of your form notification needs.

- Multiple notification emails
- Branded notification emails
- Personalized notification emails
- Manage all of your email notifications in one place

## Notification Events

Sprout Forms provides the _When a Sprout Forms Entry is saved_ Event which you can use to trigger notification emails from Sprout Email.

When an Event has triggered all values from the submitted Form Entry are available to use to personalize or customize your notification email. The `SproutForms_EntryModel` will be available in your notification email as the variable `object`, and can be referenced in two ways:

1. Craft Object Syntax `{{ object.fieldHandle }}`
2. Shorthand Syntax `{fieldHandle}`

See the [Sprout Email Dynamic Values](https://sprout.barrelstrengthdesign.com/craft-plugins/email/docs/notifications/dynamic-values) doc page for more information.