Sometimes you need to run reports that query a lot of data, or complex data structures. If you have a report that is too large and runs out of memory before it is completed, below are a few options you may want to consider.

_These solutions will require some level of technical understanding and could depend on several variables unrelated to the Sprout Reports plugin in your hosting environment or code, including your web server, PHP installation, and Craft configuration. If you would like help evaluating your resource requirements, we are available to help out in a consulting relationship to help you meet your projects reporting needs._

**Can you optimize your Report's queries?** In the case you have Custom Query Reports or a custom Data Source, consider reviewing your code and make sure it's as efficient as it can be.

**Can you increase PHP's `max_execution_time` or `memory_limit` settings?** These settings can give you a bit more headroom for an extra large report.

**Can you increase your servers resources?** Upgrading to a more powerful server can provide more resources for memory-intensive tasks.

**Can you download your database and run the report locally?** In some cases, if you don't have the means to improve your hosting environment, you might be able to find a temporary workaround by working locally?
