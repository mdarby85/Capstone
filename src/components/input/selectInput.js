/**
 * author: Mario Arturo Lopez Martinez
 * file: selectInput.js
 *
 * Description:
 * Select input field to be used in input/form group.
 *
 * Prop Usage:
 * size: String (sm/md/lg)    - Size of input label/input field
 * label: String              - Label attached to input field
 * multiple: Boolean          - Allows multiple selected options (only sequential)
 * children                   - Options supplied to selector
 *
 * Example usage:
 * <SelectInput label="Sponsor"> {GenerateOptions(data.allStrapiSponsors.nodes)} </SelectInput>
 */

import React from "react"
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap"

export default ({ children, label, type, ...props }) => {
  const InputStyle = {
    WebkitAppearance: "none",
    MozAppearance: "none",
    borderRadius: props.rounded ? "0 10px 10px 0" : "0",
    borderColor: "rgb(85,199,177)",
    backgroundPosition: "right 50%",
    backgroundRepeat: "no-repeat",
    // This mess is pulling an svg arrow to indicate our input is a select
    backgroundImage:
      'url(\'data:image/svg+xml;utf8,<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" version="1"><path d="M4 8L0 4h8z"/></svg>\')',
    padding: ".5em",
    paddingRight: "1.5em",
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
      <Input type="select" style={InputStyle} multiple={props.multiple}>
        {children}
      </Input>
    </InputGroup>
  )
}
