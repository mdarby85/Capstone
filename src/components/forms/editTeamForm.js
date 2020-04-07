/**
 * @name EditTeamForm
 * @author Isaiah Bullard
 * @overview Edits a team's name, logo, or and adds and removes members from a team
 * @example <EditTeamForm />
 */
import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { useForm } from 'react-hook-form';
import { EDIT_TEAM_QUERY, IMAGE_QUERY, STUDENT_QUERY } from 'data/queries';
import { TEST_USER_ID } from "../../constants";

export default ({name, logo, users, id}) => {

  const { handleSubmit, register, errors } = useForm();
  const [ createTeam, { loading: mutationLoading, error: mutationError, data: mutationData} ] = useMutation(EDIT_TEAM_QUERY);
  const { loading: imageLoading, error: imageError, data: imageData } = useQuery(IMAGE_QUERY, {variables: { id: TEST_USER_ID }})
  const { loading: userLoading, error: userError, data: userData } = useQuery(STUDENT_QUERY)

  const onSubmit = values => {
    createTeam({
      variables: {
        id: id,
        name: values.name,
        logo: values.logo,
        users: values.members,
      }
    });
    alert("Team Updated");
  }

  const studentOnTeam = id => {
    for(let i = 0; i < users.length; i++) {
      if(users[i].id === id) {
        return true;
      }
    }
    return false;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" defaultValue={name} ref={register()} />
      {errors.name && <p>{errors.name.message}</p>}
      <br />
      <label htmlFor="logo">Logo</label>
      <select name="logo" ref={register()}>
        <option value="" selected={logo === undefined}></option>
        {imageLoading && <p>Loading...</p>}
        {imageError && <p>Error: {imageError.message}</p>}
        {imageData && imageData.user.mediaLibrary && imageData.user.mediaLibrary.map((node) => {
          return <option value={node.id} selected={logo ? (logo.id === node.id) : false}>{node.name}</option>
        })}
      </select>
      <br />
      <label htmlFor="members">Members</label>
      <select name="members" ref={register()} multiple>
        {userLoading && <p>Loading...</p>}
        {userError && <p>Error: {userError.message}</p>}
        {userData && userData.users.map((node) => {
          return <option value={node.id} selected={studentOnTeam(node.id)}>{node.name}</option>
        })}
      </select>
      <input type="submit" />
      {(mutationLoading) && <p>Loading...</p>}
      {(mutationError) && <p>{mutationError.message}</p>}
    </form>
  );
}