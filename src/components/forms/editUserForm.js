/**
 * @name EditUserForm
 * @author Isaiah Bullard
 * @overview Form to edit a user in the dashboard
 * @example <EditUserForm />
 */
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { STUDENT_EMAIL_QUERY } from '../../data/queries'

export default () => {
    const { loading, error, data } = useQuery(STUDENT_EMAIL_QUERY);

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error ${error.message}</p>}
            {data && console.log(data)}
        </div>
    );
}