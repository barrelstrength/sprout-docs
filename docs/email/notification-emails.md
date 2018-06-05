# Notification Emails

Notifications Email Elements give you the power to manage your email notifications in a central location alongside your content in Craft CMS.

## Default Setup

### Craft 3

Notification Emails are created with a simple Body field and can immediately used to send triggered emails using the [Default Email Template](./default-email-templates.md).

To add a custom Field Layout, select 'Edit Field Layout' from the Save button dropdown.

::: tip
Adding custom fields to your Email will require that you also create [Email Templates](./default-email-templates.md) that work with those fields. 
:::

### Craft 2

Creating a new Notification Email requires two steps:

1. Define the Notification Email: You can create a new notification email and define it's Entry Template and Custom Field Layout in `Sprout Email->Settings (Gear Icon)->Notifications->New Notification`

2. Create the Notification Email: Once you have a notification email defined, you can add your content, set your sender and recipients, and set your rule that triggers the email in the Notification Entry.

#### Define the Notification Email

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

## Email Settings

Notification Emails have several required settings:

### Sender

Set the From Name, From Email, and Reply To Email.

### Recipients

Add a comma-separated lists of recipients who you'd like to receive the email.  See the Dynamic Notifications doc page for more information on sending notifications to dynamic recipients like the person who submitted an Entry or completed a Form.

Additionally, you can create a Recipient List and send to a list of people.  See the Recipient Lists doc page for more information on Recipient Lists.

### Events

Events allow you to choose what Notification Event will trigger a Notification Email and customize the Notification Event settings.

Each time your selected Event happens and your Notification Event settings pass validation, a Notification Email will be sent out to the defined Recipients.

### File Attachments
   
File Attachments can be enabled in the Notification Email's Event settings. When File Attachments are enabled, Sprout Email will attach any files that are submitted to the Notification using the Craft Assets field or Sprout Forms File Upload field.

::: warning
Large file attachments may cause Email Notifications to end up in spam filters or not be sent at all. Alternatively, consider sending Notification Emails with a link to the assets you wish to share.
:::

## Notification Events

Sprout Email supports several common Notification Events. For more specific scenarios, developers can add support for [Custom Notification Events](./custom-notification-events.md).

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