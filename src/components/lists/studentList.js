/**
 * Author: Mario Arturo Lopez Martinez
 */

import React from "react"
import { useQuery } from "@apollo/react-hooks"
import {
  GenerateTableHeaders,
  GenerateTableRows,
} from "utils/componentGeneration"
import { StyledTable } from "components/styledComponents"
// import { USER_DELETE_QUERY } from "../../utils/componentGeneration";
import { Delete, Edit, IconTd, TableData } from "../styledComponents";
import { objectByString } from "../../utils/functions";
import { MdDeleteForever, MdEdit } from "react-icons/md";

import { gql } from "apollo-boost"
import { Mutation } from "react-apollo";


/**
 * GraphQL query
 * Pull all Students to populate table
 * TODO: add functionality to only pull students connected with a professor
 */
const STUDENT_QUERY = gql`
  {
    users(where: { roleLabel: "student" }) {
      id
      name
      email
      roleLabel
    }
  }
`

/**
 * GraphQL Mutation
 * Delete user by ID
 */
export const USER_DELETE_QUERY = gql`
  mutation DELETE_USER ($id: ID!)
  {
    deleteUser(input: {where: {id: $id}}) {
      user {
        name
        id
        email
        roleLabel
      }
    }
  }
`;

/**
 * Main Driver
 * Contains Table with Edit/Delete functionality for students
 */
export default () => {
  const { loading, error, data } = useQuery(STUDENT_QUERY);

  const fields = ["name", "email"];
  return (
    <div>
      <StyledTable>
        <thead>{GenerateTableHeaders(["Name", "Email"])}</thead>
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
                else return <TableData key={index}>{node[field]}</TableData>
              })}
              <IconTd>
                <div align="right">
                  <Edit>
                    <MdEdit color="white" />
                  </Edit>
                  {/* Apollo Mutation for delete. Updates cache for student removal on front-end. */}
                  <Mutation mutation={USER_DELETE_QUERY} update={
                    (client, {data}) => {
                      const { users } = client.readQuery({query: STUDENT_QUERY});
                      client.writeQuery({
                        query: STUDENT_QUERY,
                        // Filter to only include users that haven't been deleted
                        data: {
                          users: users.filter(user => user.id !== node.id)
                        }
                      })
                    }
                  } key={node.id}>
                    {mutation =>
                      <Delete onClick={ () => {
                        mutation({
                          variables: {id: node.id}
                        })} }>
                        <MdDeleteForever color="white"/>
                      </Delete>
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
