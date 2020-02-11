/**
 * author: Chris Holle
 * file: displayCard.js
 *
 * Description:
 * Card to be used to display project information.
 *
 * Prop Usage:
 * ImgSrc       - Image to be used at top of card
 * Name         - Name of project
 * Description  - Simple description of project
 * Semester     - Semester of the project
 * to           - path to linkable item
 *
 * Example usage:
 * <DisplayCard Name={"Cappy"} Semester={"Spring 2020"} ImgSrc={tempImg}
 *              Description={'This is a story of the great big wolf who blew all of the little piggies houses down!'}
 *              to={'/about'}/>
 */

import React from "react"
import styled from "styled-components"
import Link from "../link"

const DisplayCard = styled.div`
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
  width: 325px;
  height: 380px;
  border-radius: 8px 8px 0 0;
  text-align: center;
  border-top: 2px solid ${props => props.theme.secondaryGreen};
  transition-duration: 0.3s;
  &:hover {
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
`

const DisplayBody = styled.div`
  padding: 1.5rem;
`

const DisplayImage = styled.img`
  border-radius: 7px 7px 0 0;
  width: 325px;
  height: 200px;
`

const DisplayName = styled.h4`
  font-family: "BioSans", sans-serif;
  text-align: left;
  font-weight: bold;
  font-size: 20px;
  color: ${props => props.theme.primaryGreen};
  margin: 0.5em 0;
`

const DisplayDescription = styled.p`
  font-family: Georgia, serif;
  font-size: 14px;
  text-align: left;
  color: ${props => props.theme.primaryGreen};
`

const DisplaySemester = styled.p`
  font-family: Georgia, serif;
  font-size: 18px;
  font-weight: 600;
  text-align: left;
  color: ${props => props.theme.primaryGreen};
`

const DisplayLearnMore = styled.span`
  font-family: Georgia, serif;
  font-size: 16px;
  margin-top: 3px;
  font-weight: 400;
  float: right;
  color: ${props => props.theme.primaryGreen};
  &:hover {
    font-weight: bold;
  }
`

export default ({ ImgSrc, Name, Description, Semester, to }) => (
  <DisplayCard>
    <DisplayImage src={ImgSrc} />
    <DisplayBody>
      <DisplayName>{Name}</DisplayName>
      <DisplayDescription>{Description}</DisplayDescription>
      <DisplaySemester>
        {Semester}{" "}
        <Link to={to}>
          <DisplayLearnMore>Learn More</DisplayLearnMore>
        </Link>
      </DisplaySemester>
    </DisplayBody>
  </DisplayCard>
)
