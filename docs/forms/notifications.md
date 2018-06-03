# Notifications

When a Sprout Form is submitted you can trigger a Notification Email to yourself or the user submitting the form. To do so, enable the Notification from your Forms `Notification` tab and fill in the settings.

## Dynamic Notifications

If you would like to send a notification with information from your submitted form, you can use Craft's object syntax to do so. A `SproutForms_EntryModel` is available to the fields in your Notification settings:

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

## Custom Notification Templates

To override the default HTML used for the Notification email, see the [Template Overrides]({entry:1139:url}) documentation.

## Advanced Notifications

If you need to send multiple notifications or want additional control over what triggers your Notifications, consider using [Sprout Email]({entry:3245:url}) and Sprout Forms together.

_Note: Currently, Sprout Forms can only trigger one Notification email. We know this is limiting and will be relaxing this requirement in Craft 3. If this is a blocker for you on a Craft 2 site, please reach out and let us know and we'll see if we can help you out._

