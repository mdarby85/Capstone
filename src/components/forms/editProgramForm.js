/**
 * @name editProgramForm
 * @author Chris Holle (CSI 43C0 Spring 2020)
 * @overview Form to edit a program using GQL mutation
 * @example <EditCourseForm />
 * @TODO Add styles to form
 */

import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { useForm } from "react-hook-form"
import FormTitle from "components/titles/formTitle"
import { GenerateOptions } from "utils/componentGeneration"
import { EDIT_PROGRAM, IMAGE_QUERY } from "../../data/queries";
import { TEST_USER_ID } from "../../constants";


export default ({ progID, progName, progDescription, progThumbnail, onEditSuccess}) => {
  // Various states of our mutation
  const [
    editProgram,
    { loading: mutationLoading, error: mutationError },
  ] = useMutation(EDIT_PROGRAM, {
    onCompleted: () => {onEditSuccess()}
  });

  const { data, loading, error } = useQuery(IMAGE_QUERY, {variables: {id: TEST_USER_ID}});
  const [description, setDescription] = useState(progDescription);

  // Various states of our form
  const { handleSubmit, register, errors } = useForm();
  // On form submit, we push values from our form to our GQL mutation
  const onSubmit = values => {
    editProgram({
      variables: {
        id: progID,
        name: values.name,
        description: description,
        thumbnail: values.thumbnail
      },
    });
  };

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
        <label htmlFor="thumbnail">Image</label>
        <select
          name="thumbnail"
          ref={register()}
        >
          <option disabled selected value="">
            Select An Image
          </option>
          {data && data.user && data.user.mediaLibrary.map(img => (
            <option key={img.id} value={img.id} selected={img.id === progThumbnail}>{img.name}</option>
          ))}
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
