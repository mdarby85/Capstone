/**
 * author: Mario Arturo Lopez Martinez
 * file: dashboardLayout.js
 *
 * Description: @TODO
 */

import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"

import Sidebar from "components/sidebar"
import theme from "assets/stylesheets/theme"
import "assets/stylesheets/layout.scss"
import DashboardPageTitle from "components/titles/DashboardPageTitle"
import Toolbar from "components/toolbar"

let DashboardLayout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Sidebar />
      <main style={{ marginLeft: "125px", marginRight: "10vw" }}>
        <DashboardPageTitle title="Admin Dashboard" />
        {children}
      </main>
      <Toolbar />
    </ThemeProvider>
  )
}

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DashboardLayout
