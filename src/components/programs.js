import React from 'react';
import styled from 'styled-components';
import {Col, Row} from "reactstrap";


const Program = styled.div`
    
`

const Picture = styled.img`
    height: 175px;
    width: 175px;
    border: solid 1px #383838;
`

const ProgramTitle = styled.h4`
    font-family: 'BioSans';
    color: ${props => props.theme.secondaryGreen};
`

const Line = styled.hr`
    width: 300px;
    float: left;
    border-top: 1px solid ${props => props.theme.secondaryGold};
`

const ProgramDescription = styled.p`
    font-family: Georgia, sans-serif;
    text-align: left;
`

export default ({ImgSrc, Title, Description, Link}) => (
    <Program>
        <Row>
            <Col xs="4" align="center">
                <Picture src={ImgSrc} />
            </Col>
            <Col xs="8">
                <ProgramTitle>{Title}</ProgramTitle>
                <Line />
                <br />
                <ProgramDescription>{Description}</ProgramDescription>
            </Col>
        </Row>
    </Program>
)