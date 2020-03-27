/**
 * @name programs.js
 * @author Isaiah Bullard (CSI 43C9 Spring 2020)
 * @overview page that lists all programs available to view
 * @TODO Do we want a static query? May need to use Apollo for dynamic data loading.
 */

import React from "react"
import { graphql } from "gatsby"
import gql from "graphql-tag"
import MainLayout from "components/layouts/mainLayout"
import { useQuery } from "@apollo/react-hooks"
import SEO from "components/seo"
import PageTitle from "components/titles/pageTitle"
import Program from "components/program"
import testImg from "assets/images/gatsby-icon.png"

const PROGRAM_QUERY = gql`
  {
    programs {
      id
      name
      description
    }
  }
`

export default () => {

  const { loading, error, data } = useQuery(PROGRAM_QUERY)

  return (
    <MainLayout>
      <SEO title="Programs"/>
      <div className="page-container">
        <PageTitle title="Programs"/>
        {loading && <p>Loading...</p>}
        {error && <p>Error: ${error.message}</p>}
        {data && ( data.programs.map((node)=> (
            <Program
              imgSrc={testImg}
              title={node.name}
              link="/program/example"
              description={node.description}
            />
          ))
        )}
        {}
      </div>
    </MainLayout>
  )
}

