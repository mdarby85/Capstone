/**
 * @name editProgramForm
 * @author Chris Holle (CSI 43C0 Spring 2020)
 * @overview Form to edit a program using GQL mutation
 * @example <EditCourseForm />
 * @TODO Add styles to form
 */

import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks"
import { useForm } from "react-hook-form"
import FormTitle from "components/titles/formTitle"
import { GenerateOptions } from "utils/componentGeneration"
import { EDIT_PROGRAM } from "../../data/queries";


export default ({ progID, progName, progDescription, onEditSuccess}) => {
  // Various states of our mutation
  const [
    editProgram,
    { loading: mutationLoading, error: mutationError },
  ] = useMutation(EDIT_PROGRAM, {
    onCompleted: () => {onEditSuccess(); console.log("finished")}
  });

  // Various states of our form
  const { handleSubmit, register, errors } = useForm();
  // On form submit, we push values from our form to our GQL mutation
  const onSubmit = values => {
    editProgram({
      variables: {
        id: progID,
        name: values.name,
        description: description
      },
    });
  };
  const [description, setDescription] = useState(progDescription);

  function handleChange(event) {
    setDescription(event.target.value);
  }

  return (
    <div>
      <FormTitle title={"Edit Program"} />
      <form onSubmit={handleSubmit(onSubmit)} name="Edit Program">
        <label htmlFor="name">Program Name
          <input
            type="text"
            name="name"
            defaultValue={progName}
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
        </label>
        {errors.name && <p>{errors.name.message}</p>}
        <br />

        <label htmlFor="description">Description
          <textarea value={description} name="description" onChange={handleChange}
                  />
        </label>
        <br />
        {/*TODO: Add functionality to pull image from image Library */}
        <label htmlFor="image">Image</label>
        <select
          name="image"
          ref={register()}
        >
          <option disabled selected value="">
            Select An Image
          </option>
          <option value="fall">Image 1</option>
          <option value="spring">Image 2</option>
          <option value="winter">Image 3</option>
        </select>
        {errors.semester && <p>{errors.semester.message}</p>}
        <br />

        <input type="submit" />
        {mutationLoading && <p>Loading...</p>}
        {mutationError && <p>Error submitting form. Please try again.</p>}
      </form>
    </div>
  )
}
