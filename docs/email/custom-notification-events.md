# Notification Events

You can trigger Notification Emails via custom Notification Events in your own plugins. A Notification Event tells Sprout Email to watch for a particular Event (in Craft or another plugin) and provides validation rules that will be checked to determine when a Notification Email should be triggered.

Adding custom events involves:

1. Extending Sprout Email's Notification Event class
2. Registering your Notification Event

## Notification Event Class

::: code

``` php Craft 3
namespace company\plugin\folder;

use barrelstrength\sproutbaseemail\base\NotificationEvent;

class EntriesSave extends NotificationEvent
{
  ...
}
```

``` php Craft 2
<?php
namespace Craft;

class SproutEmailEvents_BeforeSaveEntryEvent extends SproutEmailBaseEvent
{
  /**
   * Returns the qualified event name to use when registering with craft()->on
   * 
   * @return string
   */
  public function getName()
  {
    return 'entries.onBeforeSaveEntry';
  }
  
  /**
   * Returns the event title to use when displaying a label or similar use case
   *
   * @return string
   */
  public function getTitle()
  {
    return Craft::t('Before an entry is saved');
  }

  /**
   * Returns a short description of this event
   *
   * @return string
   */
  public function getDescription()
  {
    return Craft::t('Triggers before an entry is saved.');
  }
  
  /**
   * Validate your Event options
   *
   * @return bool
   */
  public function validateOptions()
  {
    return true;
  }
  
  /**
   * Returns the data passed in by the triggered event
   *
   * @param Event $event
   *
   * @return mixed
   */
  public function prepareParams(Event $event)
  {
    return array(
      'value'      => array(
        $event->params['entry'],
        'isNewEntry' => $event->params['isNewEntry']
      )
  
    );
  }
}
```

:::

### Craft 3

See the base NotificationEvent Class for documentation on usage:

- [sprout-base/src/app/email/base/NotificationEvent.php](./https://github.com/barrelstrength/craft-sprout-base/blob/v2/src/app/email/base/NotificationEvent.php)

Examples can be found in:

- [sprout-email/src/events/notificationevents/](https://github.com/barrelstrength/craft-sprout-email/tree/develop/src/events/notificationevents) 

### Craft 2

1. Extend SproutEmailBaseEvent with your custom event
2. Register your event using the defineSproutEmailEvents() hook

To demonstrate how to add a custom event via a plugin, we've created an example plugin that implements the Craft `onBeforeSaveEntry` Event: [Sprout Email Events Plugin](https://s3.amazonaws.com/sprout.barrelstrengthdesign.com-assets/content/docs/sproutemailevents.zip)

Additional implementation examples can be seen in Sprout Email itself (`sproutemail/integrations/sproutemail`).

## Register Event

To tell Sprout Email that your event exists you need to register it in your plugin's Primary Class file.

::: code

``` php Craft 3
namespace mycompany\myplugin;

use mycompany\myplugin\integrations\sproutemail\events\notificationevents\MyNotificationEvent;
use barrelstrength\sproutbaseemail\services\NotificationEmailEvents;
use barrelstrength\sproutbaseemail\events\NotificationEmailEvent;
use yii\base\Event;

class MyPlugin extends Plugin
{

  public function init()
  {
    parent::init();
    
    Event::on(NotificationEmailEvents::class, NotificationEmailEvents::EVENT_REGISTER_EMAIL_EVENT_TYPES, function(NotificationEmailEvent $event) {
        $event->events[] = MyNotificationEvent::class;
    });
  
  }
}
```

``` php Craft 2
/**
 * Defines events/rules for notification entries in Sprout Email
 *
 * @return array
 */
public function defineSproutEmailEvents()
{
  Craft::import('plugins.sproutemailevents.integrations.sproutemail.SproutEmailEvents_BeforeSaveEntryEvent');
  
  return array(
    'entries.onBeforeSaveEntry' => new SproutEmailEvents_BeforeSaveEntryEvent()
  );
}
```

:::