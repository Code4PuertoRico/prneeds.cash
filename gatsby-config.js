require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Puerto Rico Needs Cash",
    siteUrl: `https://prneeds.cash`,
    description: "After an earthquake swarm rattled the islands, Puerto Ricans have self-organized to provide assistance to those affected. The organizations and efforts listed in this site are accepting cash donations in order to help the affected population in the south of Puerto Rico.",
    image: "/images/og-main.jpg",
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
