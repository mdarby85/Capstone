/**
 * @name toolbar.js
 *
 * @author Mario Arturo Lopez Martinez
 * @author: Chris Holle
 *
 * @overview Access common actiions depending on your user role
 *
 * @TODO Finish implementing add users and teams
 * @TODO: Update to allow modals to close on successful mutation
 * @TODO: Make all buttons same size
 */

import React from "react"
import styled from "styled-components"
import { GoTools } from "react-icons/go"

import Button from "components/btn"
import OpenModalButton from "components/openModalButton"
import CreateCourseForm from "components/forms/createCourseForm"
import CreateProjectForm from "components/forms/createProjectForm"
import CreateDepartmentForm from "components/forms/createDepartmentForm"
import CreateProgramForm from "components/forms/createProgramForm"

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
`;

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
              <OpenModalButton label="Create Project">
                <CreateProjectForm />
              </OpenModalButton>
            </ButtonCell>
          </tr>
          <tr>
            <ButtonCell>
              <OpenModalButton label="Create Department">
                <CreateDepartmentForm />
              </OpenModalButton>
            </ButtonCell>
          </tr>
          <tr>
            <ButtonCell>
              <OpenModalButton label="Create Course">
                <CreateCourseForm />
              </OpenModalButton>
            </ButtonCell>
          </tr>
          <tr>
            <ButtonCell>
              <OpenModalButton label="Create Program">
                <CreateProgramForm />
              </OpenModalButton>
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
                Create User
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
                Create Sponsor
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
                Create Team
              </Button>
            </ButtonCell>
          </tr>
        </tbody>
      </Tools>
    </Wrapper>
  )
}
