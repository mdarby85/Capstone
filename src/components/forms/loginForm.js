/**
 * author: Mario Arturo Lopez Martinez
 * file: loginForm.js
 *
 * Description: @TODO
 */

import React from "react"
import { Link } from "gatsby"

import Button from "components/btn"
import FormTitle from "components/titles/formTitle"
import InputField from "components/input/textInput"

const InputStyle = { paddingTop: "10px", paddingBottom: "10px" }

export default () => (
  <>
    <FormTitle title={"Login"} />
    <form name="Contact Form" method="POST">
      <input type="hidden" name="form-name" value="Contact Form" />
      <InputField style={InputStyle} size="md" label="Email" type="email" />
      <InputField
        style={InputStyle}
        size="md"
        label="Password"
        type="password"
      />
      <br />
      <Button
        type="submit"
        tag={Link}
        to={"/dashboard/home"}
        style={{ margin: "auto" }}
        medium
      >
        Submit
      </Button>
    </form>
  </>
)
