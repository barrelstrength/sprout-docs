# Form Fields

...

## Validation

Forms fields can require many different types of validation. Sprout Forms along with Sprout Fields support the most common types of validation out of the box. Additional types of validation can be added via a custom field-type plugin and [Sprout Forms Field support]({entry:1129:url}).

## Required Fields

**Front-end Validation**: Fields that are marked as required will output the `required` attribute on their respective input fields. Browsers that support constraint validation will prevent the web form from being submitted if a required field doesn't have a value.

**Server-side Validation**: Required fields that are submitted without a value will cause form submission to fail and return a user to the form. An error will be added to the active `SproutForms_EntryModel` for each field that fails to validate.

## Field Settings

Each field you create may have additional settings that allow you to add rules to how that field will display or validate. For example, the number field will allow a `min` and `max` value to be set. An Asset Field allows you to set a `limit` to the number of assets and what `type` of assets are allowed to be uploaded.

These settings will affect how a field is validated server-side and may affect how the field's `input` tag is rendered on the front-end on a field-by-field basis.

If these settings don't meet your requirements for a particular field, you may want to consider creating a plugin with a custom Sprout Forms Field integration.

## Custom Fields

For any validation requirements that go beyond the default field settings, you may need to create a plugin with a custom Sprout Forms Field.

Adding support for a new Sprout Forms field is well documented and you can find working examples of this in the Sprout Fields plugin or any of the default Sprout Forms Fields which use the same Field API.

[Sprout Fields]({entry:1035:url}) adds support for several field types:

- Email Field
- Hidden Field
- Invisible Field
- Link Field
- Phone Field

## Front-end validation and custom requirements

In some cases, you may have specific code requirements to help you manage your front-end field validation, or be using a Framework like Foundation or Bootstrap which have specific code conventions to help you provide robust front-end validation for your users.

Enable Custom Template Overrides to take complete control over your form, tab, field, and error templates and update the HTML, CSS, and Javascript that is being dynamically output by Sprout Forms to meet your needs.

## Advanced Validation Requirements

Most validation requirements can probably be solved by creating a new Custom Field or enabling Template Overrides.

In the case that's not enough, reach out and let us know!