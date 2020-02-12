/**
 * author: Mario Arturo Lopez Martinez
 * file: selectInput.js
 *
 * Description: @TODO
 *
 * Prop Usage: @TODO
 *
 * Example usage: @TODO
 */

import React from "react"
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap"

const InputStyle = {
  WebkitAppearance: "none",
  MozAppearance: "none",
  borderRadius: "0",
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
  background: "rgb(58,148,131)",
  borderRadius: "0",
}

const LabelStyle = {
  textAlign: "center",
  minWidth: "7vw",
}

const InputGroupStyle = {
  padding: "10px",
}

export default ({ label, type, ...props }) => (
  <InputGroup size={props.size} style={InputGroupStyle}>
    <InputGroupAddon addonType="prepend">
      <InputGroupText style={InputGroupTextStyle}>
        <div style={LabelStyle}>{label}</div>
      </InputGroupText>
    </InputGroupAddon>
    <Input
      type={type}
      style={InputStyle}
      name="select"
      multiple={props.multiple}
    >
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Input>
  </InputGroup>
)
