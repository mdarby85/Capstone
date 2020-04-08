/**
 * @name CreateDepartmentForm
 * @author Mario Arturo Lopez Martinez (CSI 43C0 Spring 2020)
 * @overview Form for creating a new department.
 * @example <CreateDepartmentForm />
 * @TODO Add styles to form.
 */

import React from "react"
import gql from "graphql-tag"
import { useForm } from "react-hook-form"
import { useMutation } from "@apollo/react-hooks"
import FormTitle from "components/titles/formTitle"

// GQL mutation for creating a department
const CREATE_DEPARTMENT = gql`
  mutation CreateDepartment($name: String!, $description: String) {
    createDepartment(
      input: { data: { name: $name, description: $description } }
    ) {
      department {
        name
        description
      }
    }
  }
`

export default ({ onCreateSuccess }) => {
  // Various states for our mutation
  const [
    createDepartment,
    { loading: mutationLoading, error: mutationError },
  ] = useMutation(CREATE_DEPARTMENT, {
    onCompleted: () => {
      onCreateSuccess()
    },
  })
  // Various states for our form
  const { handleSubmit, register, errors } = useForm()

  // On form submit, we push values from our form to our GQL mutation
  const onSubmit = values => {
    createDepartment({
      variables: {
        name: values.name,
        description: values.description,
      },
    })
  }

  return (
    <>
      <FormTitle title={"Create A Department"} />
      <form onSubmit={handleSubmit(onSubmit)} name="Create Department Form">
        <label htmlFor="name">Department Name</label>
        <input
          type="text"
          name="name"
          ref={register({
            required: "This field is required.",
            maxLength: {
              value: 50,
              message: "The maximum department name length is 50 characters.",
            },
            minLength: {
              value: 2,
              message: "The minimum department name length is 2 characters.",
            },
          })}
        />
        {errors.name && <p>{errors.name.message}</p>}
        <br />
        <label htmlFor="description">Department Description</label>
        <input
          type="text"
          name="description"
          ref={register({
            maxLength: {
              value: 500,
              message: "The maximum department name length is 500 characters.",
            },
          })}
        />
        {errors.description && <p>{errors.description.message}</p>}
        <br />
        <input type="submit" />
        {mutationLoading && <p>Loading...</p>}
        {mutationError && <p>Error submitting form. Please try again.</p>}
      </form>
    </>
  )
}
