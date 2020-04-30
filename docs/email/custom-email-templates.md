---
date: 2018-06-25
description: Email Templates enable you to manage Template Overrides as a plugin to easily reuse across projects or share in the Plugin Store.
---

# Email Templates

Email Templates enable you to manage [Template Overrides](./template-overrides.md) as a plugin to easily reuse across projects or share in the Plugin Store.

## Email Template Class

An Email Template class is quite simple and only requires that you define the name of your Email Template and the path where you store your [Template Overrides](./template-overrides.md).

``` php
<?php

namespace mycompany\myplugin\integrations\sproutemail\emailtemplates;

use barrelstrength\sproutbaseemail\base\EmailTemplates;
use Craft;

class MyEmailTemplates extends EmailTemplates
{
    public function getName()
    {
        return Craft::t('my-plugin', 'My Custom Email Templates');
    }

    public function getPath()
    {
        return Craft::getAlias('@mycompany/myplugin/templates/_integrations/sproutemail/emailtemplates/');
    }
}
```

## Register Event

Once you have created your Custom Email Templates, register you Email Template class with Sprout Email to display your Email Templates in the Email Template dropdown.

``` php
namespace mycompany\myplugin;

use mycompany\myplugin\integrations\sproutemail\emailtemplates\MyEmailTemplates;
use barrelstrength\sproutbaseemail\services\EmailTemplates;
use craft\events\RegisterComponentTypesEvent;
use yii\base\Event;

class MyPlugin extends Plugin
{

  public function init()
  {
    parent::init();
    
    Event::on(Email::class, Email::EVENT_REGISTER_EMAIL_TEMPLATES, function(RegisterComponentTypesEvent $event) {
      $event->types[] = MyEmailTemplates::class;
    });  
  }
}
```

::: tip
Email Templates are available in Sprout Email for Craft 3. Upgrade to Craft 3 and enjoy the power and flexibility of Email Templates! 
:::