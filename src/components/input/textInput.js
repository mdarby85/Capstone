/**
 * @name TextInput
 *
 * @author Mario Arturo Lopez Martinez
 *
 * @overview Text input field to be used in input/form group.
 *
 * @param {string(sm/md/lg)} size size of input label/input field
 * @param {string} label label attached to input field
 * @param {string} type associates input validation and styles with given type
 * @param {string} placeholder placeholder visibile when input field is empty
 *
 * @example
 *
 * <TextInput
 *    size="lg"
 *    label="Name"
 *    type="email"
 *    placeholder="Test@Email.com"
 * />
 *
 */

import React from "react"
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap"

export default ({ label, placeholder, type, value, onChange, ...props }) => {
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
    minWidth: props.size === "sm" ? "4em" : props.size === "lg" ? "8em" : "6em",
  }

  return (
    <InputGroup size={props.size} {...props}>
      <InputGroupAddon addonType="prepend">
        <InputGroupText style={InputGroupTextStyle}>
          <div style={LabelStyle}>{label}</div>
        </InputGroupText>
      </InputGroupAddon>
      <Input style={InputStyle} type={type} placeholder={placeholder} value={value} onChange={onChange}></Input>
    </InputGroup>
  )
}
