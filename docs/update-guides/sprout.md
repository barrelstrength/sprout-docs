---
date: 2023-09-25
description: Update guide for Sprout Framework.
---

# Craft 4

## v4.44.444 - 2023

All Sprout Plugins added Craft 4 compatibility at version `4.44.444` and are built on top of the new Sprout Framework `4.0.0` module.

Sprout for Craft 4 and provides a familiar author experience, introduces a simplified plugin architecture with the Sprout Framework module, and removes the need for a number of dependencies that were causing several permission and migration issues on Craft 3 websites. Designers and developers will want to read through these upgrade notes carefully - several things have changed.

### Prepare to upgrade

1. Review all upgrade guides for Craft and Sprout to prepare for your upgrade
2. Review the 'Breaking Changes' section of the Sprout Module changelogs
3. Confirm that all of the Sprout plugins that you want to upgrade are available on Craft 4
4. Confirm that you have a migration path for any plugins that will not be available on Craft 4

### Upgrade

1. Update to the latest version of Craft 3
2. Update all installed Sprout plugins to the most recent version on Craft 3
3. Upgrade to Craft 4 (This step will trigger Sprout migrations for plugins with the same name)
4. Install any Sprout plugins with new names to trigger their respective migrations

#### Craft 3 Migration Path

Avoid incremental updates to older versions of Craft and Sprout.

::: warning THERE IS A BETTER WAY
Sprout `4.44.444` added Craft 4 support, introduced a new plugin architecture, and solved several migration issues that had arisen in the older architecture. Before upgrading to Craft 4 and Sprout `4.44.444`, upgrade your site to the latest version of Craft 3.x and the most recent Sprout releases on Craft 3 all in one go.

We recommend avoiding incremental upgrades (e.g. from `3.2` to `3.3` to `3.4`, etc.) as Craft 3 and Sprout did not play nicely together between Craft `3.2` and `3.7` and many of those issues are resolved if you can upgrade to the most recent version of Sprout on the latest version of Craft 3 with a single migration.
:::

