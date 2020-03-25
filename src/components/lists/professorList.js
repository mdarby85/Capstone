/**
 * Author: Mario Arturo Lopez
 */

import React from "react"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"

import { GenerateTableHeaders, GenerateTableRows } from "src/utils"
import { StyledTable, Section } from "components/styledComponents"

const PROFESSOR_QUERY = gql`
  {
    users(where: { roleLabel: "professor" }) {
      id
      name
      email
      department {
        name
      }
    }
  }
`

export default () => {
  const { loading, error, data } = useQuery(PROFESSOR_QUERY)

  return (
    <Section>
      {loading && <p>Loading...</p>}
      {error && <p>Error: ${error.message}</p>}
      {data && (
        <StyledTable>
          <thead>{GenerateTableHeaders(["Name", "Department", "Email"])}</thead>
          <tbody>
            {GenerateTableRows(data.users, [
              "name",
              "department.name",
              "email",
            ])}
          </tbody>
        </StyledTable>
      )}
    </Section>
  )
}
