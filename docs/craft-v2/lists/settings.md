## Settings

### Enable User Sync

When an `email address` is added to a Subscriber List, if the `email address` matches the address of a known `User ID` in Craft, Sprout Lists can create a link between the two. Enable this behavior the the Sprout Lists settings.

User Sync will behave as follows when enabled:

- When a new user is created in Sprout Lists, Sprout Lists will check if any Craft Users with a matching email address also exist. If so, Sprout Lists will create a link between the two.
- When a new user is created and saved in Craft, if there are any matching Subscribers in Sprout Lists, their Sprout Lists Subscriber Records will be linked to the Craft User account.
- When any updates are made to the Email, First Name, and Last Name fields of a Sprout Lists Subscriber or Craft User, those updates will be reflected in both places

::: warning
With User Sync enabled, if you submit a blank value for the First Name or Last Name fields (in Sprout List or Craft), the field will also be updated with a blank value in the other location. You will need to enforce First Name and Last Name fields as required if necessary.
:::