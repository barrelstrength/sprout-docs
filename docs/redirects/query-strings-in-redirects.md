# Query Strings in Redirects

Control the behavior around query strings in your Redirects using the **Redirect Match Strategy** and **Query String Strategy** settings. Below we'll take a look at examples of how these settings can be used.

### Redirect Match Strategy

The Redirect Match Strategy setting determines how to match 404 requests with Redirect records already captured in the database. Once the incoming Request URL is received, depending on this setting, the query string value may be retained or removed before searching the database for a matching value.

#### URL (with query strings) Example

| Request URL | www.website.com/blog?p=123 |
|:-- |:-- |
| Old URL Search Value | blog?p=123 |
| Old URL Match | blog?p=123 |

#### URL (without query strings) Example

| Request URL | www.website.com/blog?p=123 |
|:-- |:-- |
| Old URL Search Value | blog |
| Old URL Match | blog |

### Query String Strategy

The Query String Strategy setting determines how to treat query strings after processing a redirect.

#### Remove Query Strings Example

| Request URL | www.website.com/blog?p=123 |
|:-- |:-- |
| New URL Match | blog/slug-name |
| New URL Redirect Location | blog/slug-name |

#### Append Query Strings Example

| Request URL | www.website.com/blog?p=123 |
|:-- |:-- |
| New URL Match | blog/slug-name |
| New URL Redirect Location | blog/slug-name?p=123 |

### Combining Strategies

Together the **Redirect Match Strategy** and **Query String Strategy** settings allow redirects to be configured in several ways 

#### URL (with query strings) + Remove Query Strings

| Request URL | www.website.com/blog?p=123 |
|:-- |:-- |
| Old URL Search Value | blog?p=123 |
| Old URL Match | blog?p=123 |
| New URL Match | blog/slug-name |
| New URL Redirect Location | blog/slug-name |

#### URL (with query strings) + Append Query Strings

| Request URL | www.website.com/blog?p=123 |
|:-- |:-- |
| Old URL Search Value | blog?p=123 |
| Old URL Match | blog?p=123 |
| New URL Match | blog/slug-name |
| New URL Redirect Location | blog/slug-name?p=123 |

#### URL (without query strings) + Remove Query Strings

| Request URL | www.website.com/blog?p=123 |
|:-- |:-- |
| Old URL Search Value | blog |
| Old URL Match | blog |
| New URL Match | blog/slug-name |
| New URL Redirect Location | blog/slug-name |

#### URL (without query strings) + Append Query Strings

| Request URL | www.website.com/blog?p=123 |
|:-- |:-- |
| Old URL Search Value | blog |
| Old URL Match | blog |
| New URL Match | blog/slug-name |
| New URL Redirect Location | blog/slug-name?p=123 |