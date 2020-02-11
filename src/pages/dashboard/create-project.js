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

import FormLayout from "../../components/layouts/formLayout"
import CreateProjectForm from "../../components/forms/createProjectForm"

export default () => (
  <FormLayout>
    <CreateProjectForm />
  </FormLayout>
)
