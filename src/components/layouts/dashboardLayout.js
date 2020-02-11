/**
 * author: Mario Arturo Lopez Martinez
 * file: dashboardLayout.js
 *
 * Description: @TODO
 */

import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"

import Sidebar from "../sidebar"
import theme from "../../assets/stylesheets/theme"
import "../../assets/stylesheets/layout.scss"

let DashboardLayout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Sidebar />
      <main style={{ marginLeft: "125px" }}>{children}</main>
    </ThemeProvider>
  )
}

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DashboardLayout
