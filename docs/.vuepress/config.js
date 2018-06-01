module.exports = {
    title: 'Sprout Docs',
    description: 'Sprout Documentation',
    theme: 'craftdocs',
    base: 'docs',
    themeConfig: {
        docsRepo: 'barrelstrength/sprout-docs',
        docsDir: 'docs',
        docsBranch: 'develop',
        editLinks: true,
        codeLanguages: {
            twig: 'Twig',
            php: 'PHP',
            js: 'Javascript',
            craft2: 'Craft 2',
            craft3: 'Craft 3'
        },
        nav: [
            {
                text: 'Plugin Docs',
                items: [
                    { text: 'Sprout Forms', link: '/forms/' },
                    { text: 'Sprout SEO', link: '/seo/' },
                    { text: 'Sprout Email', link: '/email/' },
                    { text: 'Sprout Reports', link: '/reports/' },
                    { text: 'Sprout Import', link: '/import/' },
                    { text: '–', link: '' },
                    { text: 'Sprout Active', link: '/active/' },
                    { text: 'Sprout Encode Email', link: '/encode-email/' },
                    { text: 'Sprout Fields', link: '/fields/' },
                    { text: 'Sprout Lists', link: '/lists/' },
                    { text: 'Sprout Notes', link: '/notes/' }
                ]
            },
            { text: 'Website', link: 'https://sprout.barrelstrengthdesign.com/' },
        ],
        sidebar: {
            '/forms/': [
                ['../', '← All Plugins'],
                {
                    title: 'Sprout Forms',
                    collapsable: false,
                    children: [
                        ''
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
                        'form-tag'
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
                },
                {
                    title: 'Installing & Updating',
                    collapsable: false,
                    children: [
                        'installing-and-updating-craft-3',
                        'installing-and-updating-craft-2'
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
                        'custom-metadata-variable',
                        'meta-description-length'
                    ]
                },
                {
                    title: 'Plugin Development',
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
                        'block-robots-on-dev-site',
                        'canonical-override'
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
                },
                {
                    title: 'Installing & Updating',
                    collapsable: false,
                    children: [
                        'installing-and-updating-craft-3',
                        'installing-and-updating-craft-2'
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
                        'config-settings',
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
                },
                {
                    title: 'Installing & Updating',
                    collapsable: false,
                    children: [
                        'installing-and-updating-craft-3',
                        'installing-and-updating-craft-2'
                    ]
                }
            ],

            '/reports/': [
                ['../', '← All Plugins'],
                {
                    title: 'Sprout Reports',
                    collapsable: false,
                    children: [
                        ''
                    ]
                },
                {
                    title: 'Core Concepts',
                    collapsable: false,
                    children: [
                        'data-sources',
                        'reports',
                        'custom-twig-template-report',
                        'name-format'
                    ]
                },
                {
                    title: 'Reports',
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
                },
                {
                    title: 'Plugin Development',
                    collapsable: false,
                    children: [
                        'custom-data-sources'
                    ]
                },
                {
                    title: 'Installing & Updating',
                    collapsable: false,
                    children: [
                        'installing-and-updating-craft-3',
                        'installing-and-updating-craft-2'
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
                    title: 'Examples',
                    collapsable: false,
                    children: [
                        'expressionengine-export'
                    ]
                },
                {
                    title: 'Plugin Development',
                    collapsable: false,
                    children: [
                        'element-importers',
                        'field-importers',
                        'settings-importer'
                    ]
                },
                {
                    title: 'Installing & Updating',
                    collapsable: false,
                    children: [
                        'installing-and-updating-craft-3',
                        'installing-and-updating-craft-2'
                    ]
                }
            ],

            '/active/': [
                ['../', '← All Plugins'],
                {
                    title: 'Sprout Active',
                    collapsable: false,
                    children: [
                        ''
                    ]
                },
                {
                    title: 'Installing & Updating',
                    collapsable: false,
                    children: [
                        'installing-and-updating-craft-3',
                        'installing-and-updating-craft-2'
                    ]
                }
            ],

            '/encode-email/': [
                ['../', '← All Plugins'],
                {
                    title: 'Sprout Encode Email',
                    collapsable: false,
                    children: [
                        ''
                    ]
                },
                {
                    title: 'Installing & Updating',
                    collapsable: false,
                    children: [
                        'installing-and-updating-craft-3',
                        'installing-and-updating-craft-2'
                    ]
                }
            ],

            '/fields/': [
                ['../', '← All Plugins'],
                {
                    title: 'Sprout Fields',
                    collapsable: false,
                    children: [
                        ''
                    ]
                },
                {
                    title: 'Field Types',
                    collapsable: false,
                    children: [
                        'address-field',
                        'email-field',
                        'gender-field',
                        'name-field',
                        'notes-field',
                        'phone-field',
                        'predefined-field',
                        'regular-expression-field',
                        'url-field'
                    ]
                },
                {
                    title: 'Field Types - Craft 2',
                    collapsable: false,
                    children: [
                        'email-dropdown-field',
                        'hidden-field',
                        'invisible-field',
                        'notes-field-c2',
                        'phone-field-c2'
                    ]
                },
                {
                    title: 'Installing & Updating',
                    collapsable: false,
                    children: [
                        'installing-and-updating-craft-3',
                        'installing-and-updating-craft-2'
                    ]
                }
            ],

            '/lists/': [
                ['../', '← All Plugins'],
                {
                    title: 'Sprout Lists',
                    collapsable: false,
                    children: [
                        ''
                    ]
                },
                {
                    title: 'Plugin Development',
                    collapsable: false,
                    children: [
                        'list-types'
                    ]
                },
                {
                    title: 'Installing & Updating',
                    collapsable: false,
                    children: [
                        'installing-and-updating-craft-3',
                        'installing-and-updating-craft-2'
                    ]
                }
            ],

            '/notes/': [
                ['../', '← All Plugins'],
                {
                    title: 'Sprout Notes',
                    collapsable: false,
                    children: [
                        ''
                    ]
                },
                {
                    title: 'Installing & Updating',
                    collapsable: false,
                    children: [
                        'installing-and-updating-craft-3',
                        'installing-and-updating-craft-2'
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
                        'why-sprout',
                        'core-concepts',
                        'integrations',
                        'multi-site',
                        'businesses'
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
                    title: 'Open Source',
                    collapsable: false,
                    children: [
                        ['active/', 'Sprout Active'],
                        ['encode-email/', 'Sprout Encode Email'],
                        ['fields/', 'Sprout Fields'],
                        ['lists/', 'Sprout Lists'],
                        ['notes/', 'Sprout Notes']
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
                        ['tools/php-storm', 'PhpStorm'],
                        ['tools/sublime-text', 'Sublime Text'],
                        ['tools/craftnet', 'Craftnet']
                    ]
                }
            ]
        }
    },
    markdown: {
        anchor: { level: [2, 3] },
        config(md) {
            let markup = require('vuepress-theme-craftdocs/markup');
            md.use(markup);
        }
    }
};
