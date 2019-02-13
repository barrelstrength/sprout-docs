# Custom HTML

## Working with a Custom HTML Form

Sprout Forms gives you 100% control over your form templates. 

::: warning PROCEED WITH CAUTION
Custom HTML should be considered a last resort. If you feel you have no other options and need to use Custom HTML, reach out and [let us know](mailto:sprout@barrelstrengthdesign.com). We'd love to understand your use case so we can improve Sprout Forms and make it less likely you need to use the Custom HTML in the future.
 
If you need to customize your form, [Template Overrides](./template-overrides.md) and the [Form Field API](./custom-form-fields.md) are good places to start. They address the majority of what you need to have control over the markup and styles in your templates, specialized fields, and custom validation.

Building your forms in Custom HTML makes forms harder to maintain, introduces the possibility for several potential details that must be maintained manually, and may also require more testing when updating.
:::

When building a custom HTML form, you will need to manage several states in your templates.

1. The form (your form and field settings)
2. The form entry (your form submission with any retained values or errors)

The [form tag](./forms.md) and the [getEntry tag](./entries.md) must be used together to manage all of the different states of a form. Below are some examples of how to dynamically access the different values you will need in your templates.

## Loop through all fields dynamically

::: code

``` twig Craft 3
{% set form = craft.sproutForms.form('contact').one() %}
{% set entry = craft.sproutForms.getEntry(form) %}

{%- for tab in form.getFieldLayout().getTabs() %}
    
    {%- set layoutFields = tab.getFields() %}

    <section class="tab">

        {% if form.displaySectionTitles -%}
            <h3>{{ tab.name|t }}</h3>
        {%- endif %}

        {% for field in layoutFields -%}
        
            {%- do craft.sproutForms.addFieldVariables(_context) -%}
            
            {%- set label            = field.name ?? null %}
            {%- set instructions     = field.instructions ?? null %}
            {%- set name             = field.handle ?? null %}
            {%- set required         = field.required is defined and field.required ? true : false %}
            {%- set renderingOptions = attribute(renderingOptions.fields, name) is defined ? renderingOptions.fields[name] : {} %}
            
            {%- set id               = renderingOptions.id ?? name %}
            {%- set class            = renderingOptions.class ?? name ~ '-field' %}
            {%- set value            = entry is not empty ? entry.getFieldValue(name) : null %}
            {%- set errors           = entry is not empty ? entry.getErrors(name) : null %}
            {%- set errorClass       = renderingOptions.errorClass ?? 'errors' %}
            {%- set fieldCssClasses  = field['cssClasses'] is defined and not null ? field.cssClasses : '' %}
            
            {%- namespace field.getNamespace() -%}
                {%- if field.isPlainInput() -%}
            
                    {{ input|raw }}
            
                {%- else %}
            
                    {% set fieldHtmlTag = field.hasMultipleLabels() ? 'fieldset' : 'div' -%}
            
                    <{{ fieldHtmlTag }}
                    {%- if id %} id="{{ id }}-field"{% endif %} class="field {{ field.getFieldInputFolder() }}
                    {%- if class %} {{ class }}{% endif -%}
                    {%- if fieldCssClasses %} {{ fieldCssClasses }}{% endif -%}
                    {%- if errors %} {{ errorClass }}{% endif -%}
                    {%- if required %} required{% endif -%}
                    ">
                    {% if (label or instructions) and field.displayLabel() -%}
                        <div class="heading">
                            {% if label -%}
                                {%- if field.hasMultipleLabels() -%}
                                    <legend>{{- label|raw|t('site') -}}</legend>
                                {%- else -%}
                                    <label{% if name %} for="{{ name }}"{% endif %}>
                                        {{- label|raw|t('site') -}}
                                    </label>
                                {%- endif -%}
                            {%- endif -%}
                            {% if instructions %}
            
                                <p id="{{ id }}-instructions"
                                   class="instructions">{{ instructions|t('site')|raw }}</p>
                            {%- endif %}
            
                        </div>
                    {% endif -%}
            
                    <div class="input">
                        {{ field.name }}
                        {{ field.handle }}
                        {{ field.instructions }}
                        
                        {{ field.id }}
                        {{ field.getFieldInputFolder() }}
                        
                        {# See all field options
                        {{ dump(field) }}
                        #}
                    </div>
                    
                    {# Display your errors
                    {% include "errors" with {
                        errors: errors,
                        name: name
                    } %}
                    #}
            
                    </{{ fieldHtmlTag }}>
                {%- endif -%}
            {%- endnamespace -%}
            
        {%- endfor %}

    </section>
    
{% endfor -%}
```

