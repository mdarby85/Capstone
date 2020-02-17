/**
 * Pre-generated
 */

import React from 'react'
import Link from './link'
import styled from 'styled-components'

let Button = styled.button`
  -webkit-appearance: unset !important;
  border-radius: ${props => props.rounded ? '15px' : '2px'};
  border: ${props => props.rounded ? '4px solid #ffb71c' : '1px solid'};
  min-height: ${props => props.big ? '50px' : props.medium ? '25px' : props.small ? '15px' : 'initial'};
  min-width: ${props => props.big ? '200px' : props.medium ? '125px' : props.small ? '75px' : 'initial'};
  display: inline-block;
  padding: 10px 40px;
  text-align: center;
  transition-duration: 0.25s;
  background: ${props => props.theme.primary};
  box-shadow: 0 .5rem 1.5rem rgba(22,28,45,.1);
  color: ${props => props.theme.primaryGreen};
  font-family: 'BioSans', sans-serif;
  font-weight: bold;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2.5rem rgba(22,28,45,.1),0 .5rem 1rem -.75rem rgba(22,28,45,.1);
  }
`

export default ({to, children, ...props}) => (
  <Link to={to}>
    <Button {...props}>{children}</Button>
  </Link>
)