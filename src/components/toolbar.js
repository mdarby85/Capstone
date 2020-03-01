/**
 * @TODO Make this
 */
import React from "react"
import styled from "styled-components"
import Button from "components/btn"

const Tools = styled.table`
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);

  @media (min-width: 825px) {
    position: fixed;
    top: 5rem;
    right: 3rem;
    width: 15%;
  }

  @media (max-width: 825px) {
    position: static;
    margin-top: 2rem;
    margin-bottom: 2rem;
    margin-left: 9rem;
    width: 70%;
  }
`

const NavHeader = styled.th`
  color: #006a52;
  background-color: #ececec;
  border: 1px solid #ececec;
  text-align: center;
`
const ButtonCell = styled.td`
  border: 1px solid #ececec;
  padding: 10px 20px;
  text-align: center;
`

export default () => {
  return (
    <Tools>
      <thead>
        <tr>
          <NavHeader>
            <h2>Tools</h2>
          </NavHeader>
        </tr>
      </thead>
      <tbody>
        <tr>
          <ButtonCell>
            <Button
              border
              rounded
              small
              textColor="primary-green"
              type="submit"
            >
              Create Project
            </Button>
          </ButtonCell>
        </tr>
        <tr>
          <ButtonCell>
            <Button
              border
              rounded
              small
              textColor="primary-green"
              type="submit"
            >
              Create Team
            </Button>
          </ButtonCell>
        </tr>
        <tr>
          <ButtonCell>
            <Button
              border
              rounded
              small
              textColor="primary-green"
              type="submit"
            >
              Add Students
            </Button>
          </ButtonCell>
        </tr>
        <tr>
          <ButtonCell>
            <Button
              border
              rounded
              small
              textColor="primary-green"
              type="submit"
            >
              Add Professor
            </Button>
          </ButtonCell>
        </tr>
        <tr>
          <ButtonCell>
            <Button
              border
              rounded
              small
              textColor="primary-green"
              type="submit"
            >
              Add Course
            </Button>
          </ButtonCell>
        </tr>
        <tr>
          <ButtonCell>
            <Button
              border
              rounded
              small
              textColor="primary-green"
              type="submit"
            >
              Add Program
            </Button>
          </ButtonCell>
        </tr>
        <tr>
          <ButtonCell>
            <Button
              border
              small
              rounded
              textColor="primary-green"
              type="submit"
            >
              Add Sponsor
            </Button>
          </ButtonCell>
        </tr>
      </tbody>
    </Tools>
  )
}
