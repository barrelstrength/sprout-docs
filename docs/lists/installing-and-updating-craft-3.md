---
date: 2023-02-19
description: Sprout Lists installation and update instructions for Craft 3.
---

# Craft 3

Sprout Lists installation and update instructions for Craft 3.

## Requirements

* Craft CMS 3.0.0 or a more recent version of Craft

## Installation via Plugin Store

1. Find the plugin in the Plugin Store in your Craft Control Panel
2. Go to _Settings → Plugins_ and select “Install”

## Installation via Composer

1. Open your terminal and go to your Craft project:<br> `cd /path/to/project`
2. Then tell Composer to load the plugin:<br> `composer require barrelstrength/sprout-lists`
3. In the Control Panel, go to _Settings → Plugins_ and select “Install”

## Upgrading

### Upgrading to v2.x

Sprout Lists v2 includes several updates that will require template changes from earlier versions. These updates include a complete refactoring of how Lists are submitted and managed in templates. Please see the updated Core Concept pages for complete examples.

Some general updates include:

- Adding and removing Subscribers now require the Users `email` to identify the Subscriber
- A Lists Element ID and Handle now must be unique
- Previous template tags have been removed in favor of the general `sprout.lists.lists` and `sprout.lists.subscribers` tags and improved handling of related queries on List and Subscriber models.

### Checking if a Subscriber is on a list

``` twig
New:
{# Retrieve a list #}
{% set list = sprout.lists.lists
    .id(123)
    .one() %}

{# Define the subscription you wish to add or remove from a list #}
{% set subscription = {
    email: currentUser.email
} %}

{# Check if the subscription already exists on a list #}
{% if list.isSubscribed(subscription) %}
...

Old:
{% set params = {
  listHandle: 'listHandle',
  userId: currentUser.id,
  elementId: entry.id,
} %}

{% if sprout.lists.isSubscribed(params) %}
...
```

#### Adding a Subscriber to a List

``` twig
New:
<form method="post" accept-charset="utf-8">
    {{ csrfInput() }}
    <input type="hidden" name="action" value="sprout-lists/lists/add">
    <input type="hidden" name="list[type]" value="barrelstrength\sproutbaselists\listtypes\MailingList">
    <input type="hidden" name="list[id]" value="123">
    <input type="text" name="subscription[email]" value="{{ currentUser.email }}">
    <input type="submit" value="Add to List">
</form>

Old:
<form method="post" accept-charset="utf-8">
    {{ csrfInput() }}
    <input type="hidden" name="action" value="sprout-lists/lists/subscribe">
    <input type="hidden" name="listHandle" value="listHandle">
    <input type="hidden" name="elementId" value="{{ entry.id }}">
    <input type="hidden" name="userId" value="{{ currentUser.id }}">
    <input type="submit" value="Add to List">
</form>
```

#### Removing a Subscriber from a List

``` twig
New:
<form method="post" accept-charset="utf-8">
    {{ csrfInput() }}
    <input type="hidden" name="action" value="sprout-lists/lists/remove">
    <input type="hidden" name="list[type]" value="barrelstrength\sproutbaselists\listtypes\MailingList">
    <input type="hidden" name="list[id]" value="123">
    <input type="text" name="subscription[email]" value="{{ currentUser.email }}">
    <input type="submit" value="Remove from List">
</form>

Old:
<form method="post" accept-charset="utf-8">
    {{ csrfInput() }}
    <input type="hidden" name="action" value="sprout-lists/lists/unsubscribe">
    <input type="hidden" name="listHandle" value="listHandle">
    <input type="hidden" name="elementId" value="{{ entry.id }}">
    <input type="hidden" name="userId" value="{{ currentUser.id }}">
    <input type="submit" value="Remove from List">
</form>
```

### Displaying Total Subscribers on a List

``` twig
New:
{% set list = sprout.lists.lists.id(123).one() %}

{{ list.count }}

Old:
{% set totalSubscribers = sprout.lists.subscriberCount({ 
  listHandle: 'listHandle' 
}) %}

{{ totalSubscribers }}
```

## Upgrading to Lists v4.44.444 - UNRELEASED

Sprout Lists 4 is a major release the includes an update to the underlying architecture. The Sprout Lists user experience will remain familiar but several conventions have changed. Most notably, the core codebase for `barrelstrength/sprout-lists` has been moved to the `barrelstrength/sprout-base` package so any custom code, translations, or direct links to the Sprout Lists Control Panel will need to be updated to target the new naming conventions. Plugin-specific Control Panel settings have also moved to the Craft settings area.

| Feature | Old Name | New Name |
|:------- |:------   |:------   |
| CP URL | `admin/sprout-lists` | `admin/sprout/lists` |
| Template Variables | `craft.sproutLists` | `sprout.lists` |
| Translation Category | `sprout-lists` | `sprout` |
| Controller Namespace | `barrelstrength/sproutlists/controllers` | `barrelstrength/sproutbase/app/lists/controllers`  |
| Service Namespace | `barrelstrength/sproutlists/services` | `barrelstrength/sproutbase/app/lists/services`  |
