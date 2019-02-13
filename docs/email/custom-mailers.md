# Mailers

Mailers enable you to manage your Campaign Emails within Craft and send Campaign Emails via your favorite email service.

Adding a custom Mailer involves:

1. Extending Sprout Email's Mailer class
2. Registering your Mailer

## Mailer Class

::: code

``` php Craft 3
namespace mycompany\myplugin\integrations\sproutemail\mailers;

use barrelstrength\sproutbase\contracts\sproutemail\BaseMailer;
use barrelstrength\sproutbase\contracts\sproutemail\CampaignEmailSenderInterface;

class MyMailer extends BaseMailer implements CampaignEmailSenderInterface
{
  ...
}
```

``` html Craft 2
See codebase for examples.
```

:::

## Register Event

::: code

``` php Craft 3
namespace mycompany\myplugin;

use mycompany\myplugin\integrations\sproutemail\mailers\MyMailer;
use barrelstrength\sproutbase\services\sproutemail\Mailers;
use barrelstrength\sproutbase\events\RegisterMailersEvent;
use yii\base\Event;

class MyPlugin extends Plugin
{

  public function init()
  {
    parent::init();
    
    Event::on(Mailers::class, Mailers::EVENT_REGISTER_MAILERS, function(RegisterMailersEvent $event) {
        $event->mailers[] = new MyMailer();
    });
  
  }
}
```

``` html Craft 2
See codebase for examples.
```

:::