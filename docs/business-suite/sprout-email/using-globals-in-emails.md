To use globals in Sprout Email you will need to use the `craft.globals.getSetByHandle` tag.

``` twig
{% set globalSet = craft.globals.getSetByHandle('globalSetHandle') %}

{{ globalSet.yourGlobal }}
```
