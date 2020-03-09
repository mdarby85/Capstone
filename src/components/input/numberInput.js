/**
 * @name NumberInput
 *
 * @author Mario Arturo Lopez Martinez
 *
 * @overview Number input field to be used in input/form group.
 *
 * @param {string} label label for checkbox input field
 * @param {string} size size of input group (including Label and Input)
 * @param {Function} onChange onChange handler function
 *
 * @example
 *
 * <NumberInput
 *    style={InputStyle}
 *    label="Number of Students"
 *    onChange={setCount}
 * />
 *
 */

import React from "react"
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap"
import styled from "styled-components"

const StyledInput = styled(Input)`
  -moz-appearance: none;
  -webkit-appearance: none;
  border-radius: ${props => (props.rounded ? "10px" : "0")}
  border-color: rgb(85,199,177);
  padding: .5em;
`

const Label = styled.div`
  text-align: center;
  min-width: ${props =>
    props.size === "sm" ? "4em" : props.size === "lg" ? "8em" : "6em"};
`

const StyledInputGroupText = styled(InputGroupText)`
  color: white;
  background: rgb(85, 199, 177);
  border-radius: ${props => (props.rounded ? "10px 0 0 10px" : "0")};
`

export default ({ label, ...props }) => (
  <InputGroup size={props.size}>
    <InputGroupAddon addonType="prepend">
      <StyledInputGroupText {...props}>
        <Label {...props}>{label}</Label>
      </StyledInputGroupText>
    </InputGroupAddon>
    <StyledInput
      type="number"
      name="number"
      {...props}
      onChange={e => props.onChange(e.target.value)}
    />
  </InputGroup>
)
