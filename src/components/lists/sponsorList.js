/**
 * Author: Mario Arturo Lopez Martinez
 */

import React from "react"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"

import { GenerateTableHeaders, GenerateTableRows } from "src/utils"
import { StyledTable } from "components/styledComponents"

const SPONSOR_QUERY = gql`
  {
    users(where: { roleLabel: "sponsorContact" }) {
      id
      name
      email
      sponsor {
        name
      }
    }
  }
`

export default () => {
  const { loading, error, data } = useQuery(SPONSOR_QUERY)
  return (
    <div style={{ paddingBottom: "3vh" }}>
      <StyledTable>
        <thead>{GenerateTableHeaders(["Name", "Sponsor", "Email"])}</thead>
        {loading && <tr>Loading...</tr>}
        {error && <tr>Error: ${error.message}</tr>}
        {data && (
          <tbody>
            {GenerateTableRows(data.users, ["name", "sponsor.name", "email"])}
          </tbody>
        )}
      </StyledTable>
    </div>
  )
}
