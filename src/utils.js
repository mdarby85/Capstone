import React from "react"
import CheckboxInput from "components/input/checkboxInput"

export const GenerateOptions = nodes => {
  return nodes.map(node => (
    <option key={node.id} value={node.Name}>
      {node.Name}
    </option>
  ))
}

export const GenerateCheckboxes = nodes => {
  return nodes.map(node => (
    <CheckboxInput key={node.id} id={node.id} label={node.Name} />
  ))
}
