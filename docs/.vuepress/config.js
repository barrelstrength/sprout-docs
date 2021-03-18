module.exports = {
  title: 'Sprout Docs for Craft 2',
  description: 'The Sprout Business Suite is a premium suite of plugins designed for businesses who want to use Craft CMS as the core of their content management and digital marketing workflows.',
  // theme: 'craftdocs',
  base: '/docs/craft-v2/',
  ga: '',
  plugins: [
    [
      '@vuepress/google-analytics', {
      ga: 'UA-26032077-1'
    }
    ]
  ],
  markdown: {
    anchor: {level: [2, 3]},
    extendMarkdown: md => {
      md.use(require('./markdown/code'));
    }
  },
  themeConfig: {
    docsRepo: 'barrelstrength/sprout-docs',
    docsDir: 'docs/craft-v2',
    docsBranch: 'craft-v2',
    editLinks: true,
    codeLanguages: {
      twig: 'Twig',
      php: 'PHP',
      js: 'Javascript',
      craft2: 'Craft 2',
      craft3: 'Craft 3'
    },
    algolia: {
      apiKey: '9245da67ddab2b9ddda749bbb31362cf',
      indexName: 'sprout_barrelstrengthdesign'
    },
    nav: [
      {
        text: 'Sprout Plugins',
        items: [
          {text: 'Sprout for Craft 3', link: 'https://sprout.barrelstrengthdesign.com/docs'},
          {text: 'Sprout Craft 2', link: '/'},
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
            ''
          ]
        },
        {
          title: 'Core Concepts',
          collapsable: false,
          children: [
            'forms',
            'form-fields',
            'entries',
            'notifications',
            'reports',
            'integrations',
            'importing-data'
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
            'hidden-fields',
            'pre-populating-a-field',
            'custom-html',
            'display-errors-at-top-of-page',
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
            'custom-form-fields',
            'events-and-hooks'
          ]
        },
        {
          title: 'Installing & Updating',
          collapsable: false,
          children: [
            'installing-and-updating-craft-2',
            'faq'
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

          ]
        },
        {
          title: 'Sitemaps',
          collapsable: false,
          children: [

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
          title: 'Core Concepts',
          collapsable: false,
          children: [
            'global-metadata',
            'element-metadata-field',
            'redirects',
            'sitemaps',
            'plugin-settings',
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
            'elements-without-urls',
            'divider',
            'extending-a-base-layout',
            'get-default-by-handle',
            'get-optimized-meta',
            'overriding-images',
            'custom-sections',
            'large-sitemaps'
          ]
        },
        {
          title: 'Development',
          collapsable: false,
          children: [
            'custom-schema'
          ]
        },
        {
          title: 'Installing & Updating',
          collapsable: false,
          children: [
            'installing-and-updating-craft-2'
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
          title: 'Core Concepts',
          collapsable: false,
          children: [
            'notification-emails',
            'notification-events',
            'sent-emails',
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
        },
        {
          title: 'Installing & Updating',
          collapsable: false,
          children: [
            'installing-and-updating-craft-2'
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
          title: 'Core Concepts',
          collapsable: false,
          children: [
            'campaign-emails',
            'copy-paste-mailer',
            'plugin-settings'
          ]
        },
        {
          title: 'Installing & Updating',
          collapsable: false,
          children: [
            'installing-and-updating-craft-2'
          ]
        }
      ],

      '/reports/': [
        ['../', '← All Plugins'],
        {
          title: 'Introduction',
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
            'mailing-lists'
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
        },
        {
          title: 'Installing & Updating',
          collapsable: false,
          children: [
            'installing-and-updating-craft-2'
          ]
        }
      ],

      '/import/': [
        ['../', '← All Plugins'],
        {
          title: 'Introduction',
          collapsable: false,
          children: [
            '',
            'supported-data-types',
          ]
        },
        {
          title: 'Core Concepts',
          collapsable: false,
          children: [
            'resolve-relationships',
            'related-attributes',
            'create-elements-on-the-fly',
            'update-existing-elements',
            'set-default-attributes',
            'multiple-sites',
            'multiple-import-types',
            'large-amounts-of-data',
            'console-commands'
          ]
        },
        {
          title: 'Element Importers',
          collapsable: false,
          children: [
            'assets',
            'categories',
            'entries',
            'matrix-field',
            'orders',
            'products-with-variants',
            'tags',
            'users'
          ]
        },
        {
          title: 'Settings Importers',
          collapsable: false,
          children: [
            'fields',
            'sections',
            'widgets'
          ]
        },
        {
          title: 'Bundles',
          collapsable: false,
          children: [
            'longform-content-matrix',
            'navigation-using-structures',
            'simple-blog',
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
            'expressionengine-export',
            'importing-dates'
          ]
        },
        {
          title: 'Development',
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
            'installing-and-updating-craft-2'
          ]
        }
      ],

      '/active/': [
        ['../', '← All Plugins'],
        {
          title: 'Introduction',
          collapsable: false,
          children: [
            ''
          ]
        },
        {
          title: 'Installing & Updating',
          collapsable: false,
          children: [
            'installing-and-updating-craft-2'
          ]
        }
      ],

      '/encode-email/': [
        ['../', '← All Plugins'],
        {
          title: 'Introduction',
          collapsable: false,
          children: [
            ''
          ]
        },
        {
          title: 'Installing & Updating',
          collapsable: false,
          children: [
            'installing-and-updating-craft-2'
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
            'email-field',
            'email-dropdown-field',
            'hidden-field',
            'invisible-field',
            'notes-field',
            'phone-field',
            'regular-expression-field',
            'url-field'
          ]
        },
        {
          title: 'Installing & Updating',
          collapsable: false,
          children: [
            'installing-and-updating-craft-2'
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
          title: 'Core Concepts',
          collapsable: false,
          children: [
            'lists',
            'subscribers',
            'settings'
          ]
        },
        {
          title: 'Mailing Lists',
          collapsable: false,
          children: [
            'subscriber-list-data-source'
          ]
        },
        {
          title: 'Installing & Updating',
          collapsable: false,
          children: [
            'installing-and-updating-craft-2'
          ]
        }
      ],

      '/notes/': [
        ['../', '← All Plugins'],
        {
          title: 'Introduction',
          collapsable: false,
          children: [
            ''
          ]
        },
        {
          title: 'Installing & Updating',
          collapsable: false,
          children: [
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
            '',
            'why-sprout',
            'core-concepts',
            'integrations',
            'multi-site',
            'businesses'
          ]
        },
        {
          title: 'Form Building',
          collapsable: false,
          children: [
            ['forms/', 'Sprout Forms'],
            ['fields/', 'Sprout Fields']
          ]
        },
        {
          title: 'SEO Metadata',
          collapsable: false,
          children: [
            ['seo/', 'Sprout SEO']
          ]
        },
        {
          title: 'Email Marketing',
          collapsable: false,
          children: [
            ['email/', 'Sprout Email'],
            ['lists/', 'Sprout Lists'],
          ]
        },
        {
          title: 'Data Ops',
          collapsable: false,
          children: [
            ['reports/', 'Sprout Reports'],
            ['import/', 'Sprout Import'],
          ]
        },
        {
          title: 'Misc',
          collapsable: false,
          children: [
            ['active/', 'Sprout Active'],
            ['encode-email/', 'Sprout Encode Email'],
            ['notes/', 'Sprout Notes']
          ]
        },
        {
          title: 'Support',
          collapsable: false,
          children: [
            'support/feature-requests',
            'support/bugs',
            'support/security',
            'support/changelog',
            'support/pricing',
            'support/training',
            'support/support'
          ]
        },
        {
          title: 'Workflow',
          collapsable: false,
          children: [
            'contributing',
            'coding-guidelines',
          ]
        },
        {
          title: 'Tools',
          collapsable: false,
          children: [
            ['tools/php-storm', 'PhpStorm'],
            ['tools/sublime-text', 'Sublime Text'],
            ['tools/craftnet', 'Craftnet']
          ]
        }
      ]
    }
  }
};
