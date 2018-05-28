# Entries Tag

To output your Campaign emails in your templates you can use the `craft.sproutEmail.entries` tag.  Here is a basic overview of what is available:

```twig
{% set id = craft.sproutEmail.entries.id(1).first() %}
{% set slug = craft.sproutEmail.entries.slug('my-email-slug').first() %}
{% set campaignId = craft.sproutEmail.entries.campaignId(1).find() %}
{% set campaignHandle = craft.sproutEmail.entries.campaignHandle('myCampaign').find() %}
```