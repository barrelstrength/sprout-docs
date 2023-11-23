---
date: 2023-02-19
description: The Address Field is an international field type which let's you capture and display address data using a Craft-style Address modal.
---

# Address Field

The Address Field is an international field type which let's you capture and display address data using a Craft-style Address modal. The Address Field supports addresses for 200 countries from Google's Address Data Service.

![Address Field Modal](./assets/images/fields/sprout-address-modal.png)

The Address Field uses Craft's Relations field and modal edit UI to stay consistent with the Craft User experience, simplifies often-complex multi-column address layouts to a single column, and works with Craft's Matrix field.

## Templates

You can access your Address Field in your templates via it's field handle.

``` twig
{{ entry.addressField.countryCode }}
{{ entry.addressField.countryThreeLetterCode }}
{{ entry.addressField.currencyCode }}
{{ entry.addressField.locale }}
{{ entry.addressField.administrativeArea }}
{{ entry.addressField.administrativeAreaCode }}
{{ entry.addressField.locality }}
{{ entry.addressField.dependentLocality }}
{{ entry.addressField.postalCode }}
{{ entry.addressField.sortingCode }}
{{ entry.addressField.address1 }}
{{ entry.addressField.address2 }}
{{ entry.addressField.country }}
```

## Settings

Addresses are validated based on the country that is selected. Validation is handled by Google's Address Data Service (via the `commerceguys/addressing` library).

By default, the Address Field is setup for international addresses from all countries but can be limited to a single country as well.
