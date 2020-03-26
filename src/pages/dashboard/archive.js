/**
 * author: Mario Arturo Lopez Martinez
 * file: admin.js
 *
 * Description:
 * Simple admin Archive for Dashboard
 *
 * TODO: Finish design
 */

import React from "react"
import PageTitle from "components/titles/pageTitle"
import DashboardLayout from "components/layouts/dashboardLayout"

export default () => {
  return (
    <DashboardLayout>
      <PageTitle title="Archive" />
      <p>You're on the archive page.</p>
    </DashboardLayout>
  )
}
