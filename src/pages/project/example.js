/**
 * author: Chris Holle
 * file: project/example.js
 *
 * Description:
 * Program example page to show projects from within a particular program.
 */
import React from "react"

import Layout from "components/layout"
import PageTitle from "components/titles/pageTitle"
import styled from "styled-components"
import { Col, Row } from "reactstrap"
import DisplayCard from "components/cards/displayCard"
import TeamCard from "components/cards/teamCard"

import image from "assets/images/gatsby-icon.png"
import ecsImg from "assets/images/ecs_img.png"
import tempImg from "assets/images/green_science.jpg"

/*
 * Template Page Structure
 * Section1
 * - Large Project Image(left)
 * - Large title with short description(right)
 *
 * Section2
 * - Intro paragraph with title (green background)
 * - Background paragraph on the project (Gold)
 * - Development paragraph (Green)
 *
 * Section3
 * - Cards with updates
 *
 * Section4
 * - Team Members
 * - Faculty sponsors
 *
 * Section5
 * - Sponsor logo image (left)
 * - Sponsor description (right)
 */

// Section 1
let Section1Container = styled.div`
  padding: 18em 6em 8em 6em;
  margin-top: 0;
`

let Section1Title = styled.h1`
  text-align: left;
  padding-top: 0;
  max-width: 400px;
  padding-bottom: 1rem;
  font-weight: 300;
  font-size: 48px;
  font-family: Georgia;
  border-bottom: solid 2pt ${props => props.theme.secondaryGold};
  color: ${props => props.theme.primaryGreen};
`

let Section1p = styled.p`
  line-height: 2.5;
  font-size: 18px;
  margin: 1em 0 0 0;
  text-align: left;
  max-width: 510px;
  color: ${props => props.theme.primaryGreen};
`

let Section1Image = styled.img`
  height: 827px;
  width: 750px;
  margin: 0 auto;
`

// Section 2
let Section2ContainerPrimary = styled.div`
  padding: 6em 6em 6em 6em;
  margin-top: 0;
  background: ${props => props.theme.primaryGreen};
`

let Section2ContainerSecondary = styled.div`
  padding: 6em 6em 6em 6em;
  margin-top: 0;
  background: ${props => props.theme.secondaryGold};
`

let Section2TitlePrimary = styled.h1`
  text-align: center;
  padding-top: 0;
  padding-bottom: 1rem;
  font-weight: 600;
  font-size: 36px;
  font-family: Georgia;
  color: white;
`

let Section2TitleSecondary = styled.h1`
  text-align: center;
  padding-top: 0;
  padding-bottom: 1rem;
  font-weight: 600;
  font-size: 36px;
  font-family: Georgia;
  color: ${props => props.theme.primaryGreen};
`

const Section2HrPrimary = styled.hr`
  margin-top: -0.3em;
  margin-bottom: 2rem;
  border: 0;
  max-width: 120px;
  border-top: 2px solid ${props => props.theme.secondaryGold};
`

const Section2HrSecondary = styled.hr`
  margin-top: -0.3em;
  margin-bottom: 2rem;
  border: 0;
  max-width: 120px;
  border-top: 2px solid ${props => props.theme.primaryGreen};
`

let Section2pPrimary = styled.p`
  line-height: 2.5;
  font-size: 18px;
  margin: auto;
  text-align: center;
  max-width: 700px;
  color: white;
`

let Section2pSecondary = styled.p`
  line-height: 2.5;
  font-size: 18px;
  margin: auto;
  text-align: center;
  max-width: 700px;
  color: ${props => props.theme.primaryGreen};
`

// Section 3
let Section3Container = styled.div`
  padding: 0em 16em;
`

let Section3Divider = styled.hr`
  margin: 2rem 0;
  border: 0;
  border-top: 2px solid ${props => props.theme.primaryGreen};
`

// Section 4
let Section4Container = styled.div`
  margin-bottom: -7em;
  padding: 6em 6em 6em 6em;
  margin-top: 0;
  background: ${props => props.theme.secondaryGold};
`

let Section4Image = styled.img`
  height: 400px;
  max-width: 600px;
  margin: 0 auto;
`

let Section4TitleSub = styled.h1`
  text-align: left;
  font-weight: 600;
  font-size: 28px;
  color: ${props => props.theme.primaryGreen};
`

let Section4TitleMain = styled.h1`
  text-align: left;
  padding-top: 0;
  padding-bottom: 1rem;
  font-weight: 600;
  font-size: 36px;
  color: ${props => props.theme.primaryGreen};
`

