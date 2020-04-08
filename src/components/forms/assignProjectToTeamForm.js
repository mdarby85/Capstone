/**
 * @name AssignProjectToTeamForm
 * @author Matthew Darby (CSI 43C9 Spring 2020)
 * @overview Form to assign a project to an existing team
 * @example <AssignProjectToTeamForm />
 */

import React from "react"
import gql from "graphql-tag"
import { useForm } from "react-hook-form"
import { useQuery, useMutation } from "@apollo/react-hooks"
import FormTitle from "components/titles/formTitle"
import { GenerateOptions } from "utils/componentGeneration"
import Button from "components/btn"

// GQL query to retreive all programs and courses
const GET_DATA = gql`
  query {
    projects {
      id
      name
    }
    teams {
      id
      name
    }
  }
`

// GQL mutation to assign a project to a team
const ASSIGN_PROJECT_TO_TEAM = gql`
  mutation AssignProjectToTeam($id: ID!, $team: ID!) {
    updateProject(input: { where: { id: $id }, data: { team: $team } }) {
      project {
        name
        id
        team {
          name
          id
        }
      }
    }
  }
`

export default ({ id }) => {
  // Various states for our query
  const { loading, error, data } = useQuery(GET_DATA)
  // Various states for our mutation
  const [
    AssignProjectToTeam,
    { loading: mutationLoading, error: mutationError },
  ] = useMutation(ASSIGN_PROJECT_TO_TEAM)
  // Various states for our form
  const { handleSubmit, register, errors } = useForm()

  // On form submit, we push values from our form to our GQL mutation
  const onSubmit = values => {
    AssignProjectToTeam({
      variables: {
        teamID: values.teamName,
        projectID: id,
      },
    })
  }

  return (
    <>
      <FormTitle title={"Assign A Project To A Team"} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        name="Assign a Project To a Team Form"
      >
        <br />
        {loading && <tr>Loading...</tr>}
        {error && <tr>Error: ${error.message}</tr>}
        {data && (
          <>
            <label htmlFor="team">Team</label>
            <br />
            <select
              name="teamName"
              ref={register({
                required: "This field is required",
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
        <hr />
        <Button small border textColor="primary-green" type={"submit"}>
          Add
        </Button>
        {mutationLoading && <p>Loading...</p>}
        {mutationError && <p>Error submitting form. Please try again.</p>}
      </form>
    </>
  )
}
