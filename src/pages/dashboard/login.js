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

import SEO from "components/seo"
import LoginForm from "components/forms/loginForm"
import FormLayout from "components/layouts/formLayout"

export default () => (
  <FormLayout>
    <SEO title="Login" />
    <LoginForm />
  </FormLayout>
)
