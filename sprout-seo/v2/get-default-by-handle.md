If you need to access one of your Meta Defaults direction in your template you can use the `getDefaultByHandle` tag.

``` twig
{% set default = craft.sproutSeo.getDefaultByHandle('default') %}
```

This will return a `SproutSeo_MetaModel` and give you access to all of the [available meta properties](http://sprout.barrelstrengthdesign.com/craft-plugins/seo/docs/getting-started/introduction#an-example-of-overriding-all-meta-variables).