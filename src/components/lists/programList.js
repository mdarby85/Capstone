/**
 * @TODO
 */

import React, { useState, useEffect } from "react"
import axios from "axios"
import styled from "styled-components"

import { PROGRAMS_API } from "src/constants"
import { GenerateTableHeaders, GenerateTableRows } from "src/utils"

const StyledTable = styled.table`
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);

  width: 50vw;
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

const StyledHeaderTable = styled.table`
  margin-bottom: 5px;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);

  width: 50vw;
  font-family: Georgia, serif;
  font-size: 18px;
`

export default () => {
  const [programs, setPrograms] = useState([])

  async function fetchPrograms() {
    axios.get(PROGRAMS_API).then(response => setPrograms(response.data))
  }

  useEffect(() => {
    fetchPrograms()
  }, [])

  return (
    <div style={{ paddingBottom: "3vh" }}>
      <StyledHeaderTable>
        <thead>{GenerateTableHeaders(["Program Name"])}</thead>
      </StyledHeaderTable>
      <StyledTable>
        <tbody>{GenerateTableRows(programs, ["Name"])}</tbody>
      </StyledTable>
    </div>
  )
}
