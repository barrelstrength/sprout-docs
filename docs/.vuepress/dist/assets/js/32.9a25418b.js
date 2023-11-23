(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{489:function(t,a,e){"use strict";e.r(a);var s=e(34),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",[t._v("Campaign Emails")]),t._v(" "),e("p",[t._v("Campaign Email Elements allow you to build and manage marketing and bulk email right within Craft and send those emails via your favorite Email Service Providers.")]),t._v(" "),e("div",{staticClass:"table"},[e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Mailer")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("RouterLink",{attrs:{to:"/campaigns/copy-paste-mailer.html"}},[t._v("Copy/Paste")])],1),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Copy and paste your email campaigns to better (or worse) places")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("a",{attrs:{href:"https://github.com/barrelstrength/craft-sprout-mailchimp",target:"_blank",rel:"noopener noreferrer"}},[t._v("MailChimp"),e("OutboundLink")],1)]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Send your email campaigns via MailChimp")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("a",{attrs:{href:"https://github.com/barrelstrength/craft-sprout-mailchimp",target:"_blank",rel:"noopener noreferrer"}},[t._v("Campaign Monitor"),e("OutboundLink")],1)]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Send your email campaigns via Campaign Monitor")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Custom")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Via a "),e("RouterLink",{attrs:{to:"/email/custom-mailers.html"}},[t._v("Custom Mailer")]),t._v(" or "),e("a",{attrs:{href:"mailto:sprout@barrelstrengthdesign.com"}},[t._v("Get in touch")]),t._v("!")],1)])])])]),t._v(" "),e("h2",{attrs:{id:"campaign-types"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#campaign-types"}},[t._v("#")]),t._v(" Campaign Types")]),t._v(" "),e("p",[t._v("When you first setup your Campaign Emails you will need to select a "),e("strong",[t._v("Campaign Type")]),t._v(". The Campaign Type defines which Mailer you want to use and will affect several things about your Campaign Email Workflow.")]),t._v(" "),e("h3",{attrs:{id:"service-provider"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#service-provider"}},[t._v("#")]),t._v(" Service Provider")]),t._v(" "),e("p",[t._v("The selected Campaign Type will determine which Email Service is used when sending your Campaign Emails. Each Mailer will have settings necessary for connecting and sending emails via the Mailer's email service provider.")]),t._v(" "),e("h3",{attrs:{id:"lists"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lists"}},[t._v("#")]),t._v(" Lists")]),t._v(" "),e("p",[t._v("If a Mailer supports Lists, a dropdown with all available email lists will appear in the sidebar settings when creating a new Campaign Email.")]),t._v(" "),e("h2",{attrs:{id:"email-templates"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#email-templates"}},[t._v("#")]),t._v(" Email Templates")]),t._v(" "),e("p",[t._v("Email Templates for your Campaign Emails can be managed via "),e("RouterLink",{attrs:{to:"/email/template-overrides.html"}},[t._v("Template Overrides")]),t._v(" or via a "),e("RouterLink",{attrs:{to:"/email/custom-email-templates.html"}},[t._v("Custom Email Template")]),t._v(".")],1),t._v(" "),e("h2",{attrs:{id:"test-emails"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#test-emails"}},[t._v("#")]),t._v(" Test Emails")]),t._v(" "),e("p",[t._v("Each email service provider handles tests differently. The "),e("em",[t._v("Send Test")]),t._v(" behavior may vary depending on the Campaign Type you are using.")]),t._v(" "),e("h2",{attrs:{id:"templating"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#templating"}},[t._v("#")]),t._v(" Templating")]),t._v(" "),e("div",{pre:!0},[e("p",[t._v("To output your Campaign emails in your templates you can use the "),e("code",[t._v("sprout.email.entries")]),t._v(" tag. Here is a basic overview of what is available:")])]),e("div",{staticClass:"language-twig extra-class"},[e("pre",{pre:!0,attrs:{class:"language-twig"}},[e("code",[e("span",{pre:!0,attrs:{class:"token twig language-twig"}},[e("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("{%")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token tag-name keyword"}},[t._v("set")]),t._v(" id "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sprout"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("email"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("entries"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("first"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("%}")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token twig language-twig"}},[e("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("{%")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token tag-name keyword"}},[t._v("set")]),t._v(" slug "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sprout"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("email"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("entries"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("slug"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("my-email-slug"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("first"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("%}")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token twig language-twig"}},[e("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("{%")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token tag-name keyword"}},[t._v("set")]),t._v(" campaignId "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sprout"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("email"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("entries"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("campaignId"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("find"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("%}")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token twig language-twig"}},[e("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("{%")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token tag-name keyword"}},[t._v("set")]),t._v(" campaignHandle "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sprout"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("email"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("entries"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("campaignHandle"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("myCampaign"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("find"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("%}")])]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);