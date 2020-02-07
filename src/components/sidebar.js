import React from "react"
import { Nav, NavLink } from "reactstrap"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import styled from "styled-components"

import { MdAccountCircle, MdDashboard, MdSchool } from "react-icons/md"
import {
  FaSchool,
  FaProjectDiagram,
  FaHandsHelping,
  FaArchive,
} from "react-icons/fa"
import { IconContext } from "react-icons"

let StyledImg = styled(props => <Img {...props} />)`
  width: 50%;
  display: block;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`

let StyledNavBlock = styled(props => <div {...props} />)`
  width: 100%;
  color: white;
  transition: all 0.2s ease-in-out;
  text-align: center;
  font-size: 12px;
  font-weight: bold;

  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 1vh;
  padding-bottom: 1vh;
  width: 100%;

  &:hover {
    transform: scale(1.05);
    background-color: ${props => props.theme.secondaryGreen};
  }
`

const StyledSidebar = styled.div`
  height: 100%;
  width: 100px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: ${props => props.theme.primaryGreen};
  overflow-x: hidden;
  padding-top: 1vh;
`

const Line = styled.hr`
  border: 0;
  border-top: 2px solid #feb81c;
  width: 100px;
`

const iconStyle = { color: "white", size: "1.5em" };

let Sidebar = ({ data }) => (
  <StyledSidebar>
    <Link to="/">
      <StyledImg
        fluid={data.file.childImageSharp.fluid}
        objectFit="contain"
        objectPosition="50% 50%"
        alt="School Logo"
      />
    </Link>
    <Line />
    {/* @TODO Make it so we query users and generate links based on permissions */}
    <Nav vertical>
    <Link to="/dashboard/home">
        <StyledNavBlock>
          <div
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <IconContext.Provider value={iconStyle}>
              <MdDashboard />
            </IconContext.Provider>
          </div>
          Dashboard
        </StyledNavBlock>
      </Link>
      <Link to="/dashboard/account">
        <StyledNavBlock>
          <div
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <IconContext.Provider value={iconStyle}>
              <MdAccountCircle />
            </IconContext.Provider>
          </div>
          Account
        </StyledNavBlock>
      </Link>
      <Link to="/dashboard/professors">
        <StyledNavBlock>
          <div
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <IconContext.Provider value={iconStyle}>
              <FaSchool />
            </IconContext.Provider>
          </div>
          Professors
        </StyledNavBlock>
      </Link>
      <Link to="/dashboard/students">
        <StyledNavBlock>
          <div
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <IconContext.Provider value={iconStyle}>
              <MdSchool />
            </IconContext.Provider>
          </div>
          Students
        </StyledNavBlock>
      </Link>
      <Link to="/dashboard/projects">
        <StyledNavBlock>
          <div
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <IconContext.Provider value={iconStyle}>
              <FaProjectDiagram />
            </IconContext.Provider>
          </div>
          Projects
        </StyledNavBlock>
      </Link>
      <Link to="/dashboard/sponsors">
        <StyledNavBlock>
          <div
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <IconContext.Provider value={iconStyle}>
              <FaHandsHelping />
            </IconContext.Provider>
          </div>
          Sponsors
        </StyledNavBlock>
      </Link>
      <Link to="/dashboard/archive">
        <StyledNavBlock>
          <div
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <IconContext.Provider value={iconStyle}>
              <FaArchive />
            </IconContext.Provider>
          </div>
          Archive
        </StyledNavBlock>
      </Link>
    </Nav>
  </StyledSidebar>
)

export default () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "Baylor_Logo_Yellow.png" }) {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => <Sidebar data={data} />}
  />
)
