---
date: 2023-02-19
description: Sent Email Elements capture instances of emails that are sent by Craft. Sent Emails can be used to review Sent Emails, troubleshoot customer support and deliverability issues, and re-send email to your users.
---

# About Sent Email

Sent Email Elements capture instances of emails that are sent by Craft. Sent Emails can be used to review Sent Emails, provide a bit more information for some customer support inquiries, and troubleshoot CMS deliverability issues, and re-send email to your users.

Sent Emails are not a comprehensive solution to tracking email interactions. They are a convenience in some scenarios, and limited in what they can track and by how many can be reasonably stored in the CMS database. 

While Sent Emails may indicate an email has been successfully sent by Craft, this status does not indicate anything about the deliverability of the Sent Emails. To get additional information on whether an email was delivered or bounced, consider using an email service provider such as Mailgun, Sendgrid, or other similar services.

## Resending Emails

Sent Emails create a snapshot of the HTML and Text verions of an email at the time it is sent. When resending an email, the exact same HTML that was used in the initial email is used for the resend.

## Settings

Read the [Config Settings](./../configuration/sprout-config.md) documentation to explore and customize settings.

## Updates

See [update guides](../configuration/updates.md) for the Sent Email and Framework modules.

