/**
 * author: Chris Holle
 * file: layout.js
 *
 * Description:
 * Layout for Non-Dashboard Front-end. Wrap Non-Dashboard pages in this component.
 *
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"

import Header from "components/header"
import TopHeader from "components/topHeader"
import theme from "assets/stylesheets/theme"
import "assets/stylesheets/layout.scss"

const MainStyle = { margin: "7em 0 0 0" }

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <TopHeader />
      <Header siteTitle={data.site.siteMetadata.title} />
      <main style={MainStyle}>{children}</main>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
