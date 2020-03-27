/**
 * @author Chris Holle (CSI 43C9 Spring 2020)
 */
import React from "react"
import Styled from "styled-components"

let Hr = Styled.hr`
  width: 12em;
  border-radius: 0.5rem;
  border-width: 0.2rem;
  margin: 1em auto;
  background: ${props => props.theme.primaryGold};
`

export default () => <Hr />
