/**
 * author: Mario Arturo Lopez Martinez
 * file: numberInput.js
 *
 * Description:
 * Number input field to be used in input/form group.
 *
 * Prop Usage:
 * label      - Label for checkbox input field
 * size       - Size of input group (including Label and Input)
 * onChange   - onChange handler function
 *
 * Example usage:
 * <NumberInput style={InputStyle} label="Number of Students" onChange={setCount} />
 */

import React from "react"
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap"

export default ({ label, ...props }) => {
  const InputStyle = {
    WebkitAppearance: "none",
    MozAppearance: "none",
    borderRadius: props.rounded ? "10px 0 0 10px" : "0",
    borderColor: "rgb(85,199,177)",
    padding: ".5em",
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
    <InputGroup size={props.size}>
      <InputGroupAddon addonType="prepend">
        <InputGroupText style={InputGroupTextStyle}>
          <div style={LabelStyle}>{label}</div>
        </InputGroupText>
      </InputGroupAddon>
      <Input
        style={InputStyle}
        type="number"
        name="number"
        {...props}
        onChange={e => props.onChange(e.target.value)}
      />
    </InputGroup>
  )
}
