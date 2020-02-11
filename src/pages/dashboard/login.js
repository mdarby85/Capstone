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
import styled from "styled-components"
import { NormalField } from "reactstrap-form-fields"
import { Link } from "gatsby"

import FormLayout from "../../components/formLayout"
import FormTitle from "../../components/formTitle"
import Button from "../../components/btn"
import logo from "../../assets/images/BU_BrandMark_Stacked_Gold.png"

const Logo = styled.img`
  display: inline-block;
  height: 4em;
`

export default () => (
  <FormLayout>
    <Logo src={logo} />
    <FormTitle title={"Login"} />
    <form name="Contact Form" method="POST" netlify>
      <input type="hidden" name="form-name" value="Contact Form" />
      <NormalField name="Email" />
      <NormalField name="Password" />
      <br />
      <Button
        type="submit"
        tag={Link}
        to={"/dashboard/account"}
        style={{ margin: "auto" }}
      >
        Submit
      </Button>
    </form>
  </FormLayout>
)
