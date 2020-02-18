/**
 * Stylized Button component. Uses styled-components to allow for dynamic
 * buttons depending on the css values passed to it.
 *
 * Ex: <Button rounded={true} medium={true} type="submit" >Submit</Button>
 * This creates a rounded medium submit button.
 *
 *
 */

import React from 'react'
import Link from './link'
import styled from 'styled-components'
import meridianTheme from "../assets/stylesheets/meridianTheme";

let Button = styled.button`
  -webkit-appearance: unset !important;
  border-radius: ${props => props.rounded ? '10px' : '0'};
  border: ${props => props.border ? props.rounded ? '2px solid #ffb71c' : '4px solid #3a9483' : '0'};
  min-height: ${props => props.big ? '50px' : props.medium ? '25px' : props.small ? '15px' : 'initial'};
  min-width: ${props => props.big ? '200px' : props.medium ? '125px' : props.small ? '75px' : 'initial'};
  display: inline-block;
  padding: 7px 30px;
  text-align: center;
  transition-duration: 0.25s;
  &:focus {outline:0;}
  background: ${props => props.solid ? props.theme.primaryGreen : props.lightSolid ? meridianTheme.secondary : props.theme.primary};
  font-family: 'BioSans', sans-serif;
  font-weight: bold;
  &:hover {
    background: #ececec;
  }
  color: ${props => (props.textColor == 'primary-green') ? props.theme.primaryGreen :
    (props.textColor == 'primary-gold') ? props.theme.primaryGold :
        (props.textColor === 'meridian-secondary') ? meridianTheme.secondary : '#fcfcfc'};
`

let Arrow = styled.i`
  display: ${props => props.arrow ? 'inherit' : 'none'};
  border: solid ${props => props.theme.primaryGreen};
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  margin-left: 8px;
  transition-duration: 0.25s;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
`

export default ({to, children, ...props}) => (
  <Link to={to}>
    <Button {...props}>{children}<Arrow/></Button>
  </Link>
)
