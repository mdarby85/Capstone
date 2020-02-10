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

import Sidebar from "../../components/sidebar"
import PageTitle from "../../components/page-title"
import DashboardLayout from "../../components/dashboardLayout"



export default () => (
  <DashboardLayout>
    <Sidebar />
    <PageTitle title="Archive" />
    <p>Mario was here! Wooooo</p>

  </DashboardLayout>
)
