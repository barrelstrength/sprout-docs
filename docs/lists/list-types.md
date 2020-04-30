---
date: 2018-06-25
description: Sprout Lists provides a default Subscriber List Type. Developers can add additional List Types to enable users and admins to subscribe and unsubscribe from third-party lists.
---

# List Types

Sprout Lists provides a default Subscriber List Type. Developers can add additional List Types to enable users and admins to subscribe and unsubscribe from third-party lists. 

A Custom List Type allows you to integrate with a third party API to:

- Enable a user to subscribe and unsubscribe to a list on the front-end of your website
- Enable an admin to subscribe and unsubscribe a user to a list in the Craft Control Panel (coming soon)
- Enable users to subscribe to a list when submitting a form using Sprout Forms (coming soon)

## Creating a Custom List Type

You can create a Custom List Type by:

1. Extending `ListType` with your Custom List Type
2. Register your Custom List Type using the `registerSproutListsListTypes()` hook

Sprout Lists uses its own Custom List Type API. See the Subscriber List Type as an example in Sprout Lists (sproutlists/integrations/sproutlists/SproutLists_SubscriberListType.php).