# Lists

A List can be associated with any Element and contain one or more Subscriptions. The default List Type to use in Sprout Lists is the Mailing List.

## Mailing List

Mailing Lists can have [Subscribers](./subscribers.md). The relationship between a List and a Subscriber is a [Subscription](./subscriptions.md). Mailing Lists can be created from the Control Panel. 

### Using Elements as Mailing Lists

Mailing Lists are flexible and powerful as they allow you to treat any Element Type as a List (Entries, Categories, Users, Products, etc.). Here are a few examples:

| Element | Example use case |
|:------- |:---------------- |
| List Element (default) | Send a newsletter to subscribers |
| Product Element | Allow users to follow a product to be updated about new features or releases |
| User Element | Allow users to follow their favorite author and get notified when new articles are posted |  

## Templating

### Subscribe and Unsubscribe

Below is a full example of how give a user can Subscriber or Unsubscribe from a list using the **List ID** to identify the List. 

``` twig
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

    {# Remove a subscriber from a list #}
    <form method="post" accept-charset="utf-8">
        {{ csrfInput() }}
        <input type="hidden" name="action" value="sprout-lists/lists/remove">
        <input type="hidden" name="list[type]" value="barrelstrength\sproutbaselists\listtypes\MailingList">
        <input type="hidden" name="list[id]" value="123">
        <input type="text" name="subscription[email]" value="{{ currentUser.email }}">
        <input type="submit" value="Remove from List">
    </form>

{% else %}

    {# Add a subscriber to a list #}
    <form method="post" accept-charset="utf-8">
        {{ csrfInput() }}
        <input type="hidden" name="action" value="sprout-lists/lists/add">
        <input type="hidden" name="list[type]" value="barrelstrength\sproutbaselists\listtypes\MailingList">
        <input type="hidden" name="list[id]" value="123">
        <input type="text" name="subscription[email]" value="{{ currentUser.email }}">
        <input type="submit" value="Add to List">
    </form>

{% endif %}
```

### List Elements

While the List can be linked to the default List Element ID, a List can also be mapped to any Element in Craft (Entries, Users, Products, etc.). If you choose to identify your List by a non-List Element you will need to use two variables to submit and retrieve data from the list. The combination of the two variables `elementId` and `listHandle` must be unique.

This means that Lists that target two different `elementId`s can use the same `listHandle`. And two Lists that use the same `elementId` would require unique handles. Be sure to update your queries and form input fields to reflect both the `elementId` and `listHandle` attributes as appropriate.

``` twig
{# Retrieve a list #}
{% set list = craft.sproutLists.lists
    .elementId(123)
    .handle('newsletter')
    .one() %}

{# Define the subscription you wish to add or remove from a list #}
{% set subscription = {
    email: currentUser.email
} %}

{# Check if the subscription already exists on a list #}
{% if list.isSubscribed(subscription) %}

    {# Remove a subscriber from a list #}
    <form method="post" accept-charset="utf-8">
        {{ csrfInput() }}
        <input type="hidden" name="action" value="sprout-lists/lists/remove">
        <input type="hidden" name="list[type]" value="barrelstrength\sproutbaselists\listtypes\MailingList">
        <input type="hidden" name="list[elementId]" value="123">
        <input type="hidden" name="list[handle]" value="newsletter">
        <input type="text" name="subscription[email]" value="{{ currentUser.email }}">
        <input type="submit" value="Remove from List">
    </form>

{% else %}

    {# Add a subscriber to a list #}
    <form method="post" accept-charset="utf-8">
        {{ csrfInput() }}
        <input type="hidden" name="action" value="sprout-lists/lists/add">
        <input type="hidden" name="list[type]" value="barrelstrength\sproutbaselists\listtypes\MailingList">
        <input type="hidden" name="list[elementId]" value="123">
        <input type="hidden" name="list[handle]" value="newsletter">
        <input type="text" name="subscription[email]" value="{{ currentUser.email }}">
        <input type="submit" value="Add to List">
    </form>

{% endif %}
```

### Subscriber Info

When you add a Subscriber to a List you can optionally define their First and Last Name as well. If you wish to sync the First and Last Name with a Craft User profile, you can enable `User Sync` in the Settings. By default Subscriber info will be stored only in the Subscriber Element in Sprout Lists.

``` twig
<form method="post" accept-charset="utf-8">
    {{ csrfInput() }}
    <input type="hidden" name="action" value="sprout-lists/lists/add">
    <input type="hidden" name="list[type]" value="barrelstrength\sproutbaselists\listtypes\MailingList">
    <input type="hidden" name="list[id]" value="123">
    <input type="text" name="subscription[email]" value="{{ currentUser.email }}">
    <input type="text" name="subscription[firstName]" value="{{ currentUser.firstName }}">
    <input type="text" name="subscription[lastName]" value="{{ currentUser.lastName }}">
    <input type="submit" value="Add to List">
</form>
```

### Displaying Counts

The number of Subscribers or Items on a list can be retrieved like so:

``` twig
{% set list = craft.sproutLists.lists.id(123).one() %}

{{ list.count }}
```
