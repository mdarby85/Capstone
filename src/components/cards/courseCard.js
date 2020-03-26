/**
 * @name CourseCard
 *
 * @author Chris Holle
 * @author Mario Arturo Lopez Martinez
 *
 * @overview Card to be used to display course name and projects under a
 * certain course when activated.
 *
 * @param {string} name name of course
 * @param {string} semester current Semester
 * @param {string} active true if the card is active, false if not active
 * @param {string} year course year
 * @param {string} number course number designated by registrar
 * @param {string} prefix course prefix designated by department
 *
 * @example
 *
 *  <CourseCard
 *    name="Engineering Design II"
 *    semester="Spring"
 *    year="2020"
 *    number="4390"
 *    prefix="ENG"
 *    active
 *  />
 *
 */

import React from "react"
import styled from "styled-components"

const CourseCard = styled.div`
  padding: 1.6rem;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
  width: 325px;
  height: 120px;
  text-align: left;
  border-top: 2px solid ${props => props.theme.secondaryGreen};
  transition-duration: 0.3s;

  &:hover {
    box-shadow: 2px 2px 14px rgba(0, 0, 0, 0.4);
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

  &.active p {
    color: ${props => props.theme.secondaryGold};
  }
`

const CourseName = styled.h4`
  font-family: "BioSans", sans-serif;
  color: ${props => props.theme.primaryGreen};
  text-align: left;
`

const CourseSemester = styled.p`
  font-family: Georgia, serif;
  font-size: 18px;
  text-transform: capitalize;
  line-height: 10px;
  text-align: left;
  color: #c3c3c3;
`

export default ({ prefix, number, semester, active, year, name }) => (
  <CourseCard className={`${active ? "active" : ""}`}>
    <CourseName>
      {prefix} {number} {name}
    </CourseName>
    <CourseSemester>
      {semester} {year}
    </CourseSemester>
  </CourseCard>
)
