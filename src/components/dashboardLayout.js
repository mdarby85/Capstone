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
import "../assets/stylesheets/layout.scss"
import {ThemeProvider} from 'styled-components'
import theme from '../assets/stylesheets/theme'

const DashboardLayout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <main style={{'margin': '0em 18em',}}>{children}</main>
    </ThemeProvider>
  )
}

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DashboardLayout
