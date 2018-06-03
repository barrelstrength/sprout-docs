# Element Metadata Field

The Element Metadata field gives you fine-grained control over how Entry-specific metadata is recognized and managed for your content. By default, we recommend setting up your Element Metadata field to reuse existing fields in your content and simplify the management over your metadata. Using a common Title, Summary, and Image field can go a very long way to get things setup quickly and provide comprehensive SEO.

## Element Metadata Field Gallery

GALLERY IMAGES

## Element Metadata Field Settings

When the **Display Editable Field** option is selected, Sprout SEO will output a field for that type of metadata.

When the **Add Custom Format** option is selected, you can reference any fields available to your saved Element using Craft Object Syntax. For example, you could reference the Title field in your custom format as `{title}` or `{{ object.title }}` and a custom field as `{customFieldHandle}` or `{{ object.customFieldHandle }}`.

When using the 'Add Custom Format' setting for an image, your value should be the id of an image such as `{% if object['assetFieldHandle'] %}{{ object.assetFieldHandle.first().id }}{% endif %}`

For additional control, you can enable manual customization of some or all metadata fields via the Meta Details fields. Enable Meta Details fields in `Settings->Advanced->Enable Meta Details fields`.

## Applying changes in your Element Metadata Field settings to existing content

We've got you covered.

### Resaving your Elements after creating a new field

When you add an Element Metadata field to an existing URL-Enabled Section's Field Layout, Sprout SEO will trigger a task to resave all Elements in the affected URL-Enabled Section.

### Resaving your Elements after changing field settings

When you update an existing Element Metadata field's settings, Sprout SEO will trigger a task to resave all Elements in any URL-Enabled Section that uses your Element Metadata in its Field Layout.


## Metadata Mapping

....

## Meta Details Fields

Meta Details fields can be enabled for Sections and Element Metadata fields to give you or your SEO team granular control over your metadata.

Meta Details fields display as matrix-style blocks. Users can optionally select one or more Meta Details blocks to override any specific fields for a metadata type.

### Meta Details for Section Metadata

When Meta Details fields are enabled, in addition to the default meta fields you will be able to modify specific fields for Open Graph, Twitter, Geo, and Robots metadata.

![Section Metadata Meta Details Fields]({asset:3372:url})

### Meta Details for Element Metadata

When Meta Details fields are enabled, you will see new options in your Element Metadata Field settings that allow you to give users more control over managing metadata in entries using the Element Metadata field.

In addition to the fields defined (or mapped) in the default Element Metadata settings you will be able to enable Meta Details overrides for Main Entity (Structured Data), Search, Open Graph, Twitter, Geo, and Robots metadata.

#### Enable the Meta Details fields you wish to allow users to override in your Entries

![Element Metadata Meta Details Fields]({asset:3377:url})

#### Meta Details fields display within optional Matrix-style blocks

![Element Metadata Meta Details Fields]({asset:3379:url})