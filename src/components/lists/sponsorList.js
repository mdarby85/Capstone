/**
 * @TODO
 */

import React from "react"
import gql from "graphql-tag"
import styled from "styled-components"
import { useQuery } from "@apollo/react-hooks"

import { GenerateTableHeaders, GenerateTableRows } from "components/lists/utils"

const StyledTable = styled.table`
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);

  width: 88%;
  font-family: Georgia, serif;
  font-size: 18px;

  & tbody > tr:hover {
    color: white;
    background-color: #006a52;
  }

  & tbody > tr:first-child > td {
    padding: 10px;
    padding-left: 10px;
    border-width: 0;
  }
`

const SPONSOR_QUERY = gql`
  {
    users(where: { roleLabel: "sponsor" }) {
      id
      name
      email
      departmentLabel
    }
  }
`

export default () => {
  const { loading, error, data } = useQuery(SPONSOR_QUERY)
  return (
    <div style={{ paddingBottom: "3vh" }}>
      <StyledTable>
        <thead>{GenerateTableHeaders(["Name", "Email", "Actions"])}</thead>
        {loading && <p>Loading...</p>}
        {error && <p>Error: ${error.message}</p>}
        {data && (
          <tbody>{GenerateTableRows(data.users, ["name", "email"])}</tbody>
        )}
      </StyledTable>
    </div>
  )
}
