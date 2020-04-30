---
date: 2018-06-25
description: To allow a user to upload a file from the front-end, all you need to do is add an Assets field to your form.
---

# Front-end File Uploads

To allow a user to upload a file from the front-end, all you need to do is add an Assets field to your form. If you output your form using the `displayForm` tag, validation and error handling will be setup for you.

## Notifications

### Asset URLs

When notifications are enabled, by default, Sprout Forms will send a notification that includes the file name that has been uploaded. To send notifications that include a direct link to your file, you can enable Template Overrides or use [Sprout Email](../email). Your Email Templates code might look something like this:

``` twig
{% set resume = object.resumeAssetFieldHandle.first() %}

Resume: {{ resume.getUrl() }}
```

### File Attachments

To send all submitted files as file attachments via a notification email you can `Enable File Attachments` in your Form's Notification settings.

## Template Overrides

If you need to build a custom form with file-uploads, make sure your Form tag is set up to handle files using `enctype="multipart/form-data"`. Here is a very simple example of a form with a single file upload field:

``` twig
<form method="post" action="" accept-charset="UTF-8" enctype="multipart/form-data">
  {{ csrfInput() }}
  <input type="hidden" name="action" value="sprout-forms/entries/save-entry">
  <input type="hidden" name="handle" value="contact">
  {{ redirectInput("contact?message=thankyou") }}
  
  <input type="file" name="fields[assetFieldHandle]">

  <p><input type="submit" value="Submit"></p>

</form>
```
