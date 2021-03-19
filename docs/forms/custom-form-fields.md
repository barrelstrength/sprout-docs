---
date: 2018-06-25
description: Form Fields enable you to add new Fields to the Form Builder and manage its field settings and front-end output.
---

# Form Fields

Form Fields enable you to add new Fields to the Form Builder and manage its field settings and front-end output.

See the following plugins for examples:

- [Range Slider Field for Sprout Forms](https://github.com/barrelstrength/craft-sprout-forms-range-slider)
- [US States Field for Sprout Forms](https://github.com/barrelstrength/craft-sprout-forms-us-states)

### Register Event

Once you have created your Custom Form Field, register your Form Field class with Sprout Forms to display your Form Field in the Form Builder.

``` php
namespace barrelstrength\sproutformsrangeslider;

use barrelstrength\sproutforms\services\Fields;
use barrelstrength\sproutforms\events\RegisterFieldsEvent;
use barrelstrength\sproutformsrangeslider\integrations\sproutforms\fields\RangeSlider;
use Craft;
use craft\base\Plugin;
use yii\base\Event;

class SproutFormsRangeSlider extends Plugin
{
    public function init()
    {
        Event::on(Fields::class, Fields::EVENT_REGISTER_FIELDS, function(RegisterFieldsEvent $event) {
            $event->fields[] = new RangeSlider();
        });
    }
}
```

### Custom Front-End Fields

To create a field that extends the Sprout Forms Front-end Field API, you'll need to do the following:

1. Create a **field class** that extends `SproutFormsBaseField`
2. Add the `getInputHtml()` method to your **field class**
3. Add the `registerSproutFormsFields()` in your **plugin class**

### Field Class

The _field_ class naming convention we recommend is: `{PluginHandle}{FieldType}{Field}`.

#### getInputHtml()

Like a back-end _field type_, your front end _field_ gets to decide what **html** to render to capture user input.

#### Signature
```php
public function getInputHtml($field, $value, $settings, array $renderingOptions = null)
```

```
$field            > The FieldModel we're providing front end rending for
$value            > The value associated with that field type
$settings         > The settings associated with that field type
$renderingOptions > Options available to displayForm(), displayTab(), displayField() tags
```

In addition to the arguments, you should make sure to return a `\Twig_Markup` object from this method so that your HTML is not escaped.

#### beginRendering()
This method should be called just before your render your front end field template inside of `getInputHtml()`

This is due to how we're allowing the user to override `form`, `tab`, and `field` templates for style customization.

Not calling `beginRendering()` could cause your template to not be found.

#### endRendering()
This method should be called just after you finish rendering your front end field template.

Not calling `endRendering()` could cause your template or Sprout Forms' own templates to not be found.

#### getTemplatesPath()
Because Sprout Forms allows the user to customize/override the default templates (`form.html`, `tab.html`, `field.html`, `errors.html`), we need to switch the template path a few times during rendering of all fields.

This method is your chance to make sure your templates are found when your field is rendered.

From this method, you should return the absolute path to your templates folder so that we can switch to it if you're rendering a template via `getInputHtml()`

---

If we follow the instructions above, our `getInputHtml()` and `getTemplatesPath()` might look something like this:

``` php
public function getInputHtml($field, $value, $settings, array $renderingOptions = null)
{
    $this->beginRendering();

    $rendered = craft()->templates->render(
        'plaintext/input',
        array(
            'name'             => $field->handle,
            'value'            => $value,
            'field'            => $field,
            'settings'         => $settings,
            'renderingOptions' => $renderingOptions
        )
    );

    $this->endRendering();

    return TemplateHelper::getRaw($rendered);
}

public function getTemplatesPath()
{
    return dirname(__FILE__).'/myplugin/templates/';
}
```

### Accessing variables in templates

If your field to be able to access variables within the template where your field is being rendered, a user can use the `sprout.forms.addFieldVariables()` method to make those variables available to your field.

### Examples

If you'd like to take a peek at how we're using this API, you can look in the `craft/plugins/sproutforms/integrations` folder.

All the default fields that we provide front end rendering for, are using this very API!
