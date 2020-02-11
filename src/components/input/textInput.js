/**
 * author: Mario Arturo Lopez Martinez
 * file: textInput.js
 *
 * Description:
 * Text input field to be used as for any sort of form submission.
 *
 * Prop Usage:
 * label -
 * placeholder -
 * type -
 *
 * Example usage:
 * <TeamCard ImgSrc={image} Name={"Chris Holle"} Department={"Baylor Computer Science"}
 *              Role={"Full-Stack Development"}/>
 */

import React from "react"
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap"

const InputStyle = {
  borderRadius: "0",
  borderColor: "rgb(85,199,177)",
}

const InputGroupTextStyle = {
  color: "white",
  background: "rgb(58,148,131)",
  borderRadius: "0",
}

const LabelStyle = {
  textAlign: "center",
  minWidth: "150px",
}

const InputGroupStyle = {
  padding: "10px",
}

export default ({ label, placeholder, type, ...props }) => (
  <InputGroup size={props.size} style={InputGroupStyle}>
    <InputGroupAddon addonType="prepend">
      <InputGroupText style={InputGroupTextStyle}>
        <div style={LabelStyle}>{label}</div>
      </InputGroupText>
    </InputGroupAddon>
    <Input style={InputStyle} type={type} placeholder={placeholder}></Input>
  </InputGroup>
)
