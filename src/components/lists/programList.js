/**
 * Author: Mario Arturo Lopez Martinez
 */

import React from "react"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"

import { GenerateTableHeaders, GenerateTableRows } from "components/lists/utils"
import { StyledTable } from "./styles"

const PROGRAM_QUERY = gql`
  {
    programs {
      id
      name
    }
  }
`

export default () => {
  const { loading, error, data } = useQuery(PROGRAM_QUERY)

  return (
    <div>
      <StyledTable>
        <thead>{GenerateTableHeaders(["Program Name"])}</thead>
        {loading && <p>Loading...</p>}
        {error && <p>Error: ${error.message}</p>}
        {data && <tbody>{GenerateTableRows(programs, ["name"])}</tbody>}
      </StyledTable>
    </div>
  )
}
