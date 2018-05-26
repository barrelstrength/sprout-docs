module.exports = {
    title: 'Sprout Plugins Documentation',
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
          '/business-suite/': [
            ['../coding-guidelines', '← Sprout Plugins'],
            {
                title: 'Sprout Forms',
                collapsable: false
            },
            {
                title: 'Getting Started',
                collapsable: false,
                children: [
                    ['sprout-forms/', 'Introduction'],
                    'sprout-forms/installing-and-updating',
                    'sprout-forms/updating-to-2x'
                ]
            },
            {
                title: 'Templating',
                collapsable: false,
                children: [
                    ['sprout-forms/display-form-tag', 'displayForm'],
                    ['sprout-forms/display-tab-tag', 'displayTab'],
                    ['sprout-forms/display-field-tag', 'displayField'],
                    ['sprout-forms/entries-tag', 'entries'],
                    ['sprout-forms/last-entry-tag', 'lastEntry'],
                    ['sprout-forms/get-entry-tag', 'getEntry'],
                    ['sprout-forms/form-tag', 'form'],

                ]
            },
          ],

          // fallback
          '/': [
            {
                title: 'Overview',
                collapsable: false,
                children: [
                    '',
                    'coding-guidelines'
                ]
            },
            {
                title: 'Business Suite',
                collapsable: false,
                children: [
                    'business-suite/sprout-forms',
                    'business-suite/sprout-seo',
                    'business-suite/sprout-email',
                    'business-suite/sprout-reports',
                    'business-suite/sprout-import'
                ]
            },
            {
                title: 'Utilities',
                collapsable: false,
                children: [
                    'utilites/sprout-active',
                    'utilites/sprout-encode-email',
                    'utilites/sprout-fields',
                    'utilites/sprout-lists',
                    'utilites/sprout-notes'
                ]
            },
          ]
        }
    }
}