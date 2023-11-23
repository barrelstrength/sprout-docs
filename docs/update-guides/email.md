---
date: 2023-09-25
description: Sprout Email update guide.
---

# Email

## 4.44.444 - September 5, 2023

The Transactional Email Module manages Sprout's core notification email functionality and in this major release adds significant features such as Audiences, Email Types, and the Notification Event Condition Builder.

::: tip
Please reach out and request a [coaching session](../support/training.md) if you have any questions about how to use these new features or deal with any parts of the manual migration.
:::

### Breaking Changes

This release includes a number of potentially breaking changes including configuring email permissions using Email Types; using the new Notification Event Condition Builder to define event rules; and more flexible handling of custom variables in your email templates.

Review the following notes carefully as you may need to take manual steps after updating to ensure your emails are configured as intended.

### Email Types

Email Templates have been refactored into Email Types, giving you the ability to customize your email workflows in much greater detail. When a new email is created, a content author must now select which Email Type they wish to create.

Beyond email templates, Email Types can also be configured with custom fields, field layouts, and mailer settings.

#### Review all migrated Email Types

In Craft 3, Email Template settings only stored the template path of the email template for a given email and these paths could be managed in two places:

1. Globally
2. On an per-email basis

In Craft 4, Email Types are more advanced so, in some cases, settings for the Email Types created in the migration use default settings. Also, things like the Email Type name may not end up being too user friendly as they are based on the template path (i.e. "_Custom Templates \_email/path_"). In the migration, each unique combination of From Name, From Email, and Email Template found creates a new Email Type.

After the migration, we recommend reviewing all Email Type settings to ensure they match your needs.

### Mailers

Mailers now allow users to customize Sender and Reply To settings and manage the Mailers tab field layout. Mailer Settings are assigned to Email Types and this facilitates managing permissions between Email Type and Sender requirements.

#### Review all migrated Mailer Settings

In Craft 3, any author could use Environment variables in the From Name, From Email, and Reply-To fields when creating an email.

In Craft 4, environment variables can only be used in Mailer Settings editable by the admin and the parsed values will populate the settings available to the email author when editing an email. Mailer Settings values are validated against the approved Sender addresses before sending.

Three different settings configurations are available:

- Craft Mail Settings
- Editable Defaults
- Approved Sender List

In the migration, we check if you've used environment variables in your email settings. If so, and if those settings match the Craft default settings, we set your default Mailer to the Craft Mailer Settings option. If they don't match, we migrate them to the Editable Defaults option.

### Notification Event Condition Builder

Notification Events have been refactored to use Craft's powerful and extensible Condition Builder. Authors can now manage notifications using Craft's familiar condition builder UI, the same UI used for conditional field logic and customizing element sources.

We recommend you review all Notification Event settings and test your notifications after upgrade.

While we've tried to migrate all settings correctly, there were a few instances (noted below) where we had to make a judgement call, and the Condition Builder can now handle much more advanced use cases with Drafts, Revisions, and Sites logic and you should test and and confirm your Transactional email are being sent as intended.

Below we review a few situations where you may need to manually update your settings:

### Site IDs, Drafts, and Revisions are better supported

In Craft 3, Notification Events needed to provide their own settings to have an opinion on Sites, Drafts, and Revisions

In Craft 4, the Condition Builder defaults to assuming you want to send emails for ALL sites and all scenarios when an Element is being triggered, including Drafts and Revisions.

The default events handle some of these scenario. For example, the new "When an entry is created" event assumes you only want to trigger an email when a canonical entry is saved and not when it's drafts or revision are saved. It also assumes you only want to trigger a notification once, watching `Element::EVENT_AFTER_PROPAGATE`. However, if you have a custom event that watches `Element::EVENT_AFTER_SAVE`, the event may not trigger multiple times unless you restrict it to a single site or update the Event it's watching to ensure it only triggers once during the save request.

#### When New and When Updated Element Events are now separate

In Craft 3, the "When an Entry is Saved" Notification Event allowed you to select if the notification was sent "When New", "When Updated", or both.

In Craft 4, this single event has become two events: "When an entry is created" and "When an entry is updated". In the case you had a Transactional Email that had both "When New" and "When updated" selected, you will now need to create a second Transactional Email to trigger an email for both scenarios.

The same is true for the "When a user is saved" Notification Event. If you have a Transactional Email with both the "When New" and "When Updated" scenarios selected, only one will get migrated and you'll have to create the second email manually after the migration.

#### On Save User Event handles Admin users differently

In Craft 3, the "When a user is saved" Notification Event allowed you to select if you wanted to include "Admins" as a User Group. Admins are not a default User Group in Craft and with the new Condition Builder must be handled separately.

If your Transactional Email was only being sent to Admins, we can migrate that correctly. Or if it was only sent to User Groups, that should be migrated correctly as well. But if you had both checked, you'll need to manually create a new Transactional Email to handle the Admins use case after the migration.

