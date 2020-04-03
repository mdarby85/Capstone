/**
 * @author: Chris Holle, Elisa Gonzalez
 * @name: queries.js
 * @description: File that contains all GraphQL queries.
 *
 */
import { gql } from "apollo-boost"

// Course Queries
export const COURSE_QUERY = gql`
  {
    courses {
      id
      name
      semester
      startDate
      endDate
      year
      prefix
      number
      active
      archived
    }
  }
`;

/**
 * GraphQL Mutation
 * Delete course by ID
 */
export const COURSE_DELETE_QUERY = gql`
  mutation DELETE_COURSE ($id: ID!)
  {
    deleteCourse(input: {where: {id: $id}}) {
      course {
        id
        name
        semester
        year
        prefix
        number
        active
        archived
      }
    }
  }
`;

// GQL query that pulls all departments for use in Course Forms
export const GET_COURSE_DEPARTMENT = gql`
  query {
    departments {
      id
      prefix
    }
  }
`;

// GQL mutation that allows us to edit a course
export const EDIT_COURSE = gql`
  mutation EditCourse(
    $id: ID!
    $name: String
    $year: Int
    $semester: String
    $startDate: Date
    $endDate: Date
    $prefix: String
    $number: String
  ) {
    updateCourse(
      input: {
        where: { id: $id},
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
        id
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
`;

// Image Queries
export const IMAGE_QUERY = gql`
query IMAGE_QUERY($id: ID!) {
  user (id: $id) {
    mediaLibrary {
      name
      url
      id
    }
  }
}
`;

// Image Upload
export const USER_IMAGE_UPLOAD_MUTATION = gql`
mutation UploadUserImages($id: ID! $imgID: [ID]) {
  updateUser(input: { 
    where: {id: $id},
    data: {
      mediaLibrary: $imgID
    }
  })  {
    user {
      name
    	id
      mediaLibrary {
        name
        id
        url
      }
    }
  }
}
`;


// Program Queries
export const PROGRAM_QUERY = gql`
  query {
    programs {
      id
      name
      description
      thumbnail {
        name
        id
      }
    }
  }
`;

export const CREATE_PROGRAM_MUTATION = gql`
  mutation Create_Program(
    $name: String
    $description: String
    $thumbnail: ID
  ) {
    createProgram(
      input: {
        data: {
          name: $name
          description: $description
          thumbnail: $thumbnail
        }
      }
    ) {
      program {
        name
        description
      }
    }
  }
`;

export const PROGRAM_DELETE = gql`
  mutation DELETE_PROGRAM ($id: ID!)
  {
    deleteProgram(input: {where: {id: $id}}) {
      program {
        name
        id
      }
    }
  }
`;

// GQL mutation that allows us to create a course
export const EDIT_PROGRAM = gql`
  mutation EditProgram(
    $id: ID!
    $name: String
    $description: String
    $thumbnail: ID
  ) {
    updateProgram(
      input: {
        where: { id: $id},
        data: {
          name: $name
          description: $description
          thumbnail: $thumbnail
        }
      }
    ) {
      program {
        id
        name
        description
      }
    }
  }
`;

// Project Queries
export const PROJECT_QUERY = gql`
  {
    projects {
      id
      name
      description
      active
      archived
      published
      thumbnail {
        url
      }
      course {
        semester
        year
      }
    }
  }
`;

/**
 * GraphQL Mutation
 * Delete project by ID
 */
export const PROJECT_DELETE_QUERY = gql`
  mutation DELETE_PROJECT ($id: ID!)
  {
    deleteProject(input: {where: {id: $id}}) {
      project {
        id
        name
        description
        active
        archived
        thumbnail {
          url
        }
        course {
          semester
          year
        }
      }
    }
  }
`;
/**
 * GraphQL Mutation
 * Publish/Unpublish Project
 */
export const PROJECT_PUBLISH_QUERY = gql`
mutation EditProject(
  $id: ID!
  $published: Boolean!
  ) {
  updateProject(
    input: {
      where: { id: $id},
      data: {
        published: $published
      }
    }
  ) {
    project {
      id
      name
      published
    }
  }
}`;

// Team Queries
export const TEAM_QUERY = gql`
  {
    teams {
      id
      name
      archived
      project {
        name
        course {
          semester
          year
        }
      }
    }
  }
`;

/**
 * GraphQL Mutation
 * Delete course by ID
 */
export const TEAM_DELETE_QUERY = gql`
  mutation DELETE_TEAM ($id: ID!)
  {
    deleteTeam(input: {where: {id: $id}}) {
      team {
        id
        name
        archived
        project {
          name
          course {
            semester
            year
          }
        }
      }
    }
  }
`;

/**
 * CREATE_TEAM
 * Description:
 *      creates a team from the given parameters
 * Parameters:
 *      projectID: id of project team will be assigned to
 *      studentsID: list of student ID's on team
 *      name: team name
 *      courseID: id of course team will be in
 *      logo: id? of picture (not required)
 */
export const CREATE_TEAM = gql`
 mutation CreateTeam(
   $projectID:ID!
   $studentsID:[ID]
   $name:String!
   $courseID:ID!
 ){
   createTeam(
     input:{
       data:{
         name:$name
         project:$projectID
         course:$courseID
         users:$studentsID
       }
     }
   ){
     team{
       name
       project{
         id
         name
       }
       course{
         id
         name
       }
       users{
         id
         name
       }
       logo{
         id
         name
       }
     }
   }
 }
`;

export const CREATE_TEAM_INFO = gql`
query GET_INFO{
  courses{
    id
    name
    projects{
      id
      name
    }
  }
  projects{
    id
    name
  }
  users(where: { roleLabel: "student" }) {
     id
     name
  }
  teams{
    id
    name
  }   
}
`;

// User Queries

// Professor Queries
export const PROFESSOR_QUERY = gql`
  {
    users(where: { roleLabel: "professor" }) {
      id
      name
      email
      archived
      roleLabel
      departments {
        name
      }
    }
  }
`;

// Sponsor Queries
export const SPONSOR_QUERY = gql`
  {
    users(where: { roleLabel: "sponsorContact" }) {
      id
      name
      email
      archived
      roleLabel
    }
  }
`;

/**
 * GraphQL query
 * Pull all Students to populate table
 * TODO: add functionality to only pull students connected with a professor
 * TODO: Get rid of the hardcoding
 */
export const STUDENT_QUERY = gql`
  {
    users(where: { roleLabel: "student" }) {
      id
      name
      email
      archived
      confirmed
      roleLabel
      archived
    }
  }
`;

/**
 * GraphQL Mutation
 * Delete user by ID
 */
export const USER_DELETE_QUERY = gql`
mutation DELETE_USER ($id: ID!)
{
  deleteUser(input: {where: {id: $id}}) {
    user {
      name
      id
      email
      roleLabel
    }
  }
}
`;

/**
 * GraphQL Mutation
 * Edit user by ID
 */
export const USER_EDIT_QUERY = gql`
mutation ($id: ID!, $name: String, $email: String, $roleLabel: String, $archived: Boolean)
{
  updateUser(input: {
      where: {
        id: $id
      },
      data: { 
        name: $name,
        email: $email,
        roleLabel: $roleLabel
        archived: $archived
      }
    }) {
    user {
      name
      id
      email
      roleLabel
      archived
    }
  }
}
`;