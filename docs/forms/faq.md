# FAQ

Frequently asked questions about Sprout Forms.

## I am using the available Captchas but I am still getting SPAM!

Spam strategies are always evolving and sometimes the conventions you use on your website will also need to evolve. The default options provided don't depend on third-party services however, often, third-party services have a larger network of data to work with to provide effective spam prevention measures.

- [Google ReCAPTCHA for Sprout Forms](https://plugins.craftcms.com/sprout-forms-google-recaptcha). If you continue to see spam after implementing ReCAPTCHA with the default settings, there is a setting to increase the security level. 
- Cloudflare offers several [Site Protection Options](https://support.cloudflare.com/hc/en-us/articles/115002059131-Understanding-your-Site-Protection-Options), some of which are free, if you route your DNS through Cloudflare

To better understand your spam traffic, you can enable Spam tracking and Sprout Forms will log all Failed Captcha error messages as well as capture meta information about each submission such as Remote IP Address, Referrer URL, and User Agent. The Spam Log report provides an overview of all of this information that can be used to analyze the data and detect trends.

## How do I validate an Email Address, Phone Number, or URL?

Use the Sprout Forms Email, Phone, and URL fields.

## How do I export my form Entries to CSV?

Sprout Forms for Craft 3 includes a native Sprout Reports integration to create and export reports for Sprout Forms Data Sources without ever needing to install Sprout Reports. Visit the `Sprout Forms -> Reports` tab in Sprout Forms to create reports and export CSVs.

## My form submissions are not working. My submitted form entries never appear in my database. What is broken?

When form submissions never make it to the database, usually something else is blocking them.

Do you have any spam plugins installed? Try disabling them or making their settings less strict.

Are your forms triggering any other events that may be causing errors? Spam filters or email notifications that are failing could affect your form entries from reaching the database.

Check your logs and see if there are any errors:

In your files:

- storage/runtime/logs/web.log

Or in your Control Panel:

- /admin/utils/logs

## My form notification emails are not being sent. Or, my form notification emails are sometimes being sent but behaving erratically.

The most frequent issue that causes notification emails to not be sent or behave erratically is the selected Email Protocol.  By default, this is usually set to PHP Mail.  PHP Mail and Sendmail are often misconfigured on local computers and may be configured in a variety of different ways by hosting providers.  They also do not provide much information to help troubleshoot what might be going wrong.

The first step necessary to better troubleshoot why notifications are not behaving as expected is to update your settings to a proper SMTP Protocol. [Mandrill](https://mandrill.com/) or [MailGun](https://www.mailgun.com/) are good options and MailGun has a free plan which allows you to send up to 10,000 emails a month, if cost is a concern.  Once you are sending email via Mandrill and MailGun, they also can provide more information on what is happening to your email after it is being sent.

Another decent option to troubleshoot with is Gmail. While Gmail doesn't provide as much information on how emails are behaving after they are sent, and can sometimes behave in unintuitive ways if you are sending and receiving from the same Gmail address, it is more reliable than PHP Mail and Sendmail and most people have a Gmail account.