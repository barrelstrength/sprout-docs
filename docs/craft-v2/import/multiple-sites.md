# Multiple Sites

Importing content in multiple languages can be tricky depending on what content you have in each language. When importing content for a single language, you can just set the attribute `locale` with your Locale ID and you are good to go (i.e. `"locale": "es"`). Once you add multiple languages to the mix, you'll have to keep in mind several aspects about your setup:

- Have you enabled the locales you need to import content for in your Section settings?
- Have you set the Default Entry Status to what you require in your Section settings?
- Have you made each field you will be importing content into translatable in the Field settings?

Getting these settings right is important as it affects how your content will be managed. You may want to make sure locales that are not translated are not enabled by default and that you are not importing data into fields that aren't translatable, as you can overwrite the data you already imported for your primary locale.

For the examples below, let's assume your site has two languages: English and Spanish. English is your primary locale and will always have content, and now and then, you translate an article into Spanish, so you want the Spanish locale for your Articles channel to default to off, and only get enable when you have content in that language.

## Primary Site

You can import your primary locale like any other Element you import.

``` json
[
  {
    "@model": "EntryModel",
    "attributes": {
      "sectionId": 2,
      "typeId": 2,
      "locale": "en_us",
      "localeEnabled" : true,
      "authorId": 1,
      "slug": "english-slug",
      "postDate": "2015-02-27 16:43:52",
      "expiryDate": null,
      "enabled": true
    },
    "content": {
      "title": "English Title",
      "fields": {
        "body": "English Content"
      }
    }
  }
]
```

When the element is created, another record will be created in the database for all other enabled locales. Each locale that is created dynamically will be enabled or disabled depending on your Section settings and the Default Entry Status for that locale.

Above, we set `"localeEnabled": true` in our attributes to be explicit, but that shouldn't not matter as the default Section Locale settings should set this for us.

## Secondary Sites

We import our secondary locale in a second step, and the import format has a few new parts to help us get match the entry for the secondary locale back to the first locale, and ensure the locale gets enabled.

``` json
[
  {
    "@model": "EntryModel",
    "attributes": {
      "sectionId": 2,
      "typeId": 2,
      "locale": "es",
      "localeEnabled" : true,
      "authorId": 1,
      "slug": "spanish-slug",
      "postDate": "2015-02-27 16:43:52",
      "expiryDate": null,
      "enabled": true
    },
    "content": {
      "title": "Spanish Title3",
      "fields": {
        "body": "Spanish Content"
      }
    },
    "settings": {
        "updateElement": {
        "matchBy": "slug",
        "matchValue": "english-slug",
        "matchCriteria": {
          "section": "news",
          "locale": "es",
          "localeEnabled": false
        }
      }
    }
  }
]
```

## Locales

A few important things to note about the syntax above:

In our `attributes` we:

- Set the Locale ID of our secondary language: `"locale": "es"`
- Ensure that our locale is enabled: `"localeEnabled" : true`

In our `content` we us the `updateElement` key to find the locale-specific record that we want to be updating. We do this by matching our original entry by something we know about it (in this example we use the slug but can use any value as described in the `updateElement` documentation for [Updating Existing Elements](./update-existing-elements.md)). As noted above, when we create our primary locale entry, Craft creates records in the database for all of our enabled secondary locales. We need to make sure that we update the record that is specific to our locale by using the `matchCriteria` key. In `matchCriteria` we:

- Make sure to match for the the locale that we want to update: `"locale": "es"`
- Make sure our query looks for disabled locales (if we have our secondary locales set to disabled by default): `"localeEnabled": false`

In this second import definition for this example, `"localeEnabled" : true,` needs to be set in the `attributes` because we only want the secondary locales that we have content for to be enabled after import. But we first need to find the element that we want to update by setting `"localeEnabled": false` in our `matchCriteria` settings, because the locale is initially disabled when we match it.
