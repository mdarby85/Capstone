/**
 * author: Mario Arturo Lopez Martinez
 * file: createProjectForm.js
 *
 * Description: @TODO
 */

import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Button from "components/btn"
import FormTitle from "components/titles/formTitle"
import TextInput from "components/input/textInput"
import SelectInput from "components/input/selectInput"
import { GenerateCheckboxes, GenerateOptions } from "src/utils"
import { COURSES_API, PROJECTS_API, USERS_API } from "src/constants"
import axios from "axios"

const InputStyle = { paddingTop: "10px", paddingBottom: "10px" }

export default () => {
  const [coureseOptions, setCoursesOptions] = useState([])
  const [projectOptions, setProjectOptions] = useState([])
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get(COURSES_API).then(response => setCoursesOptions(response.data))
    axios.get(PROJECTS_API).then(response => setProjectOptions(response.data))
    axios.get(USERS_API).then(response => setUsers(response.data))
  }, [])

  return (
    <>
      <FormTitle title={"Create A Team"} />
      <form name="Create A Form" method="POST">
        <input type="hidden" name="form-name" value="Create Project Form" />
        <TextInput style={InputStyle} label="Team Name" />
        <SelectInput style={InputStyle} label="Course">
          {GenerateOptions(coureseOptions)}
        </SelectInput>
        <SelectInput style={InputStyle} label="Project">
          {GenerateOptions(projectOptions)}
        </SelectInput>
        {GenerateCheckboxes(users)}
        <br />
        <Button type="submit" tag={Link}>
          Submit
        </Button>
      </form>
    </>
  )
}
