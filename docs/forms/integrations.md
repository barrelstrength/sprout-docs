# Integrations

Integrations allow you to submit your forms to custom, third-party endpoints and to create Elements within Craft CMS. Use Sprout Forms' powerful front-end form templating and validation and submit your data anywhere you'd like.   

As Integrations may require additional configuration and training for content authors, the feature is disabled by default. Enable Integrations via `Settings->Advanced->Enable Integrations`.

The Form submission workflow is as follows:

- Form Entry is submitted
- Form Entry is validated
    - If invalid, errors are returned to template
    - If success, and 'Save data to the Craft database' is enabled, save Form Entry
- Integrations get processed on the after save event: `barrelstrength\sproutforms\elements\Entry::EVENT_AFTER_SAVE`
- Integration success and failure responses are logged to the database
- The Event `Integration::EVENT_AFTER_SAVE` is raised and can be configured to send a Notification 
    - If 'Save data to the Craft database' setting is enabled, responses will be visible in the sidebar of the submitted Entry   
    - If 'Save data to the Craft database' setting is disabled, responses can be viewed via a report
    
## Default Integrations

Two Integrations are included:

| Integration | Description |
|:----------- |:----------- |
| Entry Element | Map your form data to an existing channel in Craft to create an Entry Element when a form is submitted |
| Custom Endpoint | Submit your form data to a custom endpoint |

### Entry Element

The Entry Element Integration allows you to map a Form's fields to an Entry Element and set it's author to a default author or the current logged in user. 

### Custom Endpoint

The Custom Endpoint Integration allows you to map your Form Fields to the name of the field values that you want to send to your third-party endpoint.

The [Hidden Field](../fields/hidden-field.md) and [Invisible Field](../fields/invisible-field.md) allow you to setup form fields with pre-filled values such as API Keys, tracking data, and other information that you may want to capture but not want to be publicly visible in your form.

## Multiple Integrations

Multiple integrations can be added to a Form. When one or more integrations are setup, they are processed after a valid Form Entry is submitted in the order they appear in the Form settings. Integrations can fail, and Sprout Forms provides a way for you to view the responses from each integration and receive notifications if any integrations don't behave as expected.  

## Payload Forwarding

::: warning Integrations API vs Payload Forwarding
The **Integrations** API was added in Sprout Forms v3.0.0. Prior to Sprout Forms v3.0.0, a simple implementation of the Custom Endpoint Integration was included with the plugin and named Payload Forwarding.

We recommend users upgrade to the latest version of Sprout Forms and use the Custom Endpoint Integration moving forward. The docs below are provided as a reference for older websites still using Craft 2 or beta versions of Sprout Forms on Craft 3.  
:::

Setting up Payload Forwarding requires a few things:

1. Establish a location outside of Sprout Forms that is ready to receive your data
2. Update the `Custom Submit URL` Setting in your forms Advanced settings tab to point to the location you wish to send your data
3. Make sure that all fields you have created have the appropriate handles to be received properly by your custom endpoint

When a user submits your form, instead of capturing that form submission with Craft, Sprout Forms will send the submitted form data to your preferred destination.

The "Payload" is all of the custom fields that are associated with your form. Sprout Forms will strip out information like the Form name and handle and other form-specific meta data.