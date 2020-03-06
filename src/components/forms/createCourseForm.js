/**
 * @name CreateCourseForm
 *
 * @author Mario Arturo Lopez Martinez
 *
 * @overview @TODO
 */

import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import axios from "axios"

import Button from "components/btn"
import FormTitle from "components/titles/formTitle"
import TextInput from "components/input/textInput"
import SelectInput from "components/input/selectInput"
import { GenerateOptions } from "src/utils"
import { PROGRAMS_API } from "src/constants"

const InputStyle = { paddingTop: "10px", paddingBottom: "10px" }

export default () => {
  const [programOptions, setProgramOptions] = useState([])

  // Loading Courses
  useEffect(() => {
    axios.get(PROGRAMS_API).then(response => setProgramOptions(response.data))
  }, [])

  return (
    <>
      <FormTitle title={"Create A Course"} />
      <form name="Create A Course Form" method="POST">
        <input type="hidden" name="form-name" value="Create A Course Form" />
        <TextInput style={InputStyle} label="Name" />
        <SelectInput style={InputStyle} label="Program" type="select">
          {GenerateOptions(programOptions)}
        </SelectInput>
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
}
