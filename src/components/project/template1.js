import React from "react"
import { graphql } from "gatsby"
import { Col, Row } from "reactstrap"
import MainLayout from "components/layouts/mainLayout"
import PageTitle from "components/titles/pageTitle"
import ProjectCard from "components/cards/projectCard"
import TeamMemberCard from "components/cards/teamMemberCard"
import image from "assets/images/gatsby-icon.png"
import tempImg from "assets/images/green_science.jpg"
import { STATIC_API_URL } from "src/constants"
import {
    Section1Container,
    Section1Image,
    Section1Title,
    Section1p,
    Section2ContainerPrimary,
    Section2ContainerSecondary,
    Section2TitlePrimary,
    Section2HrPrimary,
    Section2HrSecondary,
    Section2TitleSecondary,
    Section2pPrimary,
    Section2pSecondary,
    Section3Container,
    Section3Divider,
    Section4Container,
    Section4Image,
    Section4TitleMain,
    Section4Hr,
    Section4TitleSub,
    Section4p,
} from "./styles"
import { GenerateTeamMemberCards } from "utils/componentGeneration"

export const STATIC_PROJECT_QUERY = graphql`
    query Project($id: String!) {
        project: strapiProject(id: { eq: $id }, published: { eq: true }, active: { eq: true }) {
            id
            name
            description
            background
            process
            introduction
            deliverables
            sponsors {
                name
                description
                thumbnail {
                    childImageSharp {
                        fluid {
                            src
                        }
                    }
                }
            }
            thumbnail {
                childImageSharp {
                    fluid {
                        src
                    }
                }
            }
            team {
                id
                users
            }
        }
    }
`

export default ({ data }) => {
    return (
        <MainLayout>
            {data && (
                <>
                    <Row>
                        <Col>
                            <Section1Image
                                src={
                                    data.project.thumbnail
                                        ? `${STATIC_API_URL}${data.project.thumbnail.childImageSharp.fluid.src}`
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
                    {data.project.background && (
                        <Section2ContainerPrimary>
                            <Section2TitlePrimary>Background</Section2TitlePrimary>
                            <Section2HrPrimary />
                            <Section2pPrimary>{data.project.background}</Section2pPrimary>
                        </Section2ContainerPrimary>
                    )}
                    {data.project.introduction && (
                        <Section2ContainerSecondary>
                            <Section2TitleSecondary>Introduction</Section2TitleSecondary>
                            <Section2HrSecondary />
                            <Section2pSecondary>{data.project.introduction}</Section2pSecondary>
                        </Section2ContainerSecondary>
                    )}
                    {data.project.process && (
                        <Section2ContainerPrimary>
                            <Section2TitlePrimary>Process</Section2TitlePrimary>
                            <Section2HrPrimary />
                            <Section2pPrimary>{data.project.process}</Section2pPrimary>
                        </Section2ContainerPrimary>
                    )}
                    {data.project.deliverables && (
                        <Section2ContainerSecondary>
                            <Section2TitleSecondary>Deliverables</Section2TitleSecondary>
                            <Section2HrSecondary />
                            <Section2pSecondary>{data.project.deliverables}</Section2pSecondary>
                        </Section2ContainerSecondary>
                    )}
                    <Section3Container>
                        <PageTitle title="Project Updates (WIP)" center />
                        <Row style={{ margin: "0 auto 5rem auto" }}>
                            <Col>
                                <ProjectCard
                                    name="Team Creation"
                                    semester="03/01/2020"
                                    imgSrc={tempImg}
                                    description="This is a story of the great big wolf who blew all of the little piggies houses down!"
                                    to="/about"
                                />
                            </Col>
                            <Col>
                                <ProjectCard
                                    name="Project Templates"
                                    semester="02/25/2020"
                                    imgSrc={tempImg}
                                    description="This is a story of the great big wolf who blew all of the little piggies houses down!"
                                    to="/about"
                                />
                            </Col>
                            <Col>
                                <ProjectCard
                                    name="Team Calendar"
                                    semester="02/20/2020"
                                    imgSrc={tempImg}
                                    description="This is a story of the great big wolf who blew all of the little piggies houses down!"
                                    to="/about"
                                />
                            </Col>
                        </Row>
                        <Section3Divider />
                        <PageTitle title="Team Members" center />
                        <Row style={{ margin: "0 auto 5rem auto" }}>
                            <TeamMemberCard
                                imgSrc={image}
                                name="Chris Holle"
                                department="Baylor Computer Science"
                                role="Full-Stack Development"
                            />
                            {GenerateTeamMemberCards(data.project.team.users)}
                        </Row>
                    </Section3Container>
                    {data.project.sponsors &&
                        data.project.sponsors.map((sponsor, index) => {
                            return (
                                <Section4Container key={index}>
                                    <Row>
                                        <Col md={6}>
                                            <Section4Image
                                                src={
                                                    sponsor.thumbnail
                                                        ? `${STATIC_API_URL}${sponsor.thumbnail.childImageSharp.fluid.src}`
                                                        : ""
                                                }
                                            />
                                        </Col>
                                        <Col>
                                            <Section4TitleMain>Sponsor</Section4TitleMain>
                                            <Section4Hr />
                                            <Section4TitleSub>{sponsor.name}</Section4TitleSub>
                                            <Section4p>{sponsor.description}</Section4p>
                                        </Col>
                                    </Row>
                                </Section4Container>
                            )
                        })}
                </>
            )}
        </MainLayout>
    )
}
