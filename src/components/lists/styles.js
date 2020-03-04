import styled from "styled-components"

export const Edit = styled.div`
  background-color: orange;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  line-height: 30px;
  width: 3vh;
  height: 3vh;
  margin-right: 5px;
  border-radius: 3px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`

export const Delete = styled.div`
  background-color: red;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  line-height: 30px;
  width: 3vh;
  height: 3vh;
  border-radius: 3px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`

export const IconTd = styled.td`
  padding: 10px;
  border: solid rgb(225, 225, 225);
  border-width: 1px 0 0 0;
  border-collapse: collapse;
`

export const TableData = styled.td`
  padding: 10px;
  border: solid rgb(225, 225, 225);
  border-width: 1px 0 0 0;
  border-collapse: collapse;
`

export const TableHeader = styled.th`
  padding: 10px;
  border: solid rgb(225, 225, 225);
  border-width: 0 0 1px 0;
`

export const StyledTable = styled.table`
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
  width: 88%;
  font-family: Georgia, serif;
  font-size: 18px;
  padding-bottom: 3rem;

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
