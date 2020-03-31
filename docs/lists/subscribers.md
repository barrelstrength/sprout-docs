# Subscribers

A Subscriber is the person that subscribes to a list. A subscriber can be an existing User in Craft or an anonymous user. In either case, the Subscriber is identified by their email address.

A Subscriber can be added to multiple Lists but a Subscriber can only be added to a specific list once. A Subscriber can subscribe to any Element in Craft – Entries, Categories, Products, Users, Lists, etc.

When an _email address_ is added to a Subscriber List, if the _email address_ matches the address of a known User in Craft, a link can be created between the two. 

See the [Enable User Sync](./settings.md) setting for more info.

## Templating
 
### Get all Lists belonging to a specific Subscriber

``` twig
{% set subscriber = craft.sproutLists.subscribers
    .email('ben@barrelstrengthdesign.com')
    .one() %}
    
{% for list in subscriber.getLists().all() %}
	{{ list.name }}
{% endfor %}
```

### Get all Subscribers on a given List

The List ID can be found in the sidebar of the List edit page in the control panel.

``` twig
{% set subscribers = craft.sproutLists.subscribers
    .listId(123)
    .all() %}

{% for subscriber in subscribers %}
    {{ subscriber.email }}
{% endfor %}
```