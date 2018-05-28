# Front-end File Uploads

## Allow user to upload files via a form

To allow a user to upload a file from the front-end, all you need to do is add an Assets field to your form. If you output your form using the `displayForm`, `displayTab`, or `displayField` tags, validation and error handling will be setup for you.

## Notifications

When notifications are enabled, by default, Sprout Forms will send a notification that includes the file name that has been uploaded. To send notifications that include a direct link to your file, you can enable Template Overrides or use [Sprout Email]({entry:29:url}). Your Sprout Email Notification template code might look something like this:

``` twig
{% set resume = object.resumeAssetFieldHandle.first() %}

Resume: {{ resume.getUrl() }}
```

### Notifications with File Attachments

To send all submitted files as file attachments via a notification email you can `Enable File Attachments` in your Form's Notification settings. For additional control, consider Template Overrides or using Sprout Email.

## File-uploads and custom forms

If you need to build a custom form with file-uploads, make sure your Form tag is updated to handle files using `enctype="multipart/form-data"`. Here is a very simple example of a form with a single file upload field:

``` twig
<form method="post" action="" accept-charset="UTF-8" enctype="multipart/form-data">
  {{ getCsrfInput() }}
  <input type="hidden" name="action" value="sproutForms/entries/saveEntry">
  <input type="hidden" name="handle" value="contact">
  <input type="hidden" name="redirect" value="contact?message=thankyou">
  
  <input type="file" name="fields[assetFieldHandle]">

  <p><input type="submit" value="Submit"></p>

</form>
```