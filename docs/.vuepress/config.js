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
        sidebar: [
            '/' , 
            {
                title: 'Business Suite',
                collapsable: false,
                children: [
                    '/sprout-forms/',
                    '/sprout-seo/',
                    '/sprout-email/',
                    '/sprout-reports/',
                    '/sprout-import/',
                ]
            },
            {
                title: 'Utilities',
                collapsable: false,
                children: [
                    '/sprout-active/',
                    '/sprout-encode-email/',
                    '/sprout-fields/',
                    '/sprout-lists/',
                    '/sprout-notes/',
                ]
            }
        ]
    }
}