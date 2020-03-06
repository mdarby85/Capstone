/**
 * @name formLayout
 *
 * @author Mario Arturo Lopez Martinez
 *
 * @overview Layout for Functional forms
 */

import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"

import styled from "styled-components"
import logo from "assets/images/meridian-logo-text.png"
import meridianTheme from "assets/stylesheets/meridianTheme"
import "assets/stylesheets/layout.scss"

const formLayout = ({ children }) => {
  const PageLayout = styled.div`
    height: 100vh;
    width: 100vw;
    background: #f1f1f1;
    position: relative;
  `

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
    position: relative;
    height: 4em;
    margin-bottom: 1em;

    /* Center Horizontally */
    display: block;
    margin-left: auto;
    margin-right: auto;
  `

  const Centered = styled.div`
    /* Centered */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `

  return (
    <ThemeProvider theme={meridianTheme}>
      <PageLayout>
        <Centered>
          <Logo src={logo} />
          <FormBox>{children}</FormBox>
        </Centered>
      </PageLayout>
    </ThemeProvider>
  )
}

formLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default formLayout