``` twig Craft 2
{% set form = craft.sproutForms.form('contact') %}

{% for tab in form.getFieldLayout().getTabs() %}

  {% set fields = tab.getFields() %}

  {% for field in fields %}
    
    {% set required = field.required %}
    {% set tabId = field.tabId %}

    {% set field = field.getField() %}

      {{ field.name }}
      {{ field.handle }}
      {{ field.instructions }}

      {{ field.id }}
      {{ field.type }}

      {# Note: Settings may be different for each field type
           You will need to add conditionals appropriately. #}
      {% for setting in field.settings %}
        ...
      {% endfor %}

  {% endfor %}

{% endfor %}
```

:::

## Example code to manually manage all default Fields in your templates

::: code

``` twig Craft 3
{# Prepare our error macro #}
{% macro errorList(errors) %}
    {# To display errors, you want to make sure errors exist, 
         and then you can loop through and display them #}
    {% if errors %}
            <ul class="errors">
                    {% for error in errors %}
                            <li>{{ error }}</li>
                    {% endfor %}
            </ul>
    {% endif %}
{% endmacro %}

{% from _self import errorList %}

{# Get our Form data #}
{% set form = craft.sproutForms.form('contact').one() %}

{# Get our Form Entry data to manage error states and re-populating field values #}
{% set submittedEntry = craft.sproutForms.getEntry(form) %}

<form method="post" accept-charset="UTF-8">
    {{ getCsrfInput() }}
    <input type="hidden" name="action" value="sprout-forms/entries/save-entry">
    <input type="hidden" name="handle" value="{{ form.handle }}">
    {{ redirectInput(form.redirectUri) }}
    
    <div class="fields">
    
        {% set textField = form.getField('plainText') %}
    
        {% if textField is defined %}
        
            <div class="field" id="fields-{{ textField.handle }}-field">
                <div class="heading">
                    <label class="required" for="fields-{{ textField.handle }}">
                        {{ textField.name }}
                    </label>
                </div>
                <div class="input">
                    <input type="text" name="fields[{{ textField.handle }}]" value="{{ attribute(submittedEntry, textField.handle) }}">
                </div>
                {% if submittedEntry is defined %}
                <div class="error">
                    {{ errorList(submittedEntry.getErrors(textField.handle)) }}
                </div>
                {% endif %}
            </div>
    
        {% endif %}
    
    
        {% set dropdownField = form.getField('dropdown') %}
    
        {# We use the Twig attribute tag to dynamically access our 
             field value on the submitted Form Entry #}
        {% set submittedDropdownValue = attribute(submittedEntry, dropdownField.handle) %}
    
        {% if dropdownField is defined %}
    
            <div class="field" id="fields-{{ dropdownField.handle }}-field">
                <div class="heading">
                    <label class="required" for="fields-{{ dropdownField.handle }}">
                        {{ dropdownField.name }}
                    </label>
                </div>
                <div class="input">
                    <div class="select">
                        <select name="fields[{{ dropdownField.handle }}]">
                            <option value="">Select...</option>
                            {% for option in dropdownField.settings.options %}
    
                                {% set defaultValue = option.default ? option.value : null %}
                                {% set selectedDropdownValue = submittedDropdownValue != '' ? submittedDropdownValue : defaultValue %}
    
                                <option value="{{ option.value }}" {% if selectedDropdownValue == option.value %}selected="selected"{% endif %}>{{ option.label }}</option>
    
                            {% endfor %}
                        </select>
                    </div>
                </div>
                {% if submittedEntry is defined %}
                <div class="error">
                    {{ errorList(submittedEntry.getErrors(dropdownField.handle)) }}
                </div>
                {% endif %}
            </div>
        {% endif %}
    
    
        {% set numberField = form.getField('number') %}
    
        {% if numberField is defined %}
    
            <div class="field" id="fields-{{ numberField.handle }}-field">
                <div class="heading">
                    <label for="fields-{{ numberField.handle }}">
                        Number Field
                    </label>
                </div>
                <div class="input">
                    <input type="text" size="5" name="fields[{{ numberField.handle }}]" value="{{ attribute(submittedEntry, numberField.handle) }}">
                </div>
                {% if submittedEntry is defined %}
                <div class="error">
                    {{ errorList(submittedEntry.getErrors(numberField.handle)) }}
                </div>
                {% endif %}
            </div>
    
        {% endif %}
    
    
        {% set radioButtonsField = form.getField('radioButtons') %}
        {% set submittedRadioValue = attribute(submittedEntry, radioButtonsField.handle) %}
    
        {% if radioButtonsField is defined %}
    
            <div class="field" id="fields-{{ radioButtonsField.handle }}-field">
                <div class="heading">
                    <label for="fields-{{ radioButtonsField.handle }}">
                        Radio Buttons Field
                    </label>
                </div>
                <div class="input">
    
                    {% for option in radioButtonsField.settings.options %}
    
                        {% set defaultValue = option.default ? option.value : null %}
                        {% set selectedRadioValue = submittedRadioValue != '' ? submittedRadioValue : defaultValue %}
    
                        <div>
                            <label>
                                <input type="radio" value="{{ option.value }}" name="fields[{{ radioButtonsField.handle }}]" {%- if selectedRadioValue == option.value %} checked="checked"{% endif -%}> {{ option.label }}
                            </label>
                        </div>
                    {% endfor %}
    
                </div>
                {% if submittedEntry is defined %}
                <div class="error">
                    {{ errorList(submittedEntry.getErrors(radioButtonsField.handle)) }}
                </div>
                {% endif %}
            </div>
    
        {% endif %}
    
    
        {% set checkboxesField = form.getField('checkboxes') %}
        {% set submittedCheckboxValues = attribute(submittedEntry, checkboxesField.handle) %}
    
        {% if checkboxesField is defined %}
    
            <div class="field" id="fields-{{ checkboxesField.handle }}-field">
                <div class="heading">
                    <label for="fields-{{ checkboxesField.handle }}">
                        {{ checkboxesField.name }}
                    </label>
                </div>
                <div class="input">
                    
                    {% for key, option in checkboxesField.settings.options %}
    
                        {% set defaultValue = (option.default and not submittedEntry.getErrors()|length) ? option.value : null %}
                        {% set submittedCheckbox = submittedCheckboxValues.options[key] %}
                        {% set selectedCheckboxValue = submittedCheckbox.selected ? submittedCheckbox.value : defaultValue %}
                        
                        <div>
                            <label><input type="checkbox" value="{{ option.value }}" class="checkbox" name="fields[{{ checkboxesField.handle }}][]" {%- if selectedCheckboxValue == option.value %} checked="checked"{% endif -%}>&nbsp;{{ option.label }}</label>
                        </div>
                    {% endfor %}
    
                </div>
                {% if submittedEntry is defined %}
                <div class="error">
                    {{ errorList(submittedEntry.getErrors(checkboxesField.handle)) }}
                </div>
                {% endif %}
            </div>
        
        {% endif %}
    
    
        {% set multiSelectField = form.getField('multiSelect') %}
        {% set multiSelectValues = attribute(submittedEntry, multiSelectField.handle) %}
    
        {% if multiSelectField is defined %}
    
            <div class="field" id="fields-{{ multiSelectField.handle }}-field">
                <div class="heading">
                    <label for="fields-{{ multiSelectField.handle }}">
                        {{ multiSelectField.name }}
                    </label>
                </div>
                <div class="input">
                    <select multiple="" name="fields[{{ multiSelectField.handle }}][]">
    
                        {% for key, option in multiSelectField.settings.options %}
    
                            {% set defaultValue = (option.default and not submittedEntry.getErrors()|length) ? option.value : null %}
                            {% set submittedMultiSelect = multiSelectValues.options[key] %}
                            {% set selectedultiSelectValue = submittedMultiSelect.selected ? submittedMultiSelect.value : defaultValue %}
                            
                            <option value="{{ option.value }}" {%- if selectedultiSelectValue == option.value %} selected="selected"{% endif -%}>{{ option.label }}</option>
    
                        {% endfor %}
    
                    </select>
                </div>
                {% if submittedEntry is defined %}
                <div class="error">
                    {{ errorList(submittedEntry.getErrors(multiSelectField.handle)) }}
                </div>
                {% endif %}
            </div>
    
        {% endif %}
    
    
        {% set textareaField = form.getField('textarea') %}
    
        {% if textareaField is defined %}
    
            <div class="field" id="fields-{{ textareaField.handle }}-field">
                <div class="heading">
                    <label for="fields-{{ textareaField.handle }}">
                        {{ textareaField.name }}
                    </label>
                </div>
                <div class="input">
                    <textarea rows="4" cols="50" name="fields[{{ textareaField.handle }}]">
                        {{- attribute(submittedEntry, textareaField.handle) -}}
                    </textarea>
                </div>
                {% if submittedEntry is defined %}
                <div class="error">
                    {{ errorList(submittedEntry.getErrors(textareaField.handle)) }}
                </div>
                {% endif %}
            </div>
    
        {% endif %}
    
    </div>
    
    {# Make sure you add the modifyForm hook to keep Captchas working #}
    {% hook 'sproutForms.modifyForm' %}
    
    <div class="submit">
        <input type="submit" value="{{ form.submitButtonText is not empty ? form.submitButtonText : 'Submit'|t('site') }}">
    </div>

</form>
```

