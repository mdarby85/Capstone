/**
 * author: Mario Arturo Lopez Martinez
 * file: createProjectForm.js
 *
 * Description: @TODO
 */

import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Button from "components/btn"
import FormTitle from "components/formTitle"
import TextInput from "components/input/textInput"
import SelectInput from "components/input/selectInput"
import { GenerateOptions } from "src/utils"

const InputStyle = { paddingTop: "10px", paddingBottom: "10px" }

export default () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiProgram {
        nodes {
          id
          Name
        }
      }
    }
  `)

  return (
    <>
      <FormTitle title={"Create A Course"} />
      <form name="Create A Course Form" method="POST">
        <input type="hidden" name="form-name" value="Create A Course Form" />
        <TextInput style={InputStyle} label="Name" />
        <SelectInput style={InputStyle} label="Program" type="select">
          {GenerateOptions(data.allStrapiProgram.nodes)}
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
