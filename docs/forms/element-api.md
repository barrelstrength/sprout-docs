---
date: 2018-06-25
description: Sprout Forms can be used in headless mode using Craft's Element API plugin.
---

# Element API

Sprout Forms can be used in headless mode using Craft's [Element API](https://plugins.craftcms.com/element-api) plugin.

You will need to:

- Install the Element API plugin
- Add a `config/element-api.php` file to your project's config folder
- Build your API

The following example creates two endpoints.

The first returns a Form Element that can be used by your front-end framework to output the form. You can use the Default Form Templates as an example of how the HTML needs to be built for submission and remember to submit the form using a CSRF token. This example returns the field data and the field folder name which can be used as a unique identifier when determining which field template to display on the front-end.

The second returns a list of unread Form Entry Elements. You can customize the query however you'd like, just like any Element Query.

``` php
<?php

use barrelstrength\sproutforms\elements\Form;
use barrelstrength\sproutforms\elements\Entry;

return [
    'endpoints' => [
        'api/sproutforms/<formId:\d+>.json' => function($formId) {
            return [
                'elementType' => Form::class,
                'criteria' => ['id' => $formId],
                'one' => true,
                'transformer' => function(Form $form) {
                    foreach ($form->getFieldLayout()->getTabs() as $tab) {
                        foreach ($tab->getFields() as $field) {
                            $fields[] = [
                                'field' => $field,
                                'folder' => $field->getFieldInputFolder()
                            ];
                        }

                        $tabs[] = [
                            'title' => $tab->name,
                            'fields' => $fields
                        ];
                    }

                    return [
                        'handle' => $form->handle,
                        'tabs' => $tabs
                    ];
                },
            ];
        },
        'api/sproutforms/<formId:\d+>/entries.json' => function($formId) {
            return [
                'elementType' => Entry::class,
                'criteria' => [
                    'formId' => $formId,
                    'status' => 'unread'
                ],
                'paginate' => true,
                'transformer' => function(Entry $entry) {
                    return [
                        'id' => $entry->id,
                        'dateCreated' => $entry->dateCreated,
                        'title' => $entry->title,
                        'customField' => $entry->customField,
                    ];
                },
            ];
        }
    ]
];
```