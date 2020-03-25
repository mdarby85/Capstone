/**
 * @name CreateSponsorForm
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
import { SPONSORS_API } from "src/constants"

const InputStyle = { paddingTop: "10px", paddingBottom: "10px" }

export default () => {
  const [sponsorOptions, setSponsorOptions] = useState([])

  useEffect(() => {
    axios.get(SPONSORS_API).then(response => setSponsorOptions(response.data))
  }, [])

  return (
    <>
      <FormTitle title={"Create A Sponsor Account"} />
      <form name="Contact Form" method="POST">
        <input type="hidden" name="form-name" value="Create Project Form" />
        <TextInput style={InputStyle} label="Name" type="text" />
        <TextInput style={InputStyle} label="Email" type="email" />
        <SelectInput style={InputStyle} label="Sponsor">
          {GenerateOptions(sponsorOptions)}
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
