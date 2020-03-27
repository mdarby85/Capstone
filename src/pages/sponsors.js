/**
 * @name sponsors.js
 * @author Chris Holle
 * @author Mario Arturo Lopez Martinez
 * @overview Page to attract sponsors.
 */

import React from "react"
import MainLayout from "components/layouts/mainLayout"
import PageTitle from "components/titles/pageTitle"
import styled from "styled-components"
import topSectionImg from "assets/images/baylor-hero-online-experience.jpg"
import gIcon from "assets/images/gatsby-icon.png"
import { Col, Container, Row } from "reactstrap"
import ContactForm from "components/form"
import SEO from "components/seo"

let Section1Container = styled.div`
  background: url(${topSectionImg});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 3em 6em 6em 6em;
  margin-top: 0;
  min-height: 150px;
`

let Section1Title = styled.h1`
  text-align: center;
  padding-top: 0;
  font-weight: 600;
  font-size: 36px;
  color: white;
`

let Section1p = styled.p`
  line-height: 1.5;
  margin: 1em 10em 0 10em;
  text-align: center;
  color: white;
`

let SItemImg = styled.img`
  max-height: 100px;
  display: block;
  margin: 0 auto;
`

let Section2Container = styled.div`
  margin: 0 18em;
`

let Sdesc = styled.p`
  text-align: center;
`

let SponsorItemContainer = styled.div`
  margin: 2em 1em;
  padding: 2em;
`

let SponsoredItemTitle = styled.h2`
  text-align: center;
  margin: 1em 0;
  font-weight: 600;
  color: ${props => props.theme.primaryGreen};
`

let QuoteContainer = styled.div`
  margin: 5em 0;
  padding: 2em 15em;
  background: ${props => props.theme.primaryGreen};

  &i {
    color: white;
  }
  &p {
    color: white;
  }
`

let QuoteImage = styled.img`
  display: block;
  margin: -5em auto 2em auto;
  border-radius: 50px;
  height: 100px;
`

let QuoteText = styled.p`
  text-align: center;
  font-style: italic;
  color: white;
`
let QuoteTitle = styled.p`
  text-align: center;
  color: white;
`

const BorderBottom = { "border-bottom": "solid 1px #3a3a3a" }
const BorderRight = { "border-right": "solid 1px #3a3a3a" }

let SponsorItem = ({ img, title, description }) => (
  <SponsorItemContainer>
    <SItemImg src={img} />
    <SponsoredItemTitle>{title}</SponsoredItemTitle>
    <Sdesc>{description}</Sdesc>
  </SponsorItemContainer>
)

export default () => (
  <MainLayout>
    <SEO title="Sponsors" />
    <Section1Container>
      <Section1Title>Become A Sponsor</Section1Title>
      <Section1p>
        Join our community of motivated and accomplished professionals and gain
        access to the same level of support, and networking opportunities, that
        our on-campus students have. Baylor is dedicated to your success—from
        day one to graduation and beyond.
      </Section1p>
    </Section1Container>
    <div>
      <PageTitle title="Sponsoring Baylor Capstone Means:" center />
    </div>
    <Section2Container>
      <Row style={BorderBottom}>
        <Col style={BorderRight}>
          <SponsorItem
            title="Bringing Great Ideas to Life"
            img={gIcon}
            description="Excepteur sint occaecat cupidatat non proident, sunt in culpa  qui officia deserunt mollit anim. Excepteur sint occaecat cupidatat on proident, sunt in culpa qui fficia deserunt mollit anim."
          />
        </Col>
        <Col>
          <SponsorItem
            title="Bringing Great Ideas to Life"
            img={gIcon}
            description="Excepteur sint occaecat cupidatat non proident, sunt in culpa  qui officia deserunt mollit anim. Excepteur sint occaecat cupidatat on proident, sunt in culpa qui fficia deserunt mollit anim."
          />
        </Col>
      </Row>
      <Row style={BorderBottom}>
        <Col style={BorderRight}>
          <SponsorItem
            title="Bringing Great Ideas to Life"
            img={gIcon}
            description="Excepteur sint occaecat cupidatat non proident, sunt in culpa  qui officia deserunt mollit anim. Excepteur sint occaecat cupidatat on proident, sunt in culpa quifficia deserunt mollit anim."
          />
        </Col>
        <Col>
          <SponsorItem
            title="Bringing Great Ideas to Life"
            img={gIcon}
            description="Excepteur sint occaecat cupidatat non proident, sunt in culpa  qui officia deserunt mollit anim. Excepteur sint occaecat cupidatat on proident, sunt in culpa qui fficia deserunt mollit anim."
          />
        </Col>
      </Row>
      <Row>
        <Col style={BorderRight}>
          <SponsorItem
            title="Bringing Great Ideas to Life"
            img={gIcon}
            description="Excepteur sint occaecat cupidatat non proident, sunt in culpa  qui officia deserunt mollit anim. Excepteur sint occaecat cupidatat on proident, sunt in culpa qui fficia deserunt mollit anim."
          />
        </Col>
        <Col>
          <SponsorItem
            title="Bringing Great Ideas to Life"
            img={gIcon}
            description="Excepteur sint occaecat cupidatat non proident, sunt in culpa  qui officia deserunt mollit anim. Excepteur sint occaecat cupidatat on proident, sunt in culpa qui fficia deserunt mollit anim."
          />
        </Col>
      </Row>
    </Section2Container>

    <QuoteContainer>
      <QuoteImage src={gIcon} />
      <QuoteText>
        "Join our community of motivated and accomplished professionals and gain
        access to the same level of support, and networking opportunities, that
        our on-campus students have."
      </QuoteText>
      <QuoteTitle>John Doe, ECS Capstone Sponsor</QuoteTitle>
    </QuoteContainer>
    <Container>
      <ContactForm />
    </Container>
  </MainLayout>
)
