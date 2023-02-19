---
date: 2023-02-19
description: Reports exist in two forms. They display in web browser when viewed in the Control Panel and as CSV files when exported.
---

# HTML vs CSV

Reports exist in two forms. They display in web browser when viewed in the Control Panel and as CSV files when exported. If you wish to treat your data differently in these two contexts you can use the `isExport` variable.

## Twig Template Example

In Twig Template Reports the `isExport` variable is available in your results template.

``` twig{4}
{% do sprout.twigDataSet.addHeaderRow(['Row']) %}

{% do sprout.twigDataSet.addRow([
    isExport ? 'Not Link' : '<a href="">Link</a>'
]) %}
``` 

## Custom Data Source Example

When building a custom data source, the context is defined as a property on the DataSource class. The 'isExport' property is set to `false` by default and gets set to `true` when running the export action.

``` php{10}
class MyCustomDataSource extends DataSource
{
    ...

    public function getResults(Report $report, array $settings = []): array
    {
        // Results logic

        Craft::$app->getView()->renderTemplate('path/to/resultsTemplate', [
            'isExport' => $this->isExport,
            'settings' => $settings
        ]);
    }

    ...
}
```
