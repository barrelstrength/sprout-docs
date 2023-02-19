---
date: 2023-02-19
description: Captchas enable you to add additional methods to protect your form from Spam.
---

# Captchas

Captchas enable you to add additional methods to protect your form from Spam.

## Captcha Class

See examples of how to build your Captcha Class from the default Captchas in Sprout Forms:

- [Duplicate Submission Captcha](https://github.com/barrelstrength/craft-sprout-forms/blob/v3/src/captchas/DuplicateCaptcha.php)
- [Javascript Captcha](https://github.com/barrelstrength/craft-sprout-forms/blob/v3/src/captchas/JavascriptCaptcha.php)
- [Honeypot Captcha](https://github.com/barrelstrength/craft-sprout-forms/blob/v3/src/captchas/HoneypotCaptcha.php)
- [Google Recaptcha for Sprout Forms](https://github.com/barrelstrength/craft-sprout-forms-google-recaptcha)

## Register Event

Once you have created your Custom Captcha, register your Captcha class with Sprout Forms to display your Captcha in the Spam Protection settings and enable it for your forms.

``` php
namespace mycompany\mycaptchaplugin;

use mycompany\myplugin\integrations\sproutforms\captchas\MyCaptcha;
use barrelstrength\sproutforms\services\Forms;
use yii\base\Event;

class MyCaptchaPlugin extends Plugin
{

  public function init()
  {
    parent::init();
    
    Event::on(Forms::class, Forms::EVENT_REGISTER_CAPTCHAS, function(Event $event) {
        $event->types[] = MyCaptcha::class;
    });
  
  }
}
```

