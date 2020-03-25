import React from "react"
import { graphql } from "gatsby"
import MainLayout from "components/layouts/mainLayout"
import SEO from "components/seo"
import PageTitle from "components/titles/pageTitle"
import Program from "components/programs"
import testImg from "assets/images/gatsby-icon.png"

export default ({ data }) => (
  <MainLayout>
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
  </MainLayout>
)

export const pageQuery = graphql`
  {
    allStrapiProgram {
      nodes {
        id
        name
        description
      }
    }
  }
`
