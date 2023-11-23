import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Sprout",
    titleTemplate: ':title - Sprout Plugins – Craft CMS',
    description: "Build custom Craft CMS websites with Sprout Marketing Suite",
    head: [
        ['link', { rel: 'icon', href: '/icons/favicon.ico' }],
        ['link', {rel: 'icon', href: '/icons/favicon-16x16.png'}],
        ['link', {rel: 'apple-touch-icon', sizes: '180x180', href: '/icons/apple-touch-icon.png'}],
        ['link', {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icons/favicon-32x32.png'}],
        ['link', {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/icons/favicon-16x16.png'}],
    ],
    sitemap: {
        hostname: 'https://sprout.barrelstrengthdesign.com'
    },
    lastUpdated: true,
    base: '/docs/craft-v4/',
    srcExclude: [
        '.drafts/**/*',
    ],
    markdown: {
        lineNumbers: true,
    },
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/logo.svg',
        nav: [
            {text: 'Support', link: '/support/support', activeMatch: '/support/'},
            {
                text: 'Sprout v4',
                items: [
                    {
                        text: "Documentation",
                        items: [
                            {text: 'Sprout v4 (Craft 4)', link: '/'},
                            {text: 'Sprout v3 (Craft 3)', link: 'https://sprout.barrelstrengthdesign.com/docs/craft-v3/'},
                            {text: 'Sprout v2 (Craft 2)', link: 'https://sprout.barrelstrengthdesign.com/docs/craft-v2/'}
                        ]
                    },
                    {
                        text: "Plugin Store",
                        items: [
                            {text: 'Craft 4', link: 'https://plugins.craftcms.com/developer/barrel-strength-design?craft4'},
                            {text: 'Craft 3', link: 'https://plugins.craftcms.com/developer/barrel-strength-design?craft3'},
                        ]
                    },
                ]
            },
        ],

        sidebar: {
            '/': [
                {
                    text: 'Overview',
                    items: [
                        {text: 'About Sprout', link: '/index'},
                        {text: 'Lite vs Pro', link: '/features'},
                    ]
                },
                {
                    text: 'Configuration',
                    collapsed: false,
                    items: [
                        {text: 'Update Guides', link: '/update-guides/index' },
                        {text: 'Requirements', link: '/configuration/requirements'},
                        {text: 'Config Settings', link: '/configuration/sprout-config'},
                        {text: 'Shortcut Syntax', link: '/configuration/twig-shortcut-syntax'},
                    ]
                },
                {
                    text: 'Data Management',
                    collapsed: false,
                    items: [
                        {text: 'Data Studio', link: '/data-studio'},
                        {text: 'FAQ & Examples', link: '/examples-data-studio/custom-twig-template-report'},
                    ]
                },
                {
                    text: 'Email Marketing',
                    collapsed: false,
                    items: [
                        {text: 'Transactional Email', link: '/transactional-email'},
                        {text: 'Email Types', link: '/email-types'},
                        {text: 'Mailer Settings', link: '/mailers'},
                        {text: 'Audiences', link: '/audiences'},
                        {text: 'Sent Email', link: '/sent-email'},
                        {text: 'FAQ & Examples', link: '/examples-email/faq'},
                    ]
                },
                {
                    text: 'SEO Metadata',
                    collapsed: false,
                    items: [
                        {text: 'Redirects', link: '/redirects'},
                        {text: 'Sitemaps', link: '/sitemaps'},
                        {text: 'FAQ & Examples', link: '/examples-seo/faq'},
                    ]
                },
            ],

            '/support/': [
                {
                    text: 'Support & Training',
                    items: [
                        {text: 'Support', link: '/support/support'},
                        {text: 'Training', link: '/support/training'},
                    ]
                },
                {
                    text: 'Policies',
                    items: [
                        {text: 'Road Map', link: '/support/road-map'},
                        {text: 'Contributing', link: '/support/contributing'},
                    ]
                },
                {
                    text: 'Dreams of the Future',
                    items: [
                        {text: 'Road Map', link: '/support/road-map'},
                        {text: 'Contributing', link: '/support/contributing'},
                    ]
                }
            ],

            '/update-guides/': [
                {
                    items: [
                        {text: '← All Sprout Modules', link: '../'},
                    ]
                },
                {
                    text: 'Update Guides',
                    items: [
                        {text: 'Updating Sprout', link: '/update-guides/index'},
                    ]
                },
                {
                    text: 'Plugins',
                    items: [
                        {text: 'Data Studio', link: '/update-guides/data-studio'},
                        {text: 'Email', link: '/update-guides/email'},
                        {text: 'Redirects', link: '/update-guides/redirects'},
                        {text: 'Sitemaps', link: '/update-guides/sitemaps'},
                    ]
                },
                {
                    text: 'All Plugins',
                    items: [
                        {text: 'Craft 4', link: '/update-guides/sprout'},
                    ]
                }
            ],

            '/examples-data-studio/': [
                {
                    items: [
                        {text: '← Back to Data Studio', link: '/data-studio'},
                    ]
                },
                {
                    text: 'Custom Queries',
                    items: [
                        {text: 'Custom Twig Queries', link: '/examples-data-studio/custom-twig-template-report'},
                        {text: 'Custom SQL Queries', link: '/examples-data-studio/sql-queries'},
                    ]
                },
                {
                    text: 'Wrangling Data',
                    items: [
                        {text: 'Large Data Sets', link: '/examples-data-studio/large-data-sets'},
                        {text: 'HTML vs CSV', link: '/examples-data-studio/html-vs-csv'},
                        {text: 'Name Format', link: '/examples-data-studio/name-format'},
                    ]
                },
            ],

            '/examples-email/': [
                {
                    items: [
                        {text: '← Back to Email', link: '/transactional-email'},
                    ]
                },
                {
                    text: 'Examples',
                    items: [
                        {text: 'Troubleshooting FAQ', link: '/examples-email/faq'},
                        {text: 'Craft Globals', link: '/examples-email/craft-globals'},
                        {text: 'Welcome Notification', link: '/examples-email/welcome-notification'},
                    ]
                }
            ],

            '/examples-seo/': [
                {
                    items: [
                        {text: '← Back to SEO', link: '/redirects'},
                    ]
                },
                {
                    text: 'Examples',
                    items: [
                        {text: 'Troubleshooting FAQ', link: '/examples-seo/faq'},
                        {text: 'Craft Globals', link: '/examples-seo/query-strings-in-redirects'},
                        {text: 'Welcome Notification', link: '/examples-seo/redirect-workflows'},
                    ]
                }
            ],
        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/barrelstrength/sprout'}
        ],

        editLink: {
            // https://github.com/barrelstrength/sprout-docs/blob/craft-v4/docs/support/support.md
            pattern: 'https://github.com/barrelstrength/sprout-docs/edit/craft-v4/docs/:path'
        },

        search: {
            provider: 'algolia',
            options: {
                appId: '5JN8FB8K6H',
                apiKey: '9245da67ddab2b9ddda749bbb31362cf',
                indexName: 'sprout_barrelstrengthdesign'
            }
        },

        footer: {
            message: 'Craft The Planet',
            copyright: '© Barrel Strength Design'
        },
    },
    vite: {
        // Vite config options
        server: {
            host: '0.0.0.0', // Vite server should listen on all IPs.
            port: 5173, // Use port 3000 for dev server.
            // port: 4173, // Use port 3000 for dev server.
            strictPort: true, // Don't try next available port if 3000 isn't available.
            origin: 'http://demo.projectmothership.com.ddev.site:5174', // Rewrite asset URLs explicitly since the CMS web server is on a different host.
            // origin: 'http://demo.projectmothership.com.ddev.site:4173', // Rewrite asset URLs explicitly since the CMS web server is on a different host.
            hmr: {
                port: 5173,
                clientPort: 5174,
                // port: 4173,
                // clientPort: 4174,
                host: 'demo.projectmothership.com.ddev.site',
                protocol: 'wss',
            },
        }
    }
})
