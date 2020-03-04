import React from "react"
import { MdEdit, MdDeleteForever } from "react-icons/md"
import { Edit, IconTd, TableData, Delete, TableHeader } from "./styles"

export const GenerateTableRows = (nodes, fields) => {
  return nodes.map(node => (
    <tr key={node.id}>
      {fields.map((field, index) => (
        <TableData key={index}>{node[field]}</TableData>
      ))}
      <IconTd align="right">
        <Edit>
          <MdEdit color="white" />
        </Edit>
        <Delete>
          <MdDeleteForever color="white" />
        </Delete>
      </IconTd>
    </tr>
  ))
}

export const GenerateTableHeaders = fields => {
  return (
    <tr>
      {fields.map((field, index) => (
        <TableHeader key={index}>{field}</TableHeader>
      ))}
    </tr>
  )
}
