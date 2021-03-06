/**
 * @name componentGeneration.js
 * @author Mario Arturo Lopez Martinez
 * @overview Utility functions for generating components programmatically
 */

import React from "react"
import { MdEdit, MdDeleteForever } from "react-icons/md"
import { STATIC_API_URL } from "src/constants"

import TeamCard from "components/cards/teamCard"
import CourseCard from "components/cards/courseCard"
import ProjectCard from "components/cards/projectCard"
import CheckboxInput from "components/input/checkboxInput"
import TeamMemberCard from "components/cards/teamMemberCard"
import image from "assets/images/gatsby-icon.png"

import {
  Edit,
  IconTd,
  TableData,
  Delete,
  TableHeader,
} from "components/styledComponents"

import { objectByString } from "utils/functions"

/**
 * @author Mario Arturo Lopez Martinez (CSI 43C9 Spring 2020)
 * @param {object[]} nodes Collection of objects containing data we'd like to display
 * @description @TODO
 */
export const GenerateOptions = (nodes, value, label) => {
  return nodes.map(node => (
    <option key={node.id} value={node[value]}>
      {node[label]}
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
        number={node.number}
        semester={node.semester}
        active={node.active}
        prefix={node.prefix}
        year={node.year}
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
    return (
      <div key={node.id} style={CardMargin}>
        <TeamCard
          id={node.id}
          projectName={
            node.project && node.project.name !== null
              ? node.project.name
              : "Unassigned"
          }
          semester={
            node.project && node.project.course.semester !== null
              ? node.project.semester
              : ""
          }
          year={
            node.project && node.project.course.year !== null
              ? node.project.year
              : ""
          }
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
  console.log(nodes)
  return nodes.map(node => (
    <div
      key={node.id}
      style={{
        margin: "10px",
      }}
    >
      <ProjectCard
        editable={false}
        imgSrc={
          node.thumbnail
            ? `${STATIC_API_URL}${node.thumbnail.childImageSharp.fluid.src}`
            : ""
        }
        name={node.name}
        teamName={node.team.name}
        to={`${STATIC_API_URL}/projects/view/${node.id}`}
        semester={
          node.course ? `${node.course.semester} ${node.course.year}` : "Null"
        }
        description={node.description}
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

export const GenerateTeamMemberCards = (nodes, fields) => {
  return nodes.map((node, index) => (
    <TeamMemberCard
      key={index}
      imgSrc={image}
      name="Chris Holle"
      department="Baylor Computer Science"
      role="Full-Stack Development"
    />
  ))
}
