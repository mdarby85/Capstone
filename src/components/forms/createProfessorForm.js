/**
 * author: Mario Arturo Lopez Martinez
 * file: createProjectForm.js
 *
 * Description: @TODO
 */

import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "gatsby"

import Button from "components/btn"
import FormTitle from "components/titles/formTitle"
import TextInput from "components/input/textInput"
import SelectInput from "components/input/selectInput"
import { GenerateOptions } from "src/utils"
import { DEPARTMENTS_API } from "src/constants"

const InputStyle = { paddingTop: "10px", paddingBottom: "10px" }

export default () => {
  const [departmentOptions, setDepartmentOptions] = useState([])

  useEffect(() => {
    axios
      .get(DEPARTMENTS_API)
      .then(response => setDepartmentOptions(response.data))
  }, [])

  return (
    <>
      <FormTitle title={"Create A Professor Account"} />
      <form name="Contact Form" method="POST">
        <input type="hidden" name="form-name" value="Create Project Form" />
        <TextInput style={InputStyle} label="Name" type="text" />
        <TextInput style={InputStyle} label="Email" type="email" />
        <SelectInput style={InputStyle} label="Department" type="select">
          {GenerateOptions(departmentOptions)}
        </SelectInput>
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
}