To upgrade Craft and Sprout to a version earlier than Craft `3.7.x` and Sprout `4.40.x`, please review the [Installing &amp; Updating][#v3Docs] section in the Sprout v3 documentation for the specific plugins you are updating.

[#v3Docs]: https://sprout.barrelstrengthdesign.com/docs/craft-v3/

### Breaking Changes

#### All Sprout modules

- See [CHANGELOG-CORE](https://github.com/barrelstrength/craft-sprout/blob/v4/CHANGELOG) for a full list of changes
- All Twig variables now use the `sprout` variable
- All Default templates sets can now be included from the site template root `_sprout`
- All Example templates can now be included from the site template root `_sprout/examples`
- All plugin settings are now managed in their respective modules
- Plugins no longer support an _Alternate Name_ setting
- Any references to Sprout Project Config settings keys will need to be updated
- All custom APIs have new routes and namespaces

[//]: # (### Sprout Forms)

[//]: # ()

[//]: # (- Updated Resource loading Asset Bundles for front-end forms. People may need to migrate over? Or can keep the old)

[//]: # (  syntax? I think so... same filenames.)

[//]: # ()

[//]: # (### Email)

[//]: # ()

[//]: # (- Migration should add CC and BCC to TO field as comma-delimited emails? &#40;Removed SendMethod, CC, and BCC&#41;)

[//]: # ()

[//]: # (### Fields)

[//]: # ()

[//]: # (- REMOVED Notes field. Migrated to UI Elements.)

[//]: # (  Craft's new UI Elements replaces the need for the Sprout Notes field? and others?)

[//]: # ()

[//]: # (UI elements – Add custom headings, tips, warnings, and horizontal rules to your field layouts. You can even add custom)

[//]: # (UI elements based on Twig templates. &#40;Yes, plugins can register additional UI elements as well!&#41;)

[//]: # ()

[//]: # (- Release an update on 3.x for Notes field that notifies folks we'll be deprecating the Rich Text and HTML options and)

[//]: # (  only migrating to Markdown via Craft's Tips/Warning UI elements in the future.)

[//]: # ()

[//]: # (Review Phone field. In this case, it appears to be returning a string of a number if I kill the script and Craft::dd&#40;)

[//]: # ($value&#41; in the normalizeValue method. But, ideally we normalize this to be a form model so where does this string value)

[//]: # (come from?)

[//]: # (https://sprout.straightupcraft.com.ddev.site/admin/entries/sproutFieldExamples/21-field-test)

[//]: # ()

[//]: # (So it looks like our Phone Field => Plain Text migration during the Craft 3 upgrade fails in some scenarios, leading to)

[//]: # (a situation where you may have a phone field that has old number values from before the migration &#40;1231231234&#41; and new)

[//]: # (format international JSON values for anything that was saved after the update.)

[//]: # (It's hard for us to clean these up, because we don't know the international code we should put the numbers into, so old)

[//]: # (values need to be updated manually. Or we need to switch all fields to PlainText leading to potentially plain text)

[//]: # (fields with the new JSON values now. \<sigh\>)

[//]: # (Build a utility that identifies where these exist and provide SQL queries that can identify all the IDs of the fields in)

[//]: # (question &#40;all phone fields in global context that don't contain a "{" or that do contain one&#41; and another query that)

[//]: # (uses those IDs to update and CONCAT the other format.)

[//]: # ()

[//]: # (And migrated phone field as straight numbers 1231234111 vs {"country":"AS","phone":"707-654-1234"})

[//]: # (Make sure phone gets migrated properly or converted to Plain Text field.)

[//]: # (We were supposed to migrate these to plain text in the upgrade to Craft 3... see where this fails or gets undone.)

[//]: # ()

[//]: # (Review OLD Sprout Fields migrations &#40;And make sure we're dealing with global/sproutForms scope properly&#41;)

[//]: # (m180221_161521_update_type.php <= this changes the classname before the following migrations run their queries looking for the old class name.)

[//]: # (m180221_161522_notes_fields.php)

[//]: # (m180221_161523_phone_fields.php)

[//]: # (m180221_161524_email_select_fields.php)

[//]: # (m180221_161525_regular_expression_fields.php)

[//]: # (m180221_161526_link_fields.php)

[//]: # (m180221_161527_email_fields.php)

[//]: # (m180221_161528_hidden_fields.php)

[//]: # (m180221_161529_invisible_fields.php)

[//]: # ()

[//]: # (# REVIEW THINGS)

[//]: # ()

[//]: # (SELECT *)

[//]: # (FROM craft_content)

[//]: # (WHERE field_phoneSprout LIKE '%{%';)

[//]: # ()

[//]: # (SELECT *)

[//]: # (FROM craft_content)

[//]: # (WHERE field_phoneSprout NOT LIKE '%{%';)

[//]: # ()

[//]: # (# GET IDS OF TARGET COLUMN DATA)

[//]: # ()

[//]: # (SELECT id)

[//]: # (FROM craft_content)

[//]: # (WHERE field_phoneSprout LIKE '%{%';)

[//]: # ()

[//]: # (SELECT id)

[//]: # (FROM craft_content)

[//]: # (WHERE field_phoneSprout NOT LIKE '%{%';)

[//]: # ()

[//]: # (# UPDATE)

[//]: # ()

[//]: # (UPDATE craft_content)

[//]: # (SET field_phoneSprout = CONCAT&#40;'{"country":"AF","phone":"',field_phoneSprout,'"}'&#41;)

[//]: # (WHERE field_phoneSprout NOT LIKE '%{%')

[//]: # (AND id = @id;)

[//]: # ()

[//]: # (UPDATE craft_content AS table1)

[//]: # (JOIN)

[//]: # (&#40;)

[//]: # (SELECT id)

[//]: # (FROM craft_content)

[//]: # (WHERE field_phoneSprout NOT LIKE '%{%')

[//]: # (&#41; table2)

[//]: # (ON table1.id = table2.id)

[//]: # (SET table1.field_phoneSprout = CONCAT&#40;'{"country":"AF","phone":"',table1.field_phoneSprout,'"}'&#41;;)


