/**
 * @name TeamCard
 *
 * @author Chris Holle
 * @author Mario Arturo Lopez Martinez
 *
 * @overview Card to be used to display project information.
 *
 * @param {string} teamName name of team
 * @param {string} projectName name of project
 * @param {string} description simple description of project
 * @param {string} semester semester of the project
 * @param {string} year year of the project
 * @param {string} viewLink path to view project page
 * @param {string} editLink path to edit project page
 *
 * @example
 *
 * <TeamCard
 *    teamName="Section 01 - Pariveda02"
 *    projectName="Cappy"
 *    semester="Spring 2020"
 *    imgSrc=tempImg
 *    viewLink="/about"
 *    editLink="/about"
 * />
 *
 */

import React from "react"
import styled from "styled-components"
import { Row, Col } from "reactstrap"
import Button from "components/btn"

const DisplayCard = styled.div`
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
  width: 325px;
  border-radius: 8px 8px 0 0;
  text-align: center;
  transition-duration: 0.3s;

  &:hover {
    box-shadow: 2px 2px 14px rgba(0, 0, 0, 0.4);
    transform: translateY(-5px);
  }
`

const DisplayBody = styled.div`
  padding: 1.5rem;
`

const DisplayTeamName = styled.h4`
  font-family: "BioSans", sans-serif;
  text-align: left;
  font-weight: bold;
  font-size: 20px;
  color: ${props => props.theme.primaryGreen};
  margin: 0.5em 0;
`

const DisplayProjectName = styled.h6`
  font-family: "BioSans", sans-serif;
  text-align: left;
  font-weight: bold;
  font-size: 15px;
  color: ${props => props.theme.primaryGreen};
  margin: 0.5em 0;
`

const DisplaySemester = styled.p`
  font-family: Georgia, serif;
  font-size: 18px;
  font-weight: 300;
  text-align: left;
  padding: 0;
  color: #a1a1a1;
`

export default ({
  projectName,
  teamName,
  semester,
  year,
  viewLink,
  editLink,
}) => (
  <DisplayCard>
    <DisplayBody>
      <DisplayTeamName>{teamName}</DisplayTeamName>
      <DisplayProjectName>{projectName}</DisplayProjectName>
      <DisplaySemester>
        {semester} {year}
      </DisplaySemester>
      <Row>
        <Col>
          <Button
            to={viewLink}
            textColor="primary-green"
            border={true}
            arrow={false}
            rounded={true}
            small={true}
          >
            View Page
          </Button>
        </Col>
        <Col>
          <Button to={editLink} textColor="white" solid rounded small>
            Edit
          </Button>
        </Col>
      </Row>
    </DisplayBody>
  </DisplayCard>
)
