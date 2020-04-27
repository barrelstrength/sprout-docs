(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{268:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",[t._v("Notification Events")]),t._v(" "),a("p",[t._v("Sprout Email supports several common Notification Events. For more specific scenarios, developers can add support for "),a("RouterLink",{attrs:{to:"/email/custom-notification-events.html"}},[t._v("Custom Notification Events")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#settings"}},[t._v("#")]),t._v(" Settings")]),t._v(" "),a("p",[t._v("Each Notification Events has unique settings for admins to configure how emails get triggered.")]),t._v(" "),a("h3",{attrs:{id:"send-rule"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#send-rule"}},[t._v("#")]),t._v(" Send Rule")]),t._v(" "),a("p",[t._v("All Notification Events have a Send Rule setting that defaults to "),a("em",[t._v("Always")]),t._v(", meaning that by default the event will always trigger an email when the conditions defined in the Notification Event settings are met.")]),t._v(" "),a("p",[t._v("The Send Rule can be configured to a custom pattern. For example, the 'When a new entry is saved' Event allows you to trigger an email when an Entry is saved in a given Section. However, the default settings do not allow you to be more specific if, say, you only want to trigger an email when a specific Entry Type is saved. The Send Rule setting can help you further configure the 'When a new entry is saved' event to only send an email when a specific Entry Type is saved using the Send Rule custom pattern:")]),t._v(" "),a("div",{staticClass:"language-twig extra-class"},[a("pre",{pre:!0,attrs:{class:"language-twig"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("getType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("handle")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("entryTypeHandle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}}")])])]),t._v("\n")])])]),a("div",{pre:!0},[a("p",[t._v("In this case, "),a("code",[t._v("object")]),t._v(" refers to the Entry that is being saved. And we have added a rule that says only trigger the email if the Entry Type matches a specific Entry Type.")])]),a("p",[t._v("Here is an example of a Send Rule that will only trigger an email if a particular checkbox is selected:")]),t._v(" "),a("div",{staticClass:"language-twig extra-class"},[a("pre",{pre:!0,attrs:{class:"language-twig"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("checkboxFieldHandle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("getOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("selected")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}}")])])]),t._v("\n")])])]),a("p",[t._v("If you've got lots of logic, you can set the Send Rule to a Twig Template and use all the space you need in your template. Just be sure to make the full template resolve to '1', 'true', 'on', or 'yes'. If none of those conditions are met, the Event will not get triggered.")]),t._v(" "),a("div",{staticClass:"language-twig extra-class"},[a("pre",{pre:!0,attrs:{class:"language-twig"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("include")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("_email/send-rule-logic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n")])])]),a("h2",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])]),t._v(" "),a("h3",{attrs:{id:"craft"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#craft"}},[t._v("#")]),t._v(" Craft")]),t._v(" "),a("div",{staticClass:"table"},[a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Event")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Event Object")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("When a new entry is created")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Entry")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("When an existing entry is updated")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Entry")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("When a new user is created")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("User")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("When a existing user is updated")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("User")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("When a user is activated")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("User")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("When a user is deleted")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("User")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("When a user logs in")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("User")])])])])]),t._v(" "),a("h3",{attrs:{id:"craft-commerce"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#craft-commerce"}},[t._v("#")]),t._v(" Craft Commerce")]),t._v(" "),a("div",{staticClass:"table"},[a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Event")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Event Object")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("When a Craft Commerce order is completed")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Commerce Order")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("When a Craft Commerce order status is changed")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Commerce Order, Commerce OrderHistory")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("When a Craft Commerce transaction is saved")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Commerce Transaction")])])])])]),t._v(" "),a("h3",{attrs:{id:"sprout-plugins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sprout-plugins"}},[t._v("#")]),t._v(" Sprout Plugins")]),t._v(" "),a("div",{staticClass:"table"},[a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Event")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Event Object")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("When a Sprout Form Entry is submitted")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Form Entry")])])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("If you need a Custom Notification Event, we are available for hire.")]),t._v(" "),a("p",[t._v("Contact us: "),a("a",{attrs:{href:"mailto:sprout@barrelstrengthdesign.com"}},[t._v("sprout@barrelstrengthdesign.com")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);