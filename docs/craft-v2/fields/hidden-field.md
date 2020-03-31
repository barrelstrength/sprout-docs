# Hidden Field

The Hidden field allows you to create a hidden input and set it's value. The Hidden field is designed to be used as a Sprout Forms front-end Field.

## Sprout Forms Field

``` html
<input type="hidden" name="polo" value="marco">
```

The Hidden field behaves like a hidden input field!  When you create a hidden field you can set it to have a fixed or dynamic value which will be set as the value on the front-end.

When viewing a submitted Hidden field value in the Control Panel, by default, the Hidden field value is visible but the field is disabled and un-editable. Enable the _Allow updates_ setting to be able to edit a Hidden field after it is submitted.

_Note: the Hidden Field can be viewed in the Control Panel but may not have many practical uses outside of use on the front-end._

### Setting a fixed value

In the most basic use, if you know what the value you want the field to be set to, you can set that specific value in the settings.

**Example Hidden Field Settings**

- _Handle_: source
- _Hidden Field Value_: landingPage

``` html
<input type="hidden" name="source" value="landingPage">
```

### Setting a dynamic value (in the global scope)

If you want to populate your Hidden Field with a dynamic value, you can set your Hidden Field to any global value that you'd expect to find in the template your Form is displayed on the front-end using single curly brace Twig syntax.

**Example Hidden Field Settings**

``` twig
- _Handle_: landingPage
- _Hidden Field Value_: {craft.request.path}
```

``` html
<input type="hidden" name="landingPage" value="landing-pages/lead-generation-form">
```

- _Handle_: userId
- _Hidden Field Value_: {currentUser.id}

``` html
<input type="hidden" name="userId" value="42">
```

### Setting a dynamic value (outside the global scope)

If you need access to specific variables that are not in the global scope, you will need to add those using the Sprout Forms `addFieldVariables` tag. Before your form is output on the page, set any variables that you wish to be available to your field settings.

``` twig
{# Here, we are making our EntryModel variable available to our settings. #}
{% do craft.sproutForms.addFieldVariables({ entry: entry }) %}
{{ craft.sproutForms.displayForm('contact') }}
```

Now, we can set our hidden field value using this variable:

- _Hidden Field Value_: {entryElement.id}

## Validation

Currently, hidden field provides no validation.