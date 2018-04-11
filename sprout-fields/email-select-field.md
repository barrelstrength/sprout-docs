**_Note: The Sprout Forms Email Select field will continue to be available in Craft 3 with the new name: Email Dropdown. The Craft Email Select field is deprecated and will be removed in Craft 3._**

----

The Email Select field allows a user to select a spam-protected Email Address from a dropdown list and trigger a notification to that email address using Sprout Forms or Sprout Email.

## Email Select Field

![Sprout Email Select Field]({asset:1321:url})

Setup your Email Select Field just like you would setup up a Dropdown field. The only difference is in how the Email Select field behaves.

When you output your Email Select field on the front-end of your website using Sprout Forms, the Email Select field will mask the email addresses from your settings so they cannot be harvested for spam or seen by the public. 

![Email Select doesn't display email addresses in your template code]({asset:1323:url})

Additionally, after your Email Select field is submitted, the selected email will be unmasked and can be used to trigger dynamic emails notifications using Sprout Forms or Sprout Email.

### Multiple email addresses

If you would like to add multiple email addresses to an option, separate each email address with a comma:

```
email1@website.com, email2.website.com
```

## Using the Email Select Field with Sprout Email

Once you have setup your Email Select Field and assigned it to a Sprout Form, you can setup a notification to be sent to the selected email address when your form is submitted. Add your Email Select field handle `{emailSelectFieldHandle}` to your Sprout Email Notification Recipients setting and select the Event _When a Sprout Forms Entry is saved_ along with the appropriate settings to target your specific form.

![Send dynamic emails with Email Select and Sprout Email]({asset:1322:url})

## Using the Email Select Field with Sprout Forms

Once you have setup your Email Select Field and assigned it to a form, you can setup a notification to be sent to the selected email address when your form is submitted.  Add your Email Select field handle `{emailSelectFieldHandle}` to your Notifications Recipients setting.

If you need to manage your Email Select field in custom HTML, there is a helper method to obfuscate your email addresses:

``` Twig
{% set contact = craft.sproutForms.form('contact') %}

{% set emailSelectField = contact.getField('emailSelect') %}

<select name="fields[{{ emailSelectField.handle }}]">

  {% set value = contact is defined ? contact.emailSelect.value : null %}

  {% set options = craft.sproutFields.obfuscateEmailAddresses(emailSelectField.settings.options, value) %}

  {% for option in options %}

    {% if value != "" %}
      {% set selected = (option.selected == 1) ? true : false %}
    {% else %}
      {% set selected = (option.default == 1) ? true : false %}
    {% endif %}

    <option value="{{ option.value }}" {% if selected %}selected{% endif %}>{{ option.label }}</option>

  {% endfor %}

</select>
```