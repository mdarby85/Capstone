/**
 * @name EditTeamForm
 * @author Isaiah Bullard
 * @overview Edits a team's name, logo, or and adds and removes members from a team
 * @example <EditTeamForm />
 */
import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { useForm } from 'react-hook-form';

const EDIT_TEAM_QUERY = gql`
  mutation ($id: ID!, $name: String) 
  {
    updateTeam(input: {
      where: {
        id: $id
      },
      data: {
        name: $name
      }
    }) {
      team {
        name
        users {
          name
        }
      }
    }
  }
`

export default ({name, users, id}) => {
  // const { loading, error, data } = useQuery(STUDENT_QUERY);

  const { handleSubmit, register, errors } = useForm();

  const [ createTeam, { loading: mutationLoading, error: mutationError} ] = useMutation(EDIT_TEAM_QUERY);

  const onSubmit = values => {
    createTeam({
      variables: {
        id: id,
        name: values.name,
      }
    });
    alert("Team Updated");
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" defaultValue={name} ref={register()} />
      {errors.name && <p>{errors.name.message}</p>}
      <br />
      {/* <label htmlFor="email">Email</label>
      <input type="email" name="email" defaultValue={email} ref={register()}/>
      {errors.email && <p>{errors.email.message}</p>}
      <br />
      <label htmlFor="role">Role</label>
      <select name="role"  ref={register()}>
          {roles.map((r) => {
              return (<option value={r} selected={roleLabel === r}>{r}</option>);
          })}
      </select>
      {errors.role && <p>{errors.role.message}</p>}
      <br />
      <label htmlFor="archived">Archived</label>
      <input type="checkbox" name="archived" ref={register()} checked={archivedVal} onClick={() => setArchivedVal(!archivedVal)}/>
      {errors.archived && <p>{errors.archived.message}</p>}
      <br /> */}
      <input type="submit" />
      {(mutationLoading) && console.log("Loading...")}
      {(mutationError) && console.log(mutationError.message)}
    </form>
  );
}