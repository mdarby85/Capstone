/**
 * @name CreateDepartmentForm
 *
 * @author Mario Arturo Lopez Martinez
 *
 * @overview @TODO
 */

import React from "react"
import { Link } from "gatsby"

import Button from "components/btn"
import FormTitle from "components/titles/formTitle"
import TextInput from "components/input/textInput"

export default () => (
  <>
    <FormTitle title={"Create A Department"} />
    <form name="Contact Form" method="POST">
      <input type="hidden" name="form-name" value="Create Department Form" />
      <TextInput label="Name" type="text" />
      <br />
      <Button
        type="submit"
        tag={Link}
        to={"/dashboard/account"}
        style={{ margin: "auto" }}
        medium
      >
        Submit
      </Button>
    </form>
  </>
)
