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
 * <OpenModalButton label="Create A Project">
 *  <CreateProjectForm />
 * </OpenModalButton>
 */

import React, { useState } from "react"
import { Modal, ModalHeader, ModalBody } from "reactstrap"
import Button from "components/btn"

export default ({ label, children }) => {
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

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
        <ModalBody>{children}</ModalBody>
      </Modal>
    </div>
  )
}
