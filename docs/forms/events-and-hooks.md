# Events & Hooks

Sprout Forms can be extended using the following Events and Hooks.

## Events

### Before a Form Entry is saved

Raised before an entry is saved.

``` html
sproutForms.onBeforeSaveEntry
```

#### Params

- _entry_ – The submitted SproutForms_EntryModel
- _isNewEntry_ -  A boolean indicating whether this is a brand new form entry

### After a Form Entry is Saved 

Raised just after an entry is saved

``` html
sproutForms.onSaveEntry
```

#### Params

- _entry_ – The submitted SproutForms_EntryModel
- _isNewEntry_ -  A boolean indicating whether this is a brand new form entry

## Hooks

### Template Hook 

The `sproutForms.modifyForm` Template Hook gives plugins a chance to dynamically add content to a form template. The hook will output content between the `<form>` tags when using the `displayForm` tag.

``` php
public function init()
{
  craft()->templates->hook('sproutForms.modifyForm', function(&$context)
  {
    $content = '<div><input type="hidden" name="spammityspam" value="spam"></div>';
    return TemplateHelper::getRaw($content);
  });
}
```
