# Sent Emails

Sent Email Elements capture instances of emails that are sent by Craft. Sent Emails can be used to review Sent Emails, troubleshoot customer support and deliverability issues, and re-send email to your users.

A Sent Email is created when:

1. Craft sends a system email
2. Sprout Email sends a Notification Email
3. Sprout Email sends a Campaign Email

While Sent Emails may indicate an email has been successfully sent by Craft, this status does no indicate anything about the deliverability of the Sent Emails. To get additional information on whether an email was delivered or bounced, consider using an email service provider such as Mailgun, Sparkpost or other similar services.

::: tip
Our goal is to capture all emails sent by Craft, including emails that failed to send. If you run into a scenario that is not being captured by Sprout Email, [let us know](mailto:sprout@barrelstrengthdesign.com).
:::

## Tracking Info

Sent Emails capture the following info:

- Date Sent
- Subject
- Sender Name
- Sender Email
- Recipient (or List)
- A copy of the HTML Email
- A copy of the Text Email
- Email Type
- Test Email (Y/N)
- Source (i.e. Sprout Email, Craft)
- Source Version (i.e. Sprout Email 1.2.3)
- Craft Version
- IP Address
- User Agent
- Protocol
- Host Name
- Port
- SMTP Secure Transport Type
- Timeout

_Info may vary based on the type of email being captured_

## View Content

Select the "View Content" link to display the HTML and Text versions of the email sent.

## Search

Sent Emails can be searched by:

- Recipient
- Subject