/**
 * author: Chris Holle
 * file: login.js
 *
 * Description:
 * Simple login for dashboard
 *
 *
 * TODO: Finish design and remove layout
 * TODO: Link to auth0
 * TODO: Connect to DUO
 * TODO: route to correct dashboard view
 */

import React from "react"

import TestFormLayout from "../../components/layouts/testFormLayout"
import CreateProjectForm from "../../components/forms/createProjectForm"
import CreateSponsorAccountForm from "../../components/forms/createSponsorForm"
import CreateProffessorForm from "../../components/forms/createProfessorForm"
import CreateProgramForm from "../../components/forms/createDepartmentForm"

export default () => (
  <>
    <TestFormLayout>
      <CreateProjectForm />
    </TestFormLayout>
    <TestFormLayout>
      <CreateSponsorAccountForm />
    </TestFormLayout>
    <TestFormLayout>
      <CreateProffessorForm />
    </TestFormLayout>
    <TestFormLayout>
      <CreateProgramForm />
    </TestFormLayout>
  </>
)
