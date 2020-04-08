/**
 * @name CheckboxInput
 *
 * @author Mario Arturo Lopez Martinez
 *
 * @overview Checkbox input field to be used in input/form group.
 *
 * @param {string} label label for checkbox input field
 * @param {string} id identification code associated with input field
 *
 * @example <CheckboxInput id="123" label="Bob" />
 */

import React from "react"
import { FormGroup, Label, Input } from "reactstrap"

export default ({ label, id, ...props }) => (
  <FormGroup check>
    <Label check for={id}>
      <Input type="checkbox" id={id} {...props} />
      {label}
    </Label>
  </FormGroup>
)
