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
import Toolbar from "components/toolbar"
import DashboardPageTitle from "components/titles/DashboardPageTitle"
import { login, isAuthenticated } from "src/utils/auth"

import theme from "assets/stylesheets/theme"
import "assets/stylesheets/layout.scss"
const BodyStyle = { marginLeft: "125px", marginRight: "10vw" }

let DashboardLayout = ({ children }) => {
  if (!isAuthenticated()) {
    console.log("Protected Route: Redirecting to login portal...")
    login()
    return <p>Redirecting to login...</p>
  }

  return (
    <ThemeProvider theme={theme}>
      <Sidebar />
      <main style={BodyStyle}>
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
