---
date: 2018-06-25
description: Configuration settings for the sprout plugins.
---

# Config Settings

Sprout settings are configured on a per-module basis and managed via the Sprout Framework plugin. Sprout settings can be managed in the control panel (_Plugins -> Sprout Framework_) or via the Sprout Framework config file `config/sprout.php`.

See additional documention on each individual setting in the Craft Control Panel or via the Sprout Framework plugin example file in the repository at `vendor/barrelstrength/sprout/src/config.php`. Some developer-focused settings may only be available in the file-based config.

### config/sprout.php

``` php
return [
    'campaigns' => [
        'enableCampaignEmails' => false,
        'emailTemplateId' => null,
        'enablePerEmailEmailTemplateIdOverride' => false,
    ],
    'notifications' => [
        'emailTemplateId' => BasicTemplates::class,
        'enablePerEmailEmailTemplateIdOverride' => false,
    ],
    'forms' => [
        'defaultSection' => 'entries',
        'formTemplateId' => AccessibleTemplates::class,
        'enableSaveData' => true,
        'saveSpamToDatabase' => false,
        'enableSaveDataDefaultValue' => true,
        'spamRedirectBehavior' => FormsSettings::SPAM_REDIRECT_BEHAVIOR_NORMAL,
        'spamLimit' => 500,
        'cleanupProbability' => 1000,
        'trackRemoteIp' => false,
        'enableEditFormEntryViaFrontEnd' => false,
        'captchaSettings' => [
            'barrelstrength\sprout\components\captchas\DuplicateCaptcha' => [
                'enabled' => false,
            ],
        ],
    ],
    'reports' => [
        'defaultPageLength' => 10,
        'defaultExportDelimiter' => ',',
    ],
    'sent-email' => [
        'sentEmailsLimit' => 32,
        'cleanupProbability' => 1000,
    ],
    'lists' => [
        'enableUserSync' => false,
        'enableAutoList' => false,
    ],
    'seo' => [
        'displayFieldHandles' => false,
        'enableRenderMetadata' => true,
        'useMetadataVariable' => false,
        'metadataVariableName' => 'metadata',
        'maxMetaDescriptionLength' => 160,
    ],
    'redirects' => [
        'trackRemoteIp' => true,
        'enable404RedirectLog' => false,
        'total404Redirects' => 250,
        'cleanupProbability' => 1000,
        'redirectMatchStrategy' => MatchStrategy::URL_WITHOUT_QUERY_STRINGS,
        'queryStringStrategy' => 'removeQueryStrings',
        'excludedUrlPatterns' => [
        ],
    ],
    'sitemaps' => [
        'enableDynamicSitemaps' => true, // true|false
        'enableMultilingualSitemaps' => true, // true|false
        'totalElementsPerSitemap' => 3,
//        'siteSettings' => [],
//        'groupSettings' => []
    ],

    // Development and Troubleshooting Settings
//    'dev' => [
//        'enableCreateSchemaAuditFile' => true,
//    ],
];
```

