/**
 * author: Chris Holle
 * file: about.js
 *
 * Description:
 * About page that displays information about Baylor's Capstone program.
 *
 * Currently being used to showcase components.
 *
 */
import React from "react"
import { Col, Row } from "reactstrap"

import SEO from "components/seo"
import Layout from "components/layout"
import Search from "components/search"
import PageTitle from "components/titles/pageTitle"
import TeamMemberCard from "components/cards/teamMemberCard"
import ContactCard from "components/cards/contactCard"
import CourseCard from "components/cards/courseCard"
import ProjectCard from "components/cards/projectCard"
import TeamCard from "components/cards/teamCard"

import image from "assets/images/gatsby-icon.png"
import tempImg from "assets/images/green_science.jpg"

export default () => (
  <Layout>
    <SEO title="About" />
    <div className="page-container">
      <PageTitle title="About" />
      <PageTitle title="UI - Cards" />
      <Row>
        <Col>
          <TeamMemberCard
            imgSrc={image}
            name={"Chris Holle"}
            department={"Baylor Computer Science"}
            role={"Full-Stack Development"}
          />
        </Col>
        <Col>
          <TeamMemberCard
            imgSrc={image}
            name={"Chris Holle"}
            department={"Baylor Computer Science"}
            role={"Full-Stack Development"}
          />
        </Col>
        <Col>
          <TeamMemberCard
            imgSrc={image}
            name={"Chris Holle"}
            department={"Baylor Computer Science"}
            role={"Full-Stack Development"}
          />
        </Col>
      </Row>
      <Row style={{ margin: "5em 0" }}>
        <Col>
          <ContactCard
            imgSrc={image}
            name={"Chris Holle"}
            department={"Baylor Computer Science"}
            role={"Full-Stack Development"}
            email={"john_doe@baylor.edu"}
            phone={"(823) 418-2083"}
          />
        </Col>
        <Col>
          <ContactCard
            imgSrc={image}
            name={"Chris Holle"}
            department={"Baylor Computer Science"}
            role={"Full-Stack Development"}
            email={"john_doe@baylor.edu"}
            phone={"(823) 418-2083"}
          />
        </Col>
        <Col>
          <ContactCard
            imgSrc={image}
            name={"Chris Holle"}
            department={"Baylor Computer Science"}
            role={"Full-Stack Development"}
            email={"john_doe@baylor.edu"}
            phone={"(823) 418-2083"}
          />
        </Col>
      </Row>
      <Row style={{ margin: "5em 0" }}>
        <Col>
          <CourseCard
            name={"CSI 43C9 - Section 02"}
            semester={"Spring 2020"}
            active
          />
        </Col>
        <Col>
          <CourseCard
            name={"CSI 43C9 - Section 02"}
            semester={"Spring 2020"}
            active={false}
          />
        </Col>
        <Col>
          <CourseCard
            name={"CSI 43C9 - Section 02"}
            semester={"Spring 2020"}
            active={false}
          />
        </Col>
      </Row>

      <Row style={{ margin: "5em 0" }}>
        <Col>
          <ProjectCard
            name={"Cappy"}
            semester={"Spring 2020"}
            imgSrc={tempImg}
            description={
              "This is a story of the great big wolf who blew all of the little piggies houses down!"
            }
            to={"/about"}
          />
        </Col>
        <Col>
          <ProjectCard
            name={"Cappy"}
            semester={"Spring 2020"}
            imgSrc={tempImg}
            description={
              "This is a story of the great big wolf who blew all of the little piggies houses down!"
            }
            to={"/about"}
          />
        </Col>
        <Col>
          <ProjectCard
            name={"Cappy"}
            semester={"Spring 2020"}
            imgSrc={tempImg}
            description={
              "This is a story of the great big wolf who blew all of the little piggies houses down!"
            }
            to={"/about"}
          />
        </Col>
      </Row>

      <TeamCard
        projectName={"Cappy"}
        teamName={"Section 01 - Pariveda02"}
        semester={"Spring 2020"}
        imgSrc={tempImg}
        to={"/about"}
      />
      <Search />
    </div>
  </Layout>
)
