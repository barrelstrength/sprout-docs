---
date: 2023-02-19
description: The Name Field gives you a way to capture your users name with a single input field or manage names in multiple name fields including Prefix, First, Middle, Last, and Suffix.
---

# Name Field

The Name Field gives you a way to capture your users name with a single input field or manage names in multiple name fields: Prefix, First, Middle, Last, and Suffix.

## Single Field

The Name Field defaults to display a single, international-friendly, field. While only a single field displays, the Name field captures the data from this single field into two fields behind the scenes.

![Name Field - Short Version](./images/fields/sprout-name-single.png)

Everything before the first space is considered the _First Name_ and everything that comes after the first space is considered the _Last Name_.

## Multiple Fields

If you have stricter data requirements and are willing to take on the challenge of capturing an international range of name requirements in more structured fields, you can enable the Name Field to display 2 or more fields.

![Name Field - Long Version](./images/fields/sprout-name-multiple.png)

## Templates

The Name field returns a Name Model to your Twig template.

For consistency, the `getFriendlyName()` and `getFullName()` methods return the same as they would if you used them on a Craft User Model.

``` twig
{# Result: First Name #}
{{ entry.nameField.getFriendlyName() }}

{# Result: First Name + Last Name #}
{{ entry.nameField.getFullName() }}

{# Result: Prefix + First Name + Middle Name + Last Name + Suffix #}
{{ entry.nameField.getFullNameExtended() }}

{# Access Name Fields Individually #}
{{ entry.nameField.prefix }}
{{ entry.nameField.firstName }}
{{ entry.nameField.middleName }}
{{ entry.nameField.lastName }}
{{ entry.nameField.suffix }}
```

## Settings

Select which combination of fields you wish to display in your settings:

![Name Field - Settings](./images/fields/sprout-name-field-settings.png) 
