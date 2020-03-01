import React from "react"

import Layout from "../components/layout"
import PageTitle from "../components/page-title"
import Program from "../components/programs"
import testImg from "../assets/images/gatsby-icon.png"
import { graphql } from "gatsby"

export default ({data}) => (
  <Layout>
    <div className="page-container">
      <PageTitle title="Programs" />

      {data.allStrapiProgram.edges.map(program =>
        <Program
          ImgSrc={testImg}
          Title={program.node.Name}
          Link={"/program/example"}
          Description={program.node.Description}
        />
      )}
    </div>
  </Layout>
)

export const pageQuery = graphql`
{
  allStrapiProgram {
    edges {
      node {
        id
        Name
        Description
      }
    }
  }
}
`
