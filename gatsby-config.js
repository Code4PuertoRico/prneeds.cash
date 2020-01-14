
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Support Local Grassroot Organizations",
    siteUrl: `https://prneeds.cash`,
    description: "While a swarm of earthquakes rattled the islands, Puerto Ricans self-organized to help those affected. The efforts listed below accept donations online to support the affected communities.",
    twitterUsername: "@puertorico",
    titleTemplate: "%s · 💰🇵🇷"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt',
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://prneeds.cash`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#222',
        theme_color: '#222',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_KEY,
        tables: [
          {
            baseId: `app26XbiicAShteD5`,
            tableName: `Donations`,
            tableView: `Published`,
            queryName: `charities`,
            mapping: { Attachments: `fileNode` },
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: '',
        // Puts tracking script in the head instead of the body
        head: true,
      },
    },
  ],
}
