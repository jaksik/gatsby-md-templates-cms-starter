const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    // **Note:** The graphql function call returns a Promise
    // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
    return graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                  templateKey
              }
            }
          }
        }
      }
    `
  ).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const id = node.id
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/${String(node.frontmatter.templateKey)}.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            id,
            slug: node.fields.slug,
          },
        })
      })
    })
  }

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions

    if (node.internal.type === `MarkdownRemark`) {
      const value = createFilePath({ node, getNode, basePath: `pages` })
      createNodeField({
        name: `slug`,
        node,
        value,
      })
    }
  }

  