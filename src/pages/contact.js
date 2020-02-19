/**
 * author: Chris Holle
 * file: contact.js
 *
 * Description:
 * Contact page for front-end
 */

import React from "react"
import Styled from "styled-components"
import { Row, Col, Container } from "reactstrap"
import { graphql } from "gatsby"

import Hr from "../components/hr"
import Layout from "../components/layout"
import ContactForm from "../components/form"
import PageTitle from "../components/page-title"
import ContactCard from "../components/cards/contactCard";
import image from "../assets/images/gatsby-icon.png";

// let Cirle = Styled.div`
//   height: 4rem;
//   width: 4rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `

// let ContactItem = ({ text, type, Icon, href }) => (
//     <div className="page-container">
//         <Col
//             xs={6}
//             lg={3}
//             className="d-flex flex-column align-items-center"
//             style={{ wordBreak: "break-word" }}
//         >
//             <Cirle className="h-4-rem w-4-rem bg-primary-faded my-3 absolute-center rounded-circle">
//                 <Icon size={30} />
//             </Cirle>
//             <div className="text-center">
//                 <h6>{type}</h6>
//                 <span className="text-secondary">
//         {href ? (
//             <Link to={href} className="reset">
//                 {text}
//             </Link>
//         ) : (
//             text
//         )}
//       </span>
//             </div>
//         </Col>
//     </div>
// )

export default ({ data }) => (
  <Layout>

    <Container>
        <PageTitle title="Contact Us" />
      <Row className="py-5">
          <Col md={8}>
              <Row style={{ margin: "0 0 7em 0" }}>
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
              <Row style={{ margin: "0 0 7em 0" }}>
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
              <Row style={{ margin: "0 0 7em 0" }}>
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
