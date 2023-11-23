(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{416:function(t,a,s){"use strict";s.r(a);var n=s(13),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",[t._v("Forms")]),t._v(" "),s("p",[t._v("Form Elements allow users to create and manage single and multi-page online forms within Craft CMS. Content authors can add "),s("RouterLink",{attrs:{to:"/forms/form-fields.html"}},[t._v("Form Fields")]),t._v(", tabs, and customize a form's settings such as a custom Title Format, Redirect, or Submit Button text.")],1),t._v(" "),s("p",[t._v("When forms are submitted, a form "),s("RouterLink",{attrs:{to:"/forms/entries.html"}},[t._v("Entry")]),t._v(" will be created in your Craft database. Send "),s("RouterLink",{attrs:{to:"/forms/notifications.html"}},[t._v("Notification Emails")]),t._v(" to confirm receipt with the user or notify admins that a new Entry is ready for review. Run and export "),s("RouterLink",{attrs:{to:"/forms/reports.html"}},[t._v("Reports")]),t._v(" to learn more.")],1),t._v(" "),s("h2",{attrs:{id:"templating"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#templating"}},[t._v("#")]),t._v(" Templating")]),t._v(" "),s("p",[t._v("To make a form available to your users, you will need to display it in your templates. This can be done for a specific form or, for scenarios such as landing pages, you can let your content authors select or build a custom form for a specific page.")]),t._v(" "),s("h3",{attrs:{id:"a-specific-form"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#a-specific-form"}},[t._v("#")]),t._v(" A specific form")]),t._v(" "),s("p",[t._v("Display a specific form on a specific page in your templates like so:")]),t._v(" "),s("div",{staticClass:"language-twig extra-class"},[s("pre",{pre:!0,attrs:{class:"language-twig"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token ld"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("craft")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("sproutForms")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("displayForm")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("contactForm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token rd"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}}")])])]),t._v("\n")])])]),s("h3",{attrs:{id:"a-chosen-form"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#a-chosen-form"}},[t._v("#")]),t._v(" A chosen form")]),t._v(" "),s("p",[t._v("Add a Form Relations Field to a Field Layout to allow a content author to select any available Form to display on a particular page.")]),t._v(" "),s("div",{staticClass:"language-twig extra-class"},[s("pre",{pre:!0,attrs:{class:"language-twig"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token ld"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("formHandle")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("entry")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("formFieldHandle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("first")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("handle")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token rd"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token ld"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("craft")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("sproutForms")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("displayForm")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("formHandle")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token rd"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}}")])])]),t._v("\n")])])]),s("h3",{attrs:{id:"template-tags"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#template-tags"}},[t._v("#")]),t._v(" Template Tags")]),t._v(" "),s("div",{pre:!0},[s("p",[t._v("While the primary tag you will use in your templates is the "),s("code",[t._v("displayForm")]),t._v(" tag, there are several tags to be aware of if you begin using "),s("RouterLink",{pre:!0,attrs:{to:"/forms/template-overrides.html"}},[t._v("Template Overrides")]),t._v(" or get into more advanced use cases.")],1)]),s("h4",[t._v("form")]),t._v(" "),s("div",{pre:!0},[s("p",[t._v("You can access your Form Element directly using the "),s("code",[t._v("form")]),t._v(" tag.")])]),s("div",{staticClass:"language-twig extra-class"},[s("pre",{pre:!0,attrs:{class:"language-twig"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("{# Returns a SproutForms_FormModel #}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token ld"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("form")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("craft")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("sproutForms")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("form")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("contact"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token rd"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n")])])]),s("h4",[t._v("displayForm")]),t._v(" "),s("div",{pre:!0},[s("p",[t._v("The "),s("code",[t._v("displayForm")]),t._v(" tag renders the HTML for all files defined in your Form Templates.")])]),s("div",{staticClass:"language-twig extra-class"},[s("pre",{pre:!0,attrs:{class:"language-twig"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token ld"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("craft")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("sproutForms")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("displayForm")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("contactForm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token rd"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}}")])])]),t._v("\n")])])]),s("h4",[t._v("displayTab")]),t._v(" "),s("div",{pre:!0},[s("p",[t._v("The "),s("code",[t._v("displayTab")]),t._v(" tag is called within the "),s("code",[t._v("displayForm")]),t._v(" tag and renders each individual tab defined in your form and all fields within it.")])]),s("div",{staticClass:"language-twig extra-class"},[s("pre",{pre:!0,attrs:{class:"language-twig"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token ld"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("craft")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("sproutForms")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("displayTab")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("contact.tab1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token rd"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}}")])])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("{# Examples of how Tab Handles get processed:\n\nTab Name             Tab Handle\n----------           ----------\nTab 1                tab1\nSection One          sectionone\nPersonal Questions   personalquestions\n#}")]),t._v("\n")])])]),s("h4",[t._v("displayField")]),t._v(" "),s("div",{pre:!0},[s("p",[t._v("The "),s("code",[t._v("displayField")]),t._v(" tag is called within the "),s("code",[t._v("displayTab")]),t._v(" tag and renders each individual field defined in your Tab's Field Layout.")])]),s("div",{staticClass:"language-twig extra-class"},[s("pre",{pre:!0,attrs:{class:"language-twig"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token ld"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("craft")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("sproutForms")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("displayField")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("contact.email"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token rd"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}}")])])]),t._v("\n")])])]),s("h2",{attrs:{id:"form-relations-field"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#form-relations-field"}},[t._v("#")]),t._v(" Form Relations Field")]),t._v(" "),s("p",[t._v("Sprout Forms adds a Form Relations Field to Craft CMS:")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Forms (Sprout Forms)")])])]),t._v(" "),s("h2",{attrs:{id:"settings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#settings"}},[t._v("#")]),t._v(" Settings")]),t._v(" "),s("h3",{attrs:{id:"redirects"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redirects"}},[t._v("#")]),t._v(" Redirects")]),t._v(" "),s("p",[t._v("Sprout Forms allows you to set a redirect for your Form in the Form Settings or in the template.")]),t._v(" "),s("div",{staticClass:"language-twig extra-class"},[s("pre",{pre:!0,attrs:{class:"language-twig"}},[s("code",[s("span",{pre:!0,attrs:{class:"token other"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("form")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("method")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("post"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("action")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("accept-charset")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("UTF-8"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hidden"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("action"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("sproutForms/entries/saveEntry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hidden"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("handle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("contact"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hidden"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("redirect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("contact?message=thankyou"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("{# All of your fields here #}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token other"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("submit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Submit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("form")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),t._v("\n")])])]),s("div",{pre:!0},[s("p",[t._v("Your redirect value can be an absolute URL, relative URL, or use the dynamic "),s("code",[t._v("{siteUrl}")]),t._v(" variable:")])]),s("h4",[t._v("Example redirect values:")]),t._v(" "),s("ul",[s("li",[t._v("/thank-you")]),t._v(" "),s("li",[t._v("thank-you")]),t._v(" "),s("li",[t._v("?message=success")]),t._v(" "),s("li",[t._v("thank-you?message=success")]),t._v(" "),s("li",[t._v("{siteUrl}")]),t._v(" "),s("li",[t._v("https://website.com/thank-you")])])])}),[],!1,null,null,null);a.default=e.exports}}]);