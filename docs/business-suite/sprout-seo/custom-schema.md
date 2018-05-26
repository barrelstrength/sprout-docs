# Customized Structured Data

Sprout SEO allows you to map your content in Craft CMS to the be output as Structured Data. The mapping between your content and the Structured Data that gets output is called a schema. Sprout SEO supports two types of mappings

- **Default Schema Mappings** - a small, predictable subset of Schema Types and Properties that we can support out of the box. This will get you up and running and output more Structured Data for your content than the average website.
- **Custom Schema Mappings** - If you have more specialized content, Sprout SEO provides an extensive Schema API where you can map your content and custom fields and support more advanced schema mappings for your online and SEO strategies.

## Custom Schema Mappings

You can create your own Custom Schema by:

1. Extending SproutSeoBaseSchema with your Custom Schema
2. Register your Custom Schema using the registerSproutSeoSchemas() hook

Sprout SEO uses its own Schema API. See over 15 Schema integration examples in Sprout SEO (sproutseo/integrations/sproutseo/schema).

Download the [Example Custom Schema Plugin]({asset:3262:url}) for an example of how to build a Custom Schema Integration as a separate plugin. The _Example Custom Schema Plugin_ includes lots of comments and some discussion of the available helper methods and other techniques to use while building your Custom Schema.

Once you have created a Custom Schema, you should see it as an option in the Main Entity dropdown for your Sections and Element Metadata fields. It will only be processed and output as metadata on pages where you have it selected in your Main Entity settings.

## Structured Data and Schema

Structured Data schema are primarily defined on [schema.org](https://schema.org) but the spec you see on schema.org is often not exactly the same as the feedback you get from Google's [Structured Data Testing Tool](https://search.google.com/structured-data/testing-tool).