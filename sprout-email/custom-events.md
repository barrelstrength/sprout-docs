You can trigger Sprout Email Notifications via custom events in your own plugins.

Adding custom events involves:

1. Extending SproutEmailBaseEvent with your custom event
2. Registering your event using the defineSproutEmailEvents() hook
3. Optionally adding options to add more control over when the event is triggered

To demonstrate how to add a custom event via a plugin, we've created an example plugin that implements the Craft `onBeforeSaveEntry` Event: [Sprout Email Events Plugin]({asset:844:url}).

Additional implementation examples can be seen in Sprout Email itself (`sproutemail/integrations/sproutemail`).

We'll review the core concepts here:

## Create a Custom Event Class

In the most simple case, the Custom Event Class allows you to identify the Event where your plugin will get triggered, give it a name, and identify the object that will be passed to the Notification template when the event is triggered.

**SproutEmailEvents_BeforeSaveEntryEvent.php**

``` php
<?php
namespace Craft;

class SproutEmailEvents_BeforeSaveEntryEvent extends SproutEmailBaseEvent
{
	/**
	 * Returns the qualified event name to use when registering with craft()->on
	 * 
	 * @return string
	 */
	public function getName()
	{
		return 'entries.onBeforeSaveEntry';
	}

	/**
	 * Returns the event title to use when displaying a label or similar use case
	 *
	 * @return string
	 */
	public function getTitle()
	{
		return Craft::t('Before an entry is saved');
	}

	/**
	 * Returns a short description of this event
	 *
	 * @return string
	 */
	public function getDescription()
	{
		return Craft::t('Triggers before an entry is saved.');
	}

	/**
	 * Validate your Event options
	 *
	 * @return bool
	 */
	public function validateOptions()
	{
		return true;
	}

	/**
	 * Returns the data passed in by the triggered event
	 *
	 * @param Event $event
	 *
	 * @return mixed
	 */
	public function prepareParams(Event $event)
	{	
		return array(
			'value'      => array(
        $event->params['entry'],
        'isNewEntry' => $event->params['isNewEntry']
      )

		);
	}
}
```

You can place your Custom Event Class anywhere in your plugin you wish.  We prefer the convention of placing integrations in an `integrations` folder using a subfolder for the plugin the integration relates to.  So, in this case, we like putting our event in the folder `integrations/sproutemail`.

## Register your Event

To tell Sprout Email that your event exists you need to register it using the `defineSproutEmailEvents()` hook in your plugins Primary Class file.

**SproutEmailEventsPlugin.php**
``` php
/**
 * Defines events/rules for notification entries in Sprout Email
 *
 * @return array
 */
public function defineSproutEmailEvents()
{
	Craft::import('plugins.sproutemailevents.integrations.sproutemail.SproutEmailEvents_BeforeSaveEntryEvent');

	return array(
		'entries.onBeforeSaveEntry' => new SproutEmailEvents_BeforeSaveEntryEvent()
	);
}
```

There are two things happening here.  First, we are importing our Custom Event Class. Second, we are returning our event name along with the custom event class that it is associated with.

With those two steps in place, you should now be able to install your plugin and see your event appearing in the list of triggers on the the Rules tab when setting up your Notification.