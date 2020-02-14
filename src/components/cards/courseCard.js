/**
 * author: Chris Holle
 * file: contactCard.js
 *
 * Description:
 * Card to be used to display course name and projects under a certain course when activated.
 *
 * Prop Usage:
 * Name         - Name of course
 * Semester     - Current Semester
 * active       - true if the card is active, false if not active
 *
 * Example usage:
 * <CourseCard Name={"CSI 43C9 - Section 02"} Semester={"Spring 2020"} active={true}/>
 */

import React from 'react'
import styled from "styled-components"

const CourseCard = styled.div`
  padding: 1.6rem;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
  width: 325px;
  height: 120px;
  text-align: left;
  border-top: 2px solid ${props => props.theme.secondaryGreen};
    transition-duration: 0.3s;
    &:hover {
        box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.2);
        background: ${props => props.theme.secondaryGreen};
        border-top: 2px solid ${props => props.theme.secondaryGold};
        transform: translateY(-5px);
        cursor: pointer;
    }
    &:hover h4 {
        color: white;
    }
    
    &:hover p {
        color: ${props => props.theme.secondaryGold};
    }
    &.active {
        box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.2);
        background: ${props => props.theme.secondaryGreen};
        border-top: 2px solid ${props => props.theme.secondaryGold};
        transform: translateY(-5px);
        cursor: pointer;
    }
    &.active h4 {
        color: white;
    }
    
    &.active p{
        color: ${props => props.theme.secondaryGold};
    }
`

const CourseName = styled.h4`
    font-family: 'BioSans', sans-serif;
    color: ${props => props.theme.primaryGreen};
    text-align: left;
`

const CourseSemester = styled.p`
    font-family: Georgia, serif;
    font-size: 18px;
    line-height: 10px;
    text-align: left;
    color: #c3c3c3;
`



export default ({Name, Semester, active}) => (

    <CourseCard className={`${active ? "active" : ""}`}>
        <CourseName>{Name}</CourseName>
        <CourseSemester>{Semester}</CourseSemester>
    </CourseCard>
)