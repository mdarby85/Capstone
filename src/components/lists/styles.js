import styled from "styled-components"

export const Edit = styled.button`
  background-color: orange;
  transition: transform 0.2s;
  border: 0;

  border-radius: 5px;
  margin-right: 5px;

  &:hover {
    transform: scale(1.1);
  }
`

export const Delete = styled.button`
  background-color: red;
  transition: transform 0.2s;
  border: 0;
  border-radius: 5px;

  &:hover {
    transform: scale(1.1);
  }
`

export const IconTd = styled.td`
  border: solid rgb(225, 225, 225);
  border-width: 1px 0 0 0;
  border-collapse: collapse;
  padding: 5px;

  text-align: left;
`

export const TableData = styled.td`
  padding-left: 1vw;
  border: solid rgb(225, 225, 225);
  border-width: 1px 0 0 0;
  border-collapse: collapse;

  text-align: left;
`

export const TableHeader = styled.th`
  padding: 1vw;
  border: solid rgb(225, 225, 225);
  border-width: 0 0 1px 0;
`

export const StyledTable = styled.table`
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);

  font-family: Georgia, serif;

  padding-bottom: 3rem;

  & tbody > tr:hover {
    color: white;
    background-color: #006a52;
  }
`
