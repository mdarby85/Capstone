/**
 * @name toolbar.js
 *
 * @author Mario Arturo Lopez Martinez
 *
 * @overview Access common actiions depending on your user role
 */

import React from "react"
import styled from "styled-components"
import { GoTools } from "react-icons/go"

import Button from "components/btn"

const Wrapper = styled.div`
  position: fixed;
  top: 1em;
  right: 0;

  width: 3em;
  text-align: center;

  border-radius: 10px 0 0 10px;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);

  color: #006a52;
  background: #ececec;

  &:hover > table {
    right: 2em;
  }
`

const Tools = styled.table`
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);

  position: fixed;
  top: 1em;
  right: -250px;
  z-index: 1;
  transition: right 0.5s ease;
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
  background-color: #ffffff;
`

export default () => {
  return (
    <Wrapper>
      <GoTools />
      Tools
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
    </Wrapper>
  )
}
