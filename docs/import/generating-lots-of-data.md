# Generating Lots of Data

Sprout Import's Seed Generator is a quick way to generate fake data to work with in Craft. For very specific and larger fake data scenarios, consider generating fake data using [Faker and an import generator file]({entry:2485:url}).

## Resource Limits

When using the Seed Generator in Sprout Import, it's a good idea to consider how complicated your Field Layout is. Some Field Layouts have tens or hundreds of fields and use advanced fields like Element Relations and Matrix Fields with Element Relations fields, etc.

The current Seed Generator is very simple in how it is implemented. It can generate 100s of Elements at a time if the Element being generated is simple and the resource limits of the environment are appropriate.  However, as the complexity of the type of content you are generating seed data goes up, you may run into resources limits in your environment such as PHPs Memory Limit or Max Execution time.

Consider raising these values in your environment if you are generating lots of Seed content and also consider generating smaller numbers of Seed content for more advanced data types. For example, if your Channel has hundreds of fields, try generating 1 or 2 entries at a time if you are running into resource limits when trying to generate more entries.


