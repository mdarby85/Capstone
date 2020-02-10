/**
 * author: Mario Arturo Lopez Martinez
 * file: sponsors.js
 *
 * Description:
 * Simple sponsor page in dash
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
    <PageTitle title="Sponsors" />
    <p>Mario was here! Wooooo</p>
  </DashboardLayout>
)
