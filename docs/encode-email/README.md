---
date: 2018-06-25
description: Encode Email makes multiple email obfuscation filters available in your templates.
---

# About Sprout Encode Email

## Overview

Encode Email makes multiple email obfuscation filters available in your templates. Currently supported are:

1. encode
2. rot13
3. entities

_Note: All filters return raw HTML so make sure you know your data is clean before you use these filters._

## Encode Filter

The `encode` filter will encode your email address and make it harder to be picked up off the page by spambots.  Under the hood, the `encode` filter uses the same encoding technique as the Rot13 filter below. `encode` is just an easier name to remember.

## Rot13

The `rot13` filter encodes the string you pass to it using the [Rot13 cipher](https://en.wikipedia.org/wiki/ROT13) and returns a javascript tag to decode it on the page.

To use it, you must first create a variable with the entire string you want to encode as a Twig string, and then run the `rot13` filter on the variable you created:

``` twig
{% set email = "<a href='mailto:you@example.com'>Your Name</a>" %}

{{ email | rot13 }}
```

To use this filter for email, your entire link tag must be wrapped in the filter.  This is necessary because the filter returns a script tag and will break your link tag if you only include the email address itself. The `rot13` filter will return code similar to the following example in your page code, however, your visitors will see the link tag as you defined it above.

``` js
<script type="text/javascript">document.write("<n uers=‘znvygb:lbh@rknzcyr.pbz’>Lbhe Anzr</n>".replace(/[a-zA-Z]/g, function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);}));</script>
```

## HTML Entities

The `entities` filter encodes your content into HTML Entities.  If you filter your email information with it like so:

``` twig
<a href='{{ "mailto:you@example.com" | entities }}'>Your Name</a>
```

The code on your page will be output as HTML Entities, but your visitors will see the information that you defined above:

``` html
<a href='&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#121;&#111;&#117;&#64;&#101;&#120;&#97;&#109;&#112;&#108;&#101;&#46;&#99;&#111;&#109;'>Your Name</a>
```