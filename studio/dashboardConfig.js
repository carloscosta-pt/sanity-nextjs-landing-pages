export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ce420fed2e6af018ee90cf3',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-cgdrpaxn',
                  apiId: '9ea7f48a-70dc-4dbf-97c9-871a70c601a5'
                },
                {
                  buildHookId: '5ce420fed14d00e6ac0faa86',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-6c59vwom',
                  apiId: '8a2f960e-7bbf-453f-9192-977919349d78'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/carloscosta-pt/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-6c59vwom.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
