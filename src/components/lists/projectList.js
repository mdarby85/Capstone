/**
 * @author Mario Arturo Lopez Martinez
 */

import React from "react"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"

import { GenerateProjectCards } from "utils/componentGeneration"

const PROJECT_QUERY = gql`
  {
    projects {
      id
      name
      description
      thumbnail {
        url
      }
      course {
        semester
        year
      }
    }
  }
`

export default () => {
  const { data, loading, error } = useQuery(PROJECT_QUERY)

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
      {data && GenerateProjectCards(data.projects)}
    </div>
  )
}
