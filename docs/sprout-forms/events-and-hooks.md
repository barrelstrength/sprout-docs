Sprout Forms can be extended using the following Events and Hooks.

## Events

#### sproutForms.onBeforeSaveEntry

Raised before an entry is saved

**Params:**

- _entry_ – The submitted SproutForms_EntryModel
- _isNewEntry_ -  A boolean indicating whether this is a brand new form entry

#### sproutForms.onSaveEntry

Raised just after an entry is saved

**Params:**

- _entry_ – The submitted SproutForms_EntryModel
- _isNewEntry_ -  A boolean indicating whether this is a brand new form entry

## Hooks

#### sproutForms.modifyForm

Gives plugins a chance to dynamically add content to a form template. The hook will output content between the <form> tags when using the displayForm, displayTab, or displayField tags.

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
