---
date: 2023-02-19
description: The Regular Expression field allows you to validate input for a text field with a Regular Expression pattern.
---

# Regular Expression Field

The Regular Expression field allows you to validate input for a text field with a Regular Expression pattern.

You will need knowledge of Regular Expressions to create the validation pattern. The Regular Expression validation pattern can be added in your field settings.

## Considerations

If you have a more common data type consider a field type that is dedicated specifically to that data type. It will likely lead to a better user experience and less complexity in your project. Sprout Fields provides fields for validating Email Addresses, Links, and Phone Numbers which may be more appropriate for general use and have additional features to improve the usability of those fields for non-technical users.

## Examples

Google Analytics documentation has a [good overview of Regular Expressions](https://support.google.com/analytics/answer/1034324) and several doc pages with examples of common patterns.

::: tip
The Regular Expression field handles the delimiters of your Regular Expression for you, so you only need to add the expression itself in the Validation Pattern setting.
:::
