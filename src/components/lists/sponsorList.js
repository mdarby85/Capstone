/**
 * @author Mario Arturo Lopez Martinez
 * @author Chris Holle
 * @author Isaiah Bullard
 *
 */

import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks"
import {
  GenerateTableHeaders,
  GenerateTableRows,
} from "utils/componentGeneration"
import { StyledTable } from "components/styledComponents"
import { Delete, Edit, IconTd, TableData } from "../styledComponents";
import { objectByString } from "../../utils/functions";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import { Mutation } from "react-apollo";
import { SPONSOR_QUERY, USER_DELETE_QUERY } from "../../data/queries";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import Button from "components/btn"
import EditUserForm from 'components/forms/editUserForm';


/**
 * Main Driver
 * Contains Table with Edit/Delete functionality for professors
 */
export default () => {
  const { loading, error, data } = useQuery(SPONSOR_QUERY);

  // edit modal items
  const [edit_modal, setEditModal] = useState([]);
  const edit_modal_toggle = (id) => {
    let temp = [...edit_modal];
    temp[id] = !temp[id];
    
    setEditModal(temp);
  };
  const add_edit_modal = () => {
    edit_modal.push(false);
  };

  // delete modal items
  const [del_modal, setDeleteModal] = useState([]);
  const delete_modal_toggle = (id) => {
    let temp = [...del_modal];
    temp[id] = !temp[id];

    setDeleteModal(temp);
  };
  const add_del_modal = () => {
    del_modal.push(false);
  };

  // Column field names
  const fields = ["name", "sponsor", "email"];
  return (
    <div>
      <StyledTable>
        <thead>{GenerateTableHeaders(["Name", "Sponsor", "Email"])}</thead>
        {loading && <tr>Loading...</tr>}
        {error && <tr>Error: ${error.message}</tr>}
        {data && (
          <tbody>
          {data.users.map((node, id) => (
            <tr key={node.id}>
              {fields.map((field, index) => {
                if (field.includes("."))
                  return (
                    <TableData key={index}>{objectByString(node, field)}</TableData>
                  );
                else return <TableData key={index}>{node[field]}</TableData>
              })}
              {add_edit_modal}
              {add_del_modal}
              <IconTd>
                <div align="right">
                  <Edit onClick={() => edit_modal_toggle(id)} >
                    <MdEdit color="white" />
                  </Edit>
                  <Modal isOpen={edit_modal[id]} toggle={() => edit_modal_toggle(id)} >
                    <ModalHeader toggle={() => edit_modal_toggle(id)}>Edit Sponsor</ModalHeader>
                    <ModalBody>
                      <EditUserForm id={node.id} name={node.name} email={node.email} archived={node.archived} roleLabel={node.roleLabel} key={node.id} onEditSuccess={() => edit_modal_toggle(id)}/>
                    </ModalBody>
                  </Modal>
                  {/* Apollo Mutation for delete. Updates cache for student removal on front-end. */}
                  <Mutation mutation={USER_DELETE_QUERY} update={
                    (client) => {
                      const { users } = client.readQuery({query: SPONSOR_QUERY});
                      client.writeQuery({
                        query: SPONSOR_QUERY,
                        // Filter to only include users that haven't been deleted
                        data: {
                          users: users.filter(user => user.id !== node.id)
                        }
                      });
                      // Closes modal after delete
                      delete_modal_toggle(id);
                    }
                  } key={node.id}>
                    {mutation => (!node.archived ?
                      <span>
                          {/* Delete Button in table to trigger Delete Modal */}
                          <Delete onClick={() => delete_modal_toggle(id)}>
                            <MdDeleteForever color="white"/>
                          </Delete>
                          {/* TODO: Refactor Modal out of file */}
                          {/* Actual Modal that deletes the student when Delete is pressed */}
                          <Modal isOpen={del_modal[id]} toggle={() => delete_modal_toggle(id)}>
                            <ModalHeader toggle={() => delete_modal_toggle(id)} style={{textAlign: "center"}}>Delete Sponsor</ModalHeader>
                            <ModalBody>
                              <h4 style={{textAlign: "center"}}> Are you sure you want to delete {node.name}'s account?</h4>
                              <hr />
                              <Button
                                onClick={() => delete_modal_toggle(id)}
                                border
                                rounded
                                small
                                textColor="primary-green"
                              >
                                Cancel
                              </Button>
                              {/* Button to delete Sponsor */}
                              <Button
                                onClick={() => {
                                  mutation({
                                    variables: {id: node.id}
                                  });
                                  edit_modal.splice(id, 1);
                                  del_modal.splice(id, 1);
                                }}
                                small
                                border
                                textColor="primary-green"
                                style={{float: "right"}}
                              >
                                Delete
                              </Button>
                            </ModalBody>
                          </Modal>
                        </span> : "")
                    }
                  </Mutation>
                </div>
              </IconTd>
            </tr>
            ))}
          </tbody>
        )}
      </StyledTable>
    </div>
  )
}