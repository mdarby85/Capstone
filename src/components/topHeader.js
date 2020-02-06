import React, { useState } from 'react';
import {
    Container,
    Navbar,
} from 'reactstrap';
import Link from './link'
import logo from '../assets/images/BU_BrandMark_Horz_2Color.png'
import '../assets/stylesheets/main.css'
import theme from "../assets/stylesheets/theme"


const navBackColor = theme.primaryGreen;


const TopHeader = () => {

    return (
        <Navbar style={{backgroundColor: navBackColor}} className={'fixed-top'} dark expand="md">
            <Container>
                <div className='col-md-3 logo'>
                    <Link to="/" className="navbar-brand">
                        <img src={logo} alt="Logo" height="40px"/>
                    </Link>
                </div>
                <div className="col-md-9"><h3>Capstone</h3></div>


            </Container>
        </Navbar>
    );
}

export default TopHeader;
