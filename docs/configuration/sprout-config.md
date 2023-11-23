---
date: 2023-02-19
description: Configuration settings for the sprout plugins.
---

# Config Settings

Sprout settings are configured on a per-module basis and documented in the Control Panel and the [example config files](https://github.com/barrelstrength/craft-sprout/tree/v4/configs) in the root of the repository.

Configuration settings are managed across five areas:

1. **Environment Variables**<br>
    - The `.env` file can include variables prefixed with the Sprout module name
    - Example: `SPROUT_MODULE_FORMS_NAME_OF_SETTING=123`
2. **File-based Config Overrides**<br>
    - File-based configs can be added in the config folder
    - Example: `config/sprout-module-forms.php`
3. **Control Panel**<br>
    - Mange Control Panel settings by navigating to `Settings -> Sprout`
    - Most Control Panel settings store their data in the Project Config
    - Example: `config/project/project.yaml` or `config/project/sprout/*`
4. **Database Tables**<br>
    - Some Control Panel settings store their data in the database
    - Data is stored in the db when user workflows need to update settings in the live environment
5. **API Requests**<br>
    - Some actions via Twig or PHP can sometimes override all of the above
    - Some actions can explicitly define a setting at the time of the request

::: info Settings at the Source
While you might see settings referenced here as an example or feature description, the most accurate settings documentation exists within the Craft docs and the plugin UI or codebase.

We initially tried to list the settings in the online docs but, most of the time, we were just copying and pasting the instruction text or example code comments and it was tedious to always update that text in multiple places to keep things in sync.

Pointing you towards the source helps us reduce the chance we have inconsistent settings documentation in multiple places and, we hope, will help you understand where the answers already exist in your workflow. Reach out if you want additional [training or support](../support/training.md).
:::
