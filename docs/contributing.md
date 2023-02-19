---
date: 2023-02-19
description: The following is a set of guidelines for contributing to Sprout Plugins and its first party integrations, which are hosted in the Barrel Strength organization on GitHub.
---

# Contributing

The following is a set of guidelines for contributing to Sprout Plugins and its first party integrations, which are hosted in the Barrel Strength organization on GitHub.

## Security Disclosures

Please report [security disclosures](./support/security.md) via the steps outlined on our Security page.

## Bug Reports & Feature Requests

Before submitting [bug reports](./support/support.md) and [feature requests](./support/feature-requests.md), please search through open issues to see if yours has already been filed.

If you do find a similar issue, upvote it by adding a 👍 reaction. Only leave a comment if you have relevant information to add.

Issues are labeled with the following tags:

- `bug` - issue does not work as expected
- `c4` - issue relates to a Craft 4 version of Sprout
- `c3` - issue relates to a Craft 3 version of Sprout
- `cX` - issue will be considered for a future version of Craft
- `duplicate` - issue is addressed by another issue
- `expected behavior` - issue described currently behaves as it is intended
- `feature` - a new feature that doesn't currently exist in Sprout
- `invalid` - issue appears to be a misunderstanding
- `need more info` - issue requires additional information before it gets a better label
- `not planned` - issue has been reviewed and will not be included in Sprout
- `question` - issue needs clarification
- `waiting on` - issue is waiting on a response before it can move forward

If no one has filed the issue yet, submit a new one. Please include a clear description of the issue, and as much relevant information as possible, including a code sample demonstrating the the issue.

## Documentation Edits

Sprout's documentation for all plugins lives within the [barrelstrength/sprout-docs](https://github.com/barrelstrength/sprout-docs) repo. Improvements or corrections to the docs can be submitted as a pull request.

Small edits can be made via the browser and Github's edit tools. To preview any significant documentation changes before committing them, you can review your changes locally. The documentation is powered by VuePress. Clone the documentation repository, go to the `docs/` folder within your terminal, and run these commands:

```
# Install npm dependencies
npm install

# Build + run the VuePress dev server
npm run docs:dev
```

Once the VuePress dev server is up and running, you’ll be able to view the docs at `http://localhost:8000/docs`. Changes you make to the .md files within `docs/` will automatically trigger a live reload of the pages in the browser.

## Core Enhancements

If you would like to work on a new core feature or improvement, first create a Github issue for it if there’s not one already. As much as we appreciate community contributions, we are selective about which sorts of features should make it into Sprout itself rather than a plugin, so don’t take it the wrong way if we advise you to pursue the idea as a plugin instead.

## Pull Requests

Please ask first before embarking on any significant pull request (e.g. implementing features, refactoring code, porting to a different language), otherwise you risk spending a lot of time working on something that the project's developers might not want to merge into the project.

Pull requests should clearly describe the problem and solution and provide a step-by-step explanation of how to test, if possible. Include the relevant issue number if there is one.

## Translations

You can add a translation file to your project using [Static Translations](https://craftcms.com/docs/4.x/sites.html#static-message-translations) and target Sprout Forms using the translation categories that it uses. Sprout plugins may rely on multiple modules in the underlying Sprout Framework if you want full a complete translation. For example, Sprout Forms relies on the Forms, Data Studio, Transactional Email, and Core modules which would all need to be translated to provide a full translation of Sprout Forms.
