/**
 * @name Program
 * @author Isaiah Bullard (CSI 43C9 Spring 2020)
 * @author Mario Arturo Lopez Martinez (CSI 43C9 Spring 2020)
 *
 * @overview Display a program and its details in a styled list item
 *
 * @param {URI} imgSrc thumbnail for program
 * @param {string} title to be displayed
 * @param {string} description to be displayed
 * @param {URI} link program page to link to
 *
 * @example
 *
 *  <Program
 *    imgSrc={testImg}
 *    title={node.name}
 *    link={"/program/example"}
 *    description={node.description}
 *  />
 */

import React from "react"
import styled from "styled-components"
import { Col, Row } from "reactstrap"
import Button from "components/btn"

const Program = styled.div`
  margin-top: 10px;
  margin-bottom: 50px;
`

const Picture = styled.img`
  max-height: 175px;
  max-width: 175px;
  height: auto;
  width: auto;
  border: solid 1px #383838;
`

const ProgramTitle = styled.h3`
  margin-top: 10px;
  font-family: "BioSans", sans-serif;
  font-size: 30px;
  height: auto;
  width: auto;
  color: ${props => props.theme.primaryGreen};
`

const Line = styled.hr`
    margin-top: 00px;
    margin-bottom: 10px;
    width: auto
    float: left;
    border-top: 1px solid ${props => props.theme.primaryGold};
`

const ProgramDescription = styled.p`
  font-family: Georgia, sans-serif;
  text-align: left;
  line-height: 1.3;
  font-size: 18.5px;
  color: #1a1a1a;
`

export default ({ imgSrc, title, description, link }) => (
  <Program>
    <Row>
      <Col xs="auto">
        <Picture src={imgSrc} />
      </Col>
      <Col xs="9">
        <ProgramTitle>
          <b>{title}</b>
        </ProgramTitle>
        <Line />
        <ProgramDescription>{description}</ProgramDescription>
        <Button
          rounded
          medium
          border
          textColor="primary-green"
          type="submit"
          to={link}
        >
          Learn More
        </Button>
      </Col>
    </Row>
  </Program>
)
