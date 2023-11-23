---
date: 2023-02-19
description: The Metadata field gives you fine-grained control over how Entry-specific metadata is recognized and managed for your content.
---

# Metadata Field

The Metadata field gives you fine-grained control over how Entry-specific metadata is recognized and managed for your content. By default, we recommend setting up your Metadata field to reuse existing fields in your content and simplify the management over your metadata. Using a common Title, Summary, and Image field can go a very long way to get things setup quickly and provide comprehensive SEO.

## Field Settings

The Metadata Field gives you several ways to setup your metadata. Keep it simple, and map all of your metadata to existing fields or choose to have fine grained control over every setting.

The default Metadata fields include:

- Meta Title
- Meta Description
- Meta Keywords
- Meta Image
- Main Entity
- Canonical URL
- Meta Details: Search
- Meta Details: Open Graph
- Meta Details: Twitter
- Meta Details: Geo
- Meta Details: Robots

### Existing Fields

The easiest way to manage your metadata is to map your Metadata fields to existing fields in your field layout. The Meta Title and Meta Description fields will be used for Search and Social Sharing metadata fields. The Meta Image field will be used for Social Sharing.

### Display Editable Field

Select the **Display Editable Field** option if you want Sprout SEO to output a field in your Field Layout to manage a specific type of metadata metadata.

::: warning
Choosing to Display Editable Fields will increase the amount of time and effort necessary to post your content and manage your metadata. This level of control may not be necessary and will require a higher ongoing budget to manage well.
:::

### Add Custom Format

When the **Add Custom Format** option is selected, you can reference any fields available to your saved Element using Craft Object Syntax. For example, you could reference the Title field in your custom format as `{title}` or `{{ object.title }}` and a custom field as `{customFieldHandle}` or `{{ object.customFieldHandle }}`:

``` twig
{title} - {region} - {year} 
```

When using the 'Add Custom Format' setting for an image, your value should be the id of an image such as:

``` twig
{% if object['assetFieldHandle'] %}{{ object.assetFieldHandle.first().id }}{% endif %}
```

### Meta Details

Meta Details fields can be enabled for Metadata fields to give you or your SEO team granular control over your metadata. Meta Details fields display as matrix-style blocks. Users can optionally select one or more Meta Details blocks to override any specific fields for a metadata type.

Enable Meta Details fields in `Settings->Advanced->Enable Meta Details fields`.

When Meta Details fields are enabled, you will see new options in your Metadata Field settings that allow you to give users more control over managing metadata in entries using the Metadata field.

In addition to the fields defined (or mapped) in the default Metadata settings you will be able to enable Meta Details overrides for Main Entity (Structured Data), Search, Open Graph, Twitter, Geo, and Robots metadata.

#### Enable the Meta Details fields you wish to allow users to override in your Entries

![Element Metadata Meta Details Fields](./images/seo/sprout-seo-element-metadata-field-meta-details.png)

#### Meta Details fields display as tabs

![Element Metadata Meta Details Fields](./images/seo/sprout-seo-field-layout-editable-fields.png)

## Updating Metadata

#### What happens to my existing content if I add a new Metadata Field to a Field Layout?

When you add a Metadata field to an existing URL-Enabled Section's Field Layout, Sprout SEO will trigger a task to resave all Elements in the affected URL-Enabled Section. When each Element is saved, an updated version of your metadata will also be saved.

#### What happens to my existing metadata if I change my metadata mapping in my Metadata Field settings?

When you update an existing Metadata field's settings, Sprout SEO will trigger a task to resave all Elements in any URL-Enabled Section that use your Metadata in its Field Layout. When each Element is saved, an updated version of your metadata will also be saved.

