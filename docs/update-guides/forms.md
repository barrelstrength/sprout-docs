---
date: 2023-09-02
description: Upgrade Sprout Forms module 4.44.444
---

# Upgrading to Forms v4.44.444

Sprout Reports is now Sprout Data Studio and now includes integrated Commerce Data Sets and Date Range Helper classes. Data Sets now support a custom field layout and element sources can be customized based on a Data Source condition rule or any custom fields in your field layout.

## Breaking Changes

### Source Groups have been removed in favor of Custom Sources

To implement custom sources for your Forms you must be an Admin:

1. Add a custom Dropdown or Relation field to your Form Type field layout `Settings->Data Studio->Field Layout`
2. Edit any Forms you want to group and select the appropriate value in your new field
3. On the Forms Element Index page, select the gear icon and choose "Customize Sources"
4. From the "Customize Sources" modal, select the `+` icon and choose "New custom source"
5. Give your custom source a Label and select your Custom Field and Form Criteria to create a Condition Rule
6. Repeat step 5 for each custom source you want to add
