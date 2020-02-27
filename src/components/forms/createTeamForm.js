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
import { GenerateCheckboxes, GenerateOptions } from "src/utils"

export default () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiCourse {
        nodes {
          id
          Name
        }
      }
      allStrapiProject {
        nodes {
          id
          Name
        }
      }
      allStrapiUser {
        nodes {
          id
          Name
        }
      }
    }
  `)

  return (
    <>
      <FormTitle title={"Create A Team"} />
      <form name="Create A Form" method="POST">
        <input type="hidden" name="form-name" value="Create Project Form" />
        <TextInput label="Team Name" />
        <SelectInput label="Course">
          {GenerateOptions(data.allStrapiCourse.nodes)}
        </SelectInput>
        <SelectInput label="Project">
          {GenerateOptions(data.allStrapiProject.nodes)}
        </SelectInput>
        {GenerateCheckboxes(data.allStrapiUser.nodes)}
        <Button type="submit" tag={Link}>
          Submit
        </Button>
      </form>
    </>
  )
}
