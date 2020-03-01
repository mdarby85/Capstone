/**
 * @TODO
 */

import React, { useState, useEffect } from "react"
import axios from "axios"
import styled from "styled-components"

import { USERS_API } from "src/constants"
import { GenerateTableHeaders, GenerateTableRows } from "src/utils"

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

const StyledHeaderTable = styled.table`
  margin-bottom: 5px;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);

  width: 88%;
  font-family: Georgia, serif;
  font-size: 18px;
`

export default () => {
  const [students, setStudents] = useState([])

  async function fetchProfessors() {
    axios.get(USERS_API).then(response => {
      setStudents(response.data)
      console.log(response.data)
    })
  }

  useEffect(() => {
    fetchProfessors()
  }, [])

  return (
    <div style={{ paddingBottom: "3vh" }}>
      <StyledHeaderTable flex>
        <thead>
          {GenerateTableHeaders(["Name", "Department", "Email", "Actions"])}
        </thead>
      </StyledHeaderTable>
      <StyledTable>
        <tbody>
          {GenerateTableRows(students, ["Name", "department", "email"])}
        </tbody>
      </StyledTable>
    </div>
  )
}
