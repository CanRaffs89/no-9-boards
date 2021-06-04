const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    const { data } = await graphql(`
        query Portfolio {
            allMarkdownRemark {
                nodes {
                    frontmatter {
                        slug
                    }
                }
            }
        }
    `)
    data.allMarkdownRemark.nodes.forEach(node => {
        actions.createPage({
            path: '/portfolio/' + node.frontmatter.slug,
            component: path.resolve('./src/templates/item-details.js'),
            context: { slug: node.frontmatter.slug }
        })
    })
}

