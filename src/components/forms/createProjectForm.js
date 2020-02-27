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

export default () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiSponsors {
        nodes {
          id
          Name
        }
      }
      allStrapiCourse {
        nodes {
          id
          Name
        }
      }
    }
  `)

  return (
    <>
      <FormTitle title={"Create A Project"} />
      <form name="Contact Form" method="POST">
        <input type="hidden" name="form-name" value="Create Project Form" />
        <TextInput label="Project Name" type="text" />
        <SelectInput label="Select Course">
          {GenerateOptions(data.allStrapiCourse.nodes)}
        </SelectInput>
        <SelectInput label="Select Sponsor">
          {GenerateOptions(data.allStrapiSponsors.nodes)}
        </SelectInput>
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
