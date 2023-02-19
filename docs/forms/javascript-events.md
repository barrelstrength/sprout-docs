---
date: 2023-02-19
description: The Sprout Forms AJAX Submission process can be extended using the following javascript events.
---

# Javascript Events

The Sprout Forms AJAX Submission process can be extended using the following javascript events.

The following examples assume you have defined a `form` variable in your javascript that references the given Sprout Form being submitted such as `let form = document.getElementById('{{ id }}')`. Custom events are dispatched on the form element.

## beforeSproutFormsSubmit

Gives third-party scripts a chance to take actions before the form is submitted.

``` javascript
form.addEventListener('beforeSproutFormsSubmit', function(event) {
  
    // Retrieve a copy of the form element
    let targetForm = event.target;
  
    // Cancel the default form submission
    event.preventDefault();

    // Add a promise to be evaluated   
    event.detail.promises.push(yourPromise);

}, false);
```

Promises added to the `event.detail.promises` array should:

- `resolve(true)` to continue the form submission
- `resolve(false)` or `reject('whatever')` to cancel the form submission

## onSproutFormsSubmit

Gives third-party scripts a chance to take over the submit behavior.

``` javascript
form.addEventListener('onSproutFormsSubmit', function(event) {

    // Retrieve a copy of the form element
    let targetForm = event.target;
  
    // Cancel the default form submission
    event.preventDefault();

    // Let Sprout Forms complete the submit behavior using the existing form settings
    event.detail.submitHandler.handleFormSubmit()

}, false);
```

## afterSproutFormsSubmit

Gives third-party scripts a chance to do something after the submission is complete.

``` javascript
form.addEventListener('afterSproutFormsSubmit', function(event) {
  
    // Retrieve a copy of the form element
    let targetForm = event.target;

}, false);
```

## onSproutFormsSubmitCancelled

Gives third-party scripts a chance to do something if the submission was cancelled.

``` javascript
form.addEventListener('onSproutFormsSubmitCancelled', function(event) {
  
    // Retrieve a copy of the form element
    let targetForm = event.target;

}, false);
```
