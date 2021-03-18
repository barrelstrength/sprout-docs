(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{391:function(t,e,a){"use strict";a.r(e);var s=a(13),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",[t._v("Welcome Emails")]),t._v(" "),a("p",[t._v("Create a Notification with two custom fields:")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("htmlBody")]),t._v(" (rich text)")]),t._v(" "),a("li",[a("strong",[t._v("textBody")]),t._v(" (plain text)")])]),t._v(" "),a("p",[t._v("Sets up a template for the HTML and Text versions of the notification email:")]),t._v(" "),a("p",[a("strong",[t._v("_emails/email.twig")])]),t._v(" "),a("div",{staticClass:"language-twig extra-class"},[a("pre",{pre:!0,attrs:{class:"language-twig"}},[a("code",[a("span",{pre:!0,attrs:{class:"token other"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("email")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("htmlBody")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}}")])])]),a("span",{pre:!0,attrs:{class:"token other"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),t._v("\n")])])]),a("p",[a("strong",[t._v("_emails/email.txt")])]),t._v(" "),a("div",{staticClass:"language-twig extra-class"},[a("pre",{pre:!0,attrs:{class:"language-twig"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("email")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("textBody")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}}")])])]),t._v("\n")])])]),a("p",[t._v('Create the new notification and add the appropriate sender info. The notification Rules will be setup to trigger "When a new user is created".')]),t._v(" "),a("div",{pre:!0},[a("p",[t._v("In the "),a("em",[t._v("Recipients")]),t._v(" field we'll send the email to the new users email address. When the notification is triggered, the User Model is provided as the dynamic notification object and we can reference the email address using the field name "),a("code",[t._v("{email}")]),t._v(".")])]),a("div",{pre:!0},[a("p",[t._v("In the "),a("code",[t._v("htmlBody")]),t._v(" and "),a("code",[t._v("textBody")]),t._v(" fields, we can also refer to the user.  This time we will use the "),a("code",[t._v("firstName")]),t._v(" field (and should be sure to require the First Name field when a user is filling out their account info).")])]),a("div",{staticClass:"language-twig extra-class"},[a("pre",{pre:!0,attrs:{class:"language-twig"}},[a("code",[a("span",{pre:!0,attrs:{class:"token other"}},[t._v("Hello {firstName},\n\nWe are so happy that you created an account.  \n\nCarpe diem!")]),t._v("\n")])])]),a("p",[t._v("When a new user named George is created, the notification will be sent to his email address and the notification email will be customized with his name:")]),t._v(" "),a("div",{staticClass:"language-twig extra-class"},[a("pre",{pre:!0,attrs:{class:"language-twig"}},[a("code",[a("span",{pre:!0,attrs:{class:"token other"}},[t._v("Hello George,\n\nWe are so happy that you created an account.  \n\nCarpe diem!")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);