/**
 * @name EditUserForm
 * @author Isaiah Bullard
 * @overview Form to edit a user in the dashboard
 * @example <EditUserForm />
 */
import React, { useState } from 'react';
import gql from 'graphql-tag';
import { Link } from 'gatsby';
import TextInput from '../input/textInput';
import SelectInput from '../input/selectInput';
import { GenerateOptions } from 'utils/componentGeneration';
import Button from '../btn';
import { useMutation } from '@apollo/react-hooks';

/**
 * GraphQL Mutation
 * Edit user by ID
 */
const USER_EDIT_QUERY = gql`
mutation ($name: String!, $email: String!, $roleLabel: String!, $id: ID!)
{
  updateUser(input: {
      data: { 
        name: $name,
        email: $email,
        roleLabel: $roleLabel
      }, 
      where: {
        id: $id
      }
    }) {
    user {
      name
      id
      email
      roleLabel
    }
  }
}
`;

export default ({name, email, role, id}) => {
    const [ nameVal, setNameVal ] = useState(name);
    const [ emailVal, setEmailVal ] = useState(email);
    const [ roleVal, setRoleVal ] = useState(role);

    const [ updateUser, { loading: mutationLoading, error: mutationError }] = useMutation(USER_EDIT_QUERY);
    
    const roles = [ "student", "professor", "sponsorContact", "systemAdmin"]
    
    const onSubmit = () => {
        alert("Submitted");
        updateUser({
            variables: {
                name: nameVal,
                email: emailVal,
                roleLabel: roleVal,
                id: id,
            }
        });
        (mutationLoading) && console.log("Loading...");
        (mutationError) && console.log(mutationError.message);
        alert("Check Console");
    }

    console.log(id);

    return (
        <form onSubmit={onSubmit}>
            <TextInput label="Name" type="text" placeholder="Name" value={nameVal} onChange={(e) => setNameVal(e.target.value)}/>
            <TextInput label="Email" type="email" placeholder="Email" value={emailVal} onChange={(e) => setEmailVal(e.target.value)}/>
            <SelectInput label="Role" type="select" children={GenerateOptions(roles)} value={roleVal} onChange={(e) => setRoleVal(e.target.value)}/>
            <input type="submit" />
            
        </form>
    );
}