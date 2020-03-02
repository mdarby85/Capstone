/**
 * author: Mario Arturo Lopez Martinez
 * file: students.js
 *
 * Description:
 * Simple admin home for student management page
 *
 * TODO: Finish design
 */

import React from "react"
import { login, isAuthenticated, getProfile } from "../../utils/auth"
import PageTitle from "../../components/page-title"
import DashboardLayout from "../../components/layouts/dashboardLayout"

const Students = () => {
  if (!isAuthenticated()) {
    console.log("Protected")
    login()
    return <p>Redirecting to login...</p>
  }
  return (
  <DashboardLayout>
    <PageTitle title="Students" />
    <p>Mario was here! Wooooo</p>
  </DashboardLayout>
)
}

export default Students
