**_Note: The Name Field is only available for Craft 3._**

The Name Field gives you a way to capture your users name with a single input field or manage names in multiple name fields: Prefix, First, Middle, Last, and Suffix.

## Default Name Field

![Name Field - Short Version]({asset:5220:url})

The Name Field defaults to display a single, international-friendly, field. While only a single field displays, the Name field captures the data from this single field into two fields behind the scenes.

Everything before the first space is considered the _First Name_ and everything that comes after the first space is considered the _Last Name_. 

## Complex Name Field

![Name Field - Long Version]({asset:5219:url})

If you have stricter data requirements and are willing to take on the challenge of capturing an international range of name requirements in more structured fields, you can enable the Name Field to display 2 or more fields.

![Name Field - Settings]({asset:5221:url})

## Template Variable

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