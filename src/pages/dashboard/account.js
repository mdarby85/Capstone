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
import PageTitle from "components/titles/pageTitle"
import DashboardLayout from "components/layouts/dashboardLayout"

export default () => {
  return (
    <DashboardLayout>
      <PageTitle title="Account" />
      <p>You're on the account page.</p>
    </DashboardLayout>
  )
}
