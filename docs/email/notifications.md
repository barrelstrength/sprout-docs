# Notification Emails

Sprout Email allows you to create Email Notifications for Craft CMS.

## Create a New Notification

Creating a new Notification Email requires two steps:

1. Define the Notification Email: You can create a new notification email and define it's Entry Template and Custom Field Layout in `Sprout Email->Settings (Gear Icon)->Notifications->New Notification`

2. Create the Notification Email: Once you have a notification email defined, you can add your content, set your sender and recipients, and set your rule that triggers the email in the Notification Entry.

### Define the Notification Email

**Notification Name**<br>
What you want to call the Notification internally.

**Entry Template**<br>
For each email, you will want to create an HTML and a Text template.  Both your html and text templates will be determined from the template name you add here.  Do not include a filetype in your name, just the name of the file.

For example, if your Notification Entry Template name is:

``` html
_emails/notification
```

Sprout Email will look for the following two templates in your templates folder:

```
templates/_emails/notification.html
templates/_emails/notification.txt
```

### Create the Notification Email

Once you have created your Notification Email, you can edit the Notification just like any other Entry in Craft.

Notifications have some unique settings you will need to fill out:

**Sender**<br>
Set the From Name, From Email, and Reply To Email.

**Recipients**<br>
Add a comma-separated lists of recipients who you'd like to receive the email.  See the Dynamic Notifications doc page for more information on sending notifications to dynamic recipients like the person who submitted an Entry or completed a Form.

Additionally, you can create a Recipient List and send to a list of people.  See the Recipient Lists doc page for more information on Recipient Lists.

**Rules**<br>
Rules allow you to choose what event will trigger your notification.

The _Trigger On_ setting allows you to select the event that will trigger your email.  Each time this event happens, your notification will be sent out to the people listed in the recipient list.

When you select some events, they will present you more options to refine your notification preferences.

For example, if you select the event _Save Entry_, you will be presented with the option to choose which Section your notification applies to. This will allow you to only send notification emails when a new entry is posted to a particular Section.

## Supported Events

**Craft Events**

- When a new entry is created
- When an existing entry is updated
- When a new user is created
- When a existing user is updated
- When a user is activated
- When a user is deleted
- When a user logs in

**Craft Commerce Events**

- When a Craft Commerce order is completed (Commerce_OrderModel)
- When a Craft Commerce order status is changed (Commerce_OrderModel, Commerce_OrderHistoryModel)
- When a Craft Commerce transaction is saved (Commerce_TransactionModel)

**Sprout Plugins**

- When a Sprout Form Entry is submitted
- When a Sprout Commerce Order is completed

_Note: Let us know if you need an event that we don't support yet. We want to support all events that are useful._

## Adding Custom Notification Events

Developers can add notification events to their plugins as well. For now, drop us a note if you are interested in doing so and we will share how to do so.