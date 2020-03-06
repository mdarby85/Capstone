/**
 * author: Mario Arturo Lopez Martinez
 * file: admin.js
 *
 * Description:
 * Simple admin home for Dashboard
 *
 * TODO: Finish design
 */

import React from "react"
import { login, isAuthenticated, getProfile } from "../../utils/auth"

import SEO from "components/seo"
import PageTitle from "components/titles/pageTitle"
import DashboardLayout from "components/layouts/dashboardLayout"

const Projects = () => {
  if (!isAuthenticated()) {
    console.log("Protected")
    login()
    return <p>Redirecting to login...</p>
  }
  return (
  <DashboardLayout>
    <SEO title="Projects" />
    <PageTitle title="Projects" />
    <p>Mario was here! Wooooo</p>
  </DashboardLayout>
)
}

export default Projects
