---
date: 2023-02-19
description: The Sprout Forms 'Submission Method' setting allows you to choose to submit your forms via AJAX.
---

# Submitting a Form via AJAX

The Sprout Forms 'Submission Method' setting allows you to choose to submit your forms via AJAX. If the default behavior does not fit your needs, you can adjust the workflow by using Custom Form Templates to tweak the default settings, watch several Form Submission javascript events, or throw out the Sprout Forms JS entirely and replace it with your own.

## Submit Event

Unless you want to swap out theSprout Forms javascript entirely, we recommend that you don't add any Event Listeners to the `submit` Event as they can cause conflicts and unexpected behavior that can be hard to troubleshoot. Instead, let Sprout Forms watch the `submit` Event and hijack the form submission in one of the [Javascript Events](./javascript-events.md) that we provide.

``` javascript
BAD
form.addEventListener('submit', function(event) {
    // ...
}, false);

BETTER
form.addEventListener('onSproutFormsSubmit', function(event) {
    // ...
}, false);
```

## Adjust Submit Handler settings

If necessary, the Submit Handler javascript can be customized using several settings. An example of how to override the default values is below, however, the example shows all the default values:

``` javascript
new SproutFormsSubmitHandler('{{ id }}', {
    successMessageClass: 'sproutforms-message-success',
    errorMessageClass: 'sproutforms-message-errors',
    
    messageElement: 'div',
    errorsContainerElement: 'ul.errors',
    errorsItemElement: 'li',
    
    // Fields are targeted via their dynamic field handle: id="fields-{fieldHandle}-field"
    fieldWrapperIdPrefix: 'fields-',
    fieldWrapperIdSuffix: '-field',
    
    // The selector used to identify the wrapper for all fields
    fieldWrapperQuerySelector: '.field' 
});
```
