# Fields

::: code

``` craft3
[
  {
    "@model": "barrelstrength\\sproutimport\\importers\\settings\\Field",
    "type": "craft\\fields\\Assets",
    "groupId": 1,
    "name": "Example Assets",
    "handle": "sproutExampleAssets",
    "instructions": "",
    "useSingleFolder": false,
    "sources": "*",
    "defaultUploadLocationSource": "folder:1",
    "defaultUploadLocationSubpath": "",
    "singleUploadLocationSource": "folder:1",
    "singleUploadLocationSubpath": "",
    "restrictFiles": "",
    "limit": "",
    "viewMode": "list",
    "selectionLabel": "Add an asset",
    "useTargetSite": "",
    "targetSiteId": 1,
    "localizeRelations": ""
  },
  {
    "@model": "barrelstrength\\sproutimport\\importers\\settings\\Field",
    "type": "craft\\fields\\Categories",
    "groupId": 1,
    "name": "Example Categories",
    "handle": "sproutExampleCategories",
    "instructions": "",
    "branchLimit": null,
    "source": "group:1",
    "selectionLabel": "Add a category",
    "targetSiteId": null,
    "localizeRelations": 0
  },
  {
    "@model": "barrelstrength\\sproutimport\\importers\\settings\\Field",
    "type": "craft\\fields\\Checkboxes",
    "groupId": 1,
    "name": "Example Checkboxes",
    "handle": "sproutExampleCheckboxes",
    "instructions": "",
    "options": [
      {
        "label": "Option One",
        "value": "optionOne",
        "default": true
      },
      {
        "label": "Option Two",
        "value": "optionTwo",
        "default": false
      },
      {
        "label": "Option Three",
        "value": "optionThree",
        "default": false
      }
    ]
  },
  {
    "@model": "barrelstrength\\sproutimport\\importers\\settings\\Field",
    "type": "craft\\fields\\Color",
    "groupId": 1,
    "name": "Example Color",
    "handle": "sproutExampleColor",
    "instructions": "",
    "defaultColor": "#da513d"
  },
  {
    "@model": "barrelstrength\\sproutimport\\importers\\settings\\Field",
    "type": "craft\\fields\\Date",
    "groupId": 1,
    "name": "Example Date",
    "handle": "sproutExampleDate",
    "instructions": "",
    "showDate": 1,
    "showTime":0,
    "minuteIncrement": 30
  },
  {
    "@model": "barrelstrength\\sproutimport\\importers\\settings\\Field",
    "type": "craft\\fields\\Dropdown",
    "groupId": 1,
    "name": "Example Dropdown",
    "handle": "sproutExampleDropdown",
    "instructions": "",
    "options": [
      {
        "label": "Option One",
        "value": "optionOne",
        "default": true
      },
      {
        "label": "Option Two",
        "value": "optionTwo",
        "default": false
      },
      {
        "label": "Option Three",
        "value": "optionThree",
        "default": false
      }
    ]
  },
  {
    "@model": "barrelstrength\\sproutimport\\importers\\settings\\Field",
    "type": "craft\\fields\\Email",
    "groupId": 1,
    "name": "Example Email",
    "handle": "sproutExampleEmail",
    "instructions": ""
  },
  {
    "@model": "barrelstrength\\sproutimport\\importers\\settings\\Field",
    "type": "craft\\fields\\Entries",
    "groupId": 1,
    "name": "Example Entries",
    "handle": "sproutExampleEntries",
    "instructions": "",
    "sources": "*",
    "limit": 3,
    "selectionLabel": "Add an entry",
    "targetSiteId": null,
    "localizeRelations": 0
  },
  {
    "@model": "barrelstrength\\sproutimport\\importers\\settings\\Field",
    "type": "craft\\fields\\Lightswitch",
    "groupId": 1,
    "name": "Example Lightswitch",
    "handle": "sproutExampleLightswitch",
    "instructions": "",
    "default": true
  },
  {
    "@model": "barrelstrength\\sproutimport\\importers\\settings\\Field",
    "type": "craft\\fields\\Matrix",
    "groupId": 1,
    "name": "Example Matrix",
    "handle": "sproutExampleMatrix",
    "instructions": "",
    "minBlocks": null,
    "maxBlocks": null,
    "localizeBlocks": 0,
    "blockTypes": {
      "new1": {
        "name": "Block One",
        "handle": "blockOne",
        "fields": {
          "new1": {
            "type": "craft\\fields\\PlainText",
            "name": "Plain Text",
            "handle": "sproutExamplePlainTextMatrixOne",
            "instructions": "",
            "placeholder": "",
            "charLimit": null,
            "multiline": false,
            "initialRows": 4,
            "columnType": "text"
          }
        }
      },
      "new2": {
        "name": "Block Two",
        "handle": "blockTwo",
        "fields": {
          "new1": {
            "type": "craft\\fields\\PlainText",
            "name": "Plain Text",
            "handle": "sproutExamplePlainTextMatrixTwo",
            "instructions": "",
            "placeholder": "",
            "charLimit": null,
            "multiline": false,
            "initialRows": 4,
            "columnType": "text"
          }
        }
      }
    }

  },
  {
    "@model": "barrelstrength\\sproutimport\\importers\\settings\\Field",
    "type": "craft\\fields\\MultiSelect",
    "groupId": 1,
    "name": "Example Multi-select",
    "handle": "sproutExampleMultiselect",
    "instructions": "",
    "options": [
      {
        "label": "Option One",
        "value": "optionOne",
        "default": true
      },
      {
        "label": "Option Two",
        "value": "optionTwo",
        "default": false
      },
      {
        "label": "Option Three",
        "value": "optionThree",
        "default": false
      }
    ]
  },
  {
    "@model": "barrelstrength\\sproutimport\\importers\\settings\\Field",
    "type": "craft\\fields\\Number",
    "groupId": 1,
    "name": "Example Number",
    "handle": "sproutExampleNumber",
    "instructions": "",
    "min": 0,
    "max": 100,
    "decimals": 2,
    "size": 10
  },
  {
    "@model": "barrelstrength\\sproutimport\\importers\\settings\\Field",
    "type": "craft\\fields\\PlainText",
    "groupId": 1,
    "name": "Example Plain Text",
    "handle": "sproutExamplePlainText",
    "instructions": "",
    "placeholder": "",
    "charLimit": null,
    "multiline": false,
    "initialRows": 4,
    "columnType": "text"
  },
  {
    "@model": "barrelstrength\\sproutimport\\importers\\settings\\Field",
    "type": "craft\\fields\\RadioButtons",
    "groupId": 1,
    "name": "Example Radio Buttons",
    "handle": "sproutExampleRadioButtons",
    "instructions": "",
    "options": [
      {
        "label": "Option One",
        "value": "optionOne",
        "default": true
      },
      {
        "label": "Option Two",
        "value": "optionTwo",
        "default": false
      },
      {
        "label": "Option Three",
        "value": "optionThree",
        "default": false
      }
    ]
  },
  {
    "@model": "barrelstrength\\sproutimport\\importers\\settings\\Field",
    "type": "craft\\fields\\Table",
    "groupId": 1,
    "name": "Example Table",
    "handle": "sproutExampleTable",
    "instructions": "",
    "columns": {
      "col1": {
        "heading": "Column One",
        "handle": "columnOne",
        "width": "30%",
        "type": "singleline"
      },
      "col2": {
        "heading": "Column Two",
        "handle": "columnTwo",
        "width": "50%",
        "type": "multiline"
      },
      "col3": {
        "heading": "Column Three",
        "handle": "columnThree",
        "width": "10%",
        "type": "number"
      },
      "col4": {
        "heading": "Column Four",
        "handle": "columnFour",
        "width": "10%",
        "type": "checkbox"
      }
    },
    "defaults": {
      "row1": {
        "col1": "Lorem ipsum dolor",
        "col2": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        "col3": 11,
        "col4": true
      },
      "row2": {
        "col1": "Lorem ipsum dolor",
        "col2": "Aenean commodo ligula eget dolor.",
        "col3": 3,
        "col4": false
      }
    }
  },
  {
    "@model": "barrelstrength\\sproutimport\\importers\\settings\\Field",
    "type": "craft\\fields\\Tags",
    "groupId": 1,
    "name": "Example Tags",
    "handle": "sproutExampleTags",
    "instructions": "",
    "source": "taggroup:1",
    "selectionLabel": "Add a tag",
    "targetSiteId": null,
    "localizeRelations": 0
  },
  {
    "@model": "barrelstrength\\sproutimport\\importers\\settings\\Field",
    "type": "craft\\fields\\Url",
    "groupId": 1,
    "name": "Example URL",
    "handle": "sproutExampleUrl",
    "instructions": ""
  },
  {
    "@model": "barrelstrength\\sproutimport\\importers\\settings\\Field",
    "type": "craft\\fields\\Users",
    "groupId": 1,
    "name": "Example Users",
    "handle": "sproutExampleUsers",
    "instructions": "",
    "sources": "*",
    "selectionLabel": "Add a user",
    "targetSiteId": null,
    "localizeRelations": 0
  }
]
```

