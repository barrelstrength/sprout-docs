---
date: 2018-06-25
description: Configuration settings for the sprout plugins.
---

# Config Settings

Configuration settings are managed across five levels:

1. **Environment Variables** via the `.env` file using variables prefixed with the Sprout module name (e.g. `SPROUT_MODULE_FORMS_NAME_OF_SETTING=123`)
2. **File-based Config Overrides** via the config folder (e.g. `config/sprout-module-forms.php`)
3. **Project Config** is where most Control Panel settings store their data (e.g `config/project/project.yaml` or `config/project/sprout/*`)
4. **Database Tables** are where Control Panel settings store their data when users need to be able to update settings in a live environment
5. **API Requests** via Twig or PHP can sometimes override all of the above by explicitly defining a setting at the time of the request

## Module configuration

Sprout settings are configured on a per-module basis and documented in the Control Panel and the [example config files](https://github.com/barrelstrength/craft-sprout/tree/v4/configs) in the root of the repository.

::: tip Settings at the Source
While you might see settings referenced here as an example or feature description, the most accurate settings documentation exists within the plugin UI or codebase. We initially tried to list the settings in the online docs but, most of the time, we were just copying and pasting the instruction text or example code comments and it was tedious to always update that text in multiple places to keep things in sync.

Pointing you towards the source helps us reduce the chance we have inconsistent settings documentation in multiple places and, we hope, will help you understand where the answers already exist in your workflow. Reach out if you want additional [training or support](../support/training.md).
:::

## Control Panel

Settings can be managed in the Sprout Settings section in the Control Panel. Documentation is provided on each setting using the field instructions.

```
Settings -> Sprout
```

## Config Files

Settings can also be managed in your repository using config files. File-based config settings will take precedence over settings in the Control Panel.

[Example config files](https://github.com/barrelstrength/craft-sprout/tree/v4/configs) are provided for all Sprout modules and documented with comments. Some developer-focused settings may only be available in the file-based config.

### Use an example config file as a starting point

Copy the example config file from the Sprout Framework module in your vendor folder.

```
vendor/barrelstrength/sprout/configs/sprout-module-forms.php
```

Place the file in your Craft config folder and update the config to use your desired settings.

```
config/sprout-module-forms.php
```


