# Settings

Customize the details of your Form fields, templates, and workflows with the following settings.

## General

- **Plugin Name** – Update this setting to rename **Sprout Forms** in your Control Panel.  
- **Default Form Templates** - By default, Sprout Forms uses our simple, base Form Template: _Accessible Templates_. If you would like to customize the base Form Templates used on all of your Forms, select the Form Template you wish to use here or setup [Template Overrides](./template-overrides.md).
- **Save data to the Craft database** - Disable this setting if you don't want to store any form entry data in Craft. To selectively manage which forms save data, enable this setting and manage each individual form's Save Data setting on a per-form basis.
- **Save Spam Data to the database** - Enable this setting to store Entries that are flagged as Spam in the database.
- **Default behavior for saving data** - When a new form is created, the Save Data setting will initially be set to this value.
- **Track Remote IP** - Enable to track the Remote IP Address of the client submitting a Form Entry. The IP address may be considered personal data.
- **Default Section** - The initial sidebar tab to load in Sprout Forms: Forms or Entries.
- **Allow Forms to be edited in front-end templates** - Enable this setting to allow users to edit existing form entries in front-end templates. Enabling this feature may have some workflow or security considerations as forms allow anonymous submissions.

::: warning Front-end Editing
Forms are submitted anonymously by users, so unlike Entries which have Authors, you will need to manage and authenticate any users who are editing your front-end Forms.
:::

## Spam Protection

- **Spam Redirect Behavior** – The behavior your user will see if a submission is flagged as spam. **Redirect as normal** will simulate a successful submission and direct the user to the Redirect Page. **Redirect back to form** will return the user to the form. All failed captchas are logged on the Spam Entries saved in the database.
- **Spam Limit** – The total number of Spam entries that will be stored in the database. When the limit is reached, the least recently updated Spam entry will be deleted from the database.
- **Cleanup Probability** - The probability that the Spam cleanup task will run each time a Form Entry is saved. A lower probability will trigger a cleanup task less often and the number of Spam Entries stored in the database may be higher than the Spam Limit target until the cleanup task is triggered.  

### Captchas

Multiple Captchas are provided by default:

- **Duplicate Submission Captcha** - Prevent duplicate submissions if a user hits submit more than once
- **Javascript Captcha** - Prevent a form from being submmitted if a user does not have JavaScript enabled
- **Honeypot Captcha** - Block form submissions by robots who auto-fill all of your form fields

And allows for additional third-party Captchas:

- [Google Recaptcha for Sprout Forms](https://github.com/barrelstrength/craft-sprout-forms-google-recaptcha)

You can enable or disable each captcha in the global settings or add support for a [Custom Captcha](./custom-captchas.md).

## Entry Statuses

By default, Form Entries default to an **Unread** status and can be updated and marked **Read**. Entries that trigger Captcha errors will be given the **Spam** status. Rename the default statuses or customize additional Entry Statuses to fit your workflows in the settings.

----

## Craft 2

### Enable payload forwarding (Sprout Forms 2)

Enable [Payload Forwarding](./payload-forwarding.md) to use Sprout Forms to build and manage your forms and submit your Forms to a third-party endpoint.