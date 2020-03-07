/**
 * author: Chris Holle
 * file: contact.js
 *
 * Description:
 * Contact page for front-end
 */

import React from "react"
import { Row, Col, Container } from "reactstrap"
import { graphql } from "gatsby"

import Hr from "components/hr"
import SEO from "components/seo"
import Layout from "components/layout"
import ContactForm from "components/form"
import PageTitle from "components/titles/pageTitle"
import image from "assets/images/gatsby-icon.png"
import ContactCard from "components/cards/contactCard"

export default () => (
  <Layout>
    <SEO title="Contact Us" />
    <Container>
      <PageTitle title="Contact Us" />
      <Row className="py-5">
        <Col md={8}>
          <Row style={{ margin: "0 0 7em 0" }}>
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
          <Row style={{ margin: "0 0 7em 0" }}>
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
          <Row style={{ margin: "0 0 7em 0" }}>
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
        </Col>
        <Col md={4} className="ml-auto mr-auto">
          <h4 className="text-center text-secondary">Need More Info?</h4>
          <Hr />
          <ContactForm />
        </Col>
      </Row>
    </Container>
  </Layout>
)

export const query = graphql`
  query Contact {
    site {
      siteMetadata {
        address
        email
        phone
        siteUrl
      }
    }
  }
`
