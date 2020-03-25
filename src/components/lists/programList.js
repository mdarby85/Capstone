/**
 * Author: Mario Arturo Lopez Martinez
 */

import React from "react"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"

import {
  GenerateTableHeaders,
  GenerateTableRows,
} from "utils/componentGeneration"
import { StyledTable } from "components/styledComponents"

const PROGRAM_QUERY = gql`
  {
    programs {
      id
      name
    }
  }
`

const SectionStyle = { paddingBottom: "3em" }

export default () => {
  const { loading, error, data } = useQuery(PROGRAM_QUERY)

  return (
    <div style={SectionStyle}>
      {loading && <p>Loading...</p>}
      {error && <p>Error: ${error.message}</p>}
      {data && (
        <StyledTable>
          <thead>{GenerateTableHeaders(["Program Name"])}</thead>
          <tbody>{GenerateTableRows(data.programs, ["name"])}</tbody>
        </StyledTable>
      )}
    </div>
  )
}
