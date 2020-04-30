---
date: 2018-06-25
description: Sprout Email supports several common Notification Events. For more specific scenarios, developers can add support for Custom Notification Events.
---

# Notification Events

Sprout Email supports several common Notification Events. For more specific scenarios, developers can add support for [Custom Notification Events](./custom-notification-events.md).

## Settings

Each Notification Events has unique settings for admins to configure how emails get triggered.

### Send Rule

All Notification Events have a Send Rule setting that defaults to _Always_, meaning that by default the event will always trigger an email when the conditions defined in the Notification Event settings are met.

The Send Rule can be configured to a custom pattern. For example, the 'When a new entry is saved' Event allows you to trigger an email when an Entry is saved in a given Section. However, the default settings do not allow you to be more specific if, say, you only want to trigger an email when a specific Entry Type is saved. The Send Rule setting can help you further configure the 'When a new entry is saved' event to only send an email when a specific Entry Type is saved using the Send Rule custom pattern:

``` twig
{{ object.getType().handle == 'entryTypeHandle' }}
```

In this case, `object` refers to the Entry that is being saved. And we have added a rule that says only trigger the email if the Entry Type matches a specific Entry Type.

Here is an example of a Send Rule that will only trigger an email if a particular checkbox is selected:

``` twig
{{ object.checkboxFieldHandle.getOptions()[0].selected == true }}
```

If you've got lots of logic, you can set the Send Rule to a Twig Template and use all the space you need in your template. Just be sure to make the full template resolve to '1', 'true', 'on', or 'yes'. If none of those conditions are met, the Event will not get triggered.

``` twig
{% include '_email/send-rule-logic' %}
```


##

### Craft

| Event                              | Event Object  |
|:---------------------------------- |:---------------- |
| When a new entry is created        | Entry |
| When an existing entry is updated  | Entry |
| When a new user is created         | User |
| When a existing user is updated    | User |
| When a user is activated           | User |
| When a user is deleted             | User |
| When a user logs in                | User |

### Craft Commerce

| Event                              |  Event Object |
|:---------------------------------- |:---------------- |
| When a Craft Commerce order is completed      | Commerce Order |
| When a Craft Commerce order status is changed | Commerce Order, Commerce OrderHistory |
| When a Craft Commerce transaction is saved    | Commerce Transaction |

### Sprout Plugins

| Event                              |  Event Object |
|:---------------------------------- |:---------------- |
| When a Sprout Form Entry is submitted      | Form Entry |


::: tip
If you need a Custom Notification Event, we are available for hire.

Contact us: [sprout@barrelstrengthdesign.com](mailto:sprout@barrelstrengthdesign.com)
::: 