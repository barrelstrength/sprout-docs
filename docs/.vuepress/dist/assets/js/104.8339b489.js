(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{239:function(t,e,n){"use strict";n.r(e);var a=n(0),s=Object(a.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("h1",[t._v("Update Existing Elements")]),t._m(0),t._m(1),t._m(2),n("p",[t._v("You can choose to overwrite all values completely, or just update a specific value. If a field in your JSON file has a blank value, it will overwrite the existing value. If you don't include a specific field in your JSON, the existing value will not be touched.")]),t._m(3),t._m(4),n("code-toggle",{attrs:{languages:["craft3","craft2"]}},[n("template",{slot:"craft3"},[n("div",{staticClass:"language-craft3 extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('[\n  {\n    "@model": "barrelstrength\\\\sproutimport\\\\importers\\\\elements\\\\Entry",\n    "attributes": { ... },\n    "content": {\n      "oldId": 14,\n      "title": "Title of post",\n      "fields": { ... }\n    },\n    "settings": {\n      "updateElement": {\n        "params": {\n          "oldId": 14,\n          "section": "projects"\n        }\n      }\n    }\n  }\n]\n')])])])]),n("template",{slot:"craft2"},[n("div",{staticClass:"language-craft2 extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('[\n  {\n    "@model": "EntryModel",\n    "attributes": { ... },\n    "content": {\n      "oldId": 14,\n      "title": "Title of post",\n      "fields": { ... }\n    },\n    "settings": {\n      "updateElement": {\n        "matchBy": "oldId",\n        "matchValue": 14,\n        "matchCriteria": {\n          "section": "projects"\n        }\n      }\n    }\n  }\n]\n')])])])])],2),t._m(5),t._m(6),n("code-toggle",{attrs:{languages:["craft3","craft2"]}},[n("template",{slot:"craft3"},[n("div",{staticClass:"language-craft3 extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('[\n  {\n    "@model": "barrelstrength\\\\sproutimport\\\\importers\\\\elements\\\\Entry",\n    "attributes": { ... },\n    "content": {\n      "oldId": 14,\n      "title": "Title of post",\n      "fields": { ... },\n      "related": {\n        "heroImage": {\n          "@model": "barrelstrength\\\\sproutimport\\\\importers\\\\elements\\\\Asset",\n          "params": {\n            "filename": "ImageName03.jpg",\n            "volumeId": "1",\n            "folderId": 8\n          }\n        }\n      }\n    },\n    "settings": {\n      "updateElement": {\n        "params": {\n          "oldId": 14,\n          "section": "projects"\n        }\n      }\n    }\n  }\n]\n')])])])]),n("template",{slot:"craft2"},[n("div",{staticClass:"language-craft2 extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('[\n  {\n    "@model": "EntryModel",\n    "attributes": { ... },\n    "content": {\n      "oldId": 14,\n      "title": "Title of post",\n      "fields": { ... },\n      "related": {\n        "heroImage": {\n          "@model": "AssetModel",\n          "matchBy": "filename",\n          "matchValue": "ImageName03.jpg",\n          "matchCriteria": {\n            "source": "images",\n            "folderId": 8\n          }\n        }\n      }\n    },\n    "settings": {\n      "updateElement": {\n        "matchBy": "oldId",\n        "matchValue": 14,\n        "matchCriteria": {\n          "section": "projects"\n        }\n      }\n    }\n  }\n]\n')])])])])],2)],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{pre:!0},[e("p",[this._v("If you are importing content that may already exist in your database, the Sprout Import "),e("code",[this._v("updateElement")]),this._v(" key can help you:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Update an existing element with additional data")]),e("li",[this._v("Update or overwrite an existing element with new data")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{pre:!0},[e("p",[this._v("Like the "),e("code",[this._v("related")]),this._v(" key, the "),e("code",[this._v("updateElement")]),this._v(" key allows you to match existing Elements with flexible criteria. If an item is matched, the data provided will be used to update attributes on the matched item.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"updating-an-element"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#updating-an-element","aria-hidden":"true"}},[this._v("#")]),this._v(" Updating an Element")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{pre:!0},[e("p",[this._v("The "),e("code",[this._v("updateElement")]),this._v(" key must be defined within the "),e("code",[this._v("settings")]),this._v(" section of your import definition.")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("Note")]),n("p",[t._v("In these examples "),n("code",[t._v("oldId")]),t._v(" is a custom field that represents an ID that you imported from another system. Often, when importing data from another system a storing a temporary legacy ID in a custom field can help match and relate other data that you are importing in separate steps.")]),n("p",[t._v("You can use "),n("code",[t._v("id")]),t._v(", "),n("code",[t._v("slug")]),t._v(", or any other property or custom field to match an existing element that are updating.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"updating-a-relationship"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#updating-a-relationship","aria-hidden":"true"}},[this._v("#")]),this._v(" Updating a Relationship")])}],!1,null,null,null);s.options.__file="update-existing-elements.md";e.default=s.exports}}]);