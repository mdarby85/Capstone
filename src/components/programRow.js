/**
 * @author: Chris Holle
 * file: programRow.js
 *
 * Handles functionality for Program listing rows.
 */

import React, { useState } from "react";
import { Mutation } from "react-apollo";
import { Delete, Edit, IconTd } from "./styledComponents";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import { PROGRAM_DELETE, PROGRAM_QUERY } from "../data/queries";
import Button from "components/btn"
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import EditProgramForm from "components/forms/editProgramForm"



export default ({ node }) => {

  // delete modal items
  const [del_modal, setDeleteModal] = useState(false);
  const delete_modal_toggle = () => setDeleteModal(!del_modal);

  // edit modal items
  const [edit_modal, setEditModal] = useState(false);
  const edit_modal_toggle = () => setEditModal(!edit_modal);

  return (
    <IconTd>
      <div align="right">
        <Edit onClick={edit_modal_toggle}>
          <MdEdit color="white" />
        </Edit>
        <Modal isOpen={edit_modal} toggle={edit_modal_toggle}>
          <ModalHeader toggle={edit_modal_toggle}>Edit Program</ModalHeader>
          <ModalBody>
            <EditProgramForm progID={node.id} progName={node.name} progDescription={node.description} progThumbnail={node.thumbnail ? node.thumbnail.id : ""}
                             onEditSuccess={edit_modal_toggle} />
          </ModalBody>
        </Modal>
        {/* Apollo Mutation for delete. Updates cache for student removal on front-end. */}
        <Mutation mutation={PROGRAM_DELETE} update={
          (client) => {
            const { programs } = client.readQuery({query: PROGRAM_QUERY});
            client.writeQuery({
              query: PROGRAM_QUERY,
              // Filter to only include programs that haven't been deleted
              data: {
                programs: programs.filter(program => program.id !== node.id)
              }
            });
            // Closes Modal after delete
            delete_modal_toggle();
          }
        } key={node.id}>
          {mutation =>
            <span>
              {/* Delete Button Triggers modal */}
              <Delete onClick={delete_modal_toggle}>
                <MdDeleteForever color="white"/>
              </Delete>
              {/* Modal */}
              <Modal isOpen={del_modal} toggle={delete_modal_toggle}>
                <ModalHeader toggle={delete_modal_toggle} style={{textAlign: "center"}}>Delete Program</ModalHeader>
                <ModalBody>
                  <h4 style={{textAlign: "center"}}> Are you sure you want to delete the program {node.name}?</h4>
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
                  {/* Actually deleting from modal when delete button is clicked */}
                  <Button
                    onClick={() => mutation({
                      variables: {id: node.id}
                    })}
                    small
                    border
                    textColor="primary-green"
                    style={{float: "right"}}
                  >
                    Delete
                  </Button>
                </ModalBody>
              </Modal>
            </span>
          }
        </Mutation>
      </div>
    </IconTd>
  )
}
