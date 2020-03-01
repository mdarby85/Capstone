import React from "react"
import styled from "styled-components"
import CheckboxInput from "components/input/checkboxInput"
import { MdEdit, MdDeleteForever } from "react-icons/md"

import CourseCard from "components/cards/courseCard"
import ProjectCard from "components/cards/projectCard"
import DisplayCard from "components/cards/displayCard"

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

export const GenerateCourseCards = nodes => {
  return nodes.map(node => (
    <div
      key={node.id}
      style={{
        margin: "10px",
      }}
    >
      <CourseCard
        Name={node.Name}
        Semester={node.Semester}
        active={node.Active}
      />
    </div>
  ))
}

export const GenerateTeamCards = nodes => {
  console.log(nodes)
  return nodes.map(node => (
    <div
      key={node.id}
      style={{
        margin: "10px",
      }}
    >
      <ProjectCard
        projectName={node.Name}
        semester="Spring 2020"
        teamName={node.project.Name}
      />
    </div>
  ))
}

export const GenerateProjectCards = nodes => {
  return nodes.map(node => (
    <div
      key={node.id}
      style={{
        margin: "10px",
      }}
    >
      <DisplayCard
        Name={node.Name}
        Semester={`${node.course.Semester} ${node.course.Year}`}
        Description={node.Name}
      />
    </div>
  ))
}

const Edit = styled.div`
  background-color: orange;

  float: right;
  display: table-cell;
  text-align: center;
  vertical-align: middle;

  line-height: 30px;
  width: 3vh;
  height: 3vh;
  margin-right: 5px;

  border-radius: 3px;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`

const Delete = styled.div`
  background-color: red;

  float: right;
  display: table-cell;
  text-align: center;
  vertical-align: middle;

  line-height: 30px;
  width: 3vh;
  height: 3vh;
  margin-right: 5px;

  border-radius: 3px;
  transition: transform 0.1s;
  &:hover {
    transform: scale(1.1);
  }
`

const IconTd = styled.td`
  padding: 10px;
  border: solid rgb(225, 225, 225);
  border-width: 1px 0 0 0;
  border-collapse: collapse;
`

const TableData = styled.td`
  padding: 10px;
  border: solid rgb(225, 225, 225);
  border-width: 1px 0 0 0;
  border-collapse: collapse;
`

export const GenerateTableRows = (nodes, fields) => {
  return nodes.map(node => (
    <tr key={node.id}>
      {fields.map((field, index) => (
        <TableData key={index}>{node[field]}</TableData>
      ))}
      <IconTd align="right">
        <Delete>
          <MdDeleteForever color="white" />
        </Delete>
        <Edit>
          <MdEdit color="white" />
        </Edit>
      </IconTd>
    </tr>
  ))
}

const TableHeader = styled.td`
  padding: 10px;

  &:last-child {
    width: 10px;
  }
`

export const GenerateTableHeaders = fields => {
  return (
    <tr>
      {fields.map((field, index) => (
        <TableHeader align="right" key={index}>
          <strong key={index}>{field}</strong>
        </TableHeader>
      ))}
    </tr>
  )
}
