module.exports = {
  title: 'Sprout Documentation',
  description: 'The Sprout Business Suite is a premium suite of plugins designed for businesses who want to use Craft CMS as the core of their content management and digital marketing workflows.',
  theme: 'craftdocs',
  base: '/docs/v4/',
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
        ga: 'UA-26032077-1'
      }
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
      }
    ],
    [
      'vuepress-plugin-sitemap',
      {
        hostname: 'https://sprout.barrelstrengthdesign.com/docs',
        changefreq: 'weekly',
        exclude: [
          '/404.html'
        ]
      }
    ],
  ],
  markdown: {
    anchor: {level: [2, 3]},
    extendMarkdown(md) {
      let markup = require("vuepress-theme-craftdocs/markup");
      md.use(markup);
    }
  },
  metadata: {
    siteName: 'Sprout Plugin Documentation',
    siteUrl: 'https://sprout.barrelstrengthdesign.com/docs',
    image: 'https://s3.amazonaws.com/sprout.barrelstrengthdesign.com-assets/content/plugins/sprout-plugins-logo.png',
    twitterHandle: '@Barrel_Strength',
  },
  themeConfig: {
    logo: "/icons/logo.svg",
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
      indexName: 'sprout_barrelstrengthdesign'
    },
    nav: [
      {
        text: 'Sprout v4',
        items: [
          {text: 'Sprout v4 (Craft 4.0)', link: '/v4'},
          {text: 'Sprout v3 (Craft 3.0)', link: 'https://sprout.barrelstrengthdesign.com/docs/v3/'},
          {text: 'Sprout v2 (Craft 2.0)', link: 'https://sprout.barrelstrengthdesign.com/docs/v2/'},
        ]
      }
    ],
    sidebar: {
      '/forms/': [
        ['../', '← All Plugins'],
        {
          title: 'Introduction',
          collapsable: false,
          children: [
            '',
            'faq'
          ]
        },
        {
          title: 'Get Started',
          collapsable: false,
          children: [
            'forms',
            'form-fields',
            'entries',
            'notifications',
            'data-studio',
            'conditional-rules',
            'integrations',
            'spam-protection',
            'importing-data',
            'plugin-settings'
          ]
        },
        {
          title: 'Form Fields',
          collapsable: false,
          children: [
            'email-dropdown-field',
            'hidden-field',
            'invisible-field',
            'opt-in-field'
          ]
        },
        {
          title: 'Form Templates',
          collapsable: false,
          children: [
            'default-form-templates',
            'template-overrides',
            'rendering-options'
          ]
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
            'translating-error-messages'
          ]
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
            'javascript-events'
          ]
        }
      ],

      '/seo/': [
        ['../', '← All Plugins'],
        {
          title: 'Introduction',
          collapsable: false,
          children: [
            '',
            'faq'
          ]
        },
        {
          title: 'Get Started',
          collapsable: false,
          children: [
            'global-metadata',
            'element-metadata-field',
            'plugin-settings'
          ]
        },
        {
          title: 'Advanced Topics',
          collapsable: false,
          children: [
            'template-overrides',
            'custom-metadata-variable'
          ]
        },
        {
          title: 'Examples',
          collapsable: false,
          children: [
            'canonical-urls',
            'block-robots-on-dev-site',
            'elements-without-urls'
          ]
        },
        {
          title: 'Development',
          collapsable: false,
          children: [
            'custom-schema'
          ]
        }
      ],

      '/redirects/': [
        ['../', '← All Plugins'],
        {
          title: 'Introduction',
          collapsable: false,
          children: [
            '',
          ]
        },
        {
          title: 'Get Started',
          collapsable: false,
          children: [
            'redirects',
            'plugin-settings'
          ]
        },
        {
          title: 'Examples',
          collapsable: false,
          children: [
            'query-strings-in-redirects'
          ]
        }
      ],

      '/sitemaps/': [
        ['../', '← All Plugins'],
        {
          title: 'Introduction',
          collapsable: false,
          children: [
            '',
          ]
        },
        {
          title: 'Get Started',
          collapsable: false,
          children: [
            'sitemaps',
            'plugin-settings'
          ]
        },
        {
          title: 'Development',
          collapsable: false,
          children: [
            'custom-url-enabled-sections'
          ]
        }
      ],

      '/email/': [
        ['../', '← All Plugins'],
        {
          title: 'Introduction',
          collapsable: false,
          children: [
            '',
            'troubleshooting-email-faq'
          ]
        },
        {
          title: 'Get Started',
          collapsable: false,
          children: [
            'notification-emails',
            'notification-events',
            'plugin-settings'
          ]
        },
        {
          title: 'Notification Emails',
          collapsable: false,
          children: [
            'personalization',
            'object-syntax'
          ]
        },
        {
          title: 'Email Templates',
          collapsable: false,
          children: [
            'default-email-templates',
            'template-overrides'
          ]
        },
        {
          title: 'Examples',
          collapsable: false,
          children: [
            'craft-globals',
            'welcome-notification'
          ]
        },
        {
          title: 'Development',
          collapsable: false,
          children: [
            'custom-email-templates',
            'custom-mailers',
            'custom-notification-events'
          ]
        }
      ],

      '/sent-email/': [
        ['../', '← All Plugins'],
        {
          title: 'Introduction',
          collapsable: false,
          children: [
            '',
            'plugin-settings'
          ]
        }
      ],

      '/campaigns/': [
        ['../', '← All Plugins'],
        {
          title: 'Introduction',
          collapsable: false,
          children: [
            ''
          ]
        },
        {
          title: 'Get Started',
          collapsable: false,
          children: [
            'campaign-emails',
            'copy-paste-mailer',
            'plugin-settings'
          ]
        }
      ],

      '/data-studio/': [
        ['../', '← All Plugins'],
        {
          title: 'Introduction',
          collapsable: false,
          children: [
            ''
          ]
        },
        {
          title: 'Get Started',
          collapsable: false,
          children: [
            'data-sources',
            'reports',
            'mailing-lists',
            'plugin-settings'
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
            'html-vs-csv-reports',
            'large-reports',
            'sql-queries'
          ]
        },
        {
          title: 'Development',
          collapsable: false,
          children: [
            'custom-data-sources'
          ]
        }
      ],

      '/fields/': [
        ['../', '← All Plugins'],
        {
          title: 'Introduction',
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
            'predefined-date-field',
            'regular-expression-field',
            'template-field',
            'url-field'
          ]
        }
      ],

      '/lists/': [
        ['../', '← All Plugins'],
        {
          title: 'Introduction',
          collapsable: false,
          children: [
            ''
          ]
        },
        {
          title: 'Get Started',
          collapsable: false,
          children: [
            'lists',
            'subscribers',
            'plugin-settings'
          ]
        },
        {
          title: 'Mailing Lists',
          collapsable: false,
          children: [
            'subscriber-list-data-source'
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
            'multi-site'
          ]
        },
        {
          title: 'Configuration',
          collapsable: false,
          children: [
            'configuration/requirements',
            'configuration/updates',
            'configuration/sprout-config',
          ]
        },
        {
          title: 'Form Building',
          collapsable: false,
          children: [
            ['forms/', 'Forms'],
            ['fields/', 'Fields']
          ]
        },
        {
          title: 'SEO Metadata',
          collapsable: false,
          children: [
            ['seo/', 'SEO'],
            ['redirects/', 'Redirects'],
            ['sitemaps/', 'Sitemaps']
          ]
        },
        {
          title: 'Email Marketing',
          collapsable: false,
          children: [
            ['email/', 'Email'],
            ['campaigns/', 'Campaigns'],
            ['sent-email/', 'Sent Email'],
            ['lists/', 'Lists'],
          ]
        },
        {
          title: 'Data Management',
          collapsable: false,
          children: [
            ['data-studio/', 'Data Studio'],
          ]
        },
        {
          title: 'Support',
          collapsable: false,
          children: [
            'support/support',
            'support/training',
            'support/pricing',
            'support/security',
            'contributing',
          ]
        },
      ]
    }
  }
};
