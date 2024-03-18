---
date: 2023-02-19
description: Sending an email can touch several different services so it can be tricky to diagnose just where something is going wrong.
---

# Troubleshooting FAQ

## My page is outputting the wrong metadata?

This is usually due to an incorrect setting or configuration somewhere. Check your settings and make sure you've assigned the right Element Metadata field to your Field Layout. Make sure your Custom Sections are enabled.

A tricker one to troubleshoot is when matched variable names may take priority over one another in your template. Make sure you don't override the primary variable (`entry`, `category`, `product`, etc.) that Craft or a Custom Element Type makes available to the page, or any other URL-enabled pages:

For example, a line that defines an `entry` variable:

``` twig
{% set entry = entry.relationsField.one() %}
```

This will override the expected `entry` variable that Craft makes available to a Entry pages. 

Avoid using the generic variable names that Craft depends on when possible and use more specific variable names to avoid unexpected behavior.

