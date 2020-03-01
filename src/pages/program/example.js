/**
 * author: Chris Holle
 * file: program/example.js
 *
 * Description:
 * Program example page to show projects from within a particular program.
 */
import React from "react"
import { Col, Row } from "reactstrap"

import Layout from "../../components/layout"
import Search from "../../components/search"
import PageTitle from "../../components/page-title"
import DisplayCard from "../../components/cards/displayCard"
import tempImg from "../../assets/images/green_science.jpg"


export default () => (
  <Layout>
    <div className="page-container">
      <Row>
        <Col>
          <PageTitle title="Computer Science Capstone" />
        </Col>
        <Col md={4} style={{padding: '5em 10em 0 0'}}>
          <Search/>
        </Col>
      </Row>

      <PageTitle title={"Spring 2020"} center={true} subtitle={true}/>

      <Row style={{ margin: "0" }}>
        <Col>
          <DisplayCard
            Name={"Cappy"}
            Semester={"Spring 2020"}
            ImgSrc={tempImg}
            Description={
              "This is a story of the great big wolf who blew all of the little piggies houses down!"
            }
            to={"/project/example"}
          />
        </Col>
        <Col>
          <DisplayCard
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
          <DisplayCard
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

      <PageTitle title={"Fall 2019"} center={true} subtitle={true}/>

      <Row style={{ margin: "0" }}>
        <Col>
          <DisplayCard
            Name={"Cappy"}
            Semester={"Fall 2019"}
            ImgSrc={tempImg}
            Description={
              "This is a story of the great big wolf who blew all of the little piggies houses down!"
            }
            to={"/project/example"}
          />
        </Col>
        <Col>
          <DisplayCard
            Name={"Cappy"}
            Semester={"Fall 2019"}
            ImgSrc={tempImg}
            Description={
              "This is a story of the great big wolf who blew all of the little piggies houses down!"
            }
            to={"/about"}
          />
        </Col>
        <Col>
          <DisplayCard
            Name={"Cappy"}
            Semester={"Fall 2019"}
            ImgSrc={tempImg}
            Description={
              "This is a story of the great big wolf who blew all of the little piggies houses down!"
            }
            to={"/about"}
          />
        </Col>
      </Row>

    </div>
  </Layout>
)
