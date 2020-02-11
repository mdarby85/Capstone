/**
 * author: Mario Arturo Lopez Martinez
 * file: createProjectForm.js
 *
 * Description: @TODO
 */

import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Button from "../btn"
import TextInput from "../input/textInput"
import SelectInput from "../input/selectInput"
import FormTitle from "../formTitle"
import logo from "../../assets/images/BU_BrandMark_Stacked_Gold.png"

const Logo = styled.img`
  display: inline-block;
  height: 4em;
`

export default () => (
  <>
    <Logo src={logo} />
    <FormTitle title={"Create A Project"} />
    <form name="Contact Form" method="POST" netlify>
      <input type="hidden" name="form-name" value="Create Project Form" />
      <TextInput size="lg" label="Project Name" type="text" />
      <SelectInput size="lg" label="Select Sponsor" type="select" />
      <SelectInput size="lg" label="Select TA" type="select" />
      <SelectInput size="lg" label="Select Course" type="select" />
      <SelectInput size="lg" label="Select Team" type="select" />
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
