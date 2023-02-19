---
date: 2023-02-19
description: In many cases, when you trigger an event there may be some custom data you want to use in your notification.
---

# Personalization

In many cases, when you trigger an event there may be some custom data you want to use in your notification. For example, when an Entry is saved you might want to know who the author was and where you can view the entry, when a form is submitted you may want to include the data from the Form submission in your notification, and when a product is purchased you might want to know which product and by whom.

Sprout Email allows you to personalize your email in several places including:

- Subject line
- From Name
- From Email (you probably don't want to use this)
- Reply To Email
- Recipients
- Default Body Field
- Templates (HTML and Text)

You can personalize your Notification Email with data from an event's `object` variable which is uniquely defined by each Notification Event.

## The Object Variable

To understand what values are available to use for personalization you will need to understand which Object variable is available when a Notification Email is triggered. The available Object variable will depend on the Notification Event, however, it will always be accessed in a similar way.

We use the variable name `object` because we want a single variable name for all Notification Events, even though it may refer to many different types of data. When an Entry Notification Event is triggered, the `object` variable may refer to the Entry Element. When a Commerce Product Notification Event is triggered, the `object` variable may refer to the Product Element.

As we use the `object` variable in our settings, we can think of each of our settings like a mini Twig template that only has our `object` variable available to it.

| Template |  Variables | Output  |
|:-------- |:---------- |:------- |
| Subject Line (Notification Email) | object | Subject Line (Message) |
| From Name (Notification Email) | object | From Name (Message) |
| From Email (Notification Email) | object | From Email (Message) |
| Reply To (Notification Email) | object | Reply To Email (Message) |
| Recipients (Notification Email) | object | Recipients (Message) |
| Default Body Field (Notification Email) | object | Default Body Field (Message Body) |
| Email Templates (Email Templates) |email, object | Email HTML & Text (Message Body) |

::: tip
If the idea of an `object` variable doesn't make sense yet, read more about [Object Syntax](./object-syntax.md).
:::

## Object Variables

The table below outlines the default Notification Events and the value you can expect when interacting with the Notification Event's `object` variable.

| Event |  Model |
|:-------- |:---------- |
| When a new entry is created | Entry |
| When an existing entry is updated | Entry |
| When a new user is created | User |
| When a existing user is updated | User |
| When a user is activated | User |
| When a user is deleted | User |
| When a user logs in | User |
| When a Craft Commerce order is completed | – | 
| When a Craft Commerce transaction is saved | – | 
| When a Craft Commerce order status is changed | – |  
| When a Sprout Form Entry is submitted | Form |

### Craft Commerce Order Status Event

The _When a Craft Commerce order status is changed_ event provides two objects, so the syntax is slightly different.

#### Example variable syntax for the Commerce_OrderModel

- `{order.number}`
- `{{ object.order.number }}`

#### Example variable syntax for the Commerce_OrderHistoryModel

- `{orderHistory.newStatus.name}`
- `{orderHistory.prevStatus.name}`
- `{{ object.orderHistory.newStatus.name }}`
- `{{ object.orderHistory.prevStatus.name }}`

## Templating

In your notification templates you can use any Twig code that you would use elsewhere in your templates. Additionally, Sprout Email Notifications give you access to the Notification Email Element (`email`) and any Notification Event Object variable (`object`):

``` twig
{# Notification Default Fields #}
{{ email.subjectLine }}<br/>
{{ email.slug }}<br/>
{{ email.status }}<br/>
{{ email.fromName }}<br/>
{{ email.fromEmail }}<br/>
{{ email.replyTo }}<br/>

{# Notification Custom Fields 
   These examples may not work in your project. You will need to
   update these examples to reference custom fields you are using.
------------------------------------------------------------ #}
{{ email.emailBody }}
{{ email.emailBanner.first().getUrl() }}
{{ email.emailFooter }}

{# Dynamic Data
   These examples may not work in your project. The available dynamic
   values depend on the event you have triggered.
------------------------------------------------------------ #}
{{ object.title }}
{{ object.applicantEmail }}
```
