/**
 * @name project/example.js
 * @author Chris Holle
 * @overview Program example page to show projects from within a particular program.
 */

import React from "react"
import { Col, Row } from "reactstrap"

import PageTitle from "components/titles/pageTitle"
import ProjectCard from "components/cards/projectCard"
import TeamMemberCard from "components/cards/teamMemberCard"

import image from "assets/images/gatsby-icon.png"
import tempImg from "assets/images/green_science.jpg"

import { Section3Container, Section3Divider } from "./styledComponents"

/*
 * Section3
 * - Cards with updates
 * - Team Members
 * - Faculty sponsors
 */

export default () => (
  <>
    {/* Section 3 */}
    {/* I'm assuming this is a section for project updates. */}
    <Section3Container>
      <PageTitle title="Take a Look" center />
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
      {/* This part is for Team Member information. */}
      <PageTitle title="Team Members" center />
      <Row style={{ margin: "0 auto 5rem auto" }}>
        <Col>
          <TeamMemberCard
            imgSrc={image}
            name="Chris Holle"
            department="Baylor Computer Science"
            role="Full-Stack Development"
          />
        </Col>
        <Col>
          <TeamMemberCard
            imgSrc={image}
            name="Chris Holle"
            department="Baylor Computer Science"
            role="Full-Stack Development"
          />
        </Col>
        <Col>
          <TeamMemberCard
            imgSrc={image}
            name="Chris Holle"
            department="Baylor Computer Science"
            role="Full-Stack Development"
          />
        </Col>
      </Row>
      <Row style={{ margin: "0 auto 5rem auto" }}>
        <Col>
          <TeamMemberCard
            imgSrc={image}
            name="Chris Holle"
            department="Baylor Computer Science"
            role="Full-Stack Development"
          />
        </Col>
        <Col>
          <TeamMemberCard
            imgSrc={image}
            name="Chris Holle"
            department="Baylor Computer Science"
            role="Full-Stack Development"
          />
        </Col>
        <Col>
          <TeamMemberCard
            imgSrc={image}
            name="Chris Holle"
            department="Baylor Computer Science"
            role="Full-Stack Development"
          />
        </Col>
      </Row>
      <Section3Divider />
      {/* This part is for faculty advisors and TAs. */}
      <PageTitle title="Faculty" center />
      <Row style={{ margin: "0 auto 5rem auto" }}>
        <Col>
          <TeamMemberCard
            imgSrc={image}
            name="Chris Holle"
            department="Baylor Computer Science"
            role="Full-Stack Development"
          />
        </Col>
      </Row>
    </Section3Container>
  </>
)
