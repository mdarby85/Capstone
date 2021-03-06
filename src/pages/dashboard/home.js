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
import TeamList from "components/lists/teamList"
import CourseList from "components/lists/courseList"
import ProjectList from "components/lists/projectList"
import ProgramList from "components/lists/programList"
import DashboardLayout from "components/layouts/dashboardLayout"
import DashboardSectionTitle from "components/titles/dashboardSectionTitle"

const TopStyle = { display: "inline-block", marginBottom: "-1vh" }

export default () => {
  return (
    <DashboardLayout>
      <SEO title="Dashboard Home" />
      <DashboardSectionTitle style={TopStyle} title="Manage Programs" />
      <ProgramList />
      <DashboardSectionTitle title="Manage Courses" />
      <CourseList />
      <DashboardSectionTitle title="Manage Teams" />
      <TeamList />
      <DashboardSectionTitle title="Manage Projects" />
      <ProjectList />
    </DashboardLayout>
  )
}
