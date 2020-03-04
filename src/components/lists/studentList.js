/**
 * Author: Mario Arturo Lopez Martinez
 */

import React from "react"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"

import { GenerateTableHeaders, GenerateTableRows } from "components/lists/utils"
import { StyledTable } from "./styles"

const STUDENT_QUERY = gql`
  {
    users(where: { roleLabel: "student" }) {
      id
      name
      email
    }
  }
`

export default () => {
  const { loading, error, data } = useQuery(STUDENT_QUERY)

  return (
    <div>
      <StyledTable>
        <thead>{GenerateTableHeaders(["Name", "Email"])}</thead>
        {loading && <p>Loading...</p>}
        {error && <p>Error: ${error.message}</p>}
        {data && (
          <tbody>{GenerateTableRows(data.users, ["name", "email"])}</tbody>
        )}
      </StyledTable>
    </div>
  )
}
