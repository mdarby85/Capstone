/**
 * @TODO Make this
 */

import React, { useState, useEffect } from "react"
import axios from "axios"

import { PROJECTS_API } from "src/constants"
import { GenerateProjectCards } from "src/utils"

export default () => {
  const [projects, setProjects] = useState([])

  async function fetchProjects() {
    axios.get(PROJECTS_API).then(response => {
      setProjects(response.data)
      console.log(response.data)
    })
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        height: "auto",
        paddingBottom: "3vh",
      }}
    >
      {GenerateProjectCards(projects)}
    </div>
  )
}
