# Template Variables

Sprout Email supports two types of syntax when referencing dynamic variables: shorthand syntax and object syntax. The From Name, From Email, Reply To Email, Recipients, all custom fields in your email entries, and your templates will accept dynamic variables and process Twig. For more information, see the section below on [considerations about syntax and processing order](/craft-plugins/email/docs/examples/template-variables#considerations-about-syntax-and-processing-order).

## Craft Events

### Entry Events

- When a new entry is created
- When an existing entry is updated

**Example variable syntax**

- {title}
- {{ object.title }}

### User Events

- When a new user is created
- When a existing user is updated
- When a user is activated
- When a user is deleted
- When a user logs in

**Example variable syntax**

- {email}
- {{ object.email }}

## Craft Commerce Events

### Orders

- When a Craft Commerce order is completed (Commerce_OrderModel)

**Example variable syntax**

- {number}
- {{ object.number }}

### Transactions

- When a Craft Commerce transaction is saved (Commerce_TransactionModel)

**Example variable syntax**

- {amount}
- {{ object.amount }}

### Statuses

- When a Craft Commerce order status is changed (Commerce_OrderModel, Commerce_OrderHistoryModel)

_Note: This event provides two objects, so the syntax is slightly different_

**Example variable syntax for the Commerce_OrderModel**

- {order.number}
- {{ object.order.number }}

**Example variable syntax for the Commerce_OrderHistoryModel**

- {orderHistory.newStatus.name}
- {orderHistory.prevStatus.name}
- {{ object.orderHistory.newStatus.name }}
- {{ object.orderHistory.prevStatus.name }}

## Sprout Plugins

### Sprout Forms

- When a Sprout Form Entry is submitted

**Example variable syntax (assumes a custom field named email exists)**

- {email}
- {{ object.email }}


## Considerations about syntax and processing order

Rules of thumb:

- Use shorthand syntax where possible in Craft fields
- Use object syntax when you need conditional logic

Using shorthand syntax in your Custom Fields and the Control Panel reduces the chance for errors. Some fields, such as the Rich Text field may add spaces between your tags using object syntax (i.e. `{{ object.email }}`) and cause errors during processing. Also, adding more complex object syntax of Twig code can create trickier situations to debug when sending email.

The order that your fields are processed is as follows:

1. Subject, From Name, From Email, and Reply To fields are processed for dynamic variables.
2. Templates are rendered. All Twig markup and dynamic variables in your templates are processed. Any dynamic variables in custom fields get output in templates as is.
3. Templates are processed once more for dynamic variables.

While most of the time the order will not matter, if you need to use Twig syntax in anywhere in your custom fields you can run into situations where it causes conflicts as you output it to the templates. For example, if you have a custom field with Twig code and output that field using a filter in your templates, you will trigger an error. Stick to the rules of thumb above, test your emails, and check your `craft/storage/runtime/logs/sproutemail.log` file for more details if you run into any issues.