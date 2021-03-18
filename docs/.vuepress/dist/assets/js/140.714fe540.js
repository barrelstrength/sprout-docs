(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{498:function(t,a,e){"use strict";e.r(a);var s=e(13),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",[t._v("Canonical URLs")]),t._v(" "),e("div",{pre:!0},[e("p",[t._v("If you need to customize the "),e("code",[t._v("canonical")]),t._v(" URLs that appear in your metadata or in your XML sitemap you have multiple options:")])]),e("ul",[e("li",[t._v("Custom Pages")]),t._v(" "),e("li",[t._v("Metadata Field")]),t._v(" "),e("li",[t._v("Template Overrides")])]),t._v(" "),e("h2",{attrs:{id:"custom-pages"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#custom-pages"}},[t._v("#")]),t._v(" Custom Pages")]),t._v(" "),e("p",[t._v('To add support for a custom page with Canonical URL that does not exist in other URL-Enabled Sections, toggle the global plugin setting for "Enable Custom Pages" and a new section will appear on your Sitemaps management page that allows you to add custom URLs to the XML sitemap.')]),t._v(" "),e("h2",{attrs:{id:"metadata-field"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#metadata-field"}},[t._v("#")]),t._v(" Metadata Field")]),t._v(" "),e("p",[t._v('To allow overrides to the Canonical URL of a page for an individual entry, enable the "Canonical URL" setting when you set up your metadata field. This will display an additional Canonical URL option for your Metadata field that can be updated by content managers.')]),t._v(" "),e("h2",{attrs:{id:"template-overrides"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#template-overrides"}},[t._v("#")]),t._v(" Template Overrides")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("Overriding Canonical URLs in your templates breaks the relationship with XML Sitemaps and the awareness Sprout SEO has about Canonical URL overrides. To add Custom URLs in a supported way to your XML Sitemaps see the documentation on "),e("RouterLink",{attrs:{to:"/sitemaps/sitemaps.html#custom-urls"}},[t._v("Custom Pages")]),t._v(".")],1)]),t._v(" "),e("div",{pre:!0},[e("p",[t._v("To override the "),e("code",[t._v("canonical")]),t._v(" meta value on any given page in your templates, use the "),e("code",[t._v("craft.sproutSeo.meta")]),t._v(" tag and set the "),e("code",[t._v("canonical")]),t._v(" attribute to the appropriate URL:")])]),e("div",{staticClass:"language-twig extra-class"},[e("pre",{pre:!0,attrs:{class:"language-twig"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token ld"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("craft")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("sproutSeo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("meta")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("canonical")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("customUrl")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token rd"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token ld"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("sproutseo")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("optimize"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token rd"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n")])])]),e("h3",{attrs:{id:"canonical-override-field"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#canonical-override-field"}},[t._v("#")]),t._v(" Canonical Override Field")]),t._v(" "),e("div",{pre:!0},[e("p",[t._v("If you need to override the "),e("code",[t._v("canonical")]),t._v(" meta tag at the Entry level, you can do so by creating a custom field for your override and updating the value in your template.")])]),e("div",{pre:!0},[e("p",[t._v("If your Canonical override field handle has the value of "),e("code",[t._v("canonicalOverrideFieldHandle")]),t._v(", you would add the following snippet to the pages where you wanted to allow overrides:")])]),e("div",{staticClass:"language-twig extra-class"},[e("pre",{pre:!0,attrs:{class:"language-twig"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token ld"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("craft")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("sproutSeo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("meta")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("canonical")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("entry")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("canonicalOverrideFieldHandle")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token rd"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);