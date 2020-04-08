/**
 * @name CourseCard
 *
 * @author Chris Holle
 * @author Mario Arturo Lopez Martinez
 *
 * @overview Card to be used to display course name and projects under a
 * certain course when activated.
 *
 * @param {string} name name of course
 * @param {string} semester current Semester
 * @param {string} active true if the card is active, false if not active
 * @param {string} year course year
 * @param {string} number course number designated by registrar
 * @param {string} prefix course prefix designated by department
 *
 * @example
 *
 *  <CourseCard
 *    name="Engineering Design II"
 *    semester="Spring"
 *    year="2020"
 *    number="4390"
 *    prefix="ENG"
 *    active
 *  />
 * @TODO: Add verification modal for delete
 * @TODO: Refactor Delete Modal out of file
 * @TODO: Only show options when on Dashboard
 */

import React, { useState } from "react"
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
    Row,
} from "reactstrap"
import Button from "components/btn"
import EditCourseForm from "components/forms/editCourseForm"

const CourseCard = styled.div`
    padding: 1.6rem;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
    margin: 10px;
    width: 325px;
    height: 120px;
    text-align: left;
    border-top: 2px solid ${props => props.theme.secondaryGreen};
    transition-duration: 0.3s;

    &:hover {
        box-shadow: 2px 2px 14px rgba(0, 0, 0, 0.4);
        background: ${props => props.theme.secondaryGreen};
        border-top: 2px solid ${props => props.theme.secondaryGold};
    }

    &:hover h4 {
        color: white;
    }

    &:hover p {
        color: ${props => props.theme.secondaryGold};
    }

    &.active {
        box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.2);
        background: ${props => props.theme.secondaryGreen};
        border-top: 2px solid ${props => props.theme.secondaryGold};
        transform: translateY(-5px);
        cursor: pointer;
    }

    &.active h4 {
        color: white;
    }

    &.active p {
        color: ${props => props.theme.secondaryGold};
    }
`

const CourseName = styled.h4`
    font-family: "BioSans", sans-serif;
    color: ${props => props.theme.primaryGreen};
    text-align: left;
`

const CourseSemester = styled.p`
    font-family: Georgia, serif;
    font-size: 18px;
    text-transform: capitalize;
    line-height: 10px;
    text-align: left;
    color: #c3c3c3;
`

// TODO: Add dropdown menu with edit and delete
// TODO: Create child callback to send information on delete
// TODO: Create child callback to send information on edit
export default ({ id, prefix, number, semester, active, year, name, startDate, endDate, onChildClick }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const toggle = () => setDropdownOpen(prevState => !prevState)

    // delete modal items
    const [del_modal, setDeleteModal] = useState(false)
    const delete_modal_toggle = () => setDeleteModal(!del_modal)

    // edit modal items
    const [edit_modal, setEditModal] = useState(false)
    const edit_modal_toggle = () => setEditModal(!edit_modal)

    function handleClick(id) {
        onChildClick(id) // pass any argument to the callback
    }

    return (
        <CourseCard className={`${active ? "active" : ""}`}>
            <Row>
                <Col>
                    <CourseName>
                        {prefix} {number} {name}
                    </CourseName>
                    <CourseSemester>
                        {semester} {year}
                    </CourseSemester>
                </Col>
                <Col md={2}>
                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle
                            style={{ background: "inherit", border: "none", outline: "none" }}
                            data-toggle="dropdown"
                            aria-haspopup
                            aria-expanded={dropdownOpen}
                        >
                            <div className="card-tools-icon">
                                <FaEllipsisV />
                            </div>
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>Course Tools</DropdownItem>
                            <DropdownItem onClick={edit_modal_toggle}>Edit</DropdownItem>
                            <DropdownItem onClick={delete_modal_toggle}>Delete</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </Col>
            </Row>

            <Modal isOpen={del_modal} toggle={delete_modal_toggle}>
                <ModalHeader toggle={delete_modal_toggle} style={{ textAlign: "center" }}>
                    Delete Course
                </ModalHeader>
                <ModalBody>
                    <h4 style={{ textAlign: "center" }}> Are you sure you want to delete course {name}?</h4>
                    <hr />
                    <Button onClick={delete_modal_toggle} border rounded small textColor="primary-green">
                        Cancel
                    </Button>
                    <Button
                        onClick={() => handleClick(id)}
                        small
                        border
                        textColor="primary-green"
                        style={{ float: "right" }}
                    >
                        Delete
                    </Button>
                </ModalBody>
            </Modal>

            <Modal isOpen={edit_modal} backdrop="static" toggle={edit_modal_toggle}>
                <ModalHeader toggle={edit_modal_toggle}>Edit Course</ModalHeader>
                <ModalBody>
                    <EditCourseForm
                        id={id}
                        prefix={prefix}
                        number={number}
                        active={active}
                        name={name}
                        year={year}
                        semester={semester}
                        startDate={startDate}
                        endDate={endDate}
                        onEditSuccess={edit_modal_toggle}
                    />
                </ModalBody>
            </Modal>
        </CourseCard>
    )
}
