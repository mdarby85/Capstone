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
import { login, isAuthenticated, getProfile } from "src/utils/auth"
import PageTitle from "components/titles/pageTitle"
import DashboardLayout from "components/layouts/dashboardLayout"

export default () => {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }
  console.log("Logged In!")
  const user = getProfile()

  return (
    <DashboardLayout>
      <PageTitle title="Admin" />
      <p>You're on the admin page.</p>
    </DashboardLayout>
  )
}
