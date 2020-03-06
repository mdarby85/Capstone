import React from "react"
import { Nav } from "reactstrap"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import styled from "styled-components"
import { MdDashboard, MdSchool } from "react-icons/md"
import { FaSchool, FaHandsHelping } from "react-icons/fa"
import { logout } from "../utils/auth.js"

import { MdAccountCircle, MdDashboard, MdSchool, MdExitToApp } from "react-icons/md"
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
  box-shadow: 1px 0 0 rgba(0, 0, 0, 0.1);

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

const IconStyle = { color: "white", size: "1.5em" }

let Sidebar = ({ data }) => (
  <StyledSidebar>
    <Link to="/dashboard/home">
      <StyledImg
        fluid={data.file.childImageSharp.fluid}
        objectFit="contain"
        objectPosition="50% 50%"
        alt="School Logo"
      />
    </Link>
    <Line />
    <Nav vertical>
      <Link to="/dashboard/home" activeClassName={"activeSidebar"}>
        <StyledNavBlock>
          <div
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <IconContext.Provider value={IconStyle}>
              <MdDashboard />
            </IconContext.Provider>
          </div>
          Home
        </StyledNavBlock>
      </Link>
      <Link to="/dashboard/professors" activeClassName={"activeSidebar"}>
        <StyledNavBlock>
          <div
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <IconContext.Provider value={IconStyle}>
              <FaSchool />
            </IconContext.Provider>
          </div>
          Professors
        </StyledNavBlock>
      </Link>
      <Link to="/dashboard/students" activeClassName={"activeSidebar"}>
        <StyledNavBlock>
          <div
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <IconContext.Provider value={IconStyle}>
              <MdSchool />
            </IconContext.Provider>
          </div>
          Students
        </StyledNavBlock>
      </Link>
      <Link to="/dashboard/sponsors" activeClassName={"activeSidebar"}>
        <StyledNavBlock>
          <div
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <IconContext.Provider value={IconStyle}>
              <FaHandsHelping />
            </IconContext.Provider>
          </div>
          Sponsors
        </StyledNavBlock>
      </Link>
      <Link to="/dashboard/archive" activeClassName={"activeSidebar"}>
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
      <Link to="/" onClick={logout} activeClassName={"activeSidebar"}>
        <StyledNavBlock>
          <div
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <IconContext.Provider value={iconStyle}>
              <MdExitToApp />
            </IconContext.Provider>
          </div>
          Log Out
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
