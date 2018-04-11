## Sending a Welcome Email Notification to New Users

Create a Notification with two custom fields:

1. **htmlBody** (rich text)
2. **textBody** (plain text)

Sets up a template for the HTML and Text versions of the notification email:

**_emails/notification.html**
``` twig
<body>{{ email.htmlBody }}</body>
```

**_emails/notification.txt**
``` twig
{{ email.textBody }}
```

Create the new notification and add the appropriate sender info. The notification Rules will be setup to trigger "When a new user is created". 

In the *Recipients* field we'll send the email to the new users email address. When the notification is triggered, the User Model is provided as the dynamic notification object and we can reference the email address using the field name `{email}`.

In the `htmlBody` and `textBody` fields, we can also refer to the user.  This time we will use the `firstName` field (and should be sure to require the First Name field when a user is filling out their account info).

``` twig
Hello {firstName},

We are so happy that you created an account.  

Carpe diem!
```

When a new user named George is created, the notification will be sent to his email address and the notification email will be customized with his name:

``` twig
Hello George,

We are so happy that you created an account.  

Carpe diem!
```