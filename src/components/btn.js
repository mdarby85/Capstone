/**
 * Stylized Button component. Uses styled-components to allow for dynamic
 * buttons depending on the css values passed to it.
 *
 * Options:
 *  arrow={boolean}
 *   - includes arrow in button
 *
 * Ex: <Button rounded={true} medium={true} type="submit" >Submit</Button>
 * This creates a rounded medium submit button.
 *
 * TODO: Reduce number of tertiary conditions and make use of global css classes
 */

import React from "react"
import styled from "styled-components"

import Link from "components/link"
import meridianTheme from "assets/stylesheets/meridianTheme"

let Button = styled.button`
  -webkit-appearance: unset !important;
  border-radius: ${props => (props.rounded ? "10px" : "0")};
  border: ${props =>
    props.border
      ?  "2px solid #ffb81c"
        : "none"};
  height: ${props =>
    props.big
      ? "50px"
      : props.medium
      ? "40px"
      : props.small
      ? "25spx"
      : "initial"};
  display: inline-block;
  padding: ${props =>
  props.big
    ? "7px 30px"
    : props.medium
    ? "7px 30px"
    : props.small
      ? "5px 15px"
      : "initial"};
  text-align: center;
  &:focus {
    outline: 0;
  }
  background: ${props =>
    props.solid
      ? props.theme.primaryGreen
      : props.lightSolid
      ? meridianTheme.secondary
      : props.theme.primary};
  font-family: "BioSans", sans-serif;
  font-weight: bold;
  &:hover {
    transition-duration: 0.25s;
    color: #000000;
    background: #ececec;
  }
  color: ${props =>
    props.textColor === "primary-green"
      ? props.theme.primaryGreen
      : props.textColor === "primary-gold"
      ? props.theme.primaryGold
      : props.textColor === "meridian-secondary"
      ? meridianTheme.secondary
      : "#fcfcfc"};
`

let Arrow = styled.i`
  display: ${props => (props.arrow ? "inline-block" : "none")};
  border: solid ${props => props.theme.primaryGreen};
  border-width: 0 2px 2px 0;
  padding: 3px;
  margin-left: 8px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
`

export default ({ to, children, ...props }) => (
  <Link to={to}>
    <Button {...props}>{children}</Button>
  </Link>
)
