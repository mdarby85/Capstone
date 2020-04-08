/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// Mario Commented this stuff out because it was breaking the dashbaord routes :^)

// exports.onCreatePage = async ({ page, actions }) => {
//     const { createPage } = actions
//     // page.matchPath is a special key that's used for matching pages
//     // only on the client.
//     if (page.path.match(/^\/dashboard/)) {
//         page.matchPath = "/dashboard/*"

//         // Update the page.
//         createPage(page)
//     }
// }

/**
 * @author Mario Arturo Lopez Martinez (CSI 43C9 Spring 2020)
 * @overview This bit creates unique (static) pages for projects at build-time, for showcase purposes.
 * @see https://strapi.io/blog/build-a-static-blog-with-gatsby-and-strapi
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      projects: allStrapiProject(filter: { published: { eq: true } }) {
        nodes {
          id
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  result.data.projects.nodes.forEach(project => {
    createPage({
      path: `/projects/view/${project.id}`,
      // All projects default to Template #1 for the time being, until we create new templates.
      component: require.resolve("./src/components/project/template1.js"),
      context: {
        id: project.id,
      },
    })
  })
}

/**
 * @author Brandon Wilcox (CSI 43C9 Spring 2020)
 * @author Mario Arturo Lopez Martinez (CSI 43C9 Spring 2020)
 */
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  // Fixed an issue where the package 'dotenv' wasn't able to resolve 'fs'
  actions.setWebpackConfig({
    node: { fs: "empty" },
  })

  if (stage === "build-html") {
    /*
     * During the build step, `auth0-js` will break because it relies on
     * browser-specific APIs. Fortunately, we don’t need it during the build.
     * Using Webpack’s null loader, we’re able to effectively ignore `auth0-js`
     * during the build. (See `src/utils/auth.js` to see how we prevent this
     * from breaking the app.)
     */
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /auth0-js/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
