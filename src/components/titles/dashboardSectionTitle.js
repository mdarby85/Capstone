/**
 * author: Mario Arturo Lopez Martinez
 * file: dashboardSectionTitle.js
 *
 * Description:
 * Title for dashboard sections
 */

import React from "react"
import styled from "styled-components"

const Background = styled.div`
  font-family: "BioSans", sans-serif;
  color: ${props => props.theme.primaryGreen};
  padding: 0 0 2rem 0;
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
  width: ${props => (props.center ? "180px" : "60px")};
`

export default ({ title, ...props }) => (
  <Background {...props}>
    <h4>{title}</h4>
    <Line {...props} />
  </Background>
)
