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
import Layout from "../components/layout";
import PageTitle from "../components/page-title";
import {Col, Row} from "reactstrap";
import TeamCard from "../components/teamCard"
import Search from "../components/search"
import ContactCard from "../components/contactCard"
import CourseCard from "../components/courseCard"
import DisplayCard from "../components/displayCard"
import image from "../assets/images/gatsby-icon.png"
import CourseCard from "../components/cards/courseCard"
import ContactCard from "../components/cards/contactCard"
import DisplayCard from "../components/cards/displayCard"
import tempImg from "../assets/images/green_science.jpg"

export default () => (
  <Layout>
    <PageTitle title="About" />
    <PageTitle title="UI - Cards" />
    <Row>
      <Col>
        <TeamCard
          ImgSrc={image}
          Name={"Chris Holle"}
          Department={"Baylor Computer Science"}
          Role={"Full-Stack Development"}
        />
      </Col>
      <Col>
        <TeamCard
          ImgSrc={image}
          Name={"Chris Holle"}
          Department={"Baylor Computer Science"}
          Role={"Full-Stack Development"}
        />
      </Col>
      <Col>
        <TeamCard
          ImgSrc={image}
          Name={"Chris Holle"}
          Department={"Baylor Computer Science"}
          Role={"Full-Stack Development"}
        />
      </Col>
    </Row>
    <Row style={{ margin: "5em 0" }}>
      <Col>
        <ContactCard
          ImgSrc={image}
          Name={"Chris Holle"}
          Department={"Baylor Computer Science"}
          Role={"Full-Stack Development"}
          Email={"john_doe@baylor.edu"}
          Phone={"(823) 418-2083"}
        />
      </Col>
      <Col>
        <ContactCard
          ImgSrc={image}
          Name={"Chris Holle"}
          Department={"Baylor Computer Science"}
          Role={"Full-Stack Development"}
          Email={"john_doe@baylor.edu"}
          Phone={"(823) 418-2083"}
        />
      </Col>
      <Col>
        <ContactCard
          ImgSrc={image}
          Name={"Chris Holle"}
          Department={"Baylor Computer Science"}
          Role={"Full-Stack Development"}
          Email={"john_doe@baylor.edu"}
          Phone={"(823) 418-2083"}
        />
      </Col>
    </Row>
    <Row style={{ margin: "5em 0" }}>
      <Col>
        <CourseCard
          Name={"CSI 43C9 - Section 02"}
          Semester={"Spring 2020"}
          active={true}
        />
      </Col>
      <Col>
        <CourseCard
          Name={"CSI 43C9 - Section 02"}
          Semester={"Spring 2020"}
          active={false}
        />
      </Col>
      <Col>
        <CourseCard
          Name={"CSI 43C9 - Section 02"}
          Semester={"Spring 2020"}
          active={false}
        />
      </Col>
    </Row>

    <Row style={{ margin: "5em 0" }}>
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
  </Layout>
)

        <Row style={{margin: '5em 0'}}>
            <Col>
                <DisplayCard Name={"Cappy"} Semester={"Spring 2020"} ImgSrc={tempImg}
                             Description={'This is a story of the great big wolf who blew all of the little piggies houses down!'}
                             to={'/about'}/>
            </Col>
            <Col>
                <DisplayCard Name={"Cappy"} Semester={"Spring 2020"} ImgSrc={tempImg}
                             Description={'This is a story of the great big wolf who blew all of the little piggies houses down!'}
                             to={'/about'}/>
            </Col>
            <Col>
                <DisplayCard Name={"Cappy"} Semester={"Spring 2020"} ImgSrc={tempImg}
                             Description={'This is a story of the great big wolf who blew all of the little piggies houses down!'}
                             to={'/about'}/>
            </Col>

        </Row>
        <PageTitle title="UI - Other"/>
        <Search/>
    </Layout>
)