:::

## Sprout Fields

::: code

``` craft3
[
  {
    "@model": "barrelstrength\\sproutimport\\importers\\settings\\Field",
    "type": "barrelstrength\\sproutfields\\fields\\Address",
    "groupId": 1,
    "name": "Address Field",
    "handle": "addressField",
    "instructions": "",
    "defaultCountry": "DE",
    "hideCountryDropdown": 0
  },
  {
    "@model": "barrelstrength\\sproutimport\\importers\\settings\\Field",
    "type": "barrelstrength\\sproutfields\\fields\\Email",
    "groupId": 1,
    "name": "Email Field Basic",
    "handle": "emailFieldBasic",
    "instructions": "",
    "customPatternToggle": false,
    "customPattern": "",
    "customPatternErrorMessage": "",
    "uniqueEmail": false
  },
  {
    "@model": "barrelstrength\\sproutimport\\importers\\settings\\Field",
    "type": "barrelstrength\\sproutfields\\fields\\Email",
    "groupId": 1,
    "name": "Email Field - Unique",
    "handle": "emailFieldUnique",
    "instructions": "",
    "customPatternToggle": false,
    "customPattern": "",
    "customPatternErrorMessage": "",
    "uniqueEmail": true
  },
  {
    "@model": "barrelstrength\\sproutimport\\importers\\settings\\Field",
    "type": "barrelstrength\\sproutfields\\fields\\Email",
    "groupId": 1,
    "name": "Email Field - Custom Pattern",
    "handle": "emailFieldWithCustomPattern",
    "instructions": "",
    "customPatternToggle": true,
    "customPattern": "(.*)@barrelstrengthdesign.com",
    "customPatternErrorMessage": "Must use a barrelstrengthdesign.com email address",
    "uniqueEmail": false
  },
  {
    "@model": "barrelstrength\\sproutimport\\importers\\settings\\Field",
    "type": "barrelstrength\\sproutfields\\fields\\EmailDropdown",
    "groupId": 1,
    "name": "Email Dropdown Field",
    "handle": "emailDropdownField",
    "instructions": "",
    "options": [
      {
        "label": "Sales",
        "value": "sales@example.com"
      },
      {
        "label": "Support",
        "value": "support@example.com"
      }
    ]
  },
  {
    "@model": "barrelstrength\\sproutimport\\importers\\settings\\Field",
    "type": "barrelstrength\\sproutfields\\fields\\Notes",
    "groupId": 1,
    "name": "Notes",
    "handle": "notesFieldPrimary",
    "instructions": "",
    "output": "richText",
    "style": "default"
  },
  {
    "@model": "barrelstrength\\sproutimport\\importers\\settings\\Field",
    "type": "barrelstrength\\sproutfields\\fields\\Gender",
    "groupId": 1,
    "name": "Gender",
    "handle": "genderField",
    "instructions": ""
  },
  {
    "@model": "barrelstrength\\sproutimport\\importers\\settings\\Field",
    "type": "barrelstrength\\sproutfields\\fields\\Phone",
    "groupId": 1,
    "name": "Phone Field - All",
    "handle": "phoneFieldAll",
    "instructions": "",
    "limitToSingleCountry": 0,
    "country": "VE"
  },
  {
    "@model": "barrelstrength\\sproutimport\\importers\\settings\\Field",
    "type": "barrelstrength\\sproutfields\\fields\\Phone",
    "groupId": 1,
    "name": "Phone Field - US",
    "handle": "phoneFieldUS",
    "instructions": "",
    "limitToSingleCountry": 1,
    "country": "US"
  },
  {
    "@model": "barrelstrength\\sproutimport\\importers\\settings\\Field",
    "type": "barrelstrength\\sproutfields\\fields\\Predefined",
    "groupId": 1,
    "name": "Predefined Field",
    "handle": "predefinedField",
    "instructions": "",
    "fieldFormat": "{title} OR {{ object.title }}"
  },
  {
    "@model": "barrelstrength\\sproutimport\\importers\\settings\\Field",
    "type": "barrelstrength\\sproutfields\\fields\\RegularExpression",
    "groupId": 1,
    "name": "RegularExpression Field",
    "handle": "regularExpressionField",
    "instructions": "",
    "customPattern": "(.*)@barrelstrengthdesign.com",
    "customPatternErrorMessage": "Must be a barrelstrengthdesign.com email address.",
    "placeholder": "you@barrelstrengthdesign.com"
  },
  {
    "@model": "barrelstrength\\sproutimport\\importers\\settings\\Field",
    "type": "barrelstrength\\sproutfields\\fields\\Url",
    "groupId": 1,
    "name": "URL Field",
    "handle": "urlField",
    "instructions": "",
    "customPatternToggle": false,
    "customPattern": "",
    "customPatternErrorMessage": ""
  },
  {
    "@model": "barrelstrength\\sproutimport\\importers\\settings\\Field",
    "type": "barrelstrength\\sproutfields\\fields\\Url",
    "groupId": 1,
    "name": "URL Field - Custom Pattern",
    "handle": "urlFieldWithCustomPattern",
    "instructions": "",
    "customPatternToggle": true,
    "customPattern": "http://twitter.com",
    "customPatternErrorMessage": "Must be a Twitter URL"
  }
]
```

:::

## Redactor

::: code

``` craft3
[
  {
    "@model": "barrelstrength\\sproutimport\\importers\\settings\\Field",
    "type": "craft\\redactor\\RichText",
    "groupId": 1,
    "name": "Example Rich Text",
    "handle": "sproutExampleRichText",
    "instructions": "",
    "configFile": "Simple.json",
    "cleanupHtml": true,
    "purifyHtml": true,
    "columnType": "text"
  }
]
```

:::