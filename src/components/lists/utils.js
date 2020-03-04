import React from "react"
import { MdEdit, MdDeleteForever } from "react-icons/md"
import { Edit, IconTd, TableData, Delete, TableHeader } from "./styles"

/**
 * Code provided by Alnitak on StackOverflow
 * Link: https://stackoverflow.com/questions/6491463/accessing-nested-javascript-objects-with-string-key
 *
 * Descripiption: Most other libraries for accessing deeply nested properties
 * of an object don't work with bracket syntax. This one does work with bracket
 * syntax.
 */
Object.byString = function(o, s) {
  s = s.replace(/\[(\w+)\]/g, ".$1") // convert indexes to properties
  s = s.replace(/^\./, "") // strip a leading dot
  var a = s.split(".")
  for (var i = 0, n = a.length; i < n; ++i) {
    var k = a[i]
    if (k in o) {
      o = o[k]
    } else {
      return
    }
  }
  return o
}

export const GenerateTableRows = (nodes, fields) => {
  return nodes.map(node => (
    <tr key={node.id}>
      {fields.map((field, index) => {
        return <TableData key={index}>{Object.byString(node, field)}</TableData>
      })}
      <IconTd>
        <div align="right">
          <Edit>
            <MdEdit color="white" />
          </Edit>
          <Delete>
            <MdDeleteForever color="white" />
          </Delete>
        </div>
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
      <TableHeader style={{ textAlign: "right" }}>Actions</TableHeader>
    </tr>
  )
}
