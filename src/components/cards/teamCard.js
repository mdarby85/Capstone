/**
 * @name TeamCard
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
 * @TODO: Add conditional to only show Assign to Project when project is not assigned
 * @TODO: Refactor Delete Modal out of file
 * @TODO: Only show options when on Dashboard
 */

import React, { useState } from "react";
import styled from "styled-components"
import { FaEllipsisV } from "react-icons/fa"
import {
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Modal,
  ModalBody,
  ModalHeader,
  Row
} from "reactstrap";
import Button from "components/btn"
import AddTeamToProjectForm from "components/forms/addTeamToProjectForm"

const DisplayCard = styled.div`
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
  width: 325px;
  margin: 10px;
  border-radius: 8px 8px 0 0;
  text-align: center;
  transition-duration: 0.3s;

  &:hover {
    box-shadow: 2px 2px 14px rgba(0, 0, 0, 0.4);
  }
`;

const DisplayBody = styled.div`
  padding: 1.5rem;
`;

const DisplayTeamName = styled.h4`
  font-family: "BioSans", sans-serif;
  text-align: left;
  font-weight: bold;
  font-size: 20px;
  color: ${props => props.theme.primaryGreen};
  margin: 0.5em 0;
`;

const DisplayProjectName = styled.h6`
  font-family: "BioSans", sans-serif;
  text-align: left;
  font-weight: bold;
  font-size: 15px;
  color: ${props => props.theme.primaryGreen};
  margin: 0.5em 0;
`;

const DisplaySemester = styled.p`
  font-family: Georgia, serif;
  font-size: 18px;
  font-weight: 300;
  text-align: left;
  padding: 0;
  color: #a1a1a1;
`;

export default ({
  id, projectName,
  teamName,
  semester,
  year,
  viewLink,
  editLink,
  onChildClick
}) => {
  // Dropdown items
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  // delete modal items
  const [del_modal, setDeleteModal] = useState(false);
  const delete_modal_toggle = () => setDeleteModal(!del_modal);

  // Handles delete
  function handleClick(id) {
    // Callback to parent component
    onChildClick(id);
  }

  // add team to project modal items
  const [addTeam_modal, setAddTeamModal] = useState(false);
  const add_team_to_project_toggle = () => setAddTeamModal(!addTeam_modal);

  return (
    <DisplayCard>
      <DisplayBody>
        <Row>
          <Col>
            <DisplayTeamName>{teamName}</DisplayTeamName>
            <DisplayProjectName>{projectName}</DisplayProjectName>
            <DisplaySemester>
              {semester} {year}
            </DisplaySemester>
          </Col>
          <Col md={2}>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle style={{background: "inherit", border: "none", outline: "none"}}
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded={dropdownOpen}>
                <div className={"team-card-tools-icon"}>
                  <FaEllipsisV />
                </div>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Team Tools</DropdownItem>
                <DropdownItem onClick={add_team_to_project_modal}>Assign to Project</DropdownItem>
                <DropdownItem>Edit</DropdownItem>
                <DropdownItem onClick={delete_modal_toggle}>Delete</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
        </Row>
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

      <Modal isOpen={del_modal} toggle={delete_modal_toggle}>
        <ModalHeader toggle={delete_modal_toggle} style={{textAlign: "center"}}>Delete Team</ModalHeader>
        <ModalBody>
          <h4 style={{textAlign: "center"}}> Are you sure you want to delete team {teamName}?</h4>
          <hr />
            <Button
              onClick={delete_modal_toggle}
              border
              rounded
              small
              textColor="primary-green"
            >
              Cancel
            </Button>
            <Button
              onClick={() => handleClick(id)}
              small
              border
              textColor="primary-green"
              style={{float: "right"}}
            >
              Delete
            </Button>
        </ModalBody>
      </Modal>

      <Modal isOpen={addTeam_modal} toggle={add_team_to_project_toggle}>
      <ModalHeader toggle={delete_modal_toggle} style={{textAlign: "center"}}>Delete Team</ModalHeader>
        <ModalBody>
          <h4 style={{textAlign: "center"}}> Are you sure you want to delete team {teamName}?</h4>
          <hr />
            <Button
              onClick={delete_modal_toggle}
              border
              rounded
              small
              textColor="primary-green"
            >
              Cancel
            </Button>
            <Button
              onClick={() => handleClick(id)}
              small
              border
              textColor="primary-green"
              style={{float: "right"}}
            >
              Delete
            </Button>
        </ModalBody>
      </Modal>

    </DisplayCard>
  )
}
