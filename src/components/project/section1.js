/**
 * @name project/example.js
 * @author Chris Holle
 * @overview Program example page to show projects from within a particular program.
 */

import React from "react"
import { Col, Row } from "reactstrap"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"
import { API_URL } from "src/constants"
import {
  Section1Container,
  Section1Image,
  Section1Title,
  Section1p,
} from "./styledComponents"

/*
 * Section1
 * - Large Project Image(left)
 * - Large title with short description(right)
 */

const GET_PROJECT_INFO = gql`
  query {
    project(id: "5e49c97308a2d909c42d63eb") {
      id
      name
      description
      thumbnail {
        url
      }
    }
  }
`

export default () => {
  const { loading, error, data } = useQuery(GET_PROJECT_INFO)

  return (
    <>
      {/* Section 1 */}
      {error && <tr>Error: ${error.message}</tr>}
      {loading && <p>Loading...</p>}
      {data && (
        <Row>
          <Col>
            <Section1Image
              src={
                data.project.thumbnail
                  ? `${API_URL}${data.project.thumbnail.url}`
                  : ""
              }
            />
          </Col>
          <Col>
            <Section1Container>
              <Section1Title>{data.project.name}</Section1Title>
              <Section1p>{data.project.description}</Section1p>
            </Section1Container>
          </Col>
        </Row>
      )}
    </>
  )
}