const Section4Hr = styled.hr`
  margin-top: -0.3em;
  margin-bottom: 2rem;
  margin-left: 0;
  border: 0;
  max-width: 160px;
  border-top: 2px solid ${props => props.theme.primaryGreen};
`

let Section4p = styled.p`
  line-height: 2.5;
  font-size: 18px;
  text-align: left;
  max-width: 700px;
  color: ${props => props.theme.primaryGreen};
`

export default () => (
  <Layout>
    <Row>
      <Col>
        <Section1Image src={ecsImg} />
      </Col>
      <Col>
        <Section1Container>
          <Section1Title>CAPPY</Section1Title>
          <Section1p>
            The intuitive new way to showcase College Universities' Capstone
            Experience. Developed by students for institutions everywhere.
          </Section1p>
        </Section1Container>
      </Col>
    </Row>
    <Section2ContainerPrimary>
      <Section2TitlePrimary>Intro to Cappy</Section2TitlePrimary>
      <Section2HrPrimary />
      <Section2pPrimary>
        The intuitive new way to showcase College Universities' Capstone
        Experience. Developed by students for institutions everywhere. The
        intuitive new way to showcase College Universities' Capstone Experience.
        Developed by students for institutions everywhere.
      </Section2pPrimary>
    </Section2ContainerPrimary>
    <Section2ContainerSecondary>
      <Section2TitleSecondary>Background</Section2TitleSecondary>
      <Section2HrSecondary />
      <Section2pSecondary>
        The intuitive new way to showcase College Universities' Capstone
        Experience. Developed by students for institutions everywhere. The
        intuitive new way to showcase College Universities' Capstone Experience.
        Developed by students for institutions everywhere.
      </Section2pSecondary>
    </Section2ContainerSecondary>
    <Section2ContainerPrimary>
      <Section2TitlePrimary>Development</Section2TitlePrimary>
      <Section2HrPrimary />
      <Section2pPrimary>
        The intuitive new way to showcase College Universities' Capstone
        Experience. Developed by students for institutions everywhere. The
        intuitive new way to showcase College Universities' Capstone Experience.
        Developed by students for institutions everywhere.
      </Section2pPrimary>
    </Section2ContainerPrimary>

    <Section3Container>
      <PageTitle title={"Take a Look"} center={true} />
      <Row style={{ margin: "0 auto 5rem auto" }}>
        <Col>
          <DisplayCard
            Name={"Team Creation"}
            Semester={"03/01/2020"}
            ImgSrc={tempImg}
            Description={
              "This is a story of the great big wolf who blew all of the little piggies houses down!"
            }
            to={"/about"}
          />
        </Col>
        <Col>
          <DisplayCard
            Name={"Project Templates"}
            Semester={"02/25/2020"}
            ImgSrc={tempImg}
            Description={
              "This is a story of the great big wolf who blew all of the little piggies houses down!"
            }
            to={"/about"}
          />
        </Col>
        <Col>
          <DisplayCard
            Name={"Team Calendar"}
            Semester={"02/20/2020"}
            ImgSrc={tempImg}
            Description={
              "This is a story of the great big wolf who blew all of the little piggies houses down!"
            }
            to={"/about"}
          />
        </Col>
      </Row>
      <Section3Divider />
      <PageTitle title={"Team Members"} center={true} />
      <Row style={{ margin: "0 auto 5rem auto" }}>
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
      <Row style={{ margin: "0 auto 5rem auto" }}>
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

      <Section3Divider />
      <PageTitle title={"Faculty"} center={true} />
      <Row style={{ margin: "0 auto 5rem auto" }}>
        <Col>
          <TeamCard
            ImgSrc={image}
            Name={"Chris Holle"}
            Department={"Baylor Computer Science"}
            Role={"Full-Stack Development"}
          />
        </Col>
      </Row>
    </Section3Container>
    <Section4Container>
      <Row>
        <Col md={6}>
          <Section4Image src={tempImg} />
        </Col>
        <Col>
          <Section4TitleMain>Sponsor</Section4TitleMain>
          <Section4Hr />
          <Section4TitleSub>Baylor</Section4TitleSub>
          <Section4p>
            The intuitive new way to showcase College Universities' Capstone
            Experience. Developed by students for institutions everywhere. The
            intuitive new way to showcase College Universities' Capstone
            Experience. Developed by students for institutions everywhere.
          </Section4p>
        </Col>
      </Row>
    </Section4Container>
  </Layout>
)
