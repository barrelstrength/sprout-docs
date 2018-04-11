**_Note: The Address Field is only available for Craft 3._**

![Address Modal]({asset:5213:url})

The Sprout Address Field is an international, Craft-friendly field type which let's you capture and display address data. The Address Field supports addresses for 200 countries from Google's Address Data Service ()via the commerceguys/addressing library). 

The Address Field uses Craft's Relations field and modal edit UI to stay consistent with the Craft User experience, simplifies often-complex multi-column address layouts to a single column, and works with Craft's Matrix field.

By default, the Address Field is setup for international addresses from all countries.

## Templates

``` twig
{# Access Address Fields individually #}
{{ entry.addressField.countryCode }}
{{ entry.addressField.administrativeArea }}
{{ entry.addressField.locality }}
{{ entry.addressField.postalCode }}
{{ entry.addressField.address1 }}
{{ entry.addressField.address2 }}
```