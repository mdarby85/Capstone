import styled from "styled-components"

export const Section = styled.div`
  paddingbottom: "3vh";
`

export const Edit = styled.button`
  background-color: orange;
  border: 0;

  border-radius: 10px;
  margin-right: 5px;

  @media (max-width: 500px) {
    margin-bottom: 5px;
  }

  &:hover {
    transition: transform 0.2s;
    transform: scale(1.1);
  }
`

export const Delete = styled.button`
  background-color: red;
  transition: transform 0.2s;
  border: 0;
  border-radius: 10px;

  margin-right: 5px;

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
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
  font-family: Georgia, serif;

  @media (max-width: 700px) {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }

  min-width: 50%;

  margin-bottom: 3rem;

  & tbody > tr {
    -webkit-transition: all 0.2s;
    -moz-transition: all 0.2s;
    -ms-transition: all 0.2s;
    -o-transition: all 0.2s;
    transition: all 0.2s;
  }

  & tbody > tr:hover {
    color: white;
    background-color: #006a52;
  }
`
