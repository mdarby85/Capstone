/**
 * author: Chris Holle
 * file: page-title.js
 *
 * Description:
 * Title for page sections/titles
 */
import React from 'react'
import styled from 'styled-components'
import meridianTheme from '../assets/stylesheets/meridianTheme'

const Background = styled.div`
  color: #1a1a1a;
  padding: 4rem 0;
  text-align: center;
`
const Line = styled.hr`
    margin-top: -.5em;
    margin-bottom: 1rem;
    border: 0;
    `
const Title = styled.h1`
    font-family: 'BioSans', sans-serif;
    margin-top: -2em;
`

const Divider = styled.hr`
    width: 10em;
    height: 2px;
    margin-top: -.5em;
    background: ${meridianTheme.primary}
`

export default ({title}) => (
    <Background>
        <Title>{title}</Title>
        <Divider/>
        <Line/>
    </Background>
)
