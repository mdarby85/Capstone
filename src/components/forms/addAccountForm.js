/**
 * @name AddAccountForm
 *
 * @author Mario Arturo Lopez Martinez  (CSI 43C0 Spring 2020)
 *
 * @overview @TODO
 */

import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "gatsby"
import { Tooltip } from "reactstrap"
import { MdInfoOutline } from "react-icons/md"

import Button from "components/btn"
import FormTitle from "components/titles/formTitle"
import TextInput from "components/input/textInput"
import SelectInput from "components/input/selectInput"
import NumberInput from "components/input/numberInput"
import { COURSES_API } from "src/constants"
import { GenerateOptions } from "utils/componentGeneration"

const InputStyle = { paddingTop: "10px", paddingBottom: "10px" }

export default () => {
  const [tooltipOpen, setTooltipOpen] = useState(false)
  const [courseOptions, setCourseOptions] = useState([])
  const [count, setCount] = useState(0)

  useEffect(() => {
    axios.get(COURSES_API).then(response => setCourseOptions(response.data))
  }, [])

  const toggle = () => setTooltipOpen(!tooltipOpen)

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
          {GenerateOptions(courseOptions)}
        </SelectInput>
        <Button medium>Upload Accounts</Button>
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
        &nbsp;Or&nbsp;
        <Button medium>Manual Entry</Button>
        <br />
        <br />
        <NumberInput
          style={InputStyle}
          label="Number of Students"
          onChange={setCount}
        />
        {studentInputFields(count)}
        <br />
        <Button
          onClick={e => {
            e.preventDefault()
            setCount(count + 1)
          }}
          medium
        >
          Add Student
        </Button>
        <br />
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
