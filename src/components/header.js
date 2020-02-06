/**
 * author: Chris Holle
 * file: header.js
 *
 * Description:
 * Header that contains the non-dashboard navigation system.
 *
 * used in layout.js
 */
import React, { useState } from 'react';
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler, NavItem, NavLink, Nav
} from 'reactstrap';
import Link from './link'
import theme from "../assets/stylesheets/theme";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

    const style = {
        'margin-left': '35em',
        left: 'auto'
    };
    const navBackColor = '#383838';
    const borderTopColor = theme.secondaryGold;

    const navBarStyle = {
        'backgroundColor': navBackColor,
        'margin-top': '4em',
        'border-top': '1px solid ' + borderTopColor
    };

  return (
    <Navbar style={navBarStyle} className={'fixed-top'} expand="md">
      <Container>
        <span id={"Navbar"}>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <Link to={'/'} className={'nav-main'}><NavLink>Overview</NavLink></Link>
                    </NavItem>
                    <NavItem>
                        <Link to={'/sponsors'} className={'nav-main'}><NavLink>Sponsors</NavLink></Link>
                    </NavItem>
                    <NavItem>
                        <Link to={'/programs'}  className={'nav-main'}><NavLink>Programs</NavLink></Link>
                    </NavItem>
                    <NavItem>
                        <Link to={'/about'}  className={'nav-main'}><NavLink>About</NavLink></Link>
                    </NavItem>
                </Nav>
                <Nav style={style} navbar>
                    <NavItem style={{'float': 'right'}}>
                        <Link to={'/contact'}><NavLink className={'nav-extra'}>Contact Us</NavLink></Link>
                    </NavItem>
                    <NavItem>
                        <Link to={'/dashboard/login'}><NavLink className={'nav-extra'}>Sign In</NavLink></Link>
                    </NavItem>
                </Nav>
            </Collapse>
        </span>
      </Container>
    </Navbar>
  );
}

export default Header;
