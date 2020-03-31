/**
 * @author: Chris Holle
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
      year
      prefix
      number
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
      }
    }
  }
`;


// Program Queries
export const PROGRAM_QUERY = gql`
  {
    programs {
      id
      name
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

// Project Queries
export const PROJECT_QUERY = gql`
  {
    projects {
      id
      name
      description
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

// Team Queries
export const TEAM_QUERY = gql`
  {
    teams {
      id
      name
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


// User Queries
/**
 * GraphQL query
 * Pull all Students to populate table
 * TODO: add functionality to only pull students connected with a professor
 */
export const STUDENT_QUERY = gql`
  {
    users(where: { roleLabel: "student" }) {
      id
      name
      email
      roleLabel
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