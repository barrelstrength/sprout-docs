# Form Fields

Sprout Forms includes over 20 Form Fields and can be extended to add additional [Custom Form Fields](./custom-form-fields.md). Available Form Fields appear in the sidebar while editing a Form and one or more instances of a Form Field can be dragged to the Field Layout.

Below is a list of each default Form Field. Some fields are exclusive to Sprout Forms as Front-end Form Fields and other Fields are both Front-end Form Fields and can also be used via Sprout Fields as custom Fields within Craft field layouts as well. For this reason, usage of some of these fields is documented here in the Sprout Forms documentation and other fields may be documented in the Sprout Fields documentation.

## Default Fields
 
### Standard Fields

| Sprout Forms | Sprout Fields | Craft CMS |
|:------------ |:------------- |:--------- |
| Single Line | – | Plain Text |
| Paragraph | – | Plain Text |
| Multiple Choice | – | Radio Buttons |
| Dropdown | – | Dropdown |
| Checkboxes | – | Checkboxes |
| Number | – | Number |
| File Upload | – | Assets |
| Section Heading | – | – |

### Special Fields

|Sprout Forms | Sprout Fields | Craft CMS |
|:----------- |:------------- |:--------- |
| Name | [Name](/fields/name-field.md) | – |
| [Opt-in](./opt-in-field.md) | – | – |
| Email | [Email](/fields/email-field.md) | Email |
| [Email Dropdown](./email-dropdown-field.md) | – | – |
| URL | [URL](/fields/url-field.md) | URL |
| Phone | [Phone](/fields/phone-field.md) | Phone |
| Address | [Address](/fields/address-field.md) | – |
| Date/Time | – | Date/Time |
| – | [Gender](/fields/gender-field.md) | – |
| Custom HTML | [Notes](/fields/notes-field.md) | – |
| Private Notes | – | – |
| Multi-Select | – | Multi-select |
| Regex | [Regular Expression](/fields/regular-expression-field.md) | – |
| [Hidden](./hidden-field.md) | [Predefined](/fields/predefined-field.md) | – |
| [Invisible](./invisible-field.md) | [Predefined](/fields/predefined-field.md) | – |

### Relations Fields

| Sprout Forms | Sprout Fields | Craft CMS |
|:------------ |:------------- |:--------- |
| Categories | – | Categories |
| Entries | – | Entries |
| Tags | – | Tags |

## Field Settings

Each individual Form Field can provide settings that are unique to that Form Field to manage the field's output and validation. Some Field Settings are standardized by Sprout Forms and available to each field. These include the settings:

- Required
- Name
- Handle
- Instructions
- CSS Classes
- Section

### Required Fields

**Front-end Validation**: Fields that are marked as required will output the `required` attribute on their respective input fields. Browsers that support constraint validation will prevent the web form from being submitted if a required field doesn't have a value.

**Server-side Validation**: Required fields that are submitted without a value will cause form submission to fail and return a user to the form. An error will be added to the active Form Element for each field that fails to validate.
 