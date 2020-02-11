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
import { Link } from "gatsby"

import InputField from "../input/textInput"
import Button from "../../components/btn"
import FormTitle from "../../components/formTitle"
import logo from "../../assets/images/BU_BrandMark_Stacked_Gold.png"

const Logo = styled.img`
  display: inline-block;
  height: 4em;
`

export default () => (
  <>
    <Logo src={logo} />
    <FormTitle title={"Login"} />
    <form name="Contact Form" method="POST" netlify>
      <input type="hidden" name="form-name" value="Contact Form" />

      <InputField label="Email" type="email" placeholder="test@test.com" />
      <InputField label="Password" type="password" />

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
  </>
)
