/**
 * author: Mario Arturo Lopez Martinez
 * file: createProjectForm.js
 *
 * Description: @TODO
 */

import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { MdInfoOutline } from "react-icons/md"
import { Tooltip } from "reactstrap"

import Button from "components/btn"
import FormTitle from "components/formTitle"
import TextInput from "components/input/textInput"
import SelectInput from "components/input/selectInput"
import NumberInput from "components/input/numberInput"
import { GenerateOptions } from "src/utils"

export default () => {
  const [tooltipOpen, setTooltipOpen] = useState(false)
  const [count, setCount] = useState(0)
  const toggle = () => setTooltipOpen(!tooltipOpen)

  const InputStyle = { paddingTop: "10px", paddingBottom: "10px" }

  const data = useStaticQuery(graphql`
    {
      allStrapiCourse {
        nodes {
          id
          Name
        }
      }
    }
  `)

  const studentInputFields = count => {
    let fields = []
    for (let i = 0; i < count; i++) {
      fields.push(
        <span style={InputStyle}>
          <TextInput type="text" label={"Name " + i} />
          <TextInput type="email" label={"Email " + i} />
        </span>
      )
    }

    return <>{fields}</>
  }

  return (
    <>
      <FormTitle title={"Add Student Accounts"} />
      <form name="Contact Form" method="POST">
        <input type="hidden" name="form-name" value="Add Account Form" />
        <SelectInput style={InputStyle} label="Course">
          {GenerateOptions(data.allStrapiCourse.nodes)}
        </SelectInput>
        <Button>Upload Accounts</Button>
        <MdInfoOutline id="TooltipExample" />
        <Tooltip
          style={{
            color: "black",
            backgroundColor: "white",
            padding: "1em",
          }}
          placement="auto"
          isOpen={tooltipOpen}
          target="TooltipExample"
          toggle={toggle}
        >
          <b>Please upload a .CSV file of the following format:</b>
          <br />
          <br />
          <b>Name,Email</b>
          <br />
          <br />
          <b>Example:</b>
          <br />
          <br />
          John Doe,John_Doe@baylor.edu
          <br />
          Susan Smith,Susan_Smith@baylor.edu
          <br />
          <br />
          <b>Students will be given a temporary password to sign in with.</b>
        </Tooltip>
        Or
        <Button style={{ margin: "auto" }}>Manual Entry</Button>
        <NumberInput
          style={InputStyle}
          label="Number of Students"
          onChange={setCount}
        />
        {studentInputFields(count)}
        <Button
          onClick={e => {
            e.preventDefault()
            setCount(count + 1)
          }}
        >
          Add Student
        </Button>
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
