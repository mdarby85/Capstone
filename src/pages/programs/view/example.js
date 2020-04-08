/**
 * @author Chris Holle
 *
 * @overview Program example page to show projects from within a particular program.
 */

import React from "react"
import { Col, Row } from "reactstrap"

import Search from "components/search"
import PageTitle from "components/titles/pageTitle"
import MainLayout from "components/layouts/mainLayout"
import ProjectCard from "components/cards/projectCard"

import tempImg from "assets/images/green_science.jpg"

export default () => (
  <MainLayout>
    <div className="page-container">
      <Row>
        <Col>
          <PageTitle title="Computer Science Capstone" />
        </Col>
        <Col md={4} style={{ padding: "5em 10em 0 0" }}>
          <Search />
        </Col>
      </Row>

      <PageTitle title="Spring 2020" center subtitle />

      <Row style={{ margin: "0" }}>
        <Col>
          <ProjectCard
            name="Cappy"
            semester="Spring 2020"
            imgSrc={tempImg}
            description="This is a story of the great big wolf who blew all of the little piggies houses down!"
            to="/project/example"
          />
        </Col>
        <Col>
          <ProjectCard
            name="Cappy"
            semester="Spring 2020"
            imgSrc={tempImg}
            description="This is a story of the great big wolf who blew all of the little piggies houses down!"
            to="/about"
          />
        </Col>
        <Col>
          <ProjectCard
            name="Cappy"
            semester="Spring 2020"
            imgSrc={tempImg}
            description="This is a story of the great big wolf who blew all of the little piggies houses down!"
            to="/about"
          />
        </Col>
      </Row>

      <PageTitle title="Fall 2019" center subtitle />

      <Row style={{ margin: "0" }}>
        <Col>
          <ProjectCard
            name="Cappy"
            semester="Fall 2019"
            imgSrc={tempImg}
            description="This is a story of the great big wolf who blew all of the little piggies houses down!"
            to="/project/example"
          />
        </Col>
        <Col>
          <ProjectCard
            name="Cappy"
            semester="Fall 2019"
            imgSrc={tempImg}
            description="This is a story of the great big wolf who blew all of the little piggies houses down!"
            to="/about"
          />
        </Col>
        <Col>
          <ProjectCard
            name="Cappy"
            semester="Fall 2019"
            imgSrc={tempImg}
            description="This is a story of the great big wolf who blew all of the little piggies houses down!"
            to="/about"
          />
        </Col>
      </Row>
    </div>
  </MainLayout>
)
