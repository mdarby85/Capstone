/**
 * @name EditUserForm
 * @author Isaiah Bullard
 * @overview Form to edit a user in the dashboard
 * @example <EditUserForm />
 */
import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useForm } from 'react-hook-form';
import { USER_EDIT_QUERY } from '../../data/queries';


export default ({name, email, roleLabel, archived, id}) => {
    const [archivedVal, setArchivedVal] = useState(archived);

    const { handleSubmit, register, errors } = useForm();

    const [ createUser, { loading: mutationLoading, error: mutationError, data: mutationData }] = useMutation(USER_EDIT_QUERY);
    
    const roles = [ "student", "professor", "sponsorContact", "systemAdmin"]
    
    const onSubmit = values => {
        createUser({
            variables: {
                id: id,
                name: values.name,
                email: values.email,
                roleLabel: values.roleLabel,
                archived: values.archived,
            }
        });
        alert("User Updated!");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" defaultValue={name} ref={register()} />
            {errors.name && <p>{errors.name.message}</p>}
            <br />
            <label htmlFor="email">Email</label>
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
            <br />
            <input type="submit" />
            {(mutationLoading) && console.log("Loading...")}
            {(mutationError) && console.log(mutationError.message)}
            {(mutationData) && console.log(JSON.stringify(mutationData))}
        </form>
    );
}