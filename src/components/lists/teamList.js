/**
 * @TODO Make this
 */

import React, { useState, useEffect } from "react"
import axios from "axios"

import { TEAMS_API } from "src/constants"
import { GenerateTeamCards } from "src/utils"

export default () => {
  const [teams, setTeams] = useState([])

  async function fetchCourses() {
    axios.get(TEAMS_API).then(response => {
      setTeams(response.data)
    })
  }

  useEffect(() => {
    fetchCourses()
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
      {GenerateTeamCards(teams)}
    </div>
  )
}
