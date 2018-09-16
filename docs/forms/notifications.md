# Notifications

Sprout Forms supports personalized Notification Emails. Notifications in Sprout Forms are powered by Sprout Email [Notification Emails](./../email/notification-emails.md). You can setup and manage any number of Notifications on the Sprout Forms **Notifications** tab.

## Email Templates

Sprout Forms provides a **Basic Notification** Email Template that loops through and displays all default Form Fields.

Learn more about [Email Templates](../email/default-email-templates.md) and how to customize them.  

## Notification Events 

Notifications in Sprout Forms are limited to Sprout Forms [Notification Events](./../email/custom-notification-events.md) which currently include:

- When a Sprout Forms Entry is saved

::: tip
Manage all of your Notification Emails in one place using Sprout Email. Sprout Forms Notifications will appear alongside Notification Emails for Craft, Craft Commerce, and any other Notification Emails you manage in Sprout Email.
:::

## Craft 2

Notifications in Sprout Forms can be setup and managed on each Forms Notifications Tab.

### Personalization

Personalize your Notifications with information from your submitted form using Craft's object syntax. A `SproutForms_EntryModel` is available to the fields in your Notification settings:

- Email Recipients
- Subject
- Sender Name
- Sender Email Address (you probably don't want to use this)
- Reply To Email Address

For example, if you want to send the notification to the person that submitted the form and had a field named `email` in your form, you could set the _Email Recipients` dynamically using shorthand syntax:

```
Recipients: {email}
```

Or full object syntax:

```
Recipients: {{ object.email }}
```

### Custom Notification Templates

To override the default HTML used for the Notification email, see the [Email Template Overrides](../email/template-overrides.md) documentation.

### Advanced Notifications

If you need to send multiple notifications or want additional control over what triggers your Notifications, consider using [Sprout Email](./../email) and Sprout Forms together.

::: warning
Sprout Forms for Craft 2 can only trigger one Notification email. We know this is limitation and it is possible to manage several Notification Emails in Craft 3.

If this is a blocker for you on a Craft 2 site, please reach out and let us know and we'll see if we can help you out.
:::