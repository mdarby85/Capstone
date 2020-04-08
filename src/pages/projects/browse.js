/**
 * @name programs.js
 * @author Isaiah Bullard (CSI 43C9 Spring 2020)
 * @overview page that lists all projects available to view
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import SEO from "components/seo"
import MainLayout from "components/layouts/mainLayout"
import PageTitle from "components/titles/pageTitle"
import { GenerateProjectCards } from "utils/componentGeneration"

export default () => {
    return (
        <MainLayout>
            <SEO title="Projects" />
            <div className="page-container">
                <PageTitle title="Projects" />
                <StaticQuery
                    query={graphql`
                        query {
                            allStrapiProject(filter: { published: { eq: true }, active: { eq: true } }) {
                                nodes {
                                    id
                                    name
                                    description
                                    thumbnail {
                                        childImageSharp {
                                            fluid {
                                                src
                                            }
                                        }
                                    }
                                    course {
                                        semester
                                        year
                                    }
                                    team {
                                        id
                                        name
                                    }
                                }
                            }
                        }
                    `}
                    render={data => GenerateProjectCards(data.allStrapiProject.nodes)}
                />
            </div>
        </MainLayout>
    )
}
