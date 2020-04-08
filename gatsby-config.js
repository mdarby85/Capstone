// Author(s): Mario Arturo Lopez Martinez
// File: gatsby-config.js
// Last Modified: February 27th, 2020

const path = require("path")
let facebook_pixel = ""
let gtm = ""

module.exports = {
  siteMetadata: {
    title: `Meridian`,
    description: `A Capstone showcase platform.`,
    author: `Isaiah Bullard, Matthew Darby, Chris Holle, Elisa Gonzales, Mario Lopez, Brandon Wilcox`,
    siteUrl: `https://www.meridian.com/`,
    phone: "(254) 710-5555",
    web: "https://baylor.edu",
    address: "1311 S 5th St, Waco, TX 76706",
    email: "team@meridian.com",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        src: path.join(__dirname, "src"),
        utils: path.join(__dirname, "src/utils"),
        data: path.join(__dirname, "src/data"),
        pages: path.join(__dirname, "src/pages"),
        assets: path.join(__dirname, "src/assets"),
        components: path.join(__dirname, "src/components"),
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: gtm,
        includeInDevelopment: false,
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: facebook_pixel,
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/assets/images/meridian-logo.png",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [
          "course",
          "department",
          "program",
          "project",
          "sponsor",
          "team",
          "user",
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-styled-components`,
  ],
}
