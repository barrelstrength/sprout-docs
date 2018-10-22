# Settings

Customize the details of your Form fields, templates, and workflows with the following settings.

## General

### Plugin Name

Update this setting to rename **Sprout Forms** in your Control Panel.  

### Default Form Templates

By default, Sprout Forms uses our simple, base Form Template: Accessible Templates. If you would like to customize the base Form Templates used on all of your Forms, select the Form Template you wish to use here or setup [Template Overrides](./template-overrides.md). 

### Enable custom form templates on a per-form basis

If you need multiple base Form Templates for your Forms, you can enable this setting and select the specific Form Template you wish to use on each Form you set up.

### Allow Forms to be edited in front-end templates

Allow users to edit Form Entries on the front-end. See [Editing Entries] for more details.

::: warning Caution
Forms are submitted anonymously by users, so unlike Entries which have Authors, you will need to manage and authenticate any users who are editing your front-end Forms.
:::


## Spam Protection

Sprout Forms ships with three Captchas:

- Duplicate Submission Captcha
- Javascript Captcha
- Honeypot Captcha

And allows for additional third-party Captchas:

- [Google Recaptcha for Sprout Forms](https://github.com/barrelstrength/craft-sprout-forms-google-recaptcha)

You can enable or disable each captcha in the global settings or add support for a [Custom Captcha](./custom-captchas.md).

## Entry Statuses

By default, Form Entries default to an **Unread** status and can be updated and marked **Read**. Customize the available Entry Statuses to fit your workflows.

## Advanced

### Save data from form submissions in the Craft database

If your project has requirements that don't allow you to save data to the Craft database, you can disable all forms from saving data to your database. Forms will still be validated, spam checks will still be run, and Notification Emails will still be sent as defined in your settings.

### Enable Save Data control on a per-form basis

If you only need to stop data from being saved to the database for some of your forms, you can set a default Save Data setting and override that setting on a per-form basis.

### Enable payload forwarding

Enable [Payload Forwarding](./payload-forwarding.md) to use Sprout Forms to build and manage your forms and submit your Forms to a third-party endpoint.