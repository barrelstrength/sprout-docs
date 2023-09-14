---
date: 2023-02-19
description: Create the new notification and add the appropriate sender info. The notification Rules will be setup to trigger "When a new user is created".
---

# Data Studio

## v4.44.444 - February 20, 2023

Sprout Reports is now Sprout Data Studio and now includes integrated Commerce Data Sets and Date Range Helper classes. Data Sets now support a custom field layout and element sources can be customized based on a Data Source condition rule or any custom fields in your field layout.

### Breaking Changes

::: warning
Due to this plugin's name change (Reports => Data Studio) you will need to manually install it and manually update to your new license key after upgrading to Craft 4 to trigger its migrations. If you have any Report-related dashboard widgets you may see an error when you first login to your Craft 4 control panel. Navigate directly to the plugins page `/admin/settings/plugins` to install the plugin.
:::

### License Migrations

Existing Sprout Reports license holders have received a new Sprout Data Studio Pro license in the same Craft Console account for the old Sprout Reports license key. Once installing Data Studio, you will need to manually add your new licenses key to your Craft installation. Your new Data Studio license will have the same expiration as the old Sprout Reports license and you will need to manually re-select the auto-renew option in your Craft Console.

### Data Studio

- Sprout Reports has been renamed to Sprout Data Studio
- Sprout Data Studio now has a Lite and Pro Edition.
- Updated variable `craft.sproutReports` => `sprout.twigDataSet`
- Twig Template Data Sources that use a Craft DateTime picker in their templates will need to update the date syntax to use Twig the [date function](https://craftcms.com/docs/4.x/upgrade.html#template-functions)
- Twig Template Data Sources should update `{%- includejs %}` => `{%- js %}`
- Any references to the Project Config settings key should be updated `sprout-reports` => `sprout-module-data-studio`
- Custom DataSources should use `BarrelStrength\Sprout\datastudio\datasources\DataSource` (See `vendor/barrelstrength/sprout/src/datastudio/components/datasources` for examples)
- Access Data Source permissions have been removed in favor of Craft User permissions. Confirm any permissions that were previously assigned to Data Sources are now assigned to the User Groups appropriately.
- Date Sources used as email lists will need to be migrated manually to Audience Types (once the email module is released)

### Framework

- See the general [upgrade guide][#400-framework] for Sprout Modules to 4.0

[#400-framework]: ../update-guides/sprout.md

## v4.46.0 - September 5, 2023

This release includes a breaking change if you are using Source Groups to group your Data Sets. Sprout provided a method to group Data Sets in Craft 3 and due to some inconsistencies with multi-site functionality we have decided to remove this from Craft 4, effective immediately, in favor of using the Data Studio Global Field Layout and Craft's native Custom Sources.

As plugin migrations should only touch schema controlled by the plugin itself, you will need to manually implement this change if you desire to group your Data Sets in the sidebar of the element index page. No Data Set settings are changed in this update aside from the group metadata.

### Breaking Changes

To implement custom sources for your Data Set you must be an Admin:

1. Add a custom Dropdown or Relation field to your Data Set field layout `Settings->Data Studio->Field Layout`
2. Edit any Data Sets you want to group and select the appropriate value in your new field
3. On the Data Sets Element Index page, select the gear icon and choose "Customize Sources"
4. From the "Customize Sources" modal, select the `+` icon and choose "New custom source"
5. Give your custom source a Label and select your Custom Field and Data Set Criteria to create a Condition Rule
6. Repeat step 5 for each custom source you want to add