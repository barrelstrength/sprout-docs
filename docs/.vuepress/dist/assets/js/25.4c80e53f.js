(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{372:function(e,t,a){"use strict";a.r(t);var i=a(13),r=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",[e._v("Craft 2")]),e._v(" "),a("p",[e._v("Sprout Email installation and update instructions for Craft 2.")]),e._v(" "),a("h2",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),a("ul",[a("li",[e._v("Craft 2.5 or a more recent version of Craft")])]),e._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),a("div",{pre:!0},[a("ul",[a("li",[e._v("Place the "),a("code",[e._v("sproutemail")]),e._v(" folder inside your "),a("code",[e._v("craft/plugins")]),e._v(" folder.")]),e._v(" "),a("li",[e._v("Install the plugin via the Craft Dashboard. (Settings→Plugins)")])])]),a("h2",{attrs:{id:"updating"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updating"}},[e._v("#")]),e._v(" Updating")]),e._v(" "),a("div",{pre:!0},[a("ul",[a("li",[e._v("Place the "),a("code",[e._v("sproutemail")]),e._v(" folder inside your "),a("code",[e._v("craft/plugins")]),e._v(" folder and overwrite the existing copy of "),a("code",[e._v("sproutemail")]),e._v(".")]),e._v(" "),a("li",[e._v("Point your browser to your Craft control panel. If you are prompted to proceed with a database update, click “Finish up” and let the database updates run.  If no database updates are needed, you will see your control panel load as normal and you are good to go.")])])]),a("h2",{attrs:{id:"downloading-updates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#downloading-updates"}},[e._v("#")]),e._v(" Downloading Updates")]),e._v(" "),a("p",[e._v("Updates are available via the Github repository.")]),e._v(" "),a("ul",[a("li",[e._v("Visit the "),a("a",{attrs:{href:"https://github.com/barrelstrength/craft-sprout-email/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sprout Email releases"),a("OutboundLink")],1),e._v(" tab")]),e._v(" "),a("li",[e._v("Download the latest version of Sprout Email v3.x")])]),e._v(" "),a("h2",{attrs:{id:"updating-to-sprout-email-3-x"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updating-to-sprout-email-3-x"}},[e._v("#")]),e._v(" Updating to Sprout Email 3.x")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Please read all of the details below before upgrading from Sprout Email 2.x to Sprout Email 3.x. If you are installing the plugin for the first time, you can ignore these instructions and install the plugin as usual._")])]),e._v(" "),a("p",[e._v("Sprout Email 3.0 adds many new features improving List and Mailer integrations. Due to the number of changes we had to make to make these features possible, we were unable to avoid a few extra steps during the upgrade process. If you are using Mailers for Campaign Emails or Recipient Lists you may be required to take these extra steps.")]),e._v(" "),a("p",[e._v("Below is a guide of how to get upgraded from Sprout Email 2.x to Sprout Email 3.x.")]),e._v(" "),a("h3",{attrs:{id:"upgrading-sprout-email-with-mailers-lists"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-sprout-email-with-mailers-lists"}},[e._v("#")]),e._v(" Upgrading Sprout Email with Mailers & Lists")]),e._v(" "),a("div",{pre:!0},[a("ol",{pre:!0,attrs:{start:"0"}},[a("li",[a("p",[a("strong",[e._v("Backup")]),e._v(" your Craft database.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Disable")]),e._v(" any Sprout Email Mailer Plugins\n"),a("em",[e._v("This may include Mailchimp, Campaign Monitor, or any custom Mailer on your project")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Disable")]),e._v(" Sprout Email 2.x\n"),a("em",[e._v("Don't uninstall your current version of Sprout Email or you will lose your data. Just disable Sprout Email 2.x. This step is necessary because adding the new Mailer plugins for Sprout Email 3 will create errors that make the CP inaccessible until everything is upgraded.")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Install")]),e._v(" new Mailer plugins (if you are using one)")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Install")]),e._v(" Sprout Lists (if you were using Recipient Lists)\nRecipient Lists will be migrated to Sprout Lists when Sprout Email is upgraded "),a("em",[e._v("if")]),e._v(" Sprout Lists is installed. If you do not install Sprout Lists before the upgrade, you will lose your Recipient List data. The migration will also maintain the settings on your notification emails to continue sending them to any lists.")])]),e._v(" "),a("li",[a("p",[e._v("Copy the new Sprout Email 3.x folder to your "),a("code",[e._v("craft/plugins")]),e._v(" folder and "),a("strong",[e._v("Re-Enable")]),e._v(" Sprout Email to begin the upgrade.")])]),e._v(" "),a("li",[a("p",[e._v("Cheer!")])])])]),a("h3",{attrs:{id:"updating-the-notifications-index-page"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updating-the-notifications-index-page"}},[e._v("#")]),e._v(" Updating the Notifications Index Page")]),e._v(" "),a("p",[e._v("Sprout Email 3 updated a few columns that display on the Notification Email Element Index page.")]),e._v(" "),a("div",{pre:!0},[a("p",[e._v("In particular, we removed the "),a("code",[e._v("HTML")]),e._v(" and "),a("code",[e._v("Text")]),e._v(" Table Columns in favor of a new "),a("code",[e._v("Preview")]),e._v(" column. If you were using the "),a("code",[e._v("HTML")]),e._v(" or "),a("code",[e._v("Text")]),e._v(" Table Columns you will need to edit your Notification Email Element Index Table settings and add the "),a("code",[e._v("Preview")]),e._v(" column.")])]),a("h3",{attrs:{id:"updating-your-templates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updating-your-templates"}},[e._v("#")]),e._v(" Updating your templates")]),e._v(" "),a("p",[e._v("Several template variables were deprecated in this major release. You will need to update the variable used in your email templates like so:")]),e._v(" "),a("div",{pre:!0},[a("ul",[a("li",[e._v("Deprecated "),a("code",[e._v("entry")]),e._v(" variable in templates. Use "),a("code",[e._v("email")]),e._v(" instead.")]),e._v(" "),a("li",[e._v("Deprecated "),a("code",[e._v("notification")]),e._v(" variable in templates. Use "),a("code",[e._v("email")]),e._v(" instead.")]),e._v(" "),a("li",[e._v("Deprecated "),a("code",[e._v("campaign")]),e._v(" variable in templates. Use "),a("code",[e._v("campaignType")]),e._v(" instead.")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);