---
date: 2023-02-19
description: Wish Lists can be managed by Users and, in many cases, the User ID will be used as the Element ID that the List depends on.
---

# Wish Lists

## Create a List

Wish Lists can be managed by Users and, in many cases, the User ID will be used as the Element ID that the List depends on.

``` twig
<form method="post" accept-charset="utf-8">
    {{ csrfInput() }}
    {{ redirectInput('lists') }}
    <input type="hidden" name="action" value="sprout-lists/lists/save-list">
    <input type="hidden" name="listType" value="barrelstrength\sproutbaselists\listtypes\WishList">
    <input type="hidden" name="elementId" value="{{ currentUser.id }}">
    <input type="text" name="name" value="Wish List">
    <input type="text" name="handle" value="favorites-uniqueHandle">
    <input type="submit" value="Save List">
</form>
```

## Subscribe and Unsubscribe

Below is a full example of how give a user can Add or Remove items from a Wish List. Wish Lists h

``` twig
{# Get all lists of a certain type that belong to a user #}
{% set lists = sprout.lists.lists
    .elementId(currentUser.id)
    .handle('favorites*')
    .all() %}

{# Let a user choose a List to add an item #}
<form method="post" accept-charset="utf-8">
    {{ csrfInput() }}
    <input type="hidden" name="action" value="sprout-lists/lists/add">
    <input type="hidden" name="list[type]" value="barrelstrength\sproutbaselists\listtypes\WishList">
    <input type="hidden" name="list[elementId]" value="{{ currentUser.id }}">
    <input type="hidden" name="subscription[itemId]" value="123">

    <select name="list[id]">
        {% for list in lists %}
            <option value="{{ list.id }}">{{ list.name }}</option>
        {% endfor %}
    </select>

    <input type="submit" value="Add to List">
</form>
```

## List Elements

While the List can be linked to the default List Element ID, a List can also be mapped to any Element in Craft (Entries, Users, Products, etc.). If you choose to identify your List by a non-List Element you will need to use two variables to submit and retrieve data from the list. The combination of the two variables `elementId` and `listHandle` must be unique.

This means that Lists that target two different `elementId`s can use the same `listHandle`. And two Lists that use the same `elementId` would require unique handles. Be sure to update your queries and form input fields to reflect both the `elementId` and `listHandle` attributes as appropriate.

``` twig
{# Retrieve a list #}
{% set list = sprout.lists.lists
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

## Subscriber Info

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

## Wish Lists

Sprout Lists can treat any Element as a List. This is a powerful detail and opens the door for a lot more creative uses of lists.

Consider the following examples:

| Type of List | Use Case | Element ID |
|:------------ |:-------- |:---------- |
| Favorite&nbsp;Author | A list of people who have expressed interest in being notified when an author they like posts a new article | In this case, the List is the User Element ID of the Author that is being followed. |
| Product&nbsp;Release | A list of people who want to be notified when a new product is released | The List here is the Product Element ID.  |
