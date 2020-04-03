/**
 * @name CreateTeamForm
 * @author Mario Arturo Lopez Martinez, Elisa Gonzalez
 * @overview Form to create a team
 * @TODO Add Styles to form
 */

import React from "react"
import { useForm } from "react-hook-form"
import { useQuery, useMutation } from "@apollo/react-hooks"
import gql from "graphql-tag"
import FormTitle from "components/titles/formTitle"
import { CREATE_TEAM } from "../../data/queries"
import { GenerateOptions } from "utils/componentGeneration"

const GET_INFO = gql`
query GET_INFO{
  courses{
    id
    name
    projects{
      id
      name
    }
  }
  projects{
    id
    name
  }
  users(where: { roleLabel: "student" }) {
     id
     name
  }
  teams{
    id
    name
  }   
}
`

export default () => {

  // Various states of our query fetch
  const { loading, error, data } = useQuery(GET_INFO)

  // various states for out mutations
  const [
      createTeam,
      { loading: mutationLoading, error: mutationError },
  ] = useMutation(CREATE_TEAM)

  // various states for our form
  const { handleSubmit, register, errors } = useForm()

  // on form submit, push values from form to GQL mutation
  const onSubmit = values => {
    createTeam({
      variables: {
        projectID: values.project,
        studentsID: values.users,
        name: values.teamName,
        courseID: values.course,
      }
    })
   }

  return (
    <>
      <FormTitle title={"Create A Team"} />
      <form onSubmit={handleSubmit(onSubmit)} name="Create A Form">
        <br/>
        {loading && <tr>Loading...</tr>}
        {error && <tr>Error: ${error.message}</tr>}
        {data && (
            <>
              <label htmlFor="course">Course</label>
              <br/>
              <select
                  name="course"
                  ref={register({
                    required: "This field is required.",
                  })}
              >
                <option disabled selected value="">
                  Select A Course
                </option>
                {GenerateOptions(data.courses, "id", "name")}
              </select>
              {errors.name && <p>{errors.name.message}</p>}
              <br />
            </>
        )}
        <br />
        {loading && <tr>Loading...</tr>}
        {error && <tr>Error: ${error.message}</tr>}
        {data && (
            <>
              <label htmlFor="project">Project</label>
              <br/>
              <select
                  name="project"
                  ref={register({
                    required: "This field is required.",
                  })}
              >
                <option disabled selected value="">
                  Select A Project
                </option>
                {GenerateOptions(data.projects, "id", "name")}
              </select>
              {errors.name && <p>{errors.name.message}</p>}
              <br />
            </>
        )}

          <br />
          {loading && <tr>Loading...</tr>}
          {error && <tr>Error: ${error.message}</tr>}
          {data && (
              <>
                  <label htmlFor="teamName">Team Name</label>
                  <br/>
                  <input
                      type="text"
                      name="teamName"
                      ref={register({
                          required: "This field is required.",
                      })}
                  >
                  </input>
                  {errors.name && <p>{errors.name.message}</p>}
                  <br />
              </>
          )}

          <br />
          {loading && <tr>Loading...</tr>}
          {error && <tr>Error: ${error.message}</tr>}
          {data && (
              <>
                  <label htmlFor="users">Users</label>
                  <br/>
                  <select
                      multiple
                      name="users"
                      ref={register({
                          required: "This field is required.",
                      })}
                  >
                      {GenerateOptions(data.users, "id", "name")}
                  </select>
                  {errors.name && <p>{errors.name.message}</p>}
                  <br />
              </>
          )}
        <br/>

        <label htmlFor="logo">Logo</label>
        <br/>
        <select
            name="logo"
        >
            <option disabled selected value="">
                Select A Logo
            </option>
        </select>
        <br/>

        <br/>
        <input type="submit"/>
        {mutationLoading && <p>Loading...</p>}
        {mutationError && <p>Error submitting form. Please try again.</p>}
      </form>
    </>
  )
}
