---
date: 2023-02-19
description: Sprout Email installation and update instructions for Craft 3.
---

# Craft 3

Sprout Email installation and update instructions for Craft 3.

## Requirements

* Craft CMS 3.0.0 or a more recent version of Craft

## Installation via Plugin Store

1. Find the plugin in the Plugin Store in your Craft Control Panel
2. Go to _Settings → Plugins_ and select “Install”

## Installation via Composer

1. Open your terminal and go to your Craft project:<br>`cd /path/to/project`
2. Then tell Composer to load the plugin:<br>`composer require barrelstrength/sprout-email`
3. In the Control Panel, go to _Settings → Plugins_ and select “Install”

## Upgrading to Craft 3

::: warning BEFORE YOU UPDATE
Make sure you have updated to the latest version of Sprout Email 3.x before updating to Sprout Email 4.x for Craft 3
:::

## Upgrading to Email v4.1.1

Sprout Email v4.1.1 updates the Recipients settings. The behavior you see when sending emails should not change, but the way you see this information presented to you in the user interface will.

Previously, the default send method was as a "List" and you had the option to toggle a lightswitch field to send a "Single Email". In 4.1.1 you will see a dropdown with the options "List" and "Single Email" and when you have the "List" setting selected you will no longer see the CC and BCC fields. Any email addresses you previously had in the CC and BCC fields when sending to emails as a List will now be appended to the values in the "To" field. The behavior of how the emails are sent is the same.

## Upgrading to Email v4.2.0

Sprout Email 4.2.0 is a recommended upgrade and fixes a vulnerability that could occur in some scenarios with custom Email Templates.

To better support extending Twig layouts and organizing your templates more flexibly throughout the top-level templates folder as you wish, [Email Templates Integrations](./custom-email-templates.md) have been updated to require a new `getTemplateRoot()` method and change the behavior of the existing `getPath()` method

#### Personalized Email Templates

For improved security, Custom Email Templates no longer render objects in custom fields outside of the _Subject_ or _Default Body_ fields. Please let us know if you have additional use cases for this and we can consider them on a case by case basis.

#### Custom Email Templates

Previously, the custom Email Templates setting identified an Email Folder and the only templates available were those templates within that folder. In the latest update, we now treat the `templates/` folder as the root folder and your Email Template is just a folder somewhere within that.

If you happen to be using any `include`, `extends`, or `import` tags in custom Email Templates, you may want to check if they are resolving correctly after the latest update.

For example, say you have this folder structure:

``` plaintext
templates/_emails/newsletter/_layout.twig
templates/_emails/newsletter/email.twig
```

If you previously had an email in a `templates/_emails/newsletter` folder that extended a layout within that folder you would treat the email folder as the root. However, after the recent updates the templates folder is treated as the root so you'd need to extend the file as it exists within the template folder.

``` twig
{# OLD #}
{% extends "_layout" %}

{# NEW #}
{% extends "_emails/newsletter/_layout" %}
```

#### Email Templates Integrations

##### OLD

``` php
public function getPath(): string
{
    return Craft::getAlias('@sproutbaseemail/templates/_components/emailtemplates/basic');
}
```

##### NEW

``` php
public function getTemplateRoot(): string
{
    return Craft::getAlias('@sproutbaseemail/templates');
}

public function getPath(): string
{
    return '_components/emailtemplates/basic';
}
```
