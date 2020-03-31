# Notification Events

You can trigger Notification Emails via custom Notification Events in your own plugins. A Notification Event tells Sprout Email to watch for a particular Event (in Craft or another plugin) and provides validation rules that will be checked to determine when a Notification Email should be triggered.

Adding custom events involves:

1. Extending Sprout Email's Notification Event class
2. Registering your Notification Event

## Notification Event Class

``` php
namespace company\plugin\folder;

use barrelstrength\sproutbaseemail\base\NotificationEvent;

class EntriesSave extends NotificationEvent
{
  ...
}
```

See the base NotificationEvent Class for documentation on usage:

- [sprout-base/src/app/email/base/NotificationEvent.php](./https://github.com/barrelstrength/craft-sprout-base/blob/v2/src/app/email/base/NotificationEvent.php)

Examples can be found in:

- [sprout-email/src/events/notificationevents/](https://github.com/barrelstrength/craft-sprout-email/tree/develop/src/events/notificationevents) 

## Register Event

To tell Sprout Email that your event exists you need to register it in your plugin's Primary Class file.

``` php
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