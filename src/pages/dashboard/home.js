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
import ProgramList from "components/lists/programList"
import CourseList from "components/lists/courseList"
import TeamList from "components/lists/teamList"
import ProjectList from "components/lists/projectList"

export default () => (
  <DashboardLayout>
    <SEO title="Dashboard Home" />
    <DashboardSectionTitle
      style={{ display: "inline-block", marginBottom: "-1vh" }}
      title="Manage Programs"
    />
    <ProgramList />
    <DashboardSectionTitle title="Manage Courses" />
    <CourseList />
    <DashboardSectionTitle title="Manage Teams" />
    <TeamList />
    <DashboardSectionTitle title="Manage Projects" />
    <ProjectList />
  </DashboardLayout>
)
