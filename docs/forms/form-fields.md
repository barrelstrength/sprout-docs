# Form Fields

Sprout Forms includes over 20 Form Fields and can be extended to add additional [Custom Form Fields](./custom-form-fields.md). Available Form Fields appear in the sidebar while editing a Form and one or more instances of a Form Field can be dragged to the Field Layout.

Below is a list of each default Form Field.

## Default Fields
 
### Standard Fields

- Single Line
- Paragraph
- Multiple Choice
- Dropdown
- Checkboxes
- Number
- File Upload
- Section Heading

### Special Fields

- Name
- Email
- Email Dropdown
- Phone
- URL
- Opt-in
- Custom HTML
- Private Notes
- Multi-Select
- Hidden
- Invisible
- Regex

### Relations Fields

- Categories
- Entries
- Tags

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
 