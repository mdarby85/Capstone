import React from "react"
import CheckboxInput from "components/input/checkboxInput"

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
