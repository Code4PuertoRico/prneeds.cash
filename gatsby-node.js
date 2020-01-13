const path = require(`path`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  let slug

  if (node.internal.type === `Airtable` && node.table === `Charities`) {
    slug = `/${node.data.Name.replace(/ /g, '-')
      .replace(/[,&]/g, '')
      .toLowerCase()}/`

    // Add slug as a field on the node.
    createNodeField({ node, name: `slug`, value: slug })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  return new Promise((resolve, reject) => {
    const pages = []
    const tempChar = path.resolve(`src/templates/CharityTemplate.js`)

    // Query for all markdown "nodes" and for the slug we previously created.
    resolve(
      graphql(
        `
          {
            allAirtable(filter: { table: { eq: "Donations" } }) {
              edges {
                node {
                  id
                  data {
                    Name
                    Website
                    Description
                    Image {
                      url
                    }
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          result.errors.forEach(error => {
            console.log(error)
          })

          reject(result.errors)
        }

        result.data.allAirtable.edges.forEach(edge => {
          let path = edge.node.data.Name.replace(/ /g, '-')
          .replace(/[,&]/g, '')
          .toLowerCase()
          createPage({
            path: path, // required, we don't have frontmatter for this page hence separate if()
            component: tempChar,
            context: {
              name: edge.node.data.Name,
              link: edge.node.data.Url,
              heading: edge.node.data.Name,
              Description: edge.node.data.Description,
              desc: edge.node.data.Description,
              image: edge.node.data.Image,
            },
          })
        })

        return
      })
    )
  })
}
