module.exports = {
    title: 'Sprout Docs',
    description: 'Sprout Documentation',
    theme: 'craftdocs',
    base: '/docs/',
    ga: '',
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
            { text: 'Barrel Strength', link: 'https://www.barrelstrengthdesign.com/' },
        ],
        sidebar: {
            '/forms/': [
                ['../', '← All Plugins'],
                {
                    title: 'Sprout Forms',
                    collapsable: false,
                    children: [
                        '',
                        'forms',
                        'form-fields',
                        'entries',
                        'notifications',
                        'reports',
                        'settings'
                    ]
                },
                {
                    title: 'Form Templates',
                    collapsable: false,
                    children: [
                        'default-templates',
                        'template-overrides',
                        'rendering-options'
                    ]
                },
                {
                    title: 'Advanced Topics',
                    collapsable: false,
                    children: [
                        'payload-forwarding'
                    ]
                },
                {
                    title: 'Examples',
                    collapsable: false,
                    children: [
                        'complete-form-in-one-line',
                        'field-tags',
                        'front-end-file-uploads',
                        'thank-you-page',
                        'translating-error-messages',
                        'relations-field-on-entry-page',
                        'display-errors-at-top-of-page',
                        'submitting-a-form-via-ajax',
                        'hidden-fields',
                        'pre-populating-a-field'
                    ]
                },
                {
                    title: 'Integrations',
                    collapsable: false,
                    children: [
                        'sprout-email',
                        'sprout-reports',
                        'sprout-fields',
                        'sprout-import'
                    ]
                },
                {
                    title: 'Plugin Development',
                    collapsable: false,
                    children: [
                        'custom-form-templates',
                        'custom-form-fields',
                        'custom-captchas',
                        'events-and-hooks'
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

            '/seo/v2/': [
                ['../', '← Sprout SEO'],
                {
                    title: 'Sprout SEO 2',
                    collapsable: false,
                    children: [
                        '',
                        'divider',
                        'extending-a-base-layout',
                        'get-default-by-handle',
                        'get-optimized-meta',
                        'overriding-images'
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
                        'global-metadata',
                        'element-metadata-field',
                        'sitemaps',
                        'redirects'
                    ]
                },
                {
                    title: 'Advanced Topics',
                    collapsable: false,
                    children: [
                        'template-overrides',
                        'custom-metadata-variable',
                        'meta-description-length',
                        'custom-sections'
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
                    title: 'Integrations',
                    collapsable: false,
                    children: [
                        'sprout-import'
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
                    title: 'Installing & Updating',
                    collapsable: false,
                    children: [
                        'installing-and-updating-craft-3',
                        'installing-and-updating-craft-2',
                        'contact-support',
                        'faq'
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
                        'email-templates',
                        'personalization',
                        'config-settings'
                    ]
                },
                {
                    title: 'Emails',
                    collapsable: false,
                    children: [
                        'notification-emails',
                        'campaign-emails',
                        'sent-emails'
                    ]
                },
                {
                    title: 'Examples',
                    collapsable: false,
                    children: [
                        'craft-globals',
                        'welcome-notification',
                        'template-variables'
                    ]
                },
                {
                    title: 'Plugin Development',
                    collapsable: false,
                    children: [
                        'custom-email-templates',
                        'custom-mailers',
                        'custom-notification-events'
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
                        '',
                        'data-sources',
                        'reports'
                    ]
                },
                {
                    title: 'Data Sources',
                    collapsable: false,
                    children: [
                        'custom-query-report',
                        'custom-twig-template-report'
                    ]
                },
                {
                    title: 'Examples',
                    collapsable: false,
                    children: [
                        'large-reports',
                        'sql-queries'
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
                        'large-amounts-of-data'
                    ]
                },
                {
                    title: 'Special Data Types',
                    collapsable: false,
                    children: [
                        'authors',
                        'assets',
                        'matrix-field',
                        'multiple-sites',
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
