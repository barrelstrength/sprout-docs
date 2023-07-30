---
date: 2023-07-29
description: Manage mailing lists and subscribers using Audiences.
---

# Audiences

Audiences provide a flexible way to manage mailing lists and subscribers. Subscribers can be stored as Craft Users or retrieved via custom queries from wherever you prefer to store your subscriber data.

## Audience Types

Audience Types allow you to manage different types of audiences.

| Audience&nbsp;Types | Description                                                              | Module           |
|:--------------------|:-------------------------------------------------------------------------|:-----------------|
| User Group          | Define audience members based on their Craft User Groups                 | Mailer           |
| Subscriber List     | Allow Craft Users audience members to Subscribe and Unsubscribe to lists | Mailer           |
| Data Set List       | Build custom queries to define and segment audience members              | Data&nbsp;Studio |

## Subscriber Lists

The Subscriber List Audience Type enhances Craft's native User Elements with additional features. Enabling the Subscriber List Audience Type allows you to:

- Create one or more Subscriber List Audience
- Send email to Users who are subscribed to a Subscriber List
- Allow Users to manage which lists they are on via a Subscriber Lists field that displays on the User Element Content tab 
- Filter Users by Subscriber List via custom sources that display in the sidebar of the Users Element Index page

A subscriber can be an existing User in Craft or created on the fly as a non-credentialed User. In either case, the Subscriber is identified by their email address.

A Subscriber can be added to multiple Subscriber Lists but a Subscriber can only be added to a specific list once.

## Templating

### Subscribe and Unsubscribe

A user can Subscriber or Unsubscribe from a list using the **Audience ID** to identify the Subscriber List. The Audience ID can be found in the sidebar of the Subscriber List Audience edit page in the control panel.

``` twig
{# Retrieve a list #}
{% set subscriberList = sprout.audiences.subscriberLists
    .id(123)
    .one() %}

{# Check if the subscription already exists on a list #}
{% if subscriberList.isSubscribed(currentUser.id) %}

    {# Remove a subscriber from a list #}
    <form method="post" accept-charset="utf-8">
        {{ csrfInput() }}
        <input type="hidden" name="action" value="sprout-module-mailer/subscriber-lists/remove">
        <input type="hidden" name="audience[id]" value="{{ subscriberList.id }}">
        <input type="text" name="user[email]" value="{{ currentUser.email }}">
        <input type="submit" value="Remove from List">
    </form>

{% else %}

    {# Add a subscriber to a list #}
    <form method="post" accept-charset="utf-8">
        {{ csrfInput() }}
        <input type="hidden" name="action" value="sprout-module-mailer/subscriber-lists/add">
        <input type="hidden" name="audience[id]" value="{{ subscriberList.id }}">
        <input type="text" name="user[email]" value="{{ currentUser.email }}">
        <input type="submit" value="Add to List">
    </form>

{% endif %}
```

Check if a user is subscribed using the User Element, User ID, or email address:

``` twig
{% set subscriberList = sprout.audiences.subscriberLists
    .id(123)
    .one() %}
    
{# Check if the subscription already exists on a list #}
{% if subscriberList.isSubscribed(currentUser) %}...{% endif %}
{% if subscriberList.isSubscribed(123) %}...{% endif %}
{% if subscriberList.isSubscribed('sprout@barrelstrengthdesign.com') %}...{% endif %}
```

### Querying Subscriber Lists

Subscriber Lists add the `getSproutSubscriberLists` method to User Elements:

``` twig
{% for list in currentUser.getSproutSubscriberLists() %}
    {{ list.name }}<br>
{% endfor %}
```

### Querying Subscribers

Subscriber Lists add the `sproutSubscriberListId` attribute to the `craft.users` query:

``` twig
{% set subscribers = craft.users
    .sproutSubscriberListId(50)
    .all() %}

{% for subscriber in subscribers %}
    {{ subscriber.email }}
{% endfor %}
```

### Displaying Counts

The number of Subscribers on a Subscriber List can be retrieved like so:

``` twig
{% set subscribersCount = craft.users
    .sproutSubscriberListId(50)
    .count() %}

{{ subscribersCount }}
```

## Developers

### Custom Audience Types

To create a custom Audience Type extend the base AudienceType class and register your new class via `EVENT_REGISTER_AUDIENCE_TYPES`.

``` php
use BarrelStrength\Sprout\mailer\audience\AudienceType;

class MyAudienceType extends AudienceType
{
  ...
}
```

See the Sprout codebase for examples.

## Settings

Read the [Config Settings](./../configuration/sprout-config.md) documentation to explore and customize settings.

## Updates

See [update guides](../configuration/updates.md) for the Mailer and Framework modules.

