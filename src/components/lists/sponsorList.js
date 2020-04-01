/**
 * Author: Mario Arturo Lopez Martinez
 * @author: Chris Holle
 *
 * @TODO: Add edit/delete
 */

import React from "react"
import { useQuery } from "@apollo/react-hooks"

import {
  GenerateTableHeaders,
  GenerateTableRows,
} from "utils/componentGeneration"
import { StyledTable } from "components/styledComponents"
import { SPONSOR_QUERY } from "../../data/queries";


export default () => {
  const { loading, error, data } = useQuery(SPONSOR_QUERY);
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
