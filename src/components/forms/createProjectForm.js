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
import { SPONSORS_API, COURSES_API } from "src/constants"

const InputStyle = { paddingTop: "10px", paddingBottom: "10px" }

export default () => {
  const [courseOptions, setCourseOptions] = useState([])
  const [sponsorOptions, setSponsorOptions] = useState([])

  useEffect(() => {
    axios.get(SPONSORS_API).then(response => setSponsorOptions(response.data))
    axios.get(COURSES_API).then(response => setCourseOptions(response.data))
  }, [])

  return (
    <>
      <FormTitle title={"Create A Project"} />
      <form name="Contact Form" method="POST">
        <input type="hidden" name="form-name" value="Create Project Form" />
        <TextInput style={InputStyle} label="Project Name" type="text" />
        <SelectInput style={InputStyle} label="Select Course">
          {GenerateOptions(courseOptions)}
        </SelectInput>
        <SelectInput style={InputStyle} label="Select Sponsor">
          {GenerateOptions(sponsorOptions)}
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
