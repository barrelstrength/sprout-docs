Sprout Email allows you to create Email Campaigns in Craft CMS. You can choose to send your Campaigns via several different Email Service Providers.

- **MailChimp** - Send your email campaigns via MailChimp
- **Campaign Monitor** - Send your email campaigns via Campaign Monitor
- **Copy/Paste** - Copy and paste your email campaigns to better (or worse) places

_We will be improving documentation for Mailers as we get our plugins upgraded to Craft 3. If you have any questions or need any help with a custom mailer implementation, please don't hesitate to drop us a note._

## Campaigns

To get started with marketing emails:

1. Create a new Campaign: `Settings->Campaigns`
2. Select your Mailer and other settings
3. Design and build your email templates

## Email Templates

Sprout Email has a single setting for your Entry Template, but this translates into two files: an HTML file and a Text file. While your users will only receive one email, emails can be delivered via HTML or Text and these two files allow you to prepare both versions of the email that are required for sending.

Templates for a notification email may be as so:

- _emails/notification.html
- _emails/notification.txt

Email templates behave just like your Craft templates. These templates, however, will be sent via email so be sure to comply with email best practices. Party like it's 1999.

## Mailers

### MailChimp

To build a campaign that will be sent with MailChimp, go to `Sprout Email->Settings` and follow the instructions to connect your plugin to MailChimp.

Select `Create a Campaign`, fill out the required details about the Campaign and be sure to choose `MailChimp` from the _'How would you like to send this email'_ dropdown field.

Your _Subscriber Lists_ will appear on the `Recipients` tab.

Save your Campaign, and all entries from your Campaign should now appear on the Campaign Tab as well as the ability to preview the HTML and Text versions of your emails.  

When you are ready to send a Campaign, select `Export` and your Campaign will be imported into MailChimp to review and send.

### Campaign Monitor

To build a campaign that will be sent with Campaign Monitor, go to `Sprout Email->Settings` and follow the instructions to connect your plugin to Campaign Monitor.

Select `Create a Campaign`, fill out the required details about the Campaign and be sure to choose `Campaign Monitor` from the _'How would you like to send this email'_ dropdown field.

Your _Subscriber Lists_ will appear on the `Recipients` tab.

Save your Campaign, and all entries from your Campaign should now appear on the Campaign Tab as well as the ability to preview the HTML and Text versions of your emails.  

When you are ready to send a Campaign, select `Export` and your Campaign will be imported into Campaign Monitor to review and send.

_Note: Campaign Monitor will only import your email templates if they are in a web accessible location. You will receive an error if you try to export your campaign to Campaign Monitor from your local computer._

### Copy/Paste

The Copy/Paste Mailer is for situations where you want to use Craft to build your emails, but you will be using a different system to send your emails.

Setting up a Copy/Paste Campaign is similar to setting up other campaigns, but it doesn't require any settings about who you will be sending to or via what platform.  When your email is ready, you will have the option to Copy the HTML and Text output and Paste it wherever your heart desires.

Copy/Paste templates also come with some additional behavior. You can set two templates for your Copy/Paste emails. The first is the template that you would like to use to preview your email within Craft.  This template gives allows you to review the email as it should look in it's final form.  The second template can be the same, but can also be a separate template.  The second template is used for what you want to Copy/Paste to another system.  This is useful as some other systems require that you add a header and footer, but have an open ended WYSIWYG where you copy the body of your email template.

For example, your Copy/Paste template settings and templates may work like this:

**Entry Template** 

_emails/email-wrapper

``` twig
<!DOCTYPE html>
<html>
<head>
	<title>Email Title</title>
</head>
<body>

	{% include '_emails/email-body' %}

</body>
</html>
```

**Entry Copy/Paste Template**

_emails/email-body

``` twig
{% for block in email.matrixFieldHandle %}

	{% if block.type == 'heading' %}
		{{ block.heading }}
	{% endif %}

	{% if block.type == 'body' %}
		{{ block.body }}
	{% endif %}

{% endfor %}
```