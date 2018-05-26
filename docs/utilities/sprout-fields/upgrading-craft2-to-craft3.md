Several things have changed between Sprout Fields 2 for Craft 2 and Sprout Fields 3 for Craft 3. In Craft 2 Sprout Fields provided fields for both the Craft CP and for Sprout Forms. Sprout Forms for Craft 3 now has it's own Field API so your Sprout Fields will be migrated different depending on whether you are using them as fields in Craft or in Sprout Forms.

When you update Craft please consider the following changes and learn about how your data will be migrated below:


Craft 2<br>Sprout Forms 3    | Craft 3        | Sprout Forms 4
-----------------|---------------------|----------------------------------
–                | Address (New)   | Address (New)        
Email            | Email           | Email
Email Select     | –               | Email Dropdown
–                | Gender (New)    | Gender (New)            
Hidden           | Predefined      | Hidden
Invisible        | Predefined      | Invisible
Link             | URL (Renamed)   | URL (Renamed)
–                | Name (New)      | Name (New)             
Notes            | Notes           | Section Heading / Custom HTML
Phone            | Phone (Changed) | Phone (Changed)           
Regex            | Regex           | Regex      

## Changed Fields (Breaking Changes)

- **Phone Field** - We've introduced a new International Phone Field in Craft 3. There is no easy way to predict which format the existing Phone field is storing data so we will be migrating all existing Phone fields to a default Plain Text Field in Craft 3. If you'd like to use the new International Phone Field a separate migration will be necessary.

- **Notes Field** - The Notes field now uses a file-based CSS method to customize Notes field styles, similar to how Redactor Toolbars work. You will no longer find the custom style settings in the Craft admin, or be limited to our pre-defined style naming conventions. You now have complete flexibility to add as many Style configurations as you'd like. Styles must be added to the `config/sproutnotes` folder and use a new naming convention. Existing styles will need to be manually migrated and updated to these CSS files so be sure to copy your existing custom styles before updating and review the docs for how to customize new styles. Previous dynamic `{{ name }}` references will need to be updated to use the new `FIELDHANDLE` convention. See the Notes Field docs on [Custom Styles](https://sprout.barrelstrengthdesign.com/craft-plugins/fields/docs/overview/notes-field#custom-styles) for more info.

## Renamed Fields

As Craft has now added a simple URL Field, we have chosen to update the Link field to be consistent and use the same name.

- **Link Field** => URL (Sprout)

## Removed Fields

Sprout Forms no longer relies on existing Craft Field Types so some fields and we can now deprecate several fields that don't really have many Control Panel use cases but we here to work with Sprout Forms. Any data that you have stored in these fields will be migrated to a default Craft field type during the upgrade. The following fields will be removed in Craft 3:

- **Email Select Field** (will be migrated to use a Table Field)
- **Hidden Field** (will be migrated to use a Plain Text Field)
- **Invisible Field** (will be migrated to use a Plain Text Field)
