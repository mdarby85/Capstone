/**
 * @author: Mario Arturo Lopez Martinez
 * @author: Chris Holle
 *
 * latest update: delete functionality with modal - Chris
 *
 * @TODO: Refactor delete modal out of file
 * @TODO: Add edit functionality
 * @TODO: Add filtering to tables
 */

import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks"

import {
  GenerateTableHeaders,
  GenerateTableRows,
} from "utils/componentGeneration"
import { StyledTable } from "components/styledComponents"

import { Mutation } from "react-apollo";
import { Delete, Edit, IconTd, TableData } from "../styledComponents";
import { objectByString } from "../../utils/functions";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import { PROGRAM_DELETE, PROGRAM_QUERY } from "../../data/queries";
import Button from "components/btn"
import { Modal, ModalBody, ModalHeader } from "reactstrap";


const SectionStyle = { paddingBottom: "3em" };

export default () => {
  const { loading, error, data } = useQuery(PROGRAM_QUERY);
  // Column field names
  const fields = ["name"];

  // delete modal items
  const [del_modal, setDeleteModal] = useState(false);
  const delete_modal_toggle = () => setDeleteModal(!del_modal);

  return (
    <div style={SectionStyle}>
      {loading && <p>Loading...</p>}
      {error && <p>Error: ${error.message}</p>}
      {data && (
        <StyledTable>
          <thead>{GenerateTableHeaders(["Program Name"])}</thead>
          {loading && <tr>Loading...</tr>}
          {error && <tr>Error: ${error.message}</tr>}
          {data && (
            <tbody>
            {data.programs.map(node => (
              <tr key={node.id}>
                {fields.map((field, index) => {
                  if (field.includes("."))
                    return (
                      <TableData key={index}>{objectByString(node, field)}</TableData>
                    );
                  else return <TableData key={index}>{node[field]}</TableData>
                })}
                <IconTd>
                  <div align="right">
                    <Edit>
                      <MdEdit color="white" />
                    </Edit>
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

              </tr>

            ))}
            </tbody>
          )}
        </StyledTable>
      )}
    </div>
  )
}
