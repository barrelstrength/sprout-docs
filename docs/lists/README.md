# Sprout Lists

Sprout Lists allows your users to:

<i class="fa fa-check-square fa-fw update-improved"></i> Subscribe and unsubscribe to things<br>
<i class="fa fa-heart fa-fw update-improved"></i> Follow or unfollow things<br>
<i class="fa fa-thumbs-up fa-fw update-improved"></i> Like or unlike things<br>

Subscribers can be added and removed to Lists within Craft, using the default Subscriber List Type, or third-party lists using a [Custom List Type](/craft-plugins/lists/docs/developers/list-types) integration.

_Note: We will use the term **Subscribe** throughout the docs, but you can substitute in the terms **Like** or **Follow** as you prefer._

## Subscribers

Subscribers can be added to a Subscriber List in Sprout Lists using two types of Subscriptions:

1. **Craft User Subscription**: A relationship between an `Element ID` and a `User ID`
2. **Email Subscription**: A relationship between an `Element ID` and an `email address`

A Subscriber can be on multiple `Lists` but a Subscriber can only be on a single list once. A Subscriber can be allowed to subscribe to any Element in Craft – Entries, Categories, Products, Users, Lists, etc.

When an `email address` is added to a Subscriber List, if the `email address` matches the address of a known User in Craft, a link can be created between the two (more info on the `Enable User Sync` setting below).

## Settings

### Enable User Sync

When an `email address` is added to a Subscriber List, if the `email address` matches the address of a known `User ID` in Craft, Sprout Lists can create a link between the two. Enable this behavior the the Sprout Lists settings.

User Sync will behave as follows when enabled:

- When a new user is created in Sprout Lists, Sprout Lists will check if any Craft Users with a matching email address also exist. If so, Sprout Lists will create a link between the two.
- When a new user is created and saved in Craft, if there are any matching Subscribers in Sprout Lists, their Sprout Lists Subscriber Records will be linked to the Craft User account.
- When any updates are made to the Email, First Name, and Last Name fields of a Sprout Lists Subscriber or Craft User, those updates will be reflected in both places

_Note: With User Sync enabled, if you submit a blank value for the First Name or Last Name fields (in Sprout List or Craft), the field will also be updated with a blank value in the other location. You will need to enforce First Name and Last Name fields as required if necessary._




## Subscribe and Unsubscribe Forms

Example subscribe and unsubscribe form for known Craft Users using an hidden `userId` field:

### Craft 3

``` twig
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

### Craft 2

``` twig
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

Example subscribe and unsubscribe form for an anonymous user with an email address using an `email` field. Note the `email` field in place of the `userId` field in the last example.

### Craft 3

``` twig
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

### Craft 2

``` twig
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

## Getting and displaying all Subscribers (or Users) on a List

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


