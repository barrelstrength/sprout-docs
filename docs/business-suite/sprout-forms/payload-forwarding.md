Sprout Forms allows you to send all of the fields submitted in a form submission (the Payload) to a custom endpoint (Custom Submit URL).  We call this feature Payload Forwarding.  

The process works almost seamlessly with Sprout Forms. Your forms will still benefit from using custom field layouts, relations fields, field type validation, template overrides, and a familiar workflow around error and thank you messages.

The difference? All your form data gets sent somewhere else (a Custom Submit URL of your choosing) and doesn't get stored in your Craft database.

_Note: Payload Forwarding is an advanced feature and may require technical knowledge and services beyond Craft CMS._

## Setting up Payload Forwarding

Setting up payload forwarding requires a few things:

1. Establish a location outside of Sprout Forms that is ready to receive your data
2. Update the `Custom Submit URL` Setting in your forms Advanced settings tab to point to the location you wish to send your data
3. Make sure that all fields you have created have the appropriate handles to be received properly by your custom endpoint

When a user submits your form, instead of capturing that form submission with Craft, Sprout Forms will send the submitted form data to your preferred destination.

## The Payload

The Payload is all of the custom fields that are associated with your form. Sprout Forms will strip out information like the Form name and handle and other form-specific meta data. If you wish to send any of this information along with your custom field data, you can do so using the Sprout Fields Hidden or Invisible fields.

The [Hidden Field]({entry:1039:url}) and [Invisible Field]({entry:1145:url}) allow you to setup form fields with pre-filled values such as API Keys, tracking data, and other information that you may want to capture but not want to be publicly visible in your form.