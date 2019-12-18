# Translating Forms

There are a few approaches to translating forms. None are ideal.

## Translating in the CP

You can add a translation file to your project using Static Translations (https://docs.craftcms.com/v3/static-translations.html) and target Sprout Forms using the translation categories that it uses. Sprout Forms relies on multiple modules so there are multiple translation categories you will need to translate if you want full a complete translation.

We include English to English translation files in each module, so you can copy that translation file as a starting point. New releases may add or remove some translations so complete translation over time may require some upkeep. We don't change a lot the language in the CP too often, but now and then we do and it's not something we broadcast when we do.

You can see this translation file in some of the other packages Sprout Forms uses. While not every one of those translations will be used in Sprout Forms, as you can see, Sprout Forms relies on several different modules to provide all it's functionality so translating "Sprout Forms" also includes translating a good part of Sprout Fields, Sprout Reports, and Sprout Email:

- [Sprout Forms](https://github.com/barrelstrength/craft-sprout-forms/blob/v3.6.6/src/translations/en/sprout-forms.php)
- [Sprout Base Fields](https://github.com/barrelstrength/craft-sprout-base-fields/blob/v1/src/translations/en/sprout-base-fields.php)
- [Sprout Base Email](https://github.com/barrelstrength/craft-sprout-base-email/blob/v1/src/translations/en/sprout-base-email.php)
- [Sprout Base Reports](https://github.com/barrelstrength/craft-sprout-base-reports/blob/v1/src/translations/en/sprout-base-reports.php​)
- [Sprout Base](https://github.com/barrelstrength/craft-sprout-base/blob/v5/src/translations/en/sprout-base-settings.php​)

----

## Translating form content

Multiple languages are a tricky topic in Forms. Form Elements behave in the opposite manner than Entry Elements. With Entry Elements you setup a Field and you want the content of that field to be translatable into multiple languages by a content editor. In Forms, when you set up a field you want the Label and Instructional text to be translatable and the content is just submitted once by the user in whatever language you present them.

It gets trickier when we begin to consider if you want the same layout for your translated forms (one field may make sense in one language but not in another). Solving this problem within the same framework as Craft Elements would require that we make Form Labels and Instructional Text Elements and some form fields (like Dropdowns) would require additional Custom Fields to translate the list of items in their settings. As you can likely see, that direction gets messy quickly.

We've looked into the options around this the following options seem to be the available approaches:

1. **Create a Form for each language.** This is probably the best option right now. You can duplicate a form once you create it using the Save->Save as New Form option. You can name your Form Handles with segments that match your Site Handles or Language and dynamically load a Form for the site being loaded:

``` twig
{% set formHandle = 'contactform-' ~ currentSite.handle %}
{{ craft.sproutForms.displayForm(formHandle) }}
```

2. You can create one form and **manage the translations using static translations** in a file (https://docs.craftcms.com/v3/static-translations.html). This is possible but probably not ideal because you would have to update a translation file each time you made a change to your form in the CP.

3. At some point, we could potentially create a **database-driven translation** file that allows you to add translations in the Control Panel. If we do this, you'd still have to manage translations in a separate part of the CP than where you build your form so while it's a different method, you will still be editing data in two places to accomplish the goal.

While #3 isn't an option right now, we mention it as we feel it makes #1 a more palatable option and in our discussions with users and researching this topic and how other form plugins handle multiple languages, it seems #1 is the most used option.