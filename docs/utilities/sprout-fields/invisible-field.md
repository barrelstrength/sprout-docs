**_Note: The Sprout Forms Invisible Field will continue to be available in Craft 3. The Craft Invisible Field is deprecated and will be removed in Craft 3._**

----

The Invisible field behaves just like the Hidden field except for one important difference: the value you set for your Invisible Field never gets output in your front-end templates. This allows you to set and capture a value that your users never see.

Why?! Good question!

Invisible field lets you set Hidden field values that can't be modified by your users. This ensures you get the data you need for any follow up actions or workflows that will take place after a form is submitted. This could include tracking data, important identifying information, or API keys that you need to use if you submit your form data via a Custom Submit URL.

The Invisible field is designed to be used as a Sprout Forms front-end Field.

## Sprout Forms Field

### Settings

**Invisible Field Value**

See the [Hidden field documentation]({entry:1039:url}) for examples on how to set fixed and dynamic values in your Invisible field settings.

**Allow updates**

When viewing a submitted Invisible field value in the Control Panel, by default, the Invisible field value is visible but the field is disabled and un-editable. Enable the _Allow updates_ setting to be able to edit an Invisible field after it is submitted.

**Hide submitted value**

If you want to hide the value of your Invisible field to users in the Control Panel, you can enable the _Hide submitted value_ setting to obscure the submitted value using a password field.

# Validation

Currently, Invisible Field provides no validation.