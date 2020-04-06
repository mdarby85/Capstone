/**
 * @name project/example.js
 * @author Chris Holle
 * @overview Program example page to show projects from within a particular program.
 */

import React from "react"
import { Col, Row } from "reactstrap"

import tempImg from "assets/images/green_science.jpg"

import {
  Section4Container,
  Section4Image,
  Section4TitleMain,
  Section4Hr,
  Section4TitleSub,
  Section4p,
} from "./styledComponents"

/*
 * Section4
 * - Sponsor logo image (left)
 * - Sponsor description (right)
 */

export default () => (
  <>
    {/* Section 4 */}
    {/* Sponsor information (picture & description) */}
    <Section4Container>
      <Row>
        <Col md={6}>
          <Section4Image src={tempImg} />
        </Col>
        <Col>
          <Section4TitleMain>Sponsor</Section4TitleMain>
          <Section4Hr />
          <Section4TitleSub>Baylor</Section4TitleSub>
          <Section4p>
            The intuitive new way to showcase College Universities' Capstone
            Experience. Developed by students for institutions everywhere. The
            intuitive new way to showcase College Universities' Capstone
            Experience. Developed by students for institutions everywhere.
          </Section4p>
        </Col>
      </Row>
    </Section4Container>
  </>
)
