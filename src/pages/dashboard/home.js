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
import PageTitle from "../../components/page-title"
import DashboardLayout from "../../components/layouts/dashboardLayout"

const Home = () => {
  if (!isAuthenticated()) {
    console.log("Protected")
    login()
    return <p>Redirecting to login...</p>
  }
  return (
  <DashboardLayout>
    <PageTitle title="Home" />
    <p>Mario was here! Wooooo</p>
  </DashboardLayout>
)
}

export default Home
