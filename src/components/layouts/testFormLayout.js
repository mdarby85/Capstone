/**
 * author: Chris Holle
 * file: formLayout.js
 *
 * Description:
 * Layout for Functional forms
 *
 */

import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"

import styled from "styled-components"
import logo from "../../assets/images/meridian-logo-text.png"
import meridianTheme from "../../assets/stylesheets/meridianTheme"
import "../../assets/stylesheets/layout.scss"

const formLayout = ({ children }) => {
  const FormBox = styled.div`
    min-width: 475px;
    max-width: 50vw;
    width: 50vw;

    padding: 3em 2.5em;
    background: white;
    border: 1pt solid #909090;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
  `

  const Logo = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1em;
    height: 4em;
  `

  return (
    <ThemeProvider theme={meridianTheme}>
      <Logo src={logo} />
      <FormBox>{children}</FormBox>
    </ThemeProvider>
  )
}

formLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default formLayout
