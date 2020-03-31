# Notification Emails

Notifications Email Elements give you the power to manage your email notifications in a central location alongside your content in Craft CMS.

## Default Setup

Notification Emails are created with a simple Body field and can immediately used to send triggered emails using the [Default Email Template](./default-email-templates.md).

To add a custom Field Layout, select 'Edit Field Layout' from the Save button dropdown.

::: tip
Adding custom fields to your Email will require that you also create [Email Templates](./default-email-templates.md) that work with those fields. 
:::

#### Define the Notification Email

**Notification Name**<br>
What you want to call the Notification internally.

**Entry Template**<br>
For each email, you will want to create an HTML and a Text template.  Both your html and text templates will be determined from the template name you add here.  Do not include a filetype in your name, just the name of the file.

For example, if your Notification Entry Template name is:

``` html
_emails/notification
```

Sprout Email will look for the following two templates in your templates folder. Your email template files must be named `email`.:

```
_emails/notification/_emails/email.twig (.html, etc.)
_emails/notification/_emails/email.txt
```

## Email Settings

Notification Emails have several required settings:

### Sender

Set the From Name, From Email, and Reply To Email.

### Recipients

Add a comma-separated lists of recipients who you'd like to receive the email.  See the Dynamic Notifications doc page for more information on sending notifications to dynamic recipients like the person who submitted an Entry or completed a Form.

Additionally, you can create a [Mailing List](../reports/mailing-lists.md) and send to a list of people. Mailing Lists are a feature provided by Sprout Reports.

### Events

Events allow you to choose what Notification Event will trigger a Notification Email and customize the Notification Event settings.

Each time your selected Event happens and your Notification Event settings pass validation, a Notification Email will be sent out to the defined Recipients.

### File Attachments
   
File Attachments can be enabled in the Notification Email's Event settings. When File Attachments are enabled, Sprout Email will attach any files that are submitted to the Notification using the Craft Assets field or Sprout Forms File Upload field.

::: warning
Large file attachments may cause Email Notifications to end up in spam filters or not be sent at all. Alternatively, consider sending Notification Emails with a link to the assets you wish to share.
:::