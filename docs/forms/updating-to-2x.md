# Updating to 2.x

Sprout Forms 2.0 introduces a number of new, powerful features and comes with a few breaking changes to be aware of.

We recommend backing up your database before upgrading and upgrading to 2.0 in a development environment where you can test your forms to ensure they work and are styled as expected.

Some changes to consider:

**The underlying, dynamic form templates have been updated**

- The `required` class has moved
- The `errors` classes have been updated
- Make sure the class names and HTML still work for your situation
- Some opinionated classes were removed
- Some additional classes have been added

**Sprout Email Field and Sprout Link Field**

Sprout Email Field and Sprout Link Field have been retired and are now part of **Sprout Fields**.  When you upgrade to Sprout Forms 2.x you will also need to upgrade to use Sprout Fields to have compatibility with the Email Field and Link Field.  

Installing Sprout Fields will run a script that updates all of your Email and Link fields to use Sprout Fields. Backup your database and test to ensure everything is working as expected after you upgrade.  You can uninstall and delete Sprout Email Field and Sprout Link Field after you confirm the new Sprout Fields equivalents are working as expected.