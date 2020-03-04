/**
 * Author: Mario Arturo Lopez Martinez
 */

import React from "react"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"

import { GenerateCourseCards } from "src/utils"

const COURSE_QUERY = gql`
  {
    courses {
      id
      Name
    }
  }
`

export default () => {
  const { loading, error, data } = useQuery(COURSE_QUERY)

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
      {data && data.courses && GenerateCourseCards(data.courses)}
    </div>
  )
}
