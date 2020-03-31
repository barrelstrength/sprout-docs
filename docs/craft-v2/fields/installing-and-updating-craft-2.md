# Craft 2

Sprout Fields installation and update instructions for Craft 2.

## Requirements

* Craft 2.0 or a more recent version of Craft
* Sprout Forms 2.1.2+

## Installation

* Place the `sproutfields` folder inside your `craft/plugins` folder.
* Install the plugin via the Craft Dashboard. (Settings&rarr;Plugins)

## Updating

_Note: It's always a good idea to backup your database and test updates in a safe environment before running updates on a live site._

* Place the `sproutfields` folder inside your `craft/plugins` folder and overwrite the existing copy of `sproutfields`.
* Point your browser to your Craft control panel. If you are prompted to proceed with a database update, click “Finish up” and let the database updates run.  If no database updates are needed, you will see your control panel load as normal and you are good to go.

## Sprout Email Field and Sprout Link Field

Sprout Fields includes an Email Field and Link field that replace the previously separate plugins.  If you are using the retired Sprout Email Field or Sprout Link Field, upon installing Sprout Fields, Sprout Fields will run a migration script to update your previous Email and Link fields to use the Sprout Fields Email and Link fields.

Backup your database before installation and test that your fields are working as expected after installation.  If all is good, go ahead and uninstall and delete Sprout Email Field and Sprout Link Field. Any future updates to the Email or Link fields will be released as part of Sprout Fields.