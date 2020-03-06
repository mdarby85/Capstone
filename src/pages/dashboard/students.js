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

import SEO from "components/seo"
import DashboardLayout from "components/layouts/dashboardLayout"
import DashboardSectionTitle from "components/titles/dashboardSectionTitle"
import StudentList from "components/lists/studentList"
import { login, isAuthenticated, getProfile } from "../../utils/auth"

const Students = () => {
  if (!isAuthenticated()) {
    console.log("Protected")
    login()
    return <p>Redirecting to login...</p>
  }
  return (
  <DashboardLayout>
    <SEO title="Professors" />
    <DashboardSectionTitle
      style={{ display: "inline-block", marginBottom: "-1vh" }}
      title="Manage Students"
    />
    <StudentList />
  </DashboardLayout>
)