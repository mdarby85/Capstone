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
  color: #1a1a1a;
  padding: 4rem 0;
  text-align: left;
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
