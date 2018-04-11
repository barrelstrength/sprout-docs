Sprout Import provides a Sprout SEO Redirect import utility that can help you convert a spreadsheet of Redirects into a JSON format that can be imported with Sprout Import.

To use this feature:

1) Create a spreadsheet of your redirects with 5 columns:

- oldUrl (relative url)
- newUrl (relative url)
- method (301, 302, 404)
- regex (1 or 0)
- count (0)

2) Create a sixth column to combine all of your Redirect values into a comma-separated list:

```
oldUrl, newUrl, method, regex, count
```

3) Copy and paste your list of comma-separated redirects into the Sprout Import SEO Helper utility

```
/old-url, /new-url, 301, 0, 0
/another-old-url, /another-new-url, 302, 0, 0
/retired-section(.*), /new-section, 301, 1, 0
```

4) Select "Generate JSON" and copy the output to the `Sprout Import->Import` tab `Import via Copy/Paste` field.