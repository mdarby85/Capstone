/**
 * @name CreateProjectForm
 * @author Mario Arturo Lopez Martinez (CSI 43C9 Spring 2020)
 * @overview Form to create a new project
 * @example <CreateProjectForm />
 * @TODO Add styles to form.
 * @TODO: Add thumbnail on Create for now
 * @TODO: Move queries to queries file
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
    programs {
      id
      name
    }
    courses {
      id
      name
    }
  }
`;

// GQL mutation to create a new project
const CREATE_PROJECT = gql`
  mutation CreateProject(
    $name: String!
    $startDate: Date!
    $endDate: Date!
    $description: String
    $program: ID
    $course: ID
  ) {
    createProject(
      input: {
        data: {
          name: $name
          startDate: $startDate
          endDate: $endDate
          description: $description
          program: $program
          course: $course
        }
      }
    ) {
      project {
        name
        startDate
        endDate
        description
        program {
          id
        }
        course {
          id
        }
      }
    }
  }
`;

export default ({ onCreateSuccess }) => {
  // Various states for our query
  const { loading, error, data } = useQuery(GET_DATA);
  // Various states for our mutation
  const [
    createProject,
    { loading: mutationLoading, error: mutationError },
  ] = useMutation(CREATE_PROJECT, {
    onCompleted: () => { onCreateSuccess(); }
  });
  // Various states for our form
  const { handleSubmit, register, errors } = useForm();

  // On form submit, we push values from our form to our GQL mutation
  const onSubmit = values => {
    createProject({
      variables: {
        name: values.name,
        startDate: values.startDate,
        endDate: values.endDate,
        description: values.description,
        program: values.program,
        course: values.course,
      },
    })
  }

  return (
    <div>
      <FormTitle title={"Create A Project"} />
      <form onSubmit={handleSubmit(onSubmit)} name="Create A Project Form">
        <label htmlFor="name">Project Name</label>
        <input
          type="text"
          name="name"
          ref={register({
            required: "This field is required.",
            minLength: {
              value: 2,
              message: "The minimum length of a project name is 2 characters.",
            },
            maxLength: {
              value: 50,
              message: "The maximum length of a project name is 50 characters.",
            },
          })}
        />
        {errors.name && <p>{errors.name.message}</p>}
        <br />

        {loading && <tr>Loading...</tr>}
        {error && <tr>Error: ${error.message}</tr>}
        {data && (
          <div>
            <label htmlFor="courese">Course</label>
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
            {errors.course && <p>{errors.course.message}</p>}
            <br />

            <label htmlFor="program">Program</label>
            <select
              name="program"
              ref={register({
                required: "This field is required.",
              })}
            >
              <option disabled selected value="">
                Select A Program
              </option>
              {GenerateOptions(data.programs, "id", "name")}
            </select>
            {errors.program && <p>{errors.program.message}</p>}
          </div>
        )}
        <br />

        <label htmlFor="startDate">Start Date</label>
        <input
          name="startDate"
          type="date"
          ref={register({
            required: "This field is required.",
          })}
        />
        {errors.startDate && <p>{errors.startDate.message}</p>}
        <br />

        <label htmlFor="endDate">End Date</label>
        <input
          name="endDate"
          type="date"
          ref={register({
            required: "This field is required.",
          })}
        />
        {errors.endDate && <p>{errors.endDate.message}</p>}
        <br />

        <label htmlFor="description">Project Description</label>
        <input
          name="description"
          type="text"
          ref={register({
            maxLength: {
              value: 500,
              message: "The maximum department name length is 500 characters.",
            },
          })}
        />
        <br />

        <input type="submit" />
        {mutationLoading && <p>Loading...</p>}
        {mutationError && <p>Error submitting form. Please try again.</p>}
      </form>
    </div>
  )
}
