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
- Previous template tags have been removed in favor of the general `craft.sproutLists.lists` and `craft.sproutLists.subscribers` tags and improved handling of related queries on List and Subscriber models.

### Checking if a Subscriber is on a list

``` twig
New:
{# Retrieve a list #}
{% set list = craft.sproutLists.lists
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

{% if craft.sproutLists.isSubscribed(params) %}
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
{% set list = craft.sproutLists.lists.id(123).one() %}

{{ list.count }}

Old:
{% set totalSubscribers = craft.sproutLists.subscriberCount({ 
  listHandle: 'listHandle' 
}) %}

{{ totalSubscribers }}
```