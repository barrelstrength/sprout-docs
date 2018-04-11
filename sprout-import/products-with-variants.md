# Importing Craft Commerce Products and Variants

Sprout Import supports importing data to Craft Commerce Products Types with Product Fields and Variant Fields. Craft Commerce Products follow the same syntax as any other Element with the addition of a `variants` key. All of the same enhanced functionality like the `related` and `updateElement` keys are available when importing Craft Commerce Products.

### Example of Product with a single variant

Similar to the Matrix Field, when importing Variants using the `variants` key, you can add an arbitrary number of variants using the convention `new1`, `new2`, `new3`, etc.

### Craft 2

``` json
[
    {
        "@model": "Commerce_ProductModel",
        "attributes": {
            "typeId": 1,
            "locale": "en_us",
            "slug": "useful-product",
            "postDate": {
                "date": "1/01/2012",
                "time": "10:00 AM"
            },
            "enabled": 1,
            "taxCategoryId": 1,
            "shippingCategoryId": 1,
            "freeShipping": "",
            "promotable": 1
        },
        "content": {
            "title": "Useful Product",
            "fields": {
                "body": "Product information"
            }
        },
        "variants": {
            "new1": {
                "title": "Useful Product",
                "sku": "ABCD-123",
                "price": 1,
                "unlimitedStock": 1,
                "minQty": "",
                "maxQty": "",
                "length": "",
                "width": "",
                "height": "",
                "weight": "",
                "fields": { ... }
            }
        }
    }
]

```

### Example of a product with related Product and Variants content

In this example we use the `related` key to find a match for an Asset and Category Relation field to the Product, and an Asset Relation field for the Variant.

### Craft 2

``` json
[
    {
        "@model": "Commerce_ProductModel",
        "attributes": {
            "typeId": 1,
            "locale": "en_us",
            "slug": "useful-product",
            "postDate": {
                "date": "1/01/2012",
                "time": "10:00 AM"
            },
            "enabled": 1,
            "taxCategoryId": 1,
            "shippingCategoryId": 1,
            "freeShipping": "",
            "promotable": 1
        },
        "content": {
            "title": "Useful Product",
            "fields": {
                "body": "Product information"
            },
            "related": {
                "assetFieldHandle": {
                  "@model": "AssetModel",
                  "matchBy": "filename",
                  "matchValue": ["product-photo.png"],
                  "matchCriteria": {
                    "source": "products"
                  }
                },
                "categoryFieldHandle": {
                    "@model": "CategoryModel",
                    "matchBy": "slug",
                    "matchValue": ["product-category"],
                    "matchCriteria": {
                        "groupId": 1
                    }
                }
            }
        },
        "variants": {
            "new1": {
                "title": "Useful Product",
                "sku": "ABCD-123",
                "price": 1,
                "unlimitedStock": 1,
                "minQty": "",
                "maxQty": "",
                "length": "",
                "width": "",
                "height": "",
                "weight": "",
                "fields": { ... },
                "related": {
                    "assetFieldHandle": {
                        "@model": "AssetModel",
                        "matchBy": "filename",
                        "matchValue": ["variant-photo.png"],
                        "matchCriteria": {
                            "source": "products"
                        }
                    }
                }
            }
        }
    }
]
```

