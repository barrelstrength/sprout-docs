# Supported Data Types

Sprout Import currently supports importing:

## Craft CMS data types

- **Elements** - Assets, Categories, Entries, Tags, Users
- **Settings** - Sections, Entry Types, Fields
- **Fields** - Assets, Categories, Checkboxes, Color, Date/Time, Dropdown, Entries, Lightswitch, Matrix, Multi-select, Number, Plain Text, Radio Buttons, Table, Tags, Users

## Craft Commerce data types

- **Elements** - Products (with Variants), Orders

## Sprout Plugins data types

_Sprout Forms_
- **Elements** - Forms, Form Entries
- **Fields** - Form Relations, Form Entry Relations, 

_Sprout Email_
- **Elements** - Notification Emails, Campaign Emails
- **Settings** - Campaign Types

_Sprout SEO_
- **Elements** - Redirects
- **Fields** - Element Metadata

_Sprout Fields_
- **Fields** - Address, Email, Gender, Name, Notes, Phone Field, Predefined, Regular Expression, URL

## Custom Field data types

_Sprout Import should be able to import any custom field you have in your field layout. You'll just need to format the JSON for that field to match how the field would be submitted in the saveElement request._

Some common third-party fields that Sprout Import supports:

- **Fields** - Neo, SuperTable, SmartMap, Position Select, Rich Text, etc.