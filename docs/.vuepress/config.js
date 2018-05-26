module.exports = {
    title: 'Sprout Docs',
    description: 'Sprout Documentation',
    themeConfig: {
        docsRepo: 'barrelstrength/sprout-docs',
        docsDir: 'docs',
        docsBranch: 'feature/docs',
        editLinks: true,
        codeLanguages: {
            twig: 'Twig',
            php: 'PHP',
        },
        sidebar: {
            '/forms/': [
                ['../', '← All Plugins'],
                {
                    title: 'Sprout Forms',
                    collapsable: false,
                    children: [
                        '',
                        'installing-and-updating',
                        'updating-to-2x'
                    ]
                },
                {
                    title: 'Templating',
                    collapsable: false,
                    children: [
                        'display-form-tag',
                        'display-tab-tag',
                        'display-field-tag',
                        'entries-tag',
                        'last-entry-tag',
                        'get-entry-tag',
                        'form-tag',
                    ]
                },
                {
                    title: 'Customization',
                    collapsable: false,
                    children: [
                        'template-overrides',
                        'rendering-options',
                        'validation',
                        'redirects',
                        'custom-fields',
                        'payload-forwarding',
                        'events-and-hooks',
                        'dynamic-notifications'
                    ]
                },
                {
                    title: 'Integrations',
                    collapsable: false,
                    children: [
                        'sprout-email',
                        'sprout-reports',
                        'sprout-fields'
                    ]
                },
                {
                    title: 'Examples',
                    collapsable: false,
                    children: [
                        'complete-form-in-one-line',
                        'field-tags',
                        'custom-fields',
                        'front-end-file-uploads',
                        'thank-you-page',
                        'translating-error-messages',
                        'relations-field-on-entry-page',
                        'display-errors-at-top-of-page',
                        'submitting-a-form-via-ajax',
                        'hidden-and-invisible-fields',
                        'pre-populating-a-field'
                    ]
                }
            ],

            '/seo/': [
                ['../', '← All Plugins'],
                {
                    title: 'Sprout SEO',
                    collapsable: false,
                    children: [
                        '',
                        'sitemap',
                        'redirects',
                        'contact-support',
                        'installing-and-updating',
                        'updating-to-sprout-seo-3',
                        'faq'
                    ]
                },
                {
                    title: 'Core Concepts',
                    collapsable: false,
                    children: [
                        'globals',
                        'sections',
                        'element-metadata-field'
                    ]
                },
                {
                    title: 'Templates',
                    collapsable: false,
                    children: [
                        'get-contacts-tag',
                        'get-globals-tag',
                        'get-social-profiles-tag'
                    ]
                },
                {
                    title: 'Advanced Customization',
                    collapsable: false,
                    children: [
                        'custom-sections',
                        'meta-details-fields',
                        'template-overrides',
                        'custom-metadata-variable'
                    ]
                },
                {
                    title: 'Developers',
                    collapsable: false,
                    children: [
                        'custom-schema',
                        'url-enabled-sections'
                    ]
                },
                {
                    title: 'Examples',
                    collapsable: false,
                    children: [
                        'large-sitemaps',
                        'meta-description-length'
                    ]
                },
                {
                    title: 'Sprout SEO 2',
                    collapsable: false,
                    children: [
                        'v2/divider',
                        'v2/extending-a-base-layout',
                        'v2/get-default-by-handle',
                        'v2/get-optimized-meta',
                        'v2/introduction',
                        'v2/overriding-images'
                    ]
                }
            ],

            '/email/': [
                ['../', '← All Plugins'],
                {
                    title: 'Sprout Email',
                    collapsable: false,
                    children: [
                        '',
                        'installing-and-updating',
                        'config-settings',
                        'upgrading-from-2x-to-3x',
                        'contact-support'
                    ]
                },
                {
                    title: 'Notifications',
                    collapsable: false,
                    children: [
                        'notifications',
                        'dynamic-values',
                        'custom-events',
                        'file-attachments'
                    ]
                },
                {
                    title: 'Campaigns',
                    collapsable: false,
                    children: [
                        'email-campaigns'
                    ]
                },
                {
                    title: 'Sent Email',
                    collapsable: false,
                    children: [
                        'sent-emails'
                    ]
                },
                {
                    title: 'Templating',
                    collapsable: false,
                    children: [
                        'entries-tag'
                    ]
                },
                {
                    title: 'Examples',
                    collapsable: false,
                    children: [
                        'welcome-notification',
                        'template-variables',
                        'using-globals-in-emails'
                    ]
                }
            ],

            '/reports/': [
                ['../', '← All Plugins'],
                {
                    title: 'Sprout Reports',
                    collapsable: false,
                    children: [
                        '',
                        'installing-and-updating',
                        'upgrading-craft2-to-craft3',
                    ]
                },
                {
                    title: 'Custom Reports',
                    collapsable: false,
                    children: [
                        'data-sources',
                        'reports',
                        'custom-twig-template-report',
                        'name-format'
                    ]
                },
                {
                    title: 'Integrations',
                    collapsable: false,
                    children: [
                        'sprout-forms',
                        'craft-commerce'
                    ]
                },
                {
                    title: 'Examples',
                    collapsable: false,
                    children: [
                        'sql-queries'
                    ]
                },
                {
                    title: 'Troubleshooting',
                    collapsable: false,
                    children: [
                        'large-reports'
                    ]
                }
            ],

            '/import/': [
                ['../', '← All Plugins'],
                {
                    title: 'Sprout Import',
                    collapsable: false,
                    children: [
                        '',
                        'supported-data-types',
                        'craft3-vs-craft2'
                    ]
                },
                {
                    title: 'Importing Data',
                    collapsable: false,
                    children: [
                        'resolve-relationships',
                        'create-elements-on-the-fly',
                        'update-existing-elements',
                        'set-default-attributes',
                        'large-amounts-of-data',
                        'sprout-seo-redirects'
                    ]
                },
                {
                    title: 'Special Data Types',
                    collapsable: false,
                    children: [
                        'authors',
                        'assets',
                        'matrix-field',
                        'multiple-languages',
                        'products-with-variants'
                    ]
                },
                {
                    title: 'Seed Data',
                    collapsable: false,
                    children: [
                        'faker-and-fake-data',
                        'generating-lots-of-data'
                    ]
                },
                {
                    title: 'Integrations',
                    collapsable: false,
                    children: [
                        'element-importers',
                        'field-importers',
                        'settings-importer'
                    ]
                },
                {
                    title: 'Examples',
                    collapsable: false,
                    children: [
                        'expressionengine-export'
                    ]
                }
            ],

            '/active/': [
                ['../', '← All Plugins'],
                {
                    title: 'Sprout Active',
                    collapsable: false,
                    children: [
                        '',
                        'installing-and-updating'
                    ]
                }
            ],

            '/encode-email/': [
                ['../', '← All Plugins'],
                {
                    title: 'Sprout Encode Email',
                    collapsable: false,
                    children: [
                        '',
                        'installing-and-updating'
                    ]
                }
            ],

            '/fields/': [
                ['../', '← All Plugins'],
                {
                    title: 'Sprout Fields',
                    collapsable: false,
                    children: [
                        '',
                        'installing-and-updating',
                        'upgrading-craft2-to-craft3'
                    ]
                },
                {
                    title: 'Fields',
                    collapsable: false,
                    children: [
                        'address-field',
                        'email-address-field',
                        'email-select-field',
                        'gender-field',
                        'hidden-field',
                        'invisible-field',
                        'name-field',
                        'notes-field',
                        'phone-number-field',
                        'predefined-field',
                        'regular-expression-field',
                        'url-field'
                    ]
                }
            ],

            '/lists/': [
                ['../', '← All Plugins'],
                {
                    title: 'Sprout Lists',
                    collapsable: false,
                    children: [
                        '',
                        'installing-and-updating'
                    ]
                },
                {
                    title: 'Developers',
                    collapsable: false,
                    children: [
                        'list-types'
                    ]
                }
            ],

            // fallback
            '/': [
                {
                    title: 'Overview',
                    collapsable: false,
                    children: [
                        '/',
                        'features',
                        'integrations',
                        'multi-site',
                        'agencies'
                    ]
                },
                {
                    title: 'Business Suite',
                    collapsable: false,
                    children: [
                        ['forms/', 'Sprout Forms'],
                        ['seo/', 'Sprout SEO'],
                        ['email/', 'Sprout Email'],
                        ['reports/', 'Sprout Reports'],
                        ['import/', 'Sprout Import'] 
                    ]
                },
                {
                    title: 'Utilities',
                    collapsable: false,
                    children: [
                        'active/',
                        'encode-email/',
                        'fields/',
                        'lists/'
                    ]
                },
                {
                    title: 'Support',
                    collapsable: false,
                    children: [
                        'support/feature-requests',
                        'support/bugs',
                        'support/changelog',
                        'support/support'
                    ]
                },
                {
                    title: 'Development',
                    collapsable: false,
                    children: [ 
                        'coding-guidelines',
                        'tools/php-storm',
                        'tools/sublime-text',
                        'tools/craftnet'
                    ]
                },
            ]
        }
    }
}
