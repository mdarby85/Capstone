/**
 * Author: Mario Arturo Lopez
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
import { StyledTable, Section } from "components/styledComponents"
import { PROFESSOR_QUERY } from "../../data/queries";

export default () => {
  const { loading, error, data } = useQuery(PROFESSOR_QUERY);

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
