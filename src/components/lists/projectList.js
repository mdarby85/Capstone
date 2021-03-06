/**
 * @author Mario Arturo Lopez Martinez
 * @author Chris Holle
 */

import React from "react"
import { useQuery } from "@apollo/react-hooks"
import { Mutation } from "react-apollo"
import { API_URL } from "src/constants"
import ProjectCard from "components/cards/projectCard"
import { PROJECT_DELETE_QUERY, PROJECT_QUERY } from "data/queries"

export default () => {
  const { data, loading, error } = useQuery(PROJECT_QUERY, {
    pollInterval: 5000,
  })

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
      {loading && <p>Loading...</p>}
      {error && <p>Error: ${error.message}</p>}
      {data &&
        data.projects &&
        data.projects.map(node => (
          <div key={node.id}>
            <Mutation
              mutation={PROJECT_DELETE_QUERY}
              update={client => {
                const { projects } = client.readQuery({ query: PROJECT_QUERY })
                client.writeQuery({
                  query: PROJECT_QUERY,
                  // Filter to only include users that haven't been deleted
                  data: {
                    projects: projects.filter(
                      project => project.id !== node.id
                    ),
                  },
                })
              }}
              key={node.id}
            >
              {postMutation =>
                !node.archived ? (
                  <ProjectCard
                    imgSrc={
                      node.thumbnail ? `${API_URL}${node.thumbnail.url}` : ""
                    }
                    name={node.name}
                    projID={node.id}
                    publish={node.published}
                    semester={
                      node.course
                        ? `${node.course.semester} ${node.course.year}`
                        : "Null"
                    }
                    description={node.description}
                    onChildClick={e => {
                      postMutation({ variables: { id: e } })
                    }}
                  />
                ) : (
                  ""
                )
              }
            </Mutation>
          </div>
        ))}
    </div>
  )
}
