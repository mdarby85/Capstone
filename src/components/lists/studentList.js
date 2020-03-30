/**
 * @author: Mario Arturo Lopez Martinez
 * @author: Chris Holle
 *
 * Latest update:
 * - Enabled delete functionality
 *
 * TODO: Refactor Modal out of file
 * TODO: Add sorting on table.
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
import { STUDENT_QUERY, USER_DELETE_QUERY } from "../../data/queries";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import Button from "components/btn"


/**
 * Main Driver
 * Contains Table with Edit/Delete functionality for students
 */
export default () => {
  const { loading, error, data } = useQuery(STUDENT_QUERY);

  // delete modal items
  const [del_modal, setDeleteModal] = useState(false);
  const delete_modal_toggle = () => setDeleteModal(!del_modal);

  // Column field names
  const fields = ["name", "confirmed", "email"];
  return (
    <div>
      <StyledTable>
        <thead>{GenerateTableHeaders(["Name", "Confirmed", "Email"])}</thead>
        {loading && <tr>Loading...</tr>}
        {error && <tr>Error: ${error.message}</tr>}
        {data && (
          <tbody>
          {/*{GenerateTableRows(data.users, ["name", "email"])}*/}
          {data.users.map(node => (
            <tr key={node.id}>
              {fields.map((field, index) => {
                if (field.includes("."))
                  return (
                    <TableData key={index}>{objectByString(node, field)}</TableData>
                  );
                else if (field === "confirmed")
                  return (<TableData key={index}>{node.confirmed ? "Yes" : "No"}</TableData>);
                else return <TableData key={index}>{node[field]}</TableData>
              })}
              <IconTd>
                <div align="right">
                  {/* TODO: Add Edit Functionality */}
                  <Edit>
                    <MdEdit color="white" />
                  </Edit>
                  {/* Apollo Mutation for delete. Updates cache for student removal on front-end. */}
                  <Mutation mutation={USER_DELETE_QUERY} update={
                    (client) => {
                      const { users } = client.readQuery({query: STUDENT_QUERY});
                      client.writeQuery({
                        query: STUDENT_QUERY,
                        // Filter to only include users that haven't been deleted
                        data: {
                          users: users.filter(user => user.id !== node.id)
                        }
                      });
                      // Closes modal after delete
                      delete_modal_toggle();
                    }
                  } key={node.id}>
                    {mutation => (!node.archived ?
                      <span>
                          {/* Delete Button in table to trigger Delete Modal */}
                          <Delete onClick={delete_modal_toggle}>
                            <MdDeleteForever color="white"/>
                          </Delete>
                          {/* TODO: Refactor Modal out of file */}
                          {/* Actual Modal that deletes the student when Delete is pressed */}
                          <Modal isOpen={del_modal} toggle={delete_modal_toggle}>
                            <ModalHeader toggle={delete_modal_toggle} style={{textAlign: "center"}}>Delete Student</ModalHeader>
                            <ModalBody>
                              <h4 style={{textAlign: "center"}}> Are you sure you want to delete {node.name}'s account?</h4>
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
                              {/* Button to delete Student */}
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
