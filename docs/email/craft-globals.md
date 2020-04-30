---
date: 2018-06-25
description: To use globals in Sprout Email you will need to use the craft.globals.getSetByHandle tag.
---

# Craft Globals

To use globals in Sprout Email you will need to use the `craft.globals.getSetByHandle` tag.

``` twig
{% set globalSet = craft.globals.getSetByHandle('globalSetHandle') %}

{{ globalSet.yourGlobal }}
```
