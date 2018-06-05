# Craft 2

## Requirements

* Craft 2.5 or a more recent version of Craft

## Installation

* Place the `sproutemail` folder inside your `craft/plugins` folder.
* Install the plugin via the Craft Dashboard. (Settings&rarr;Plugins)

## Updating

* Place the `sproutemail` folder inside your `craft/plugins` folder and overwrite the existing copy of `sproutemail`.
* Point your browser to your Craft control panel. If you are prompted to proceed with a database update, click “Finish up” and let the database updates run.  If no database updates are needed, you will see your control panel load as normal and you are good to go.

## Downloading Updates

To download the latest version of Sprout Email:

- Log in to your [straightupcraft.com](https://straightupcraft.com/members/login) account
- Select `My Content->Purchases` from the dropdown in the top right
- Download the plugin you want to update

_Trial users can grab the latest copy of Sprout Email by requesting a trial._

## Updating to Sprout Email 3.x

::: warning
Please read all of the details below before upgrading from Sprout Email 2.x to Sprout Email 3.x. If you are installing the plugin for the first time, you can ignore these instructions and install the plugin as usual._
:::

Sprout Email 3.0 adds many new features improving List and Mailer integrations. Due to the number of changes we had to make to make these features possible, we were unable to avoid a few extra steps during the upgrade process. If you are using Mailers for Campaign Emails or Recipient Lists you may be required to take these extra steps.

Below is a guide of how to get upgraded from Sprout Email 2.x to Sprout Email 3.x.

### Upgrading Sprout Email with Mailers & Lists

0. **Backup** your Craft database.

1. **Disable** any Sprout Email Mailer Plugins 
_This may include Mailchimp, Campaign Monitor, or any custom Mailer on your project_

2. **Disable** Sprout Email 2.x
_Don't uninstall your current version of Sprout Email or you will lose your data. Just disable Sprout Email 2.x. This step is necessary because adding the new Mailer plugins for Sprout Email 3 will create errors that make the CP inaccessible until everything is upgraded._

3. **Install** new Mailer plugins (if you are using one)

4. **Install** Sprout Lists (if you were using Recipient Lists)
Recipient Lists will be migrated to Sprout Lists when Sprout Email is upgraded _if_ Sprout Lists is installed. If you do not install Sprout Lists before the upgrade, you will lose your Recipient List data. The migration will also maintain the settings on your notification emails to continue sending them to any lists.

5. Copy the new Sprout Email 3.x folder to your `craft/plugins` folder and **Re-Enable** Sprout Email to begin the upgrade.

6. Cheer!

### Updating the Notifications Index Page

Sprout Email 3 updated a few columns that display on the Notification Email Element Index page.

In particular, we removed the `HTML` and `Text` Table Columns in favor of a new `Preview` column. If you were using the `HTML` or `Text` Table Columns you will need to edit your Notification Email Element Index Table settings and add the `Preview` column.

### Updating your templates

Several template variables were deprecated in this major release. You will need to update the variable used in your email templates like so:

- Deprecated `entry` variable in templates. Use `email` instead.
- Deprecated `notification` variable in templates. Use `email` instead.
- Deprecated `campaign` variable in templates. Use `campaignType` instead.