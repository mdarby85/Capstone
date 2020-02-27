/**
 * author: Mario Arturo Lopez Martinez
 * file: textInput.js
 *
 * Description:
 * Text input field to be used in input/form group.
 *
 * Prop Usage:
 * size: String(sm/md/lg)             - Size of input label/input field
 * label: String                      - Label attached to input field
 * type: String(email/password/text)  - Associates input validation and styles with given type
 * placeholder: String                - Placeholder visibile when input field is empty
 *
 * Example usage:
 * <TextInput size="lg" label="Name" type="email" placeholder="Test@Email.com" />
 */

import React from "react"
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap"

export default ({ label, placeholder, type, ...props }) => {
  const InputStyle = {
    borderColor: "rgb(85,199,177)",
    borderRadius: props.rounded ? "0 10px 10px 0" : "0",
  }

  const InputGroupTextStyle = {
    color: "white",
    background: "rgb(85,199,177)",
    borderRadius: props.rounded ? "10px 0 0 10px" : "0",
  }

  const LabelStyle = {
    textAlign: "center",
    minWidth: props.size === "sm" ? "4em" : props.size === "md" ? "6em" : "8em",
  }

  return (
    <InputGroup size={props.size} {...props}>
      <InputGroupAddon addonType="prepend">
        <InputGroupText style={InputGroupTextStyle}>
          <div style={LabelStyle}>{label}</div>
        </InputGroupText>
      </InputGroupAddon>
      <Input style={InputStyle} type={type} placeholder={placeholder}></Input>
    </InputGroup>
  )
}
