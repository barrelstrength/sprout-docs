# Migrate data from ExpressionEngine to Craft CMS

To get data from ExpressionEngine into Craft, you can create a helper template in ExpressionEngine that gets your data into the proper import format to import using Sprout Import. You may also need to install a couple helper plugins, to assist with getting your data into the proper JSON format.

In this example we are exporting a Product Channel from ExpressionEngine and importing it into Craft Commerce. In Craft Commerce we have a Product Type with Variants and Custom Fields on our Product Field Layout and Variant Field Layout. We are matching Categories from the old ExpressionEngine site on the Craft Product Field Layout by their slugs, and we are matching Assets from the old ExpressionEngine site on the Craft Variant Field Layout by their filenames. We are using the ExpressionEngine plugins [Stringy](https://devot-ee.com/add-ons/stringy) and [Strip Line Breaks](https://devot-ee.com/add-ons/strip-line-breaks) to help prepare the data import and ensure we have [valid JSON](http://jsonlint.com/).

Before importing the Products into Craft, Categories were migrated manually, as there were just a few of them. Assets were also migrated manually and synced with Craft, so we could later match them by filename as we import our products. To avoid having to figure out which images were in use and not in use on the previous site, you can use an image scraping tool like [SiteSucker](http://ricks-apps.com/osx/sitesucker/index.html) (for OSX) to just grab the images that are linked on the website pages you are migrating.

### Craft 2

``` html
[
	{exp:channel:entries
		channel="products"
		disable="member_data|pagination|trackbacks"
		dynamic="no"
		limit="250"
	}
	{
		"@model": "Commerce_ProductModel",
		"attributes": {
			"typeId": 1,
			"locale": "en_us",
			"slug": "{url_title}",
			"postDate": {
				"date": "9/20/2016",
				"time": "9:00 AM"
			},
			"enabled": 1,
			"taxCategoryId": 1,
			"freeShipping": "",
			"promotable": 1
		},
		"variants": {
			{product_sizes search:model_type="=1"}
			"new{row_count}": {
				"title": "{title} - {model_num}",
				"sku": "{model_num}",
				"price": 1,
				"unlimitedStock": 1,
				"minQty": "",
				"maxQty": "",
				"length": "{exp:stringy:replace find='"' replace=''}{exp:stringy:limitchars limit='2'}{model_length}{/exp:stringy:limitchars}{/exp:stringy:replace}",
				"width": "{exp:stringy:replace find='"' replace=''}{exp:stringy:limitchars limit='2'}{model_width}{/exp:stringy:limitchars}{/exp:stringy:replace}",
				"height": "{exp:stringy:replace find='"' replace=''}{exp:stringy:limitchars limit='2'}{model_height}{/exp:stringy:limitchars}{/exp:stringy:replace}",
				"weight": "1",
				"fields": {},
				"related": {
					"productImage": {
						"@model": "AssetModel",
						"matchBy": "filename",
						"matchValue": ["{product_images limit="1"}{img_file}{file_name}{/img_file}{/product_images}"],
						"matchCriteria": {
							"source": "products"
						}
					}
				}
			}{if row_count != total_rows},{/if}
			{/product_sizes}
		},
		"content": {
			"title": "{title}",
			"fields": {
				"features": "{exp:strip_line_breaks}{exp:stringy:replace find='"' replace='\"'}{product_features}{/exp:stringy:replace}{/exp:strip_line_breaks}"
			},
			"related": {
				"productCategories": {
					"@model": "CategoryModel",
					"matchBy": "slug",
					"matchValue": [{categories backspace="1"}"{category_url_title}",{/categories}],
					"matchCriteria": {
						"groupId": 1
					}
				}
			}
		}
	}{if count != total_results},{/if}
	{/exp:channel:entries}
]
```