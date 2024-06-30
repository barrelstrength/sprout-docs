import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Sprout",
    titleTemplate: ':title - Sprout Plugins – Craft CMS',
    description: "Build custom Craft CMS websites with Sprout Marketing Suite",
    head: [
        ['link', {rel: 'icon', href: '/docs/craft-v5/icons/favicon.ico'}],
        ['link', {rel: 'icon', href: '/docs/craft-v5/icons/favicon-16x16.png'}],
        ['link', {rel: 'apple-touch-icon', sizes: '180x180', href: '/docs/craft-v5/icons/apple-touch-icon.png'}],
        ['link', {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/docs/craft-v5/icons/favicon-32x32.png'}],
        ['link', {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/docs/craft-v5/icons/favicon-16x16.png'}],
    ],
    base: '/docs/craft-v5/',
    sitemap: {
        hostname: 'https://sprout.barrelstrengthdesign.com/docs/craft-v5/'
    },
    lastUpdated: true,
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
                text: 'Sprout v5',
                items: [
                    {
                        text: "Documentation",
                        items: [
                            {text: 'Sprout v5 (Craft 5)', link: '/'},
                            {text: 'Sprout v4 (Craft 4)', link: 'https://sprout.barrelstrengthdesign.com/docs/craft-v4/'},
                            {text: 'Sprout v3 (Craft 3)', link: 'https://sprout.barrelstrengthdesign.com/docs/craft-v3/'},
                            {text: 'Sprout v2 (Craft 2)', link: 'https://sprout.barrelstrengthdesign.com/docs/craft-v2/'}
                        ]
                    },
                    {
                        text: "Plugin Store",
                        items: [
                            {text: 'Craft 5', link: 'https://plugins.craftcms.com/developer/barrel-strength-design?craft5'},
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
                        {text: 'Update Guides', link: '/update-guides/index'},
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
                // {
                //     text: 'Email Marketing',
                //     collapsed: false,
                //     items: [
                //         {text: 'Transactional Email', link: '/transactional-email'},
                //         {text: 'Email Types', link: '/email-types'},
                //         {text: 'Mailer Settings', link: '/mailers'},
                //         {text: 'Audiences', link: '/audiences'},
                //         {text: 'Sent Email', link: '/sent-email'},
                //         {text: 'FAQ & Examples', link: '/examples-email/faq'},
                //     ]
                // },
                {
                    text: 'SEO Metadata',
                    collapsed: false,
                    items: [
                        // {text: 'Meta Tags & Schema', link: '/meta'},
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
                        {text: 'Upgrading from Craft 4', link: '/update-guides/sprout'},
                    ]
                },
                // {
                //     text: 'Plugins',
                //     items: [
                        // {text: 'Data Studio', link: '/update-guides/data-studio'},
                        // {text: 'Email', link: '/update-guides/email'},
                        // {text: 'SEO', link: '/update-guides/seo'},
                        // {text: 'Redirects', link: '/update-guides/redirects'},
                        // {text: 'Sitemaps', link: '/update-guides/sitemaps'},
                    // ]
                // },
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
                        {text: '← Back to SEO', link: '/meta'},
                    ]
                },
                // {
                //     text: 'Metadata',
                //     items: [
                //         {text: 'Troubleshooting FAQ', link: '/examples-seo/faq'},
                //         {text: 'Global Metadata in Templates', link: '/examples-seo/global-metadata-in-templates'},
                //         {text: 'Element Metadata Field', link: '/examples-seo/element-metadata-field'},
                //         {text: 'Template Metadata Overrides', link: '/examples-seo/template-metadata-overrides'},
                //         {text: 'Canonical URLs', link: '/examples-seo/canonical-urls'},
                //         {text: 'Block Search Robots', link: '/examples-seo/block-robots-on-dev-site'},
                //         {text: 'Elements Without URLs', link: '/examples-seo/elements-without-urls'},
                //     ]
                // },
                {
                    text: 'Redirects',
                    items: [
                        {text: 'Craft Globals', link: '/examples-seo/query-strings-in-redirects'},
                        {text: 'Redirect Workflows', link: '/examples-seo/redirect-workflows'},
                    ]
                }
            ],
        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/barrelstrength/sprout'}
        ],

        editLink: {
            // https://github.com/barrelstrength/sprout-docs/blob/craft-v5/docs/support/support.md
            pattern: 'https://github.com/barrelstrength/sprout-docs/edit/craft-v5/docs/:path'
        },

        search: {
            provider: 'algolia',
            options: {
                appId: '5JN8FB8K6H',
                // apiKey: '9245da67ddab2b9ddda749bbb31362cf', // Old
                apiKey: 'dd083376e0d88465dfd6fe7f8c1ef13f', // New
                indexName: 'sprout_barrelstrengthdesign_v5'
            }
        },

        footer: {
            message: 'Craft The Planet',
            copyright: '© Barrel Strength Design'
        },

        lastUpdated: {
            text: 'Last Updated: ',
        },
    },
    vite: {
        // Vite config options
        server: {
            host: '0.0.0.0', // Vite server should listen on all IPs.
            port: 5173, // Use port 3000 for dev server.
            // port: 4173, // Use port 3000 for dev server.
            strictPort: true, // Don't try next available port if 3000 isn't available.
            origin: 'http://5.projectmothership.com.ddev.site:5174', // Rewrite asset URLs explicitly since the CMS web server is on a different host.
            // origin: 'http://5.projectmothership.com.ddev.site:4173', // Rewrite asset URLs explicitly since the CMS web server is on a different host.
            hmr: {
                port: 5173,
                clientPort: 5174,
                // port: 4173,
                // clientPort: 4174,
                host: '5.projectmothership.com.ddev.site',
                protocol: 'wss',
            },
        }
    }
})
