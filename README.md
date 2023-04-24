# Sprout Docs

See our website for the complete [Sprout Documentation](https://sprout.barrelstrengthdesign.com/docs/).

## Updating the docs

Sprout Documentation uses [VuePress](https://vuepress.vuejs.org/) and the [VuePress theme for Craft CMS documentation](https://github.com/pixelandtonic/vuepress-theme-craftdocs). 

Documentation Markdown files are stored in the `/docs` folder 

Some useful commands while working with the docs:

| Command | Notes |
|:------- |:----- |
| npm install | Get everything working |
| npm run docs:dev | Spins up a VuePress dev server so you can update Markdown and see those updates in real time in your browser (without generating a static site) |
| npm&nbsp;run&nbsp;docs:build | Generates static site (no need to run this if submitting pull requests, this is handled during deployment) |

## Metadata

To generate metadata using the `php ./src/optimizeMetadata.php` script you will need to install the following package:

```
composer require kub-at/php-simple-html-dom-parser
```
	
## Contributions

Support for all Sprout Marketing Suite plugins is managed in the [main Sprout Framework repository][#sprout].

- [Ask a question][#questions]
- [Report an issue][#issues]

<a href="https://sprout.barrelstrengthdesign.com" target="_blank">
  <img src="https://s3.amazonaws.com/sprout.barrelstrengthdesign.com-assets/content/plugins/sprout-icon.svg" width="72" height="72" align="right">
</a>

[#issues]: https://github.com/barrelstrength/sprout/issues

[#questions]: https://github.com/barrelstrength/sprout/discussions/categories/q-a

[#sprout]: https://github.com/barrelstrength/sprout
