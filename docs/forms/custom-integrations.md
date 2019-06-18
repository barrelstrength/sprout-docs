# Integrations

The Integrations API enables you to provide additional [Integrations](./integrations.md) for users to select and configure when creating Forms.

## Integration Class

Building a custom Integration class requires extending `barrelstrength\sproutforms\base\Integration`.

``` php
<?php

namespace mycompany\myplugin\integrations\sproutforms\integrationtypes;

use barrelstrength\sproutforms\base\Integration;

class CustomEndpoint extends Integration
{
    public static function displayName(): string { ... }
    public function getSettingsHtml() { ... }
    public function submit(): bool { ... }
    public function resolveFieldMapping() { ... }
    public function getFieldMappingSettingsHtml() { ... }
}
```

## Register Event

Once you have created your Custom Integration, register you Integration class with Sprout Forms to display your Integration in the Integration dropdown.

``` php
namespace mycompany\myplugin;

use mycompany\myplugin\integrations\sproutforms\integrationtypes\CustomIntegration;
use barrelstrength\sproutforms\services\Integrations;
use craft\events\RegisterComponentTypesEvent;
use yii\base\Event;

class MyPlugin extends Plugin
{
  public function init()
  {
    parent::init();
    
    Event::on(Integrations::class, Integrations::EVENT_REGISTER_INTEGRATIONS, function(RegisterComponentTypesEvent $event) {
        $event->types[] = CustomIntegration::class;
    });
  
  }
}
```

::: tip
Integrations are available in Sprout Forms for Craft 3.
:::