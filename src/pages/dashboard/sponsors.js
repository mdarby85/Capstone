/**
 * @name Sponsors
 *
 * @author Mario Arturo Lopez Martinez
 *
 * @overview Simple admin home for Dashboard
 *
 * @TODO Finish design
 */

import React from "react"
import SEO from "components/seo"
import DashboardLayout from "components/layouts/dashboardLayout"
import DashboardSectionTitle from "components/titles/dashboardSectionTitle"
import SponsorList from "components/lists/sponsorList"

export default () => {
  return (
    <DashboardLayout>
      <SEO title="Sponsors" />
      <DashboardSectionTitle
        style={{ display: "inline-block", marginBottom: "-1vh" }}
        title="Manage Sponsor Contacts"
      />
      <SponsorList />
    </DashboardLayout>
  )
}