#### Send Method is retired. All emails will be sent as Lists.

In Craft 3, you could select the "Send Method" for an email, which gave you the option to send emails to each person on the list individually, or to alternatively send a single email to everyone.

In Craft 4, we've retired this setting and all emails will be sent to each person on the list individually.

#### Send Rules have been migrated to use Twig Expression Condition Rule

In Craft 3, the "Send Rule" setting allowed you to use a Twig Expression to limit when your email was sent to only when the event triggered matched your Twig Expression.

In Craft 4, this setting has been moved and is now available as the "Twig Expression" Condition Rule in the Condition Builder.

_Note: The Twig Expression Condition Rule is also available wherever you see the Condition Builder in Craft, however it can only be used for Element Match behavior, such as with Conditional Field Layout Logic, and it will not work to modify an Element Query, such as with Element Sources and Search filtering. We've reached out to Craft with a feature request to help us limit where this appears to only the Condition Builder scenarios where it works._

### Custom Notification Events

Custom Notification Events will need to be updated. See the base class `BarrelStrength\Sprout\transactional\notificationevents\NotificationEvent` for details and review the Sprout Notification Events for examples under `BarrelStrength\Sprout\transactional\components\notificationevents\...`

A few things you'll need to update:

Event Object method can now return any variables they want instead of just an `object` variable:

- `NotificationEvent::getEventObject()` => `NotificationEvent::getEventVariables()`
- `NotificationEvent::getMockEventObject()` => `NotificationEvent::getMockEventVariables()`

Element-based Notification Events can lean on two helper classes to implement the Condition Builder:

- `BarrelStrength\Sprout\transactional\notificationevents\ElementEventInterface`
- `BarrelStrength\Sprout\transactional\notificationevents\ElementEventTrait`

Any conditional logic that the Condition Builder can't handle should probably take place in the `NotificationEvent::matchNotificationEvent()` method. If this logic takes precedence over any other Condition Builder rules, you can hide rules you don't want to appear by implementing `ElementEventInterface::getExclusiveQueryParams()`.

Reach out if you have any additional questions. A lot has changed here and these features are now leaning on a lot of more recent Craft 4 functionality that isn't widely documented.

#### Mailer settings columns have been changed to a JSON column

Any custom email queries that touch these fields will need to now target the JSON blob stored in the `sprout_email.mailerInstructionsSettings` column:

- `sprout_email.fromName` => `sprout_email.mailerInstructionsSettings.fromName`
- `sprout_email.fromEmail` => `sprout_email.mailerInstructionsSettings.fromEmail`
- `sprout_email.replyToEmail` => `sprout_email.mailerInstructionsSettings.replyToEmail`
- `sprout_email.recipients` => `sprout_email.mailerInstructionsSettings.recipients`

### Audiences

Sprout Lists has been retired as a general list management plugin and Subscriber and Mailing List specific features have been rolled into Sprout's Mailer module. The Audience Element along with it's Audience Type establish the ruleset around how a given Audience is defined and managed.

#### Subscribers are now Craft Users

In Craft 3, the Sprout Lists Subscriber list included a Subscriber Element and allowed you to sync Subscribers with the Craft User Element.

In Craft 4, the Subscriber Element has been retired and Subscribers now default to non-credentialed Craft Users. Enabling the Subscriber List Audience Type adds layer on top of Craft Users which includes a Subscriber Lists field, Subscriber List Audience Type, and Subscriber List sources in the sources sidebar of the Users Element Index page.

The only lists that will be migrated into Audiences are User Lists, where the Element ID referenced is a `craft\elements\User`. Any other uses of Lists need to be manually migrated. See the next section for some additional thoughts.

Subscriber Lists now support settings around which User Statuses will trigger emails so be sure to review any Subscriber Lists and make sure that the settings fit your needs.

#### Use the Data Set Audience Type for unconventional uses of Lists

As of the initial release, there is no upgrade path for migrating non-User Element Lists so you'll want to prepare a migration of any data in this category ahead of upgrading to Sprout.

The Sprout Lists plugin was a general purpose list plugin and allowed too much flexibility in allowing any Element to be defined as a List, often creating the potential for redundant data in place of just using a custom query and creating too many edge cases to support.

Sprout, moving forward will only be handling Mailing List use cases so any other lists should probably find a different upgrade path. Data Studio may provide you additional ways to query data that can be used in list-like ways.

The recommended approach for non-standard User-focused lists is to create a Custom Query Data Set that defines a query to retrieve the relevant data from your old list tables and use that to create a new Audience using the Data Set Audience Type. The Data Set Audience Type integration with Sprout's Data Studio module gives you the ability to create Audiences from custom queries, from wherever you manage your data.

For any front-end code allowing users to subscribe or unsubscribe from lists, see the new [Audiences](../audiences) documentation for details on how to update your Twig code.

### Framework

- See the general [upgrade guide][#400-framework] for Sprout Modules to 4.0

[#400-framework]: ../update-guides/sprout.md