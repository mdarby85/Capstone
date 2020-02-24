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
import { Link } from "gatsby"
import PageTitle from "../../components/page-title"
import DashboardLayout from "../../components/layouts/dashboardLayout"

const Admin = () => {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }
  console.log("Logged In!")
  const user = getProfile()

  return (
    <DashboardLayout>
      <PageTitle title="Admin" />
      <p>Mario wasn't here! Wooooo</p>
    </DashboardLayout>
  )
}

export default Admin
