const path = require("path")

module.exports = {
  siteMetadata: {
    title: `ODS América Latina`,
    description: `ODS América Latina`,
    author: `@acidbjazz`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ODS América Latina`,
        short_name: `odsamericalatina`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-svg`,
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        src: path.join(__dirname, `src`),
        c: path.join(__dirname, `src/components`),
        i: path.join(__dirname, `src/images`),
        p: path.join(__dirname, `src/pages`),
        t: path.join(__dirname, `src/templates`),
        u: path.join(__dirname, `src/utils`),
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `aac3u67bu8pa`,
        accessToken: `Bw5UpOjACw9mTACNoSjMRrohAa0PJQDaWwWdGyQa-oM`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: [],
      },
    },
    {
      resolve: `gatsby-plugin-react-leaflet`,
      options: {
        linkStyles: true, // (default: true) Enable/disable loading stylesheets via CDN
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
