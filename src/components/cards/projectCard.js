/**
 * author: Chris Holle
 * file: projectCard.js
 *
 * Description:
 * Card to be used to display project information.
 *
 * Prop Usage:
 * projectName  - Name of project
 * teamName     - Name of team
 * description  - Simple description of project
 * semester     - Semester of the project
 * viewLink     - path to view project page
 * editLink     - path to edit project page
 *
 * Example usage:
 * <ProjectCard projectName={"Cappy"} teamName={"Section 01 - Pariveda02"}
 * semester={"Spring 2020"} imgSrc={tempImg} viewLink={"/about"}
 * editLink={"/about"} />
 */

import React from "react"
import styled from "styled-components"
import { Row, Col } from "reactstrap"
import Button from "components/btn"

const DisplayCard = styled.div`
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
  width: 325px;
  height: 200px;
  border-radius: 8px 8px 0 0;
  text-align: center;
  transition-duration: 0.3s;
  &:hover {
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
`

const DisplayBody = styled.div`
  padding: 1.5rem;
`

// Option to add Image to top of Card
const DisplayImage = styled.img`
  border-radius: 7px 7px 0 0;
  width: 325px;
  height: 200px;
`

const DisplayName = styled.h4`
  font-family: "BioSans", sans-serif;
  text-align: left;
  font-weight: bold;
  font-size: 20px;
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

export default ({ projectName, teamName, semester, viewLink, editLink }) => (
  <DisplayCard>
    <DisplayBody>
      <DisplayName>{projectName}</DisplayName>
      <DisplayName>{teamName}</DisplayName>
      <DisplaySemester>{semester}</DisplaySemester>
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
