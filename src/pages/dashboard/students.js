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

import Sidebar from "../../components/sidebar"
import PageTitle from "../../components/page-title"
import DashboardLayout from "../../components/dashboardLayout"

export default () => (
  <DashboardLayout>
    <Sidebar />
    <PageTitle title="Students" />
    <p>Mario was here! Wooooo</p>
  </DashboardLayout>
)
