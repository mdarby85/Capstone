/**
 * @name DashboardLayout
 *
 * @author Mario Arturo Lopez Martinez
 *
 * @overview @TODO
 */

import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import Sidebar from "components/sidebar"
import theme from "assets/stylesheets/theme"
import "assets/stylesheets/layout.scss"
import DashboardPageTitle from "components/titles/DashboardPageTitle"
import Toolbar from "components/toolbar"
import { login, isAuthenticated } from "src/utils/auth"
// import TestSidebar from "components/testSidebar/index"

let DashboardLayout = ({ children }) => {
  if (!isAuthenticated()) {
    console.log("Protected Route: Redirecting to login portal...")
    login()
    return <p>Redirecting to login...</p>
  }

  return (
    <ThemeProvider theme={theme}>
      {/* <TestSidebar /> */}
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
