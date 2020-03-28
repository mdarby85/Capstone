/**
 * @author Mario Arturo Lopez Martinez
 * @author Chris Holle
 */

import React from "react"
import { useQuery } from "@apollo/react-hooks"
import TeamCard from "components/cards/teamCard"
import { Mutation } from "react-apollo";
import { GenerateTeamCards } from "utils/componentGeneration"
import { TEAM_DELETE_QUERY, TEAM_QUERY } from "../../data/queries";

export default () => {
  const { loading, error, data } = useQuery(TEAM_QUERY);

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
      {data && data.teams && data.teams.map(node => {
        return (
          <div key={node.id}>
            <Mutation variables={node.id} mutation={TEAM_DELETE_QUERY} update={
              (client) => {
                const { teams } = client.readQuery({query: TEAM_QUERY});
                client.writeQuery({
                  query: TEAM_QUERY,
                  // Filter to only include teams that haven't been deleted
                  data: {
                    teams: teams.filter(team => team.id !== node.id)
                  }
                })
              }
            } key={node.id}>
              {postMutation =>
                <TeamCard
                  id={node.id}
                  projectName={node.project && node.project.name !== null ? node.project.name : "Unassigned"}
                  semester={node.project && node.project.course.semester !== null ? node.project.semester : ""}
                  year={node.project && node.project.course.year !== null ? node.project.year : ""}
                  teamName={node.name}
                  onChildClick={(e) => {postMutation({variables: {id: e}})}}
                />
              }

            </Mutation>
          </div>
        )
      })}
    </div>
  )
}
