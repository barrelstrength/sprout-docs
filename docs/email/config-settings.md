# Config Settings

You can add the following settings to your `general.php` file.

### Mailer API settings

``` php
'sproutEmail' => array(
  'campaignmonitor' => array(
    'apiKey' => 'CONFIG OVERRIDE',
    'clientId' => 'CONFIG OVERRIDE'
  ),
  'mailchimp' => array(
    'apiKey' => 'CONFIG OVERRIDE',
    'inlineCss' => 'CONFIG OVERRIDE'
  ),
  'mailgun' => array(
    'apiKey' => 'CONFIG OVERRIDE',
    'domain' => 'CONFIG OVERRIDE'
    'tagPattern' => 'CONFIG OVERRIDE'
  ),
)
```

### Scheduled Emails

Display Date Scheduled is currently a hidden config setting. It will enabled a `Date Scheduled` field for your campaigns and an option to mark a Campaign Email with a `Scheduled` status. Enabling this does not enabling scheduled emails. At this point, adding support for scheduling functionality would have to be done via a separate custom plugin.

``` php
'sproutEmail' => array(
  'displayDateScheduled' => true
)
```