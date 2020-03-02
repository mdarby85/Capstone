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
import { login, isAuthenticated, getProfile } from "../../utils/auth"
import PageTitle from "../../components/page-title"
import DashboardLayout from "../../components/layouts/dashboardLayout"

const Sponsors = () => {
  if (!isAuthenticated()) {
    console.log("Protected")
    login()
    return <p>Redirecting to login...</p>
  }
  return (
  <DashboardLayout>
    <PageTitle title="Sponsors" />
    <p>Mario was here! Wooooo</p>
  </DashboardLayout>
)
}

export default Sponsors
