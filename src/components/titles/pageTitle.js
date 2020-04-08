/**
 * @name PageTitle
 *
 * @author Chris Holle
 *
 * @overview Title for page sections/titles
 *
 * @param {string} title text to be displayed
 * @param {boolean} subtitle set when a subtitle is necessary(smaller font/less padding)
 * @param {boolean} center centers Text
 *
 * @example <PageTitle title="About Us" />
 */

import React from "react"
import styled from "styled-components"

const Background = styled.div`
  font-family: "BioSans", sans-serif;
  color: ${props => props.theme.primaryGreen};
  padding: ${props => (props.subtitle ? "2rem 0 3rem 0" : "4rem 0 3rem 0")};
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
  width: ${props => (props.center ? "180px" : "120px")};
`

const Title = styled.h1`
  font-size: ${props => (props.subtitle ? "2rem" : "2.5rem")};
`

export default ({ title, ...props }) => (
  <Background {...props}>
    <Title {...props}>{title}</Title>
    <Line {...props} />
  </Background>
)
