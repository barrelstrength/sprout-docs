---
date: 2023-02-19
description: Sprout Forms can be extended using the following Events and Hooks.
---

# Events & Hooks

Sprout Forms can be extended using the following Events and Hooks.

## Events

### Before a Form Entry is saved

Raised before an entry is saved.

``` php
use barrelstrength\sproutforms\services\Entries;
use barrelstrength\sproutforms\elements\Entry;
use barrelstrength\sproutforms\events\OnBeforeSaveEntryEvent;

public function init()
{
    parent::init();
    
    Event::on(Entries::class, Entry::EVENT_BEFORE_SAVE, function(OnBeforeSaveEntryEvent $event) {
        if (Craft::$app->request->isSiteRequest)
        {
            // A Form Entry Element has been saved from a Front-end Form Submission
            // Access the Form Entry Element via: $event->sender
        }
        
        if (Craft::$app->request->isCpRequest)
        {
            // A Form Entry Element has been updated from the Control Panel
            // Access the Form Entry Element via: $event->sender
        }
    });
}
```

#### Params

- _entry_ – The submitted SproutForms_EntryModel
- _isNewEntry_ - A boolean indicating whether this is a brand new form entry

### After a Form Entry is Saved

Raised just after an entry is saved

``` php
use barrelstrength\sproutforms\elements\Entry;
use yii\base\Event;
use Craft;

public function init()
{
    parent::init();
    
    Event::on(Entry::class, Entry::EVENT_AFTER_SAVE, function(Event $event) {
        
        if (Craft::$app->request->isSiteRequest)
        {
            // The Form Entry Element is available via the $event->sender attribute     
            $formEntryElement = $event->sender;
        }
        
        if (Craft::$app->request->isCpRequest)
        {
            $formEntryElement = $event->sender;
        }
        
    });
}
```

#### Params

- _entry_ – The submitted SproutForms_EntryModel
- _isNewEntry_ - A boolean indicating whether this is a brand new form entry

## Hooks

### Template Hook

The `sproutForms.modifyForm` Template Hook gives plugins a chance to dynamically add content to a form template. The hook will output content between the `<form>` tags when using the `displayForm` tag.

``` php
public function init()
{
    parent::init();
    
    Craft::$app->view->hook('sproutForms.modifyForm', function(&$context) {
        
         // Prepare HTML for your template
    
        return $html;
    });
}
```
