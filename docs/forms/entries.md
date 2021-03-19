---
date: 2018-06-25
description: An Entry Element is created when a form is submitted. If validation fails, the Entry Element will be returned to the template with errors. If validation succeeds...
---

# Entries

An Entry Element is created when a form is submitted. If validation fails, the Entry Element will be returned to the template with errors. If validation succeeds, the Entry Element will be saved to the database and the Form submission will redirect to the Redirect URL.

## Entry Title

The Entry Title can be defined in a Form's **Title Format** setting.

All information contained in the Title will also be searchable. You may use the same syntax here as you would with the Title Format setting in your Sections. For example:

``` twig
{dateCreated|date('Ymd')} {fullName}
```

## Editing Entries

Users can edit Form Entries in front-end templates. To allow users to edit Form Entries you will need to:

1. Enable Settings → General → Allow Forms to be edited in front-end templates
2. Track the ID (or some other representative information) of the User who you want to allow to edit the form and confirm the person editing the form is the person you think it is.
3. Populate the Entry Form using the setEntry tag

``` twig
{# Get an instance of the your Form #}
{% set form = sprout.forms.getForm('application') %}

{# Get an instance of the Entry you'll be allowing a user to edit #}
{% set entry = sprout.forms.getEntryById(123) %}

{# Set the `entry` variable so your Form Templates know how to populate the fields with existing values #}
{% do sprout.forms.setEntry(form, entry) %}

{# Output your form as usual #}
{{ sprout.forms.displayForm('application') }}
```

## Templating
 
You can fetch form Entries using the [same options you have for all Elements](http://buildwithcraft.com/docs/templating/elementcriteriamodel) as described in the Craft documentation.

### entries 

The `entries` tag will let you get all entries for a specific form.

``` twig
{# Get all entries for a specific form #}
{% for formEntry in sprout.forms.entries
    .formHandle('contact')
    .all() %}
    {{ formEntry.title }}
{% endfor %}

{# Limit the results to the first 3 entries #}
{% for formEntry in sprout.forms.entries.formHandle('contact')
  .limit(3)
  .order('elements.dateCreated asc')
  .all() %}
    {{ formEntry.title }}
{% endfor %}

{# Get the oldest Form Entry from the Contact Form #}
{% set formEntry = sprout.forms.entries
  .formHandle('contact')
  .inReverse()
  .one() %}

{{ formEntry.title }}

{# Output the total number of Form Entries from the Contact Form #}
{{ sprout.forms.entries.formHandle('contact').count() }}

{# Output Entries with a specific status by Status ID or by Status Handle #}
{% for formEntry in sprout.forms.entries
  .formHandle('contact')
  .statusId(2)
  .all() %}
  {{ formEntry.title }}
{% endfor %}

{% for formEntry in sprout.forms.entries
  .formHandle('contact')
  .status('pending')
  .all() %}
  {{ formEntry.title }}
{% endfor %}
```

### lastEntry

When a form has been submitted successfully, the user will be redirected to wherever the Redirect URL setting points to. To display content from the submitted form after the form has been submitted, you can use the `lastEntry()` tag.

``` twig
{# Check for the last entry submitted #}
{% set lastEntry = sprout.forms.lastEntry(form.id) %}

{% if lastEntry %}

    {# If the last entry exists, we can output any of the variables
       that were present in the form submission. #}
    <p>Thanks <strong>{{ lastEntry.fullName }}</strong>! We'll be in touch soon! Did you know you can display any of the values that were submitted in the form?  Here's a list of all the values in the last form submission:</p>
    
    <p>
        Full Name: <em>{{ lastEntry.fullName }}</em><br/>
        Email: <em>{{ lastEntry.email }}</em><br/>
        Message: <em>{{ lastEntry.message }}</em><br/>
    </p>

{% endif %}
```

### getEntry

The `getEntry` tag retrieves the Entry Element of the active submission. If an active Form Entry doesn't exist, it returns an empty Entry Element.

The `getEntry` method is useful if you need to setup your template to manage your Form submission values and errors but you don't know the handle of your Form.  This scenario can arise when you are using the Sprout Forms Relations field to dynamically output a form in your template.

``` twig
{% set submittedEntry = sprout.forms.getEntry(form) %}

{% if submittedEntry.getErrors()|length %}

  {# Display All Errors at the top of your page (assumes you have an errorList macro) #}
  {% for errors in submittedEntry.getErrors() %}
    {{ errorList(errors) }}
  {% endfor %}

{% endif %}
```

### setEntry

The `setEntry` method populates the Entry Model that is used by the `displayForm` tag.

``` twig
{% do sprout.forms.setEntry(form, entry) %}

{{ sprout.forms.displayForm('application') }}
```

## Entry Relations Field

Sprout Forms adds an Entry Relations Field to Craft CMS:
 
- **Entry (Sprout Forms)**