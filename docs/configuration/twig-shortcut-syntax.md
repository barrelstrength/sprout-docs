---
date: 2023-02-19
description: In several places within Craft and Sprout plugins, you are able to customize a setting with a dynamic value.
---

# Twig Shortcut Syntax

In several places within Craft and Sprout plugins, you are able to customize a setting with a dynamic value expressed using Twig syntax.

| Twig Syntax                                                             | Twig Shorthand Syntax                                        |
|:------------------------------------------------------------------------|:-------------------------------------------------------------|
| `{{ object.title }}`                                                    | `{title}`                                                    |
| `{{ object.customField }}`                                              | `{customField}`                                              |
| `{% if object.customField is not empty %}{{ object.title }}{% endif %}` | `{% if object.customField is not empty %}{title}{% endif %}` |

For lack of a better term, we refer to this as **Twig Shortcut Syntax** and this documentation page aims to serve as a general guide.

- [https://craftcms.com/docs/3.x/entries.html#dynamic-entry-titles](https://craftcms.com/docs/3.x/entries.html#dynamic-entry-titles)
- [https://craftquest.io/articles/twig-craft-cms-control-panel](https://craftquest.io/articles/twig-craft-cms-control-panel)

In Craft you can use Twig Shortcut Syntax in the Entry URI Format field of your Section's Site Settings and the Title Format setting of your Entry Types.

In each of these scenarios we can think of the settings field as a mini Twig template. Settings that allow for Twig Shortcut Syntax will be parsed like a Twig template and, just like a Twig template, they may have some variables available to them for you to use (like an individual Entry page has the `entry` variable available).

Below we'll look at a comparison of how Craft processes templates and settings that support Twig Shortcut Syntax.

## Entry Pages

When you setup a Section with URLs, Craft makes an `entry` variable available to the Entry Template you define in the settings (such as `news/_entry`). In this case, you can then access your `entry` object and all of it's available properties in your entry template:

### news/_entry.twig

``` twig
{{ entry.title }}
{{ entry.slug }}
```

In this example, our Template and Variables are processed and create our page.

| Template |  Variables | Output  |
|:-------- |:---------- |:------- |
| news/_entry.twig | entry | news/my-page |

## Title Format

When you setup an Entry Type, you can choose to not display the Title Field and generate your Title using the **Title Format** setting.

While this is a setting in the Control Panel, a very similar thing is happening as we have seen in the templates. Rather than a file being used as the Twig template (`news/_entry.twig`), the value of the Title Format setting is being used as the template.

When an Entry Element is saved, Craft makes the Entry Element available to that setting to allow the Title Format setting to use any property on the Entry Object when the Title is saved. While Craft gives you access to an Entry Element in the Title Format Setting, the variable is not named `entry` – it is named `object`.

``` twig
{{ object.title }}
{{ object.slug }}
```

In this example, our Template and Variables are processed and create our Title.

| Template |  Variables | Output  |
|:-------- |:---------- |:------- |
| Title Format Setting | object | Entry Title |

::: tip
**Why does Craft name the variable `object` instead of something more appropriate like `entry`?**

Twig Shortcut Syntax is supported by many different Elements and Settings within Craft and within plugins. As all of these features use the same code behind the scenes, Craft named the variable that gets created something generic so that it could apply to many scenarios.
:::

