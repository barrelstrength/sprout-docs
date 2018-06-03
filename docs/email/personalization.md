# Personalization

In most cases, when you trigger an event there may be some custom data you want to use in your notification.  For example, when an Entry is saved you might want to know who the author was and where you can view the entry, when a form is submitted you may want to include the data from the Form submission in your notification, and when a product is purchased you might want to know which product and by whom.

## Where can dynamic values be used in my notifications?

Sprout Email allows you to use dynamic values just about everywhere. Right now, you can use dynamic values in your Notification:

- Subject line
- From Name
- From Email (you probably don't want to use this)
- Reply To Email
- Recipients
- Custom Fields
- Templates (HTML and Text)

## Using Dynamic Values in your Notification Entry Fields

The available dynamic values will depend on the notification event, however the way you access those values will be the same in each case.  

Let's look at two examples.

**When an Entry is Saved**
If you have a notification setup to send each time an Entry is Saved, when an Entry is saved all the values in that Entry will become available to your Notification Fields.  If you want to let somebody know when a new Entry is posted to your Jobs Section, you can use the following syntax in your Subject Line field:

_New Job: {title}_

In this example, the Entry object gets passed to the template `object.title` and Sprout Email makes all of it's attributes available to you directly using the single curly brace syntax.

**When a Form is Submitted**
In this example let's assume you have an application Form using Sprout Forms and you want to let the applicant know that you received their application.  Your notification is triggered when a Form is submitted, and the On Save Form event makes the submitted Form Entry available to you for your notification.

If you have a field called _applicantEmail_, you could set your Recipients value to `{applicantEmail}` and when the Form is submitted, your notification will be sent to that person with the rest of your message.

If you have a custom Rich Text field in your notification called _emailBody_, and your form had a custom field called _firstName_, you could address your notification recipient by first name using the `{firstName}` value in your Rich Text field.

## Using Dynamic Values in your Notification Templates

In your notification templates you can use any Twig code that you would use elsewhere in your templates. Additionally, Sprout Email Notifications give you access to the Notification Email Object (`entry`) and any Dynamic Object provided by the event (`object`):

``` twig
{# Notification Default Fields #}
{{ email.subjectLine }}<br/>
{{ email.slug }}<br/>
{{ email.status }}<br/>
{{ email.fromName }}<br/>
{{ email.fromEmail }}<br/>
{{ email.replyTo }}<br/>

{# Notification Custom Fields 
   These examples may not work in your project. You will need to
   update these examples to reference custom fields you are using.
------------------------------------------------------------ #}
{{ email.emailBody }}
{{ email.emailBanner.first().getUrl() }}
{{ email.emailFooter }}

{# Dynamic Data
   These examples may not work in your project. The available dynamic
   values depend on the event you have triggered.
------------------------------------------------------------ #}
{{ object.title }}
{{ object.applicantEmail }}
```

Dynamic Objects are defined by the Event.  Here is a short list of what you can expect the `object` variable to be when using dynamic events:

- When a new entry is created (`EntryModel`)
- When a new user is created (`UserModel`)
- When a Sprout Forms Entry is saved (`SproutForms_EntryModel`)