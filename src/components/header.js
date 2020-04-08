/**
 * author: Chris Holle
 * file: header.js
 *
 * Description:
 * Header that contains the non-dashboard navigation system.
 *
 * used in layout.js
 */

import React, { useState } from "react"
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavItem,
  NavLink,
  Nav,
} from "reactstrap"
import Link from "components/link"
import theme from "assets/stylesheets/theme"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  const navBackColor = "#383838"
  const borderTopColor = theme.secondaryGold

  const navBarStyle = {
    backgroundColor: navBackColor,
    marginTop: "4em",
    borderTop: "1px solid " + borderTopColor,
  }

  return (
    <Navbar style={navBarStyle} className="fixed-top" expand="md">
      <Container>
        <span id="Navbar">
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link
                  to="/"
                  className="nav-main nav-link"
                  activeClassName="activeHeader"
                >
                  Overview
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  to="/sponsors"
                  className="nav-main nav-link"
                  activeClassName="activeHeader"
                >
                  Sponsors
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  to="/programs/browse"
                  className="nav-main nav-link"
                  activeClassName="activeHeader"
                >
                  Programs
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  to="/projects/browse"
                  className="nav-main nav-link"
                  activeClassName="activeHeader"
                >
                  Projects
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  to="/about"
                  className="nav-main nav-link"
                  activeClassName="activeHeader"
                >
                  About
                </Link>
              </NavItem>
            </Nav>
            <Nav style={{ marginLeft: "35em" }} navbar>
              <NavItem style={{ float: "right" }}>
                <Link
                  to="/contact"
                  className="nav-extra nav-link"
                  activeClassName="activeHeader"
                >
                  Contact
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/dashboard/login" className="nav-extra nav-link">
                  Dashboard
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </span>
      </Container>
    </Navbar>
  )
}

export default Header
