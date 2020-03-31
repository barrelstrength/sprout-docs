# Integrations

Integrations allow you to submit your forms to custom, third-party endpoints and to create Elements within Craft CMS. Use Sprout Forms' powerful front-end form templating and validation and submit your data anywhere you'd like.   

## Payload Forwarding

Enable [Payload Forwarding](./payload-forwarding.md) to use Sprout Forms to build and manage your forms and submit your Forms to a third-party endpoint.

Setting up Payload Forwarding requires a few things:

1. Establish a location outside of Sprout Forms that is ready to receive your data
2. Update the `Custom Submit URL` Setting in your forms Advanced settings tab to point to the location you wish to send your data
3. Make sure that all fields you have created have the appropriate handles to be received properly by your custom endpoint

When a user submits your form, instead of capturing that form submission with Craft, Sprout Forms will send the submitted form data to your preferred destination.

The "Payload" is all of the custom fields that are associated with your form. Sprout Forms will strip out information like the Form name and handle and other form-specific meta data.