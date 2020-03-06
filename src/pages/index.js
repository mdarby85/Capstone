/**
 * author: Chris Holle
 * file: index.js
 *
 * Description:
 * Main landing page.
 */
import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "reactstrap"

import Hr from "components/hr"
import SEO from "components/seo"
import Button from "components/btn"
import Layout from "components/layout"
import PageTitle from "components/titles/pageTitle"
import ProjectCard from "components/cards/projectCard"

import ecs from "assets/images/ecs_img.png"
import bin from "assets/images/binary_img.png"
import grayBg from "assets/images/why-r1_bkg.jpg"
import rocket from "assets/images/rocketShip.png"
import tempImg from "assets/images/green_science.jpg"
import LabBg from "assets/images/greenLabPeople.jpg"

let Section1Container = styled.div`
  background: url(${LabBg});
  height: 100vh;
`

let Section1Title = styled.h1`
  text-align: center;
  margin-top: 6em;
  font-weight: 500;
  color: white;
`

let Section1p = styled.p`
  margin: 0 30em;
  line-height: 1.5;
  font-size: 18px;
  color: white;
`

let Section2Container = styled.div`
  background: url(${grayBg});
  padding: 4em 6em;
  margin-top: 10em;
  min-height: 550px;
`

let Section2Title = styled.h1`
  text-align: left;
  padding-top: 2em;
  font-weight: 600;
  font-size: 36px;
  color: ${props => props.theme.secondaryGold};
`

let Section2p = styled.p`
  line-height: 1.5;
  margin-top: 2em;
  color: white;
`

let Section2img = styled.img`
  max-height: 280px;
  margin-top: 4em;
  float: right;
`

let Section3Container = styled.div`
  padding: 4em 6em;
  margin: 3em 0;
  min-height: 550px;
`

let Section3p = styled.p`
  line-height: 1.5;
  color: #1a1a1a;
`

let Section3img = styled.img`
  max-height: 180px;
  margin: auto;
  display: block;
`

let ImageTitle = styled.h3`
  margin-top: 1em;
  font-size: 28px;
  font-weight: 600;
  text-align: center;
  color: ${props => props.theme.primaryGreen};
`

export default () => (
  <Layout>
    <SEO title="Home" />
    <Section1Container className="pt-4">
      <div className="text-center">
        <Section1Title>Baylor Capstone Program</Section1Title>
        <Hr />
        <Section1p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore.
        </Section1p>
        <Row>
          <Col>
            <div className="text-right py-5">
              <Button
                to="/programs"
                className="btn btn-primary btn-lg"
                textColor="white"
                solid
                medium
              >
                Try
              </Button>
            </div>
          </Col>
          <Col>
            <div className="text-left py-5">
              <Button
                to="/programs"
                className="btn btn-primary btn-lg"
                textColor="primary-green"
                border
                medium
              >
                Learn More
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </Section1Container>
    <Container className="py-5">
      <Row>
        <Col>
          <PageTitle title={"Latest Projects"} />
        </Col>
        <Col>
          <div className="text-right py-5">
            <Button
              to="/programs"
              className="btn btn-primary btn-md"
              textColor="primary-green"
              border={true}
              medium
            >
              View all
            </Button>
          </div>
        </Col>
      </Row>
      <Row style={{ margin: "1em 0" }}>
        <Col>
          <ProjectCard
            Name={"Cappy"}
            Semester={"Spring 2020"}
            ImgSrc={tempImg}
            Description={
              "This is a story of the great big wolf who blew all of the little piggies houses down!"
            }
            to={"/about"}
          />
        </Col>
        <Col>
          <ProjectCard
            Name={"Cappy"}
            Semester={"Spring 2020"}
            ImgSrc={tempImg}
            Description={
              "This is a story of the great big wolf who blew all of the little piggies houses down!"
            }
            to={"/about"}
          />
        </Col>
        <Col>
          <ProjectCard
            Name={"Cappy"}
            Semester={"Spring 2020"}
            ImgSrc={tempImg}
            Description={
              "This is a story of the great big wolf who blew all of the little piggies houses down!"
            }
            to={"/about"}
          />
        </Col>
      </Row>
    </Container>
    <Section2Container>
      <Row>
        <Col xs="8">
          <Section2Title>Why Partner with Baylor Capstone?</Section2Title>
          <Section2p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore.
          </Section2p>
        </Col>
        <Col>
          <Section2img src={rocket} />
        </Col>
      </Row>
    </Section2Container>

    <Section3Container>
      <Row>
        <Col xs="7">
          <PageTitle title={"Programs"} />
          <Section3p className={"pr-5"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore.
          </Section3p>
          <div className="py-5">
            <Button
              to="/programs"
              className="btn btn-primary btn-lg"
              textColor="primary-green"
              border
              medium
            >
              View Programs
            </Button>
          </div>
        </Col>
        <Col>
          <Row>
            <Col>
              <Section3img src={ecs} />
              <ImageTitle> Computer Science</ImageTitle>
            </Col>
            <Col>
              <Section3img src={ecs} />
              <ImageTitle> Engineering</ImageTitle>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <Section3img src={bin} />
              <ImageTitle>Bio-informatics</ImageTitle>
            </Col>
            <Col>
              <Section3img src={bin} />
              <ImageTitle>Business</ImageTitle>
            </Col>
          </Row>
        </Col>
      </Row>
    </Section3Container>
  </Layout>
)
