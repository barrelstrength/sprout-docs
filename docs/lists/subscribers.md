## Subscribers

The person that subscribes to a list. By default Sprout Lists will create a generic Subscriber Element Type, however, Craft Users can also be treated as subscribers. A list can consist of both generic Subscribers and Craft Users. (What happens when a generic subscriber becomes a Craft User in the future?)

Subscribers can be added to a Subscriber List in Sprout Lists using two types of Subscriptions:

1. **Craft User Subscription**: A relationship between an `Element ID` and a `User ID`
2. **Email Subscription**: A relationship between an `Element ID` and an `email address`

A Subscriber can be on multiple `Lists` but a Subscriber can only be on a single list once. A Subscriber can be allowed to subscribe to any Element in Craft – Entries, Categories, Products, Users, Lists, etc.

When an `email address` is added to a Subscriber List, if the `email address` matches the address of a known User in Craft, a link can be created between the two (more info on the `Enable User Sync` setting below).
