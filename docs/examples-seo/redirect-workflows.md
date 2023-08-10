---
date: 2023-02-19
description: Customize Redirect workflows to fit your needs.
---

# Redirect Workflows

## 301 vs 302 Redirects

When you create a Redirect for the first time, it's often best to create it as a 302 redirect, test it, and then update it to be a 301 Redirect.

A 301 Redirect gets cached in a visitor's browser. The only way to clear the cache of a visitors browser is to ask them to go into their browser and clear their cache. In the case that you publish an incorrect 301 redirect, you could run into a scenario where 100s of visitors to your site get the wrong URL cached in their browser. Even if you correct the redirect, each one of those users will need to clear their browser cache before the old URL they are trying to access will see your updated Redirect. By testing your Redirects as 302 Redirects first, you reduce the risk that your users will get incorrect URLs cached in their browsers.

Use the Redirect module's bulk Status Actions to update a group of Redirects from 302 Redirects to 301 Redirects after testing.

## Redirects not handled by Sprout

The Redirect module allows you to manage redirects for any page that could result in a 404. In a few edge cases, there can be a scenario where Craft processes a request and does not throw a 404 for a URI that you wish to Redirect. In these scenarios, we currently recommend handling these types of Redirects outside of Sprout using .htaccess, the `{% redirect %}` tag, or some other method.
