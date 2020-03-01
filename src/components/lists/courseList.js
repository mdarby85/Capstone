/**
 * @TODO Make this
 */

import React, { useState, useEffect } from "react"
import axios from "axios"

import { COURSES_API } from "src/constants"
import { GenerateCourseCards } from "src/utils"

export default () => {
  const [courses, setCourses] = useState([])

  async function fetchCourses() {
    axios.get(COURSES_API).then(response => {
      setCourses(response.data)
    })
  }

  useEffect(() => {
    fetchCourses()
  }, [])

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        height: "auto",
        paddingBottom: "3vh",
      }}
    >
      {GenerateCourseCards(courses)}
    </div>
  )
}
