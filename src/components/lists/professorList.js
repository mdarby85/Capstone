/**
 * Author: Mario Arturo Lopez
 */

import React from "react"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"

import { GenerateTableHeaders, GenerateTableRows } from "./utils"
import { StyledTable } from "./styles"

const PROFESSOR_QUERY = gql`
  {
    users(where: { roleLabel: "professor" }) {
      id
      name
      email
      departmentLabel
    }
  }
`

export default () => {
  const { loading, error, data } = useQuery(PROFESSOR_QUERY)

  return (
    <div style={{ paddingBottom: "3vh" }}>
      <StyledTable>
        <thead>{GenerateTableHeaders(["Name", "Department", "Email"])}</thead>
        {loading && <p>Loading...</p>}
        {error && <p>Error: ${error.message}</p>}
        {data && (
          <tbody>
            {GenerateTableRows(data.users, [
              "name",
              "departmentLabel",
              "email",
            ])}
          </tbody>
        )}
      </StyledTable>
    </div>
  )
}
