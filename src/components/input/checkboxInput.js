/**
 * author: Mario Arturo Lopez Martinez
 * file: checkboxInput.js
 *
 * Description:
 * Checkbox input field to be used in input/form group.
 *
 * Prop Usage:
 * label  - Label for checkbox input field
 * id     - Identification code associated with input field
 *
 * Example usage:
 * <CheckboxInput id="123" label="Bob" />
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
