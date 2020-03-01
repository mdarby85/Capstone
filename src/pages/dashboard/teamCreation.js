/**
 * author: Mario Arturo Lopez Martinez
 * file: students.js
 *
 * Description:
 * Simple admin home for student management page
 *
 * TODO: Finish design
 */
import React from "react"

import PageTitle from "../../components/page-title"
import DashboardLayout from "../../components/layouts/dashboardLayout"
import { graphql } from "gatsby";

let numbers = [];

function CreateTeam() {

  // randomize array
  for(let i = numbers.length - 1; i > 0; i--){
    const index = Math.floor(Math.random()*(i+1));
    [numbers[i],numbers[index]] = [numbers[index],numbers[i]];
  }

  //split array into groups
  // replace 4 with the number of people that should be in a group
  let arr = [];
  let j = 0;
  for (let i = numbers.length - 1; i > 0; i--){
    if (numbers.length >= 4){
      arr[j] = numbers.splice(0, 4);
      j++;
    }
  }

  if (numbers.length > 0){
    arr[j] = numbers;
  }

  // return array into a list
  return(
    arr.map(ar=>(<li key={ar}>{ar.toString()}</li>))
  );
}

export default ({data}) => (
  <DashboardLayout>
    <PageTitle title="Students" />
    <p>Mario was here!! Wooooo</p>
    {
      data.allStrapiUser.edges.map(document => (
        <script key={document.node.id}>
          {numbers.push(document.node.Name)}
        </script>
      ))
    }
    <CreateTeam/>
  </DashboardLayout>
)

export const query = graphql `
    query HeadingQuery {
        allStrapiUser(filter: {courses: {elemMatch: {Name: {eq: "Computer Science Capstone"}}}, role: {type: {eq: "student"}}}) {
          edges {
            node {
              Name
              id
            }
          }
        }
    }
`;