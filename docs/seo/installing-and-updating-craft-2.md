# Craft 2

## Requirements

* Craft 2.6.2771 or a more recent version of Craft

::: warning
Sprout SEO 2 for Craft 2 is no longer supported. If you are still running a Craft install that uses Sprout SEO 2 you can reference the [legacy documentation](./v2/) in our archive or reach out for support via our consulting services.
:::

## Installation

* Place the `sproutseo` folder inside your `craft/plugins` folder.
* Install the plugin via the Craft Dashboard. (Settings&rarr;Plugins)

## Updating

* Place the `sproutseo` folder inside your `craft/plugins` folder and overwrite the existing copy of `sproutseo`.
* Point your browser to your Craft control panel. If you are prompted to proceed with a database update, click “Finish up” and let the database updates run.  If no database updates are needed, you will see your control panel load as normal and you are good to go.

## Downloading Updates

To download the latest version of Sprout SEO:

- Log in to your [straightupcraft.com](https://straightupcraft.com/members/login) account
- Select `My Content->Purchases` from the dropdown in the top right
- Download the plugin you want to update

_Trial users can grab the latest copy of Sprout SEO by requesting a trial._

## Updating to Sprout SEO 3

Sprout SEO 3 brings adds extensive support for **Structured Data**, allowing you to generate Rich Cards using JSON-LD; introduces **URL-Enabled Sections** and the **Element Metadata field**, which both greatly simplify the complexity of managing SEO for content editors; and introduces **content-focused SEO and usability improvements**, so your content editors always know when they are modifying metadata and what types of metadata they will affect.

Sprout SEO 3 is a major release. To get the full benefit of these features, existing users will need to take a few additional, manual steps after updating. We've outlined those items below in the _Breaking Changes_ and _Things to do after upgrading_ sections.

### Big things that have changed

#### Defaults and Sitemaps are now Globals and Sections

Defaults and Sitemaps no longer exist separately. You will now manage your Global Fallback details on the new 'Globals' tab. Specific Defaults will be managed in the new 'Sections' tab. Sections are now URL-aware and also allow you manage your Sitemap settings.

#### All Meta fields have been combined into a single Element Metadata field

All Meta field types have been simplified to a single Element Metadata field type. The Element Metadata field type gives you a lot more control over how you can optionally set dynamic default values so you can leverage the content you have in your metadata instead of having to enter it twice.

#### Simplify your templates

The new URL-Enabled Sections and Element Metadata fields, in most cases, allow you to simplify your template code to a single tag and allow you and your content editors to customize SEO directly from the Control Panel.

#### Structured Data is now supported

Structured Data and several out-of-the-box schemas are now supported. Simple Main Entity schemas are supported and a custom Schema API allows you to map your unique content to your specific Structured Data needs.

#### Improved Performance with Redirects

In Sprout SEO 3, we only query the database to process Redirects if a request to your site 404s. This improves performance for most website users, but leads to a potential gotcha that we outline below in the Breaking Changes section.

### Breaking Changes

#### Update to the latest version of Craft

Some UI improvements will only be visible in a more recent version of Craft. Make sure you are running Craft 2.6.2949 or something higher for the best experience.

#### Update your templates to use the new sproutseo tag

The `optimize` variable is no longer supported:

``` twig
{{ craft.sproutSeo.optimize() }}
```

Update your templates to use the new `sproutseo` tag:

``` twig
{% sproutseo 'optimize' %}
```

#### Defaults have been removed

Any Defaults that you had setup in Sprout SEO 2 will be migrated to the new Custom Sections area.

To avoid conflicts with existing Section handles, your Custom Section handles will be updated during your migration to include the string `customSection`. So, if you had a handle named `blog`, your new Custom Section handle will be `customSectionBlog`. In addition, because you could have an Entry Section and a Category Group and a Custom Section all with the same handle, in your templates you'll need to update your handles to include an identifier of what Section they belong to (for custom sections, this would be `sproutseo_section:customSectionBlog`).

There are 2 ways you can get things working again:

**1) Update the handles and attribute name**

This will get things working again but does not take advantage of several new features in Sprout SEO. See Option 2 for a more powerful way to update your new Custom Sections with Sprout SEO 3.

_Sprout SEO 2_

``` twig
{% do craft.sproutSeo.meta({
  default: 'handle'
}) %}
```

_Sprout SEO 3_

