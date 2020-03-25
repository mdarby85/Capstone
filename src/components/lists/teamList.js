/**
 * @author Mario Arturo Lopez Martinez
 */

import React from "react"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"

import { GenerateTeamCards } from "utils/componentGeneration"

const TEAM_QUERY = gql`
  {
    teams {
      id
      name
      project {
        name
        course {
          semester
          year
        }
      }
    }
  }
`

export default () => {
  const { loading, error, data } = useQuery(TEAM_QUERY)

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
      {loading && <p>Loading...</p>}
      {error && <p>Error: ${error.message}</p>}
      {data && GenerateTeamCards(data.teams)}
    </div>
  )
}
