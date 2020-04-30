---
date: 2018-06-25
description: Rules give you control over conditional logic in your Forms.
---

# Rules

Rules give you control over conditional logic in your Forms.

## Field Rules

Field Rules allow you to hide or show fields based on certain criteria. Field Rules can be created on the Rules tab in a given Form's settings area. Field Rules consist of:

- **Form Field** - The target field in which the condition will be applied.
- **Condition** - The condition to use when checking a field 
- **Value** -  The value to check for to determine if the condition is met.

Field Rule conditions can contain multiple `AND` and/or `OR` conditions.

### Conditions

Each Form Field can define which conditions it supports so conditions may vary from field to field. The combination of the Form Field and the Condition will determine the options you have for the Value field. 

- `Is` and `IsNot`
- `Contains` and `DoesNotContain`
- `StartsWith` and `DoesNotStartWith`
- `EndsWith` and `DoesNotEndWith`
- `IsProvided` and `IsNotProvided`
- `IsChecked` and `IsNotChecked`
- `IsGreaterThan` and `IsLessThan`
- `IsGreaterThanOrEqualTo` and `IsLessThanOrEqualTo`

### Conflicts

The rule builder is a flexible tool and it is possible to create a rule that conflicts with another rule. It is the users responsibility to configure rules that play nicely with one another.



