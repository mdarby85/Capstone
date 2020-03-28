/**
 * @name CourseList
 *
 * @author Mario Arturo Lopez Martinez
 * @author Chris Holle
 *
 * @overview @TODO
 *
 * @TODO: Add functionality for edit (link to edit form)
 */

import React from "react"
import { useQuery } from "@apollo/react-hooks"
import { GenerateCourseCards } from "utils/componentGeneration"
import CourseCard from "components/cards/courseCard"
import { Mutation } from "react-apollo";
import { COURSE_DELETE_QUERY, COURSE_QUERY } from "../../data/queries";


const SectionStyle = {
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
  height: "auto",
  paddingBottom: "3vh",
};

export default () => {
  const { loading, error, data } = useQuery(COURSE_QUERY);

  return (
    <div style={SectionStyle}>
      {loading && <p>Loading...</p>}
      {error && <p>Error: ${error.message}</p>}
      {data && data.courses &&
        data.courses.map(node => (
        <div key={node.id}>
          <Mutation variables={node.id} mutation={COURSE_DELETE_QUERY} update={
            (client) => {
              const { courses } = client.readQuery({query: COURSE_QUERY});
              client.writeQuery({
                query: COURSE_QUERY,
                // Filter to only include courses that haven't been deleted
                data: {
                  courses: courses.filter(course => course.id !== node.id)
                }
              })
            }
          } key={node.id}>
            { postMutation =>
              <CourseCard
              name={node.name}
              number={node.number}
              semester={node.semester}
              active={node.active}
              prefix={node.prefix}
              year={node.year}
              id={node.id}
              onChildClick={(e) => {postMutation({variables: {id: e}})}}
            />
            }
          </Mutation>
        </div>
      ))
      }
    </div>
  )
}
