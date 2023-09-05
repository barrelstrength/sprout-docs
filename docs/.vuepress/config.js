module.exports = {
    title: 'Sprout Documentation',
    description: 'The Sprout Marketing Suite is a premium suite of plugins designed for businesses who want to use Craft CMS as the core of their content management and digital marketing workflows.',
    theme: 'craftdocs',
    base: '/docs/craft-v4/',
    head: [
        ['link', {rel: 'icon', href: '/icons/favicon-16x16.png'}],
        ['link', {rel: 'apple-touch-icon', sizes: '180x180', href: '/icons/apple-touch-icon.png'}],
        ['link', {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icons/favicon-32x32.png'}],
        ['link', {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/icons/favicon-16x16.png'}],
        ['link', {rel: 'mask-icon', href: 'https://docs.craftcms.com/siteicons/safari-pinned-tab.svg', color: '#449211'}],
        ['meta', {name: 'msapplication-TileColor', content: '#484539'}],
        ['meta', {name: 'msapplication-config', content: 'https://docs.craftcms.com/browserconfig.xml'}],
        ['meta', {name: 'theme-color', content: '#484539'}],
    ],
    plugins: [
        [
            '@vuepress/google-analytics',
            {
                ga: 'UA-26032077-1',
            },
        ],
        ['@vuepress/last-updated'],
        [
            'vuepress-plugin-seo',
            {
                siteTitle: (_, $site) => $site.metadata && $site.metadata.siteName || $site.title,
                title: $page => $page.title,
                description: $page => $page.frontmatter.description,
                image: ($page, $site) => $page.frontmatter.image && (($site.metadata && $site.metadata.siteUrl || '') + $page.frontmatter.image) || $site.metadata && $site.metadata.image,
                url: (_, $site, path) => ($site.metadata && $site.metadata.siteUrl || '') + path,
                type: _ => 'article',
                twitterCard: _ => 'summary',
                publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
                modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
                customMeta: (add, context) => {
                    const {
                        $site, // Site configs provided by Vuepress
                        $page, // Page configs provided by Vuepress

                        // All the computed options from above:
                        siteTitle, title, description, author,
                        twitterCard, type, url, image, publishedAt, modifiedAt,
                    } = context;

                    add('twitter:creator', $site.metadata && $site.metadata.twitterHandle);
                    add('twitter:site', $site.metadata && $site.metadata.twitterHandle);

                    let canonical = $page.frontmatter.canonical || url;
                    add('canonical', canonical);
                },
            },
        ],
        [
            'vuepress-plugin-sitemap',
            {
                hostname: 'https://sprout.barrelstrengthdesign.com/docs',
                changefreq: 'weekly',
                exclude: [
                    '/404.html',
                ],
            },
        ],
    ],
    markdown: {
        anchor: {level: [2, 3]},
        extendMarkdown(md) {
            let markup = require('vuepress-theme-craftdocs/markup');
            md.use(markup);
        },
    },
    metadata: {
        siteName: 'Sprout Plugin Documentation',
        siteUrl: 'https://sprout.barrelstrengthdesign.com/docs',
        image: 'https://s3.amazonaws.com/sprout.barrelstrengthdesign.com-assets/content/plugins/sprout-plugins-logo.png',
        twitterHandle: '@Barrel_Strength',
    },
    themeConfig: {
        logo: '/icons/logo.svg',
        docsRepo: 'barrelstrength/sprout-docs',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,
        codeLanguages: {
            twig: 'Twig',
            php: 'PHP',
            js: 'Javascript',
            plaintext: 'Plaintext',
        },
        algolia: {
            apiKey: '9245da67ddab2b9ddda749bbb31362cf',
            indexName: 'sprout_barrelstrengthdesign',
        },
        nav: [
            {
                text: 'Sprout v4',
                items: [
                    {text: 'Sprout v4 (Craft 4.0)', link: '/'},
                    {text: 'Sprout v3 (Craft 3.0)', link: 'https://sprout.barrelstrengthdesign.com/docs/craft-v3/'},
                    {text: 'Sprout v2 (Craft 2.0)', link: 'https://sprout.barrelstrengthdesign.com/docs/craft-v2/'},
                ],
            },
        ],
        sidebar: {
            '/forms/': [
                ['../', '← All Plugins'],
                {
                    title: 'Introduction',
                    collapsable: false,
                    children: [
                        '',
                        'faq',
                    ],
                },
                {
                    title: 'Get Started',
                    collapsable: false,
                    children: [
                        'forms',
                        'form-fields',
                        'entries',
                        'notifications',
                        'conditional-rules',
                        'integrations',
                        'spam-protection',
                        'importing-data',
                        'plugin-settings',
                    ],
                },
                {
                    title: 'Form Fields',
                    collapsable: false,
                    children: [
                        'email-dropdown-field',
                        'hidden-field',
                        'invisible-field',
                        'opt-in-field',
                    ],
                },
                {
                    title: 'Form Templates',
                    collapsable: false,
                    children: [
                        'default-form-templates',
                        'template-overrides',
                        'rendering-options',
                    ],
                },
                {
                    title: 'Examples',
                    collapsable: false,
                    children: [
                        'caching-and-csrf-tokens',
                        'front-end-file-uploads',
                        'pre-populating-a-field',
                        'custom-html',
                        'display-errors-at-top-of-page',
                        'element-api',
                        'thank-you-page',
                        'submitting-a-form-via-ajax',
                        'submission-limit',
                        'translating-forms',
                        'translating-error-messages',
                    ],
                },
                {
                    title: 'Development',
                    collapsable: false,
                    children: [
                        'custom-form-templates',
                        'custom-form-fields',
                        'custom-captchas',
                        'custom-integrations',
                        'events-and-hooks',
                        'javascript-events',
                    ],
                },
            ],

            '/seo/': [
                ['../', '← All Plugins'],
                {
                    title: 'Introduction',
                    collapsable: false,
                    children: [
                        '',
                        'faq',
                    ],
                },
                {
                    title: 'Get Started',
                    collapsable: false,
                    children: [
                        'global-metadata',
                        'element-metadata-field',
                        'plugin-settings',
                    ],
                },
                {
                    title: 'Advanced Topics',
                    collapsable: false,
                    children: [
                        'template-overrides',
                        'custom-metadata-variable',
                    ],
                },
                {
                    title: 'Examples',
                    collapsable: false,
                    children: [
                        'canonical-urls',
                        'block-robots-on-dev-site',
                        'elements-without-urls',
                    ],
                },
                {
                    title: 'Development',
                    collapsable: false,
                    children: [
                        'custom-schema',
                    ],
                },
            ],

            '/campaigns/': [
                ['../', '← All Plugins'],
                {
                    title: 'Introduction',
                    collapsable: false,
                    children: [
                        '',
                    ],
                },
                {
                    title: 'Get Started',
                    collapsable: false,
                    children: [
                        'campaign-emails',
                        'copy-paste-mailer',
                        'plugin-settings',
                    ],
                },
            ],

            '/data-studio/': [
                ['../', '← All Plugins'],
                {
                    title: 'Introduction',
                    collapsable: false,
                    children: [
                        '',
                    ],
                },
                {
                    title: 'Data Sources',
                    collapsable: false,
                    children: [
                        'custom-query-report',
                        'custom-twig-template-report',
                    ],
                },
                {
                    title: 'Examples',
                    collapsable: false,
                    children: [
                        'html-vs-csv',
                        'large-data-sets',
                        'sql-queries',
                        'name-format',
                    ],
                },
                {
                    title: 'Development',
                    collapsable: false,
                    children: [
                        'custom-data-sources',
                    ],
                },
            ],
            '/examples-email/': [
                ['../', '← All Plugins'],
                {
                    title: 'Email FAQ & Examples',
                    collapsable: false,
                    children: [
                        '',
                        'craft-globals',
                        'welcome-notification',
                    ],
                },
            ],
            '/examples-seo/': [
                ['../', '← All Plugins'],
                {
                    title: 'Redirect FAQ & Examples',
                    collapsable: false,
                    children: [
                        '',
                        'query-strings-in-redirects',
                        'redirect-workflows',
                    ],
                },
            ],
            // fallback
            '/': [
                {
                    title: 'Overview',
                    collapsable: false,
                    children: [
                        '/',
                        'features',
                    ],
                },
                {
                    title: 'Configuration',
                    collapsable: false,
                    children: [
                        'configuration/requirements',
                        'configuration/updates',
                        'configuration/sprout-config',
                        'configuration/twig-shortcut-syntax',
                    ],
                },
                {
                    title: 'Data Management',
                    collapsable: false,
                    children: [
                        ['data-studio/', 'Data Studio'],
                    ],
                },
                {
                    title: 'Email Marketing',
                    collapsable: false,
                    children: [
                        ['transactional-email/', 'Transactional Email'],
                        ['email-types/', 'Email Types'],
                        ['mailers/', 'Mailers'],
                        ['audiences/', 'Audiences'],
                        ['sent-email/', 'Sent Email'],
                        ['examples-email/', 'FAQ & Examples'],
                    ],
                },
                {
                    title: 'SEO Metadata',
                    collapsable: false,
                    children: [
                        ['redirects/', 'Redirects'],
                        ['sitemaps/', 'Sitemaps'],
                        ['examples-seo/', 'FAQ & Examples'],
                    ],
                },
                {
                    title: 'Support',
                    collapsable: false,
                    children: [
                        'support/road-map',
                        'support/support',
                        'support/training',
                        'support/pricing',
                        'support/security',
                        'contributing',
                    ],
                },
            ],
        },
    },
};
