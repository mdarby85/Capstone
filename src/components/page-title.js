/**
 * author: Chris Holle
 * file: page-title.js
 *
 * Description:
 * Title for page sections/titles
 */
import React from 'react'
import styled from 'styled-components'

const Background = styled.div`
  font-family: 'BioSans', sans-serif;
  color: ${props => props.theme.primaryGreen};
  padding: 4rem 0 3rem 0;
  text-align: left;
  &h1 {
    font-family: 'BioSans', sans-serif;
  }
`
const Line = styled.hr`
    margin-top: -.5em;
    margin-bottom: 2rem;
    border: 0;
    border-top: 2px solid #feb81c;
    width: 80px;
    float: left;
`

export default ({title}) => (
  <Background>
    <h1>{title}</h1>
      <Line/>
  </Background>
)
