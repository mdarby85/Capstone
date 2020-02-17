import React from 'react';
import styled from 'styled-components';
import {Container, Col, Row} from "reactstrap";


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
    font-family: 'BioSans';
    color: ${props => props.theme.secondaryGreen};
    font-size: 30px;
    height: auto;
    width: auto;
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
    font-size: 18.5px;
`

export default ({ImgSrc, Title, Description, Link}) => (
    <Program>
        <Row>
            <Col xs="auto">
                <Picture src={ImgSrc} />
            </Col>
            <Col xs="auto">
                <ProgramTitle><b>{Title}</b></ProgramTitle>
                <Line />
                <ProgramDescription>{Description}</ProgramDescription>
            </Col>
        </Row>
    </Program>
)