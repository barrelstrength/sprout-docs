# Resolving relationships

Sprout Import can help you resolve relationships based on attributes and criteria. In the most direct way, you can import known relational data using the same data structure as Craft – an array of Element IDs `[4, 5, 6]`:

``` json
[
	{
		"@model": "barrelstrength\\sproutimport\\integrations\\sproutimport\\elements\\Entry"
		"attributes": { ... },
		"content": {
			"title": "In quaerat maiores sit est rerum iusto.",
			"fields": {
				"categoryRelationsHandle": [4, 5, 6]
			}
		}
	}
]
```

_Use "@model": "EntryModel" in Craft 2_

Sometimes you know you want to populate a relations field but you don't know the Element ID in Craft. In these cases, the `related` key can come in handy. Consider the following scenarios:

### Match Relations by slug

The code below says _if you find any Categories that are using the values “category-slug-one” or “category-slug-two” as their slug in the Category Group with ID number 1, then create a relationship with that category to the “categoryRelationsHandle” field on this Entry Element._

``` json
[
	{
		"@model": "barrelstrength\\sproutimport\\integrations\\sproutimport\\elements\\Entry"
		"attributes": { ... },
		"content": {
			"title": "In quaerat maiores sit est rerum iusto.",
			"fields": { ... },
			"related": {
				"categoryRelationsHandle": {
					"@model": "barrelstrength\\sproutimport\\integrations\\sproutimport\\elements\\Category"
					"matchBy": "slug",
					"matchValue": ["category-slug-one","category-slug-two"],
					"matchCriteria": {
						"groupId": 1
					}
				}
			}
		}
	}
]
```

_Use "@model": "EntryModel" and "@model": "CategoryModel" in Craft 2_

### Match Assets by filename

The code below says _if you find any Assets that are using the value “ImageName03.jpg” as their filename in the Asset Source "images" in the folder with "folderId" equal to 8, then create a relationship with that Asset to the “thumbnailImage” field on this Entry Element._

``` json
[
	{
		"@model": "barrelstrength\\sproutimport\\integrations\\sproutimport\\elements\\Entry"
		"attributes": { ... },
		"content": {
			"title": "In quaerat maiores sit est rerum iusto.",
			"fields": { ... },
			"related": {
				"thumbnailImage": {
          "@model": "barrelstrength\\sproutimport\\integrations\\sproutimport\\elements\\Asset"
					"matchBy": "filename",
					"matchValue": ["ImageName03.jpg"],
					"matchCriteria": {
						"source": "images",
						"folderId": 8
					}
				}
			}
		}
	}
]
```

_Use "@model": "EntryModel" and "@model": "AssetModel" in Craft 2_

### Match User Relations to a custom field with an old ID for the User you wish to relate to.

Let's say you are migrating content from an another database. You migrate over the users but when you import them into Craft, the IDs for that user are different. To help with the migration process it's sometimes helpful to create a custom field called "Old ID" and import the ID that identified the item you are importing in the old system. 

Once that is in place, you can prepare your import to match content related to that particular User based on the Old ID value that the user was related with in the old system.

The code below says _if you find any Users that have the values 89, 139 or 95 in the custom field with the handle "oldId" in the User Group with ID number 3, then create a relationship with that User to the “relatedAuthors” field on this Entry Element._

``` json
[
	{
		"@model": "barrelstrength\\sproutimport\\integrations\\sproutimport\\elements\\Entry"
		"attributes": { ... },
		"content": {
			"title": "In quaerat maiores sit est rerum iusto.",
			"fields": { ... },
			"related": {
				"relatedAuthors": {
					"@model": "barrelstrength\\sproutimport\\integrations\\sproutimport\\elements\\User",
					"matchBy": "oldId",
					"matchValue": [
						89,
						139,
						95
					],
					"matchCriteria": {
						"groupId": 3
					}
				}
			}
		}
	}
]
```

_Use "@model": "EntryModel" and "@model": "UserModel" in Craft 2_

----

### Relations within Matrix Blocks

The `related` key is also supported within the Matrix Block `fields` array. See [Importing Matrix Data]({entry:2361:url}) for more info.

----

### Creating Elements on the Fly

If you need relate and item but you can't be certain the related item is already in the database, see [Creating Elements on The Fly]({entry:2474:url})