``` twig Craft 2
{# Prepare our error macro #}
{% macro errorList(errors) %}
    {# To display errors, you want to make sure errors exist, 
         and then you can loop through and display them #}
    {% if errors %}
            <ul class="errors">
                    {% for error in errors %}
                            <li>{{ error }}</li>
                    {% endfor %}
            </ul>
    {% endif %}
{% endmacro %}

{% from _self import errorList %}

{# Get our Form data #}
{% set form = craft.sproutForms.form('basic') %}

{# Get our Form Entry data to manage error states and re-populating field values #}
{% set submittedEntry = craft.sproutForms.getEntry(form) %}

<form method="post" accept-charset="UTF-8">
    {{ getCsrfInput() }}
    <input type="hidden" name="action" value="sproutForms/entries/saveEntry">
    <input type="hidden" name="handle" value="{{ form.handle }}">
    <input type="hidden" name="redirect" value="{{ form.redirectUri }}">
    
    <div class="fields">
    
        {% set textField = form.getField('plainText') %}
    
        {% if textField is defined %}
        
            <div class="field" id="fields-{{ textField.handle }}-field">
                <div class="heading">
                    <label class="required" for="fields-{{ textField.handle }}">
                        {{ textField.name }}
                    </label>
                </div>
                <div class="input">
                    <input type="text" name="fields[{{ textField.handle }}]" value="{{ attribute(submittedEntry, textField.handle) }}">
                </div>
                {% if submittedEntry is defined %}
                <div class="error">
                    {{ errorList(submittedEntry.getErrors(textField.handle)) }}
                </div>
                {% endif %}
            </div>
    
        {% endif %}
    
    
        {% set dropdownField = form.getField('dropdown') %}
    
        {# We use the Twig attribute tag to dynamically access our 
             field value on the submitted Form Entry #}
        {% set submittedDropdownValue = attribute(submittedEntry, dropdownField.handle) %}
    
        {% if dropdownField is defined %}
    
            <div class="field" id="fields-{{ dropdownField.handle }}-field">
                <div class="heading">
                    <label class="required" for="fields-{{ dropdownField.handle }}">
                        {{ dropdownField.name }}
                    </label>
                </div>
                <div class="input">
                    <div class="select">
                        <select name="fields[{{ dropdownField.handle }}]">
                            <option value="">Select...</option>
                            {% for option in dropdownField.settings.options %}
    
                                {% set defaultValue = option.default ? option.value : null %}
                                {% set selectedDropdownValue = submittedDropdownValue != '' ? submittedDropdownValue : defaultValue %}
    
                                <option value="{{ option.value }}" {% if selectedDropdownValue == option.value %}selected="selected"{% endif %}>{{ option.label }}</option>
    
                            {% endfor %}
                        </select>
                    </div>
                </div>
                {% if submittedEntry is defined %}
                <div class="error">
                    {{ errorList(submittedEntry.getErrors(dropdownField.handle)) }}
                </div>
                {% endif %}
            </div>
        {% endif %}
    
    
        {% set numberField = form.getField('number') %}
    
        {% if numberField is defined %}
    
            <div class="field" id="fields-{{ numberField.handle }}-field">
                <div class="heading">
                    <label for="fields-{{ numberField.handle }}">
                        Number Field
                    </label>
                </div>
                <div class="input">
                    <input type="text" size="5" name="fields[{{ numberField.handle }}]" value="{{ attribute(submittedEntry, numberField.handle) }}">
                </div>
                {% if submittedEntry is defined %}
                <div class="error">
                    {{ errorList(submittedEntry.getErrors(numberField.handle)) }}
                </div>
                {% endif %}
            </div>
    
        {% endif %}
    
    
        {% set radioButtonsField = form.getField('radioButtons') %}
        {% set submittedRadioValue = attribute(submittedEntry, radioButtonsField.handle) %}
    
        {% if radioButtonsField is defined %}
    
            <div class="field" id="fields-{{ radioButtonsField.handle }}-field">
                <div class="heading">
                    <label for="fields-{{ radioButtonsField.handle }}">
                        Radio Buttons Field
                    </label>
                </div>
                <div class="input">
    
                    {% for option in radioButtonsField.settings.options %}
    
                        {% set defaultValue = option.default ? option.value : null %}
                        {% set selectedRadioValue = submittedRadioValue != '' ? submittedRadioValue : defaultValue %}
    
                        <div>
                            <label>
                                <input type="radio" value="{{ option.value }}" name="fields[{{ radioButtonsField.handle }}]" {%- if selectedRadioValue == option.value %} checked="checked"{% endif -%}> {{ option.label }}
                            </label>
                        </div>
                    {% endfor %}
    
                </div>
                {% if submittedEntry is defined %}
                <div class="error">
                    {{ errorList(submittedEntry.getErrors(radioButtonsField.handle)) }}
                </div>
                {% endif %}
            </div>
    
        {% endif %}
    
    
    
        {% set checkboxesField = form.getField('checkboxes') %}
        {% set submittedCheckboxValues = attribute(submittedEntry, checkboxesField.handle) %}
    
        {% if checkboxesField is defined %}
    
            <div class="field" id="fields-{{ checkboxesField.handle }}-field">
                <div class="heading">
                    <label for="fields-{{ checkboxesField.handle }}">
                        {{ checkboxesField.name }}
                    </label>
                </div>
                <div class="input">
                    
                    {% for key, option in checkboxesField.settings.options %}
    
                        {% set defaultValue = (option.default and not submittedEntry.getErrors()|length) ? option.value : null %}
                        {% set submittedCheckbox = submittedCheckboxValues.options[key] %}
                        {% set selectedCheckboxValue = submittedCheckbox.selected ? submittedCheckbox.value : defaultValue %}
                        
                        <div>
                            <label><input type="checkbox" value="{{ option.value }}" class="checkbox" name="fields[{{ checkboxesField.handle }}][]" {%- if selectedCheckboxValue == option.value %} checked="checked"{% endif -%}>&nbsp;{{ option.label }}</label>
                        </div>
                    {% endfor %}
    
                </div>
                {% if submittedEntry is defined %}
                <div class="error">
                    {{ errorList(submittedEntry.getErrors(checkboxesField.handle)) }}
                </div>
                {% endif %}
            </div>
        
        {% endif %}
    
    
        {% set multiSelectField = form.getField('multiSelect') %}
        {% set multiSelectValues = attribute(submittedEntry, multiSelectField.handle) %}
    
        {% if multiSelectField is defined %}
    
            <div class="field" id="fields-{{ multiSelectField.handle }}-field">
                <div class="heading">
                    <label for="fields-{{ multiSelectField.handle }}">
                        {{ multiSelectField.name }}
                    </label>
                </div>
                <div class="input">
                    <select multiple="" name="fields[{{ multiSelectField.handle }}][]">
    
                        {% for key, option in multiSelectField.settings.options %}
    
                            {% set defaultValue = (option.default and not submittedEntry.getErrors()|length) ? option.value : null %}
                            {% set submittedMultiSelect = multiSelectValues.options[key] %}
                            {% set selectedultiSelectValue = submittedMultiSelect.selected ? submittedMultiSelect.value : defaultValue %}
                            
                            <option value="{{ option.value }}" {%- if selectedultiSelectValue == option.value %} selected="selected"{% endif -%}>{{ option.label }}</option>
    
                        {% endfor %}
    
                    </select>
                </div>
                {% if submittedEntry is defined %}
                <div class="error">
                    {{ errorList(submittedEntry.getErrors(multiSelectField.handle)) }}
                </div>
                {% endif %}
            </div>
    
        {% endif %}
    
    
        {% set textareaField = form.getField('textarea') %}
    
        {% if textareaField is defined %}
    
            <div class="field" id="fields-{{ textareaField.handle }}-field">
                <div class="heading">
                    <label for="fields-{{ textareaField.handle }}">
                        {{ textareaField.name }}
                    </label>
                </div>
                <div class="input">
                    <textarea rows="4" cols="50" name="fields[{{ textareaField.handle }}]">
                        {{- attribute(submittedEntry, textareaField.handle) -}}
                    </textarea>
                </div>
                {% if submittedEntry is defined %}
                <div class="error">
                    {{ errorList(submittedEntry.getErrors(textareaField.handle)) }}
                </div>
                {% endif %}
            </div>
    
        {% endif %}
    
    </div>
    
    {# Make sure you add the modifyForm hook to keep Captchas working #}
    {% hook 'sproutForms.modifyForm' %}
    
    <div class="submit">
        <input type="submit" value="Submit">
    </div>

</form>
```

:::