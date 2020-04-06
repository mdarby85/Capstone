/**
 * @name OpenModalButton
 * @author Mario Arturo Lopez Martinez (CSI 43C9 Spring 2020)
 *
 * @overview Button that opens its children in a modal window
 *
 * @param {string} label used for modal title and button
 * @param {Component} children displayed inside the modal window
 *
 * @example
 * <OpenModalButton label="Create A Project" formNumber={0}/>
 *
 * formNumber:
 *  - 0: CreateCourseForm
 *  - 1: CreateProjectForm
 *  - 2: CreateDepartmentForm
 *  - 3: CreateTeamForm
 *  - 4: CreateProgramForm
 *  - 5: EditCourseForm
 *  - 6: EditProgramForm
 *  - 7: EditUserForm
 */

import React, { useState } from "react"
import { Modal, ModalHeader, ModalBody } from "reactstrap"
import Button from "components/btn"
import CreateCourseForm from "components/forms/createCourseForm"
import CreateProjectForm from "components/forms/createProjectForm"
import CreateDepartmentForm from "components/forms/createDepartmentForm"
import CreateTeamForm from "components/forms/createTeamForm"
import CreateProgramForm from "components/forms/createProgramForm"
import EditUserForm from "components/forms/editUserForm"
import EditCourseForm from "components/forms/editCourseForm"
import EditProgramForm from "components/forms/editProgramForm"

export default ({ label, formNumber }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const forms = [
    (<CreateCourseForm onCreateSuccess={toggle}/>),
    (<CreateProjectForm onCreateSuccess={toggle}/>),
    (<CreateDepartmentForm onCreateSuccess={toggle}/>),
    (<CreateTeamForm onCreateSuccess={toggle} />),
    (<CreateProgramForm onCreateSuccess={toggle} />),
    (<EditCourseForm onEditSuccess={toggle} />),
    (<EditProgramForm onEditSuccess={toggle} />),
    (<EditUserForm onEditSuccess={toggle} />)
  ];

  return (
    <div>
      <Button
        onClick={toggle}
        border
        rounded
        small
        textColor="primary-green"
        type="submit"
      >
        {label}
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{label}</ModalHeader>
        <ModalBody>{forms[formNumber]}</ModalBody>
      </Modal>
    </div>
  )
}
