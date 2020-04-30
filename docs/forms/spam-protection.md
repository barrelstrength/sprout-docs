---
date: 2018-06-25
description: The Spam Protection settings give admins tools to configure how to redirect users, save spam entries in the database, generate spam reports, and configure and create custom Captchas to provide additional layers of validation.
---

# Spam Protection

Sprout Forms provides several methods to manage Spam. The Spam Protection settings give admins tools to configure how to redirect users, save spam entries in the database, generate spam reports, and configure and create custom Captchas to provide additional layers of validation.

### How it works 

1. If field validation errors exist on a submitted entry, it will be redirected back to the form. Spam redirect rules are only processed if no field validation errors exist. 
2. If no field validation errors exist and an enabled Captcha flags an entry as Spam, the Entry will be assigned the 'Spam' status.
3. If Saving Spam Entries to the database is enabled, it is saved to the database along with any Failed Captcha error messages.
4. The user will be redirected as normal to the thank you page or be sent back to the form based on the 'Spam Redirect Behavior' setting 

### Spam Status

When submitted Entries are marked as Spam, they will be saved to the database with the _Spam_ status. The Entries listing page does not display Spam Entries when viewing the All Entries and Form-specific Entries sources.

To view Spam Entries you can select the _Spam_ source in the sidebar or generate a _Spam Log Report_ on the Reports tab. Spam Entries will list the _Failed Captcha_ methods that caused an Entry to be marked as spam and the _Spam Log Report_ can give a broad overview of what types of Captchas are being triggered the most.

To update one or more Entries to be marked as _Spam_ or vice versa use the Element Actions:

- **Mark as Spam** - Marks one or more entries with the Spam status
- **Mark as Default Status** - Marks one or more entries with the Default Status defined in the Entry Statuses settings

### Captchas

Captchas can be enabled in the global settings to establish criteria that form submitters are required to meet. Captchas are enabled by default for individual forms but there is a setting to enable or disable Captchas on any particular form. While several Captchas can be enabled on the Global level, Forms only have a single setting to toggle whether those Captchas are used on a given Form.

Failed Captcha error messages will be logged to the DB and appear in the sidebar when editing an individual Spam Entry. Captcha error messages are not treated as field validation errors and will not display by default in your templates. If you wish to display the Captcha errors in your templates you can create custom Form Templates retrieve them via the `formHandle.getCaptchaErrors()` method.