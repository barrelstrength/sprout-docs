---
date: 2023-02-19
description: The Email Dropdown field allows a user to select a spam-protected Email Address from a dropdown list and trigger a notification to that email address.
---

# Email Dropdown Field

The Email Dropdown field allows a user to select a spam-protected Email Address from a dropdown list and trigger a notification to that email address.

![Sprout Forms Email Dropdown Field](./images/fields/email-dropdown-field-settings.png)

Setup your Email Dropdown Field just like you would setup up a Dropdown field. The only difference is in how the values of the Email Dropdown field gets output on the page. When Sprout Forms displays your Email Dropdown field in the browser, the Email Dropdown field will mask the email addresses in your settings so they cannot be harvested for spam or seen by the public.

![Email Dropdown Field doesn't display email addresses in your template code](./images/fields/email-select-code.png)

After the Email Dropdown field is submitted, the selected email will be unmasked and can be used to trigger dynamic Email Notifications.

## Notification Emails

Once you have setup your Email Dropdown Field and assigned it to a Form, you can setup a Notification Email to be sent to the selected email address when your form is submitted. Add your Email Dropdown field handle `{emailDropdownFieldHandle}` in the Recipients setting of a Notification Email and select the Event _When a Sprout Forms Entry is saved_ along with the appropriate settings to target your specific form.

![Send dynamic emails with Email Dropdown Field and Sprout Forms](./images/fields/email-select-sprout-email.png)

## Multiple Email Addresses

If you would like to add multiple email addresses to an option, separate each email address with a comma:

```
email1@website.com, email2.website.com
```
