const path = require(`path`)
const ppp = 10

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allContentfulNoticias(sort: { fields: fecha, order: DESC }) {
        nodes {
          slug
        }
      }
    }
  `).then(result => {
    //noticias
    const noticiasData = result.data.allContentfulNoticias.nodes
    const totalPagesNoticias = Math.ceil(noticiasData.length / ppp)
    for (let i = 0; i < totalPagesNoticias; i++) {
      createPage({
        path: i === 0 ? `noticias/` : `noticias/${i + 1}`,
        component: path.resolve(`./src/templates/news/News.js`),
        context: {
          skip: i * ppp,
          limit: ppp,
          currentPage: i + 1,
          totalPages: totalPagesNoticias,
        },
      })
    }
    noticiasData.forEach((node, i) => {
      createPage({
        path: `noticias/${node.slug}`,
        component: path.resolve(`./src/templates/news/NewsArticle.js`),
        context: {
          slug: node.slug,
          prev: i === 0 ? null : noticiasData[i - 1].slug,
          next: i === noticiasData.length - 1 ? null : noticiasData[i + 1].slug,
        },
      })
    })
  })
}
