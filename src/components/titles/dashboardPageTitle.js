/**
 * @name DashboardPageTitle
 * @author Mario Arturo Lopez Martinez (CSI 43C9 Spring 2020)
 * @overview Title for page sections/titles
 * @param {string} title to be displayed
 * @example <DashboardPageTitle title="Students" />
 */

import React from "react"
import styled from "styled-components"

const Background = styled.div`
  font-family: "BioSans", sans-serif;
  color: ${props => props.theme.primaryGreen};
  padding: 2rem 0 1rem 0;
  text-align: ${props => (props.center ? "center" : "left")};
  &h1 {
    font-family: "BioSans", sans-serif;
  }
`

const Line = styled.hr`
  margin-top: -0.3em;
  margin-bottom: 2rem;
  border: 0;
  float: ${props => (props.center ? "none" : "left")};
  border-top: 2px solid #feb81c;
  width: 95%;
`

export default ({ title, ...props }) => (
  <Background {...props}>
    <h1>{title}</h1>
    <Line {...props} />
  </Background>
)
