/**
 * author: Mario Arturo Lopez Martinez
 * file: loginForm.js
 *
 * Description: @TODO
 */

import React from "react"
import { Link } from "gatsby"

import Button from "../../components/btn"
import InputField from "../input/textInput"
import FormTitle from "../../components/formTitle"

export default () => (
  <>
    <FormTitle title={"Login"} />
    <form name="Contact Form" method="POST">
      <input type="hidden" name="form-name" value="Contact Form" />
      <InputField size="md" label="Email" type="email" />
      <InputField size="md" label="Password" type="password" />
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
