---
date: 2023-02-19
description: Sending an email can touch several different services so it can be tricky to diagnose just where something is going wrong.
---

# Troubleshooting FAQ

Sending an email can touch several different services so it can be tricky to diagnose just where something is going wrong. To get more familiar with the topic, see Craft's article [Troubleshooting Email Errors](https://craftcms.com/guides/troubleshooting-email-errors) or hear a discussion of several common issues in this Straight Up Craft hangout [Troubleshooting Email Errors Hangout](https://straightupcraft.com/events/troubleshooting-email-errors).

To diagnose an email issue, consider each step in the email process. Simplify your tests to try to rule out other issues and confirm each step is working as expected until you can confirm what is going wrong. Email configuration for a custom Craft CMS website can include:

- Server configuration
- Email Service Provider
- DNS settings
- Craft CMS
- Sprout Email
- Email Content
- Email Template
- Recipient Firewall
- Recipient Email Client

_Below is not meant to be a comprehensive list of steps to diagnose an email issue but a list of things you may want to consider, ask, or explore along the way._

## Server configuration

Is the web server capable of sending emails? If so, which protocol does it use? PHP Mail and Sendmail are notoriously unreliable so you probably want to configure a third party service and proper SMTP server to send email to improve your changes at troubleshooting this level.

## Email Service Provider

Many Email Service Providers have a free tier that is sufficient for most small websites. Mailgun and Sparkpost are reasonable places to start and there are many others. If you are on AWS, SES is an easy option.

Has your Email Service Provider been configured correctly? Often these services have tools that can confirm if your DNS appears to be configured correctly.

## DNS settings

Are the DNS settings for the domain the email is being sent configured correctly? This includes getting DKIM and SPF records setup that help your email get recognized as legitimate and avoid the spam bin.

## Craft CMS

Are the Email settings in Craft configured correctly? Double check you have the right info. Send a Test email to yourself from Craft's Email settings page to confirm that is working.

## Craft Plugins

Are there any additional settings that need to be set? This might include settings that integrate with a third-party API like Mailchimp or Sendgrid or the default From Address that will be used to send your emails.

Make sure the From Address being used when sending your email matches the website domain that you are sending from. In some cases, if the From Address is different than the sending domain an email will be considered a higher risk and may trigger more spam filters.

## Email Content

Make sure your content is respectable. Salesy titles may trigger spam filters so make sure you are sending all caps or using trigger words in your titles: "FREE CASH $$$!!!". If your email includes images, consider how large they are. If your email is really long, some email clients might truncate it after a certain number of HTML characters if you are using tons of tables for layouts.

If your content uses dynamic variables or logic they may cause the template to render incorrectly. Consider simplifying them to plain text, sending a test, and then adding them back one by one to diagnose which one may be causing the issue.

## Email Template

Are the email templates rendering correctly? If you are using Sprout Email's default setup, the default Email Template is quite simple and template issues would more likely be caused by the content discussed above. If you are using custom Email Templates, simplify the Email Templates to just include a simple word or two in plain text and send a test. If that works, add back your more complex template logic part by part until you diagnose what part of the template may be causing the issue.

Take a look in your Craft logs files. They may reveal more about what is going on.

## Recipient Firewall

Sprout Email's Sent Email feature reports if an email was sent from Craft successfully. While a Sent Email Element can indicate success, that doesn't mean your email got delivered, it just means your email successfully got handed off by Craft to the next service. Email Service Providers often provide additional metrics on if an email was successfully routed. And, even though an Email Service Provider may report that your email has been sent successfully through its service, it does not mean your email made it to it's destination.

Who is receiving the email? Does their organization have any business rules in their firewall or email configuration that may be filtering the email or labeling it as spam? Larger companies are more likely to have stricter rules in place in their firewall that may affect deliverability. Your behavior when testing emails can look suspicious but an IT department should be able to help you get whitelisted when needed.

## Recipient Email Client

What program is the recipient using to receive the email? Do they have any settings in place that may affect receiving the email? The last place to lose an email is in the recipients inbox itself. Some emails get filtered as spam, other people are just busy and archive an email before they realize it was your test email. If you've made it this far, follow up with your recipients and see what you can learn. Consider sending a test to a personal address instead of a business address to help diagnose where the issue may be arising.
