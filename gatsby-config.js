module.exports = {
  siteMetadata: {
    title: "No 9 Boards",
    description: 'Custom skateboard designs'
  },
  pathPrefix: "/no-9-boards/",
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio`,
        path: `${__dirname}/src/portfolio/`,
      },
    },
  ]
};
