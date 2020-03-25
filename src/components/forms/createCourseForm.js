/**
 * @name CreateCourseForm
 *
 * @author Mario Arturo Lopez Martinez
 *
 * @overview @TODO
 */

import React from "react"
import gql from "graphql-tag"
import { useForm } from "react-hook-form"
import { useQuery, useMutation } from "@apollo/react-hooks"
import FormTitle from "components/titles/formTitle"
import { GenerateOptions } from "src/utils"

const GET_PROGRAMS = gql`
  query {
    departments {
      id
      prefix
    }
  }
`

const CREATE_COURSE = gql`
  mutation CreateCourse(
    $name: String!
    $year: Int!
    $semester: String!
    $startDate: Date
    $endDate: Date
    $prefix: String
    $number: String
  ) {
    createCourse(
      input: {
        data: {
          name: $name
          year: $year
          semester: $semester
          startDate: $startDate
          endDate: $endDate
          prefix: $prefix
          number: $number
        }
      }
    ) {
      course {
        name
        year
        semester
        startDate
        endDate
        prefix
        number
      }
    }
  }
`

export default () => {
  const { loading, error, data } = useQuery(GET_PROGRAMS)
  const [
    createCourse,
    { loading: mutationLoading, error: mutationError },
  ] = useMutation(CREATE_COURSE)
  const { handleSubmit, register, errors } = useForm()

  const onSubmit = values => {
    createCourse({
      variables: {
        name: values.name,
        year: parseInt(values.year, 10),
        semester: values.semester,
        startDate: values.startDate,
        endDate: values.endDate,
        prefix: values.prefix,
        number: values.number,
      },
    })
  }

  return (
    <>
      <FormTitle title={"Create A Course"} />
      <form onSubmit={handleSubmit(onSubmit)} name="Create A Course Form">
        <label htmlFor="name">Course Name</label>
        <input
          type="text"
          name="name"
          ref={register({
            required: "This field is required.",
            maxLength: {
              value: 50,
              message: "The maximum course name length is 50 characters.",
            },
            minLength: {
              value: 2,
              message: "The minimum coures name length is 2 characters.",
            },
          })}
        />
        {errors.name && <p>{errors.name.message}</p>}
        <br />

        <label htmlFor="semester">Semester</label>
        <select
          name="semester"
          ref={register({ required: "This field is required." })}
        >
          <option disabled selected value="">
            Select A Semester
          </option>
          <option value="fall">Fall</option>
          <option value="spring">Spring</option>
          <option value="winter">Winter</option>
        </select>
        {errors.semester && <p>{errors.semester.message}</p>}
        <br />

        <label htmlFor="year">Year</label>
        <input
          type="number"
          name="year"
          ref={register({ required: "This field is required." })}
        />
        {errors.year && <p>{errors.year.message}</p>}
        <br />

        <label htmlFor="startDate">Start Date</label>
        <input
          name="startDate"
          type="date"
          ref={register({ required: "This field is required." })}
        />
        {errors.startDate && <p>{errors.startDate.message}</p>}
        <br />

        <label htmlFor="endDate">End Date</label>
        <input
          name="endDate"
          type="date"
          ref={register({ required: "This field is required." })}
        />
        {errors.endDate && <p>{errors.endDate.message}</p>}
        <br />

        {loading && <tr>Loading...</tr>}
        {error && <tr>Error: ${error.message}</tr>}
        {data && (
          <>
            <label htmlFor="prefix">Course Prefix</label>
            <select
              name="prefix"
              ref={register({
                required: "This field is required.",
              })}
            >
              <option disabled selected value="">
                Select A Course Prefix
              </option>
              {GenerateOptions(data.departments, "id", "prefix")}
            </select>
          </>
        )}
        {errors.prefix && <p>{errors.prefix.message}</p>}
        <br />

        <label htmlFor="number">Course Number</label>
        <input
          name="number"
          type="text"
          ref={register({
            required: "This field is required.",
          })}
        />
        {errors.number && <p>{errors.number.message}</p>}
        <br />

        <input type="submit" />
        {mutationLoading && <p>Loading...</p>}
        {mutationError && <p>Error submitting form. Please try again.</p>}
      </form>
    </>
  )
}
