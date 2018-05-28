# Meta Description Length

For many years the recommended length of Meta Description content was around 160 characters. More recently, observations have been made that longer descriptions are also displayed by Google.

Moz writes (in 2018):

_You can write meta descriptions for any length, however Google generally truncates snippets ~300 characters (this limit increased in December 2017). You want meta descriptions long enough that they're descriptive. We generally recommend writing meta descriptions between 50–300 characters._

~ [How Long Should Your Meta Description Be?](https://moz.com/blog/how-long-should-your-meta-description-be-2018)

Sprout SEO defaults to Meta Descriptions of 160 characters, however, you can update this to your preference. To override the default value, you can create a Sprout SEO config override and set the `maxMetaDescriptionLength` to your desired length:

**craft/config/sproutseo.php**

``` php
<?php 

return array(
	'maxMetaDescriptionLength' => 300
);
```
