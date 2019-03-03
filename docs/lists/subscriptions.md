# Subscriptions

The relationship between the list and a subscriber.

## Subscribe and Unsubscribe Forms

### Craft Users

Example subscribe and unsubscribe form for known Craft Users using a hidden `userId` field:

::: code

``` twig Craft 3
{% set params = {
  listHandle: 'listHandle',
  userId: currentUser.id,
  elementId: entry.id,
} %}

{% if craft.sproutLists.isSubscribed(params) %}

  <form method="post" accept-charset="utf-8">
    {{ csrfInput() }}
    <input type="hidden" name="action" value="sprout-lists/lists/unsubscribe">
    <input type="hidden" name="listHandle" value="listHandle">
    <input type="hidden" name="elementId" value="{{ entry.id }}">
    <input type="hidden" name="userId" value="{{ currentUser.id }}">
    <input type="submit" value="Remove from List">
  </form>

{% else %}

  <form method="post" accept-charset="utf-8">
    {{ csrfInput() }}
    <input type="hidden" name="action" value="sprout-lists/lists/subscribe">
    <input type="hidden" name="listHandle" value="listHandle">
    <input type="hidden" name="elementId" value="{{ entry.id }}">
    <input type="hidden" name="userId" value="{{ currentUser.id }}">
    <input type="submit" value="Add to List">
  </form>

{% endif %}
```

``` twig Craft 2
{% set params = {
  listHandle: 'listHandle',
  userId: currentUser.id,
  elementId: entry.id,
} %}

{# Check if a user is subscribed already #}
{% if craft.sproutLists.isSubscribed(params) %}

  {# Unsubscribe a user from a specific List #}
  <form method="post" accept-charset="utf-8">
    <input type="hidden" name="action" value="sproutLists/lists/unsubscribe">
    <input type="hidden" name="listHandle" value="listHandle">
    <input type="hidden" name="elementId" value="{{ entry.id }}">
    <input type="hidden" name="userId" value="{{ currentUser.id }}">
    <input type="submit" value="Remove from List">
  </form>

{% else %}

  {# Subscribe a user to a specific List #}
  <form method="post" accept-charset="utf-8">
    <input type="hidden" name="action" value="sproutLists/lists/subscribe">
    <input type="hidden" name="listHandle" value="listHandle">
    <input type="hidden" name="elementId" value="{{ entry.id }}">
    <input type="hidden" name="userId" value="{{ currentUser.id }}">
    <input type="submit" value="Add to List">
  </form>

{% endif %}
```

:::


### Anonymous Users

Example subscribe and unsubscribe form for an anonymous user with an email address using an `email` field. Note the `email` field in place of the `userId` field in the last example.

::: code

``` twig Craft 3
{# Allow a user to submit their email to unsubscribe from a specific List #}
<form method="post" accept-charset="utf-8">
  {{ csrfInput() }}
  <input type="hidden" name="action" value="sprout-lists/lists/unsubscribe">
  <input type="hidden" name="listHandle" value="listHandle">
  <input type="hidden" name="elementId" value="{{ entry.id }}">
  <input type="email" name="email" value="username@website.com">
  <input type="submit" value="Remove from List">
</form>


{# Allow a user to submit their email to subscribe from a specific List #}
<form method="post" accept-charset="utf-8">
  {{ csrfInput() }}
  <input type="hidden" name="action" value="sprout-lists/lists/subscribe">
  <input type="hidden" name="listHandle" value="listHandle">
  <input type="hidden" name="elementId" value="{{ entry.id }}">
  <input type="email" name="email" value="username@website.com">
  <input type="submit" value="Add to List">
</form>
```

``` twig Craft 2
{# Allow a user to submit their email to unsubscribe from a specific List #}
<form method="post" accept-charset="utf-8">
  <input type="hidden" name="action" value="sproutLists/lists/unsubscribe">
  <input type="hidden" name="listHandle" value="listHandle">
  <input type="hidden" name="elementId" value="{{ entry.id }}">
  <input type="email" name="email" value="username@website.com">
  <input type="submit" value="Remove from List">
</form>


{# Allow a user to submit their email to subscribe from a specific List #}
<form method="post" accept-charset="utf-8">
  <input type="hidden" name="action" value="sproutLists/lists/subscribe">
  <input type="hidden" name="listHandle" value="listHandle">
  <input type="hidden" name="elementId" value="{{ entry.id }}">
  <input type="email" name="email" value="username@website.com">
  <input type="submit" value="Add to List">
</form>
```

:::

### craft.sproutLists.isSubscribed()

To check if someone is subscribed to a list you can check for a subscription. A subscription is a relationship between a Subscriber and a List, on a particular list.

The `isSubscribed` variable can take the following arguments:

- **listType** and **listHandle** (required)
- **elementId** or **listId** (required) 
- **userId** or **email** (required)

The _listType_ defaults to `subscriber` (the Sprout Lists List Type) but may be updated to work with third-party list type integrations such as `mailchimp`. See documentation on a specific integration for appropriate list type.

The _userId_ can only be used if you `Enable User Sync` in the Sprout Lists settings.


## Displaying Counts

### Subscriber Counts

``` twig
{# Total Subscribers on a given List #}
{% set totalSubscribers = craft.sproutLists.subscriberCount({ 
  listHandle: 'listHandle' 
}) %}

{{ totalSubscribers }}
```

### List Counts

``` twig
{# Total Lists that include the subscriber with the given User ID #}
{% set totalLists = craft.sproutLists.getListCount({
  userId: currentUser.id
}) %}

{{ totalLists }}
```

``` twig
{# Total Lists that include the subscriber with the given email #}
{% set totalLists = craft.sproutLists.getListCount({
  email: 'username@website.com'
}) %}

{{ totalLists }}
```

## Listing all Subscribers

To retrieve and display all Subscribers (or Users) on a List:

``` twig
{# All Subscribers on a List #}
{% set subscribers = craft.sproutLists.subscribers({
  listHandle: 'listHandle'
}) %}

{# Looping through the Sprout Lists Subscribers results #}
{% for subscriber in subscribers %}
  {{ subscriber.email }}
  {{ subscriber.firstName }}
  {{ subscriber.lastName }}
{% endfor %}

{# Looping through the Subscriber results as Users using the `subscriberUserIds` filter #}
{% for user in craft.users
  .id(subscribers|subscriberUserIds)
  .limit(10)
  %}
  {{ user.username }}<br/>
{% endfor %}
```

This requires the `Enable User Sync` setting to be turned on and your subscribers to be matched to User IDs in Craft.

