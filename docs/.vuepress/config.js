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
            ['../', '← Sprout Plugins'],
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
            {
                title: 'Customization',
                collapsable: false,
                children: [
                    ['sprout-forms/template-overrides', 'Template Overrides'],
                    ['sprout-forms/rendering-options', 'Rendering Options'],
                    ['sprout-forms/validation', 'Validation'],
                    ['sprout-forms/redirects', 'Redirects'],
                    ['sprout-forms/custom-fields', 'Custom Fields'],
                    ['sprout-forms/payload-forwarding', 'Payload Forwarding'],
                    ['sprout-forms/events-and-hooks', 'Events & Hooks'],
                    ['sprout-forms/dynamic-notifications', 'Dynamic Notifications'],
                ]
            },
            {
                title: 'Integrations',
                collapsable: false,
                children: [
                    ['sprout-forms/sprout-email', 'Sprout Email'],
                    ['sprout-forms/sprout-reports', 'Sprout Reports'],
                    ['sprout-forms/sprout-fields', 'Sprout Fields']
                ]
            },
            {
                title: 'Examples',
                collapsable: false,
                children: [
                    ['sprout-forms/complete-form-in-one-line', 'Complete Form in One Line'],
                    ['sprout-forms/field-tags', 'Field Tags'],
                    ['sprout-forms/custom-fields', 'Custom HTML'],
                    ['sprout-forms/front-end-file-uploads', 'Front-end File Uploads'],
                    ['sprout-forms/thank-you-page', 'Thank You Page'],
                    ['sprout-forms/translating-error-messages', 'Translating Error Messages'],
                    ['sprout-forms/relations-field-on-entry-page', 'Relations Field on Entry Page'],
                    ['sprout-forms/display-errors-at-top-of-page', 'Display errors at top of page'],
                    ['sprout-forms/submitting-a-form-via-ajax', 'Submitting a Form via AJAX'],
                    ['sprout-forms/hidden-and-invisible-fields', 'Hidden and Invisible Fields'],
                    ['sprout-forms/pre-populating-a-field', 'Pre-populating a Field'],
                ]
            },
            {
                title: 'Support',
                collapsable: false,
                children: [
                    ['sprout-forms/contact-support', 'Contact Support']
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