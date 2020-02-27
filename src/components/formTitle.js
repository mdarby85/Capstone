/**
 * author: Chris Holle
 * file: page-title.js
 *
 * Description:
 * Title for page sections/titles
 */
import React from "react"
import styled from "styled-components"
import meridianTheme from "../assets/stylesheets/meridianTheme"

const Background = styled.div`
  display: contents;
  color: #1a1a1a;
  padding: 3em 0 1em 0;
  text-align: center;
`
const Line = styled.hr`
  margin-top: -0.5em;
  margin-bottom: 4rem;
  border: 0;
`
const Title = styled.h1`
  font-family: "Bio-Sans", sans-serif;
  src: url(../assets/fonts/Bio-Sans-Bold.otf) format("otf");
`

const Divider = styled.hr`
  width: 10em;
  height: 2px;
  margin-top: -0.5em;
  background: ${meridianTheme.primary};
`

export default ({ title }) => (
  <Background>
    <Title>{title}</Title>
    <Divider />
    <Line />
  </Background>
)
