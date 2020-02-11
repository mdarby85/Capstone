/**
 * author: Chris Holle
 * file: layout.js
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
  const PageLayout = styled.div`
    height: 100vh;
    width: 100vw;
    padding: 10em 30em;
    background: #f1f1f1;
  `

  const FormBox = styled.div`
    min-height: 25em;
    padding: 3em 5em;
    background: white;
    border: 1pt solid #909090;
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
      <PageLayout>
        <Logo src={logo} />
        <FormBox>{children}</FormBox>
      </PageLayout>
    </ThemeProvider>
  )
}

formLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default formLayout
