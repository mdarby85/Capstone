/**
 * @name CreateTeamForm
 * @author Mario Arturo Lopez Martinez, Elisa Gonzalez
 * @overview Form to create a team
 * @TODO Add Styles to form
 */

import React from "react"
import { useForm } from "react-hook-form"
import { useQuery, useMutation } from "@apollo/react-hooks"
import FormTitle from "components/titles/formTitle"
import { CREATE_TEAM, CREATE_TEAM_INFO } from "data/queries"
import { GenerateOptions } from "utils/componentGeneration"

export default ({ onCreateSuccess }) => {
  // Various states of our query fetch
  const { loading, error, data } = useQuery(CREATE_TEAM_INFO)

  // various states for out mutations
  const [
    createTeam,
    { loading: mutationLoading, error: mutationError },
  ] = useMutation(CREATE_TEAM, {
    onCompleted: () => {
      onCreateSuccess()
    },
  })

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
      },
    })
  }

  return (
    <>
      <FormTitle title={"Create A Team"} />
      <form onSubmit={handleSubmit(onSubmit)} name="Create A Form">
        <br />
        {loading && <tr>Loading...</tr>}
        {error && <tr>Error: ${error.message}</tr>}
        {data && (
          <div>
            <label htmlFor="course">Course</label>
            <br />
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
          </div>
        )}
        <br />
        {loading && <tr>Loading...</tr>}
        {error && <tr>Error: ${error.message}</tr>}
        {data && (
          <div>
            <label htmlFor="project">Project</label>
            <br />
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
          </div>
        )}

        <br />
        {loading && <tr>Loading...</tr>}
        {error && <tr>Error: ${error.message}</tr>}
        {data && (
          <div>
            <label htmlFor="teamName">Team Name</label>
            <br />
            <input
              type="text"
              name="teamName"
              ref={register({
                required: "This field is required.",
              })}
            ></input>
            {errors.name && <p>{errors.name.message}</p>}
            <br />
          </div>
        )}

        <br />
        {loading && <tr>Loading...</tr>}
        {error && <tr>Error: ${error.message}</tr>}
        {data && (
          <div>
            <label htmlFor="users">Users</label>
            <br />
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
          </div>
        )}
        <br />

        <br />
        <input type="submit" />
        {mutationLoading && <p>Loading...</p>}
        {mutationError && <p>Error submitting form. Please try again.</p>}
      </form>
    </>
  )
}
