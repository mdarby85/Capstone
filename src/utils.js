import React from "react"
import { MdEdit, MdDeleteForever } from "react-icons/md"

import CheckboxInput from "components/input/checkboxInput"
import CourseCard from "components/cards/courseCard"
import ProjectCard from "components/cards/projectCard"
import TeamCard from "components/cards/teamCard"
import DisplayCard from "components/cards/displayCard"
import {
  Edit,
  IconTd,
  TableData,
  Delete,
  TableHeader,
} from "components/styledComponents"

/** Utitlity Functions */

/**
 * @author Alnitak on StackOverflow
 * @see https://stackoverflow.com/questions/6491463/accessing-nested-javascript-objects-with-string-key
 * @param {object} o multi-level object you want to access
 * @param {string} s dot notation string used to access object
 * @description Most other libraries for accessing deeply nested properties
 * of an object don't work with bracket syntax. This one does work with bracket
 * syntax.
 * @example Object.byString(node, "sponsor.name") => node[sponsor][name]
 */
const objectByString = (o, s) => {
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

/** Programmatically Generate Component */

/**
 * @author Mario Arturo Lopez Martinez (CSI 43C9 Spring 2020)
 * @param {object[]} nodes Collection of objects containing data we'd like to display
 * @description @TODO
 */
export const GenerateOptions = nodes => {
  return nodes.map(node => (
    <option key={node.id} value={node.Name}>
      {node.Name}
    </option>
  ))
}

/**
 * @author Mario Arturo Lopez Martinez (CSI 43C9 Spring 2020)
 * @param {object[]} nodes Collection of objects containing data we'd like to display
 * @description @TODO
 */
export const GenerateCheckboxes = nodes => {
  return nodes.map(node => (
    <CheckboxInput key={node.id} id={node.id} label={node.Name} />
  ))
}

/**
 * @author Mario Arturo Lopez Martinez (CSI 43C9 Spring 2020)
 * @param {object[]} nodes Collection of objects containing data we'd like to display
 * @description @TODO
 */
export const GenerateCourseCards = nodes => {
  const CardMargin = { margin: "10px" }
  return nodes.map(node => (
    <div key={node.id} style={CardMargin}>
      <CourseCard
        name={node.name}
        semester={node.semester}
        active={node.active}
      />
    </div>
  ))
}

/**
 * @author Mario Arturo Lopez Martinez (CSI 43C9 Spring 2020)
 * @param {object[]} nodes Collection of objects containing data we'd like to display
 * @description @TODO
 */
export const GenerateTeamCards = nodes => {
  const CardMargin = { margin: "10px" }
  return nodes.map(node => {
    console.log(node)
    return (
      <div key={node.id} style={CardMargin}>
        <TeamCard
          projectName={node.project.name}
          semester={node.project.course.semester}
          year={node.project.course.year}
          teamName={node.name}
        />
      </div>
    )
  })
}

/**
 * @author Mario Arturo Lopez Martinez (CSI 43C9 Spring 2020)
 * @param {object[]} nodes Collection of objects containing data we'd like to display
 * @description @TODO
 */
export const GenerateProjectCards = nodes => {
  return nodes.map(node => (
    <div
      key={node.id}
      style={{
        margin: "10px",
      }}
    >
      <DisplayCard
        Name={node.name}
        Semester={`${node.course.semester} ${node.course.year}`}
        Description={node.description}
      />
    </div>
  ))
}

/**
 * @author Mario Arturo Lopez Martinez (CSI 43C9 Spring 2020)
 * @param {string[]} fields Collection of labels we'd like to display as our th's
 * @description Pass in a set of strings that will be used to generate a set of
 * HTML th's.
 */
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

/**
 * @author Mario Arturo Lopez Martinez (CSI 43C9 Spring 2020)
 * @param {object[]} nodes Collection of objects containing data we'd like to display
 * @param {string[]} fields Collection of fields we'd like to get from our nodes
 * @description Pass in a set of objects you'd like to map to a set HTML tr's.
 * We will destructure the object using the fields you provided.
 */
export const GenerateTableRows = (nodes, fields) => {
  return nodes.map(node => (
    <tr key={node.id}>
      {fields.map((field, index) => {
        if (field.includes("."))
          return (
            <TableData key={index}>{objectByString(node, field)}</TableData>
          )
        else return <TableData key={index}>{node[field]}</TableData>
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
