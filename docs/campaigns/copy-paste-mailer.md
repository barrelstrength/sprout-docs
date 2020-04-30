---
date: 2018-06-25
description: 
---

# Copy/Paste Mailer

The Copy/Paste Mailer is for situations where you want to use Craft to build your emails, but you will be using a different system to send your emails.

Setting up a Copy/Paste Campaign is similar to setting up other campaigns, but it doesn't require any settings about who you will be sending to or via what platform.  When your email is ready, you will have the option to Copy the HTML and Text output and Paste it wherever your heart desires.

## Templates

Copy/Paste templates also come with some additional behavior. You can set two templates for your Copy/Paste emails. The first is the template that you would like to use to preview your email within Craft.  This template gives allows you to review the email as it should look in it's final form.  The second template can be the same, but can also be a separate template.  The second template is used for what you want to Copy/Paste to another system.  This is useful as some other systems require that you add a header and footer, but have an open ended WYSIWYG where you copy the body of your email template.

For example, your Copy/Paste template settings and templates may work like this:

### Entry Template 

#### emails/email-wrapper

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

### Entry Copy/Paste Template

#### emails/email-body

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