``` twig
{% do craft.sproutSeo.meta({
  section: 'sproutseo_section:customSectionHandle'
}) %}
```

**2) Migrate the Custom Section Metadata to its respective URL-Enabled Section**

Sprout SEO 3 will automatically generate Section Metadata templates for all URL-Enabled Sections. By default, this includes Entry Sections, Category Groups, Craft Commerce Product Types, and Sprout Email Campaign Emails.

In Sprout SEO 2 you had to set the Default handle in the template code on all Listing and Detail pages where you wanted to use that metadata. In Sprout SEO 3, Section Metadata is URL-aware and will monitor all matching URLs for existing URL-Enabled Element Detail pages. For a listing page, you can either choose to add your Section handle to the code as described above, or just make sure your Listing page has a URL-Enabled Single or Channel Page associated with it in Craft, and you'll be able to keep your code clean and give full control over the metadata to your users.

To get the most out of Sprout SEO 3, you will want to migrate any metadata from your Custom Sections to the matching URL-Enabled Section and delete the duplicate Custom Section.

For example, let's say you had a Default named 'Blog' in Sprout SEO 2 to manage metadata for your Blog Listing page and fallback data for your Blog Entry Detail pages. In Sprout SEO 3, this will be migrated as a Custom Section named Blog, but Sprout SEO 3 will also generate a URL-Enabled Section named Blog (which will default to disabled).  We recommend you migrate your Custom Section named Blog to use the URL-Enabled Section named Blog. This will help simplify your templates, give more control over how metadata is managed in the Control Panel, and give Sprout SEO more awareness on how to give SEO-related hints to your users.

_Custom Sections in Sprout SEO 3 have a URL setting, which allows them to match a URL and know when to display your metadata dynamically. When we migrate the Sprout SEO 2 Defaults to Sprout SEO 3 Custom Sections, we set the URL to blank because we don't know what the URL of your Custom Section should be._

#### Some fields get managed in different places

Metadata Title, Description, Keywords, and Image fields are optimized to single fields

The Global Fallback Title, Description, and OpenGraph and Twitter image have been combined into a single Title, Description, and Image field in the new Globals settings. If you need more granularity in your Sections you will now need to implement it at the Section level.

The Global Fallback Twitter Creator value will be migrated as a Custom Section and will need to be managed at the Section level.

#### Some settings are now set dynamically

The URL and Open Graph URL Global Fallback and Default settings are now managed dynamically.

The Open Graph locale setting is now managed dynamically. If you are using Locales for multi-site behavior instead of multi-lingual behavior, you will want to enable `Settings->Advanced->Override default locale behavior`

#### Some less common metadata fields have been removed

The Open Graph audio and video fields have been removed. We are considering how to reimplement them in a more user-friendly way. Please let us know if you have a specific use case we can consider.

The author and publisher columns have been removed. The only way these could have been implemented in the last version of Sprout SEO is via template overrides and this was not documented. Please let us know if you have a use case for them we need to be aware of.

The Twitter Player card has been removed. We are considering how to reimplement them in a more user-friendly way. Please let us know if you have a specific use case we can consider.

#### Some Redirects may require testing

Sprout SEO 3 improves the performance of Redirects and does so by changing the position in the page routing that the Redirects get processed. In the past, we checked for Redirects as one of the first things on every page load. Now, we wait until a page is about to return a 404 error before we run our check to see if any redirects exist. Due to this change, there are some scenarios where a previous Redirect could stop working after you upgrade to Sprout SEO 3.

We recommending re-testing your Redirects after upgrading to Sprout SEO 3 to make sure old entries with matching URLs or custom routes don't accidentally catch something you are redirecting.

### Things to do after upgrading

#### Review and improve your Global fallbacks

Review and add additional details about your website in the Globals section. `Globals->Website Identity`.

Once you have updated your Globals, you can probably delete the Custom Section that was being used as your Global Fallback. Those values will now be active at your Global Metadata Level.

#### Automate SEO via the new Element Metadata field

If you were using any Meta fields, these will be migrated to the new Element Metadata field as custom values in the new Meta Details blocks. To give your users better default options, you can update your new Element Metadata field to use values from existing custom fields in your Element field layouts.

#### Review new Global and Advanced settings

The new version of Sprout SEO has additional options for the `Globals->Customization->Append value to all Meta Titles` setting