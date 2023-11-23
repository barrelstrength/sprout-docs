---
date: 2023-02-19
description: Sprout Reports is designed to help make it easy for clients to run queries and get back the data they need.
---

# Custom SQL Queries

The **Custom Query** Data Source allows you to create Reports in the Craft Control Panel using a custom query. A simple example, where you are always guaranteed one row of data, is to query the users table:

``` sql
-- Query all data in the Users table
SELECT *
FROM users;
```

_This example assumes you setup Craft with the default database table naming conventions._

## Complex Queries

One reason Craft is powerful is because it allows users to build complex relational content from a very user-friendly UI. While that is nice for users, it can make certain queries very complex when retrieving your data. Data Studio is designed to help make it easy for clients to run queries and get back the data they need. It is not designed to write those queries for you, and writing advanced custom queries in SQL is probably the least user-friendly way to create Data Sets for your users.

The examples below are not meant to be comprehensive or accurate for every situation. They are meant to be used as a starting point and the responsibility is on you to update the queries to meet your needs or find someone who can.

::: tip Custom Data Sources
Create more user-friendly Data Sets using the [Twig Template Query](./custom-twig-template-report.md) Data Source or by creating a custom Data Source integration. 
:::

## Relations Fields

Relation Fields (Entries, Categories, Users, Assets, and Tag fields) store their data via a related ID. This means a basic query will not return any information about the Relations Fields in an Entry.

In this example, we create two queries: the first returning the data about our content from a particular section without the relation data and the second returning the data about all of the content related to our section. We then use a `UNION` to combine the results of our two queries.

``` sql
SELECT content.id, 
       content.title,
       null as "Related IDs (comma-separated)",
       null as "Related Titles (comma-separated)"
FROM content AS content
JOIN entries AS entries
	ON entries.id = content.elementId
JOIN relations AS relations
	ON entries.id = relations.sourceId
WHERE entries.sectionId = 2
UNION
SELECT relations.targetId AS relatedElementId,
	   content.title AS relatedContentTitle,
	   GROUP_CONCAT(content.elementId separator ',') AS "Related IDs (comma-separated)",
	   GROUP_CONCAT(content.title separator ',') AS "Related Titles (comma-separated)"
FROM relations AS relations
JOIN entries AS entries
	ON entries.id = relations.sourceId
JOIN content AS content
	ON relations.targetId = content.elementId
WHERE relations.sourceId = entries.id
AND entries.sectionId = 2
GROUP BY relations.sourceId
```

::: tip
If you need help building a specific query, feel free to reach out. We're happy to add more examples for common use cases or help out in a consulting relationship to help you meet your projects reporting needs.

Contact us: [sprout@barrelstrengthdesign.com](mailto:sprout@barrelstrengthdesign.com)
:::