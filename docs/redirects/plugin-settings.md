# Settings

Customize your Redirects with the following settings.

| Setting          | Description |
|:---------------- |:----------- |
| **Log&nbsp;404&nbsp;Redirects** | Log 'Page Not Found' errors as 404 Redirects. 404 Redirects will appear on the Redirects tab as a disabled 404 Redirect Element and can be updated to 301 or 302 Redirects. |
| **Redirect&nbsp;Match&nbsp;Strategy** | How to match 404 requests with Redirect records already captured in the database. Defaults to matching the entire URL including query strings. Selecting 'without query strings' will remove all parameters from the request URL before searching for a match. See [Query String Examples](./query-strings-in-redirects.md). |
| **Query&nbsp;String&nbsp;Strategy** | How to treat query strings after processing a redirect. 'Remove query strings' will remove the query string from the incoming URL entirely. 'Append query strings' will add any query string from the incoming URL to the New Url. See [Query String Examples](./query-strings-in-redirects.md). |
| **Track&nbsp;Remote&nbsp;IP** | Enable to capture the IP Address used when a 404 request is saved. IP Addresses may be considered personal information. |
| **&nbsp;Redirect&nbsp;Limit** | The total number of 404 Redirects that will be stored in the database per-site. When the limit is reached, the least recently updated 404 Redirects will be deleted from the Redirects stored for that site. |
| **Cleanup&nbsp;Probability** | The probability that the 404 Redirect cleanup task will run each web request. A lower probability will trigger a cleanup task less often and the number of 404 Redirects stored in the database may be higher than the 404 Redirect Limit target until the cleanup task is triggered. |
| **Excluded&nbsp;URL&nbsp;Patterns** | Add any regular expression patterns you wish to exclude from the Redirect log. Add each pattern on a new line. Comments can be added by starting a line with the hash # character |
