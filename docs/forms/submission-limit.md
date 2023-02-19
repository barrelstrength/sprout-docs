---
date: 2023-02-19
description: If you want to disable your form after a certain number of submissions, conditionally display your form based on the entry count.
---

# Submission Limit

If you want to disable your form after a certain number of submissions, conditionally display your form based on the entry count.

``` twig
{% set totalEntries = sprout.forms.entries.formHandle('contact').count() %}

{# Use a specific number or a dynamic value like globalSet.submissionLimit #}
{% if totalEntries > 49 %}
    Try again next time!
{% else %}
    {{ sprout.forms.displayForm('contact') }}
{% endif %}
```
