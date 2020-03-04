import React from "react"
import { graphql } from "gatsby"
import Layout from "components/layout"
import SEO from "components/seo"
import PageTitle from "components/titles/pageTitle"
import Program from "components/programs"
import testImg from "assets/images/gatsby-icon.png"

export default ({ data }) => (
  <Layout>
    <SEO title="Programs" />
    <div className="page-container">
      <PageTitle title="Programs" />
      {data.allStrapiProgram.nodes.map(node => (
        <Program
          ImgSrc={testImg}
          Title={node.Name}
          Link={"/program/example"}
          Description={node.Description}
        />
      ))}
    </div>
  </Layout>
)

export const pageQuery = graphql`
  {
    allStrapiProgram {
      nodes {
        id
        Name
        Description
      }
    }
  }
`
