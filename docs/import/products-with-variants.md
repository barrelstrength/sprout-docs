# Products & Variants

Sprout Import supports importing data to Craft Commerce Products Types with Product Fields and Variant Fields. Craft Commerce Products follow the same syntax as any other Element with the addition of a `variants` key. All of the same enhanced functionality like the `related` and `updateElement` keys are available when importing Craft Commerce Products.

## Products & Variants

Similar to the Matrix Field, when importing Variants using the `variants` key, you can add an arbitrary number of variants using the convention `new1`, `new2`, `new3`, etc.

::: code

``` craft3
[
  {
    "@model": "barrelstrength\\sproutbase\\app\\import\\importers\\elements\\Product",
    "attributes": {
      "typeId": 1,
      "slug": "useful-product",
      "postDate": {
        "date": "5/14/2016",
        "time": "9:45 AM"
      },
      "enabled": 1,
      "taxCategoryId": 1,
      "shippingCategoryId": 1,
      "freeShipping": "",
      "promotable": 1
    },
    "variants": {
      "new1": {
        "sku": "ABCD-123",
        "price": 16,
        "hasUnlimitedStock": 1,
        "minQty": "",
        "maxQty": "",
        "length": "",
        "width": "",
        "height": "",
        "weight": ""
      },
      "new2": {
        "sku": "ABCD-124",
        "price": 18,
        "hasUnlimitedStock": 1,
        "minQty": "",
        "maxQty": "",
        "length": "",
        "width": "",
        "height": "",
        "weight": ""
      }
    },
    "content": {
      "title": "Useful Product",
      "fields": {
        "body": "Product information"
      }
    }
  }
]
```

``` craft2
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
    },
    "content": {
      "title": "Useful Product",
      "fields": {
        "body": "Product information"
      }
    }
  }
]

```

:::

## Related Products & Variants

In this example we use the `related` key to find a match for an Asset and Category Relation field to the Product, and an Asset Relation field for the Variant.

::: code

``` craft3
[
  {
    "@model": "barrelstrength\\sproutbase\\app\\import\\importers\\elements\\Order",
    "attributes": {
      "currency": "USD",
      "billingAddressId": null,
      "shippingAddressId": null,
      "shippingMethodHandle": "freeShipping",
      "gatewayId": 1,
      "customerId": "customer@website.com",
      "orderStatusId": 1,
      "isCompleted": 1,
      "dateOrdered": "2016-05-21 01:08:38",
      "datePaid": "2016-05-21 01:09:38",
      "returnUrl": "/commerce/customer/order?number={number}",
      "cancelUrl": "/commerce/checkout/payment"
    },
    "content": {
      "title": "Order One",
      "fields": []
    },
    "lineItems": [
      {
        "sku": "ABCD-123",
        "qty": "3",
        "options": []
      },
      {
        "sku": "ABCD-124",
        "qty": "1",
        "options": []
      }
    ],
    "payments": {
      "firstName": "Boy",
      "lastName": "Sue",
      "number": "4929000000006",
      "month": "1",
      "year": "2020",
      "cvv": "123"
    },
    "transactions": {
      "status": "success",
      "reference": "ch_XXXXXX",
      "response": "{\"cardType\":\"visa\",\"cardExpiryMonth\":\"03\",\"cardExpiryYear\":\"2021\",\"gateway\":\"stripe\"}"
    },
    "addresses": {
      "billingAddress": {
        "firstName": "Boy",
        "lastName": "Sue",
        "countryCode": "GB",
        "state": "",
        "address1": "123 Road St",
        "city": "City",
        "zipCode": "12345"
      }
    }
  }
]
```

``` craft2
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

:::

