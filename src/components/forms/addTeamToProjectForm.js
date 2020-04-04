/**
 * @name AddTeamToProjectForm
 * @author Matthew Darby, Elisa Gonzalez (CSI 43C9 Spring 2020)
 * @overview Form to add a team to an existing project
 * @example <AddTeamToProjectForm />
 * @TODO Fix queries
 * @TODO Add styles to form.
 */

import React from "react"
import gql from "graphql-tag"
import { useForm } from "react-hook-form"
import { useQuery, useMutation } from "@apollo/react-hooks"
import FormTitle from "components/titles/formTitle"
import { GenerateOptions } from "utils/componentGeneration"

// GQL query to retreive all programs and courses
const GET_DATA = gql`
  query {
    teams {
      id
      name
    }
    projects {
      id
      name
    }
  }
`

// GQL mutation to add team to a project
const ADD_TEAM_TO_PROJECT = gql`
  mutation addTeamToProject(
    $projectID:ID!,
    $teamID:ID
  ) {
    updateProject(
      input: {
        where:{
          id: $projectID
        }
        data:{
          team: $teamID
        }
      }
    ){
      project{
        id
        team{
          id
          name
        }
      }    
  }
}
`

export default () => {
  // Various states for our query
  const { loading, error, data } = useQuery(GET_DATA)
  // Various states for our mutation
  const [
    addTeamToProject,
    { loading: mutationLoading, error: mutationError },
  ] = useMutation(ADD_TEAM_TO_PROJECT)
  // Various states for our form
  const { handleSubmit, register, errors } = useForm()

  // On form submit, we push values from our form to our GQL mutation
  const onSubmit = values => {
    addTeamToProject({
      variables: {
        // name: values.name,
        // program: values.program,
        // course: values.course,
        projectID: values.projectName,
        teamID: values.teamName,
      }
    })
  }

  return (
    <>
      <FormTitle title={"Add Team To A Project"} />
      <form onSubmit={handleSubmit(onSubmit)} name="Add Team To A Project Form">
        <br/>
        {loading && <tr>Loading...</tr>}
        {error && <tr>Error: ${error.message}</tr>}
        {data && (
          <>
            <label htmlFor="team">Team</label>
            <select
              name="teamName"
              ref={register({
                required: "This field is required.",
              })}
            >
              <option disabled selected value="">
                Select A Team
              </option>
              {GenerateOptions(data.teams, "id", "name")}
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
              <select
                  name="projectName"
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
        <br/>

        <input type="submit" />
        {mutationLoading && <p>Loading...</p>}
        {mutationError && <p>Error submitting form. Please try again.</p>}
      </form>
    </>
  )
}
