/**
 * author: Mario Arturo Lopez Martinez
 * file: forms.js
 *
 * Description: Page to showcase the various forms we'll be using in our app. Will be removed.
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
