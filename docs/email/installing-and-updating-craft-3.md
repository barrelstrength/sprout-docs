# Craft 3

Sprout Email installation and update instructions for Craft 3.

## Requirements

* Craft CMS 3.0.0 or a more recent version of Craft

## Installation via Plugin Store

1. Find the plugin in the Plugin Store in your Craft Control Panel 
2. Go to _Settings → Plugins_ and select “Install”

## Installation via Composer 

1. Open your terminal and go to your Craft project:<br>`cd /path/to/project`
2. Then tell Composer to load the plugin:<br>`composer require barrelstrength/sprout-forms`
3. In the Control Panel, go to _Settings → Plugins_ and select “Install”

## Upgrading to Craft 3

::: warning BEFORE YOU UPDATE
Make sure you have updated to the latest version of Sprout Email 3.x before updating to Sprout Email 4.x for Craft 3
:::

## Upgrading to Email v4.1.1

Sprout Email v4.1.1 updates the Recipients settings. The behavior you see when sending emails should not change, but the way you see this information presented to you in the user interface will.

Previously, the default send method was as a "List" and you had the option to toggle a lightswitch field to send a "Single Email". In 4.1.1 you will see a dropdown with the options "List" and "Single Email" and when you have the "List" setting selected you will no longer see the CC and BCC fields. Any email addresses you previously had in the CC and BCC fields when sending to emails as a List will now be appended to the values in the "To" field. The behavior of how the emails are sent is the same.  
