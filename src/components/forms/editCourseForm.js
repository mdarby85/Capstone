/**
 * @name CreateCourseForm
 * @author Chris Holle (CSI 43C0 Spring 2020)
 * @overview Form to edit a course using GQL mutation
 * @example <EditCourseForm />
 * @TODO Add styles to form
 */

import React from "react"
import { useQuery, useMutation } from "@apollo/react-hooks"
import { useForm } from "react-hook-form"
import FormTitle from "components/titles/formTitle"
import { GET_COURSE_DEPARTMENT, EDIT_COURSE } from "data/queries"

export default ({
  id,
  prefix,
  number,
  semester,
  year,
  name,
  startDate,
  endDate,
  onEditSuccess,
}) => {
  // Various states of our query fetch
  const { loading, error, data } = useQuery(GET_COURSE_DEPARTMENT)

  // Various states of our mutation
  const [
    editCourse,
    { loading: mutationLoading, error: mutationError },
  ] = useMutation(EDIT_COURSE, {
    onCompleted: () => {
      onEditSuccess()
    },
  })

  // Various states of our form
  const { handleSubmit, register, errors } = useForm()
  const saved = false
  // On form submit, we push values from our form to our GQL mutation
  const onSubmit = values => {
    editCourse({
      variables: {
        id: id,
        name: values.name,
        year: parseInt(values.year, 10),
        semester: values.semester,
        startDate: startDate,
        endDate: endDate,
        prefix: values.prefix,
        number: values.number,
      },
    })
  }

  return (
    <div>
      <FormTitle title={"Edit A Course"} />
      <form onSubmit={handleSubmit(onSubmit)} name="Edit Course">
        <label htmlFor="name">Course Name</label>
        <input
          type="text"
          name="name"
          defaultValue={name}
          ref={register({
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
        <select name="semester" ref={register()}>
          <option disabled selected value="">
            Select A Semester
          </option>
          <option value="fall" selected={semester === "fall"}>
            Fall
          </option>
          <option value="spring" selected={semester === "spring"}>
            Spring
          </option>
          <option value="winter" selected={semester === "winter"}>
            Winter
          </option>
        </select>
        {errors.semester && <p>{errors.semester.message}</p>}
        <br />

        <label htmlFor="year">Year</label>
        <input type="number" name="year" defaultValue={year} ref={register()} />
        {errors.year && <p>{errors.year.message}</p>}
        <br />

        <label htmlFor="startDate">Start Date</label>
        <input
          name="startDate"
          type="date"
          defaultValue={startDate}
          ref={register()}
        />
        {errors.startDate && <p>{errors.startDate.message}</p>}
        <br />

        <label htmlFor="endDate">End Date</label>
        <input
          name="endDate"
          type="date"
          defaultValue={endDate}
          ref={register()}
        />
        {errors.endDate && <p>{errors.endDate.message}</p>}
        <br />

        {loading && <p>Loading...</p>}
        {error && <p>Error: ${error.message}</p>}
        {data && (
          <div>
            <label htmlFor="prefix">Course Prefix</label>
            <select name="prefix" ref={register()}>
              <option disabled selected value="">
                Select A Course Prefix
              </option>
              {data.departments.map(node => (
                <option
                  key={node.id}
                  value={node["prefix"]}
                  selected={node.prefix === prefix}
                >
                  {node["prefix"]}
                </option>
              ))}
            </select>
          </div>
        )}
        {errors.prefix && <p>{errors.prefix.message}</p>}
        <br />

        <label htmlFor="number">Course Number</label>
        <input
          name="number"
          type="text"
          defaultValue={number}
          ref={register()}
        />
        {errors.number && <p>{errors.number.message}</p>}
        <br />

        <input type="submit" />
        {mutationLoading && <p>Loading...</p>}
        {mutationError && <p>Error submitting form. Please try again.</p>}
      </form>
    </div>
  )
}
