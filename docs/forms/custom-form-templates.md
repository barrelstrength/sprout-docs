---
date: 2018-06-25
description: Form Templates enable you to manage Template Overrides as a plugin to easily reuse across projects or share in the Plugin Store.
---

# Form Templates

Form Templates enable you to manage [Template Overrides](./template-overrides.md) as a plugin to easily reuse across projects or share in the Plugin Store.

## Form Template Class

A Form Template class is quite simple and only requires that you define the name of your Form Template and the path where you store your [Template Overrides](./template-overrides.md).

``` php
<?php

namespace mycompany\myplugin\integrations\sproutforms\formtemplates;

use barrelstrength\sproutforms\base\FormTemplates;
use Craft;

class MyFormTemplates extends FormTemplates
{
    public function getName()
    {
        return Craft::t('my-plugin', 'My Custom Form Templates');
    }

    public function getPath()
    {
        return Craft::getAlias('@mycompany/myplugin/templates/_integrations/sproutforms/formtemplates/');
    }
}
```

## Register Event

Once you have created your Custom Form Templates, register you Form Template class with Sprout Forms to display your Form Templates in the Form Template dropdown.

``` php
namespace mycompany\myplugin;

use mycompany\myplugin\integrations\sproutforms\formtemplates\MyFormTemplates;
use barrelstrength\sproutforms\services\Forms;
use craft\events\RegisterComponentTypesEvent;
use yii\base\Event;

class MyPlugin extends Plugin
{

  public function init()
  {
    parent::init();
    
    Event::on(Forms::class, Forms::EVENT_REGISTER_FORM_TEMPLATES, function(RegisterComponentTypesEvent $event) {
      $event->types[] = MyFormTemplates::class;
    });
  
  }
}
```

::: tip
Form Templates are available in Sprout Forms for Craft 3. Upgrade to Craft 3 and enjoy the power and flexibility of Form Templates! 
:::