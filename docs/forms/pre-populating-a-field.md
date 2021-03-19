---
date: 2018-06-25
description: When you want to pre-populate a field with a known value you have a few options.
---

# Pre-populating a Field

When you want to pre-populate a field with a known value you have a few options. 

The Sprout Fields [Hidden Field](../fields/hidden-field.md) and [Invisible Field](../fields/invisible-field.md) help do this for scenarios where you do not need the user to see the value in the field being populated.

When you want to populate a visible field from a known value, you can use Javascript. Here is an example of how to do that with a Text field.

``` twig
{# Output your form #}
{{ sprout.forms.displayForm('application') }}

{# Check if the value you want to use to populate the field exists #}
{% if craft.request.getParam('location') is defined %}
	<script type="text/javascript">

    {# Use javascript to select your field by ID and populate your field value. #}
    document.getElementById("fields-locationFieldHandle").value = "{{ craft.request.getParam('location') }}";
	</script>
{% endif %}
```