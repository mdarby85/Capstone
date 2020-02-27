/**
 * author: Mario Arturo Lopez Martinez
 * file: forms.js
 *
 * Description: Page to showcase the various forms we'll be using in our app. Will be removed.
 */

import React from "react"

import AddAccountForm from "components/forms/addAccountForm"
import CreateTeamForm from "components/forms/createTeamForm"
import TestFormLayout from "components/layouts/testFormLayout"
import CreateCourseForm from "components/forms/createCourseForm"
import DashboardLayout from "components/layouts/dashboardLayout"
import CreateProjectForm from "components/forms/createProjectForm"
import CreateProgramForm from "components/forms/createDepartmentForm"
import CreateProffessorForm from "components/forms/createProfessorForm"
import CreateSponsorAccountForm from "components/forms/createSponsorForm"

export default () => (
  <>
    <DashboardLayout>
      <TestFormLayout>
        <CreateCourseForm />
      </TestFormLayout>
      <TestFormLayout>
        <CreateProjectForm />
      </TestFormLayout>
      <TestFormLayout>
        <CreateProgramForm />
      </TestFormLayout>
      <TestFormLayout>
        <CreateSponsorAccountForm />
      </TestFormLayout>
      <TestFormLayout>
        <CreateProffessorForm />
      </TestFormLayout>
      <TestFormLayout>
        <CreateTeamForm />
      </TestFormLayout>
      <TestFormLayout>
        <AddAccountForm />
      </TestFormLayout>
    </DashboardLayout>
  </>
)
