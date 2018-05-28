# Update Existing Elements

If you are importing content that may already exist in your database, the Sprout Import `updateElement` key can help you:

- Update an existing element with additional data
- Update or overwrite an existing element with new data
 
Like the `related` key, the `updateElement` key allows you to match existing Elements with flexible criteria. If an item is matched, the data provided will be used to update attributes on the matched item. You can choose to overwrite all values completely, or just update a specific value. If a field in your JSON file has a blank value, it will overwrite the existing value. If you don't include a specific field in your JSON, the existing value will not be touched.

## Example of updateElement key

The `updateElement` key must be defined within the `settings` section of your import definition.

``` json
[
	{
		"@model": "barrelstrength\\sproutimport\\integrations\\sproutimport\\elements\\Entry",
		"attributes": { ... },
		"content": {
			"oldId": 14,
			"title": "Title of post",
			"fields": { ... }
		},
		"settings": {
			"updateElement": {
				"matchBy": "oldId",
				"matchValue": 14,
				"matchCriteria": {
					"section": "projects"
				}
			}
		}
	}
]
```

_Use "@model": "EntryModel" in Craft 2_


## Example of import mapping using related and updateElement keys

``` json
[
	{
		"@model": "barrelstrength\\sproutimport\\integrations\\sproutimport\\elements\\Entry",
		"attributes": { ... },
		"content": {
			"oldId": 14,
			"title": "Title of post",
			"fields": { ... },
			"related": {
				"heroImage": {
					"@model": "barrelstrength\\sproutimport\\integrations\\sproutimport\\elements\\Asset",
					"matchBy": "filename",
					"matchValue": "ImageName03.jpg",
					"matchCriteria": {
						"source": "images",
						"folderId": 8
					}
				}
			}
		},
		"settings": {
			"updateElement": {
				"matchBy": "oldId",
				"matchValue": 14,
				"matchCriteria": {
          "section": "projects"
        }
			}
		}
	}
]
```

_Use "@model": "EntryModel" and "@model": "AssetModel" in Craft 2_