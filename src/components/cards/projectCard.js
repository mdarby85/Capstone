/**
 * @name ProjectCard
 *
 * @author Chris Holle
 * @author Mario Arturo Lopez Martinez
 *
 * @overview Card to be used to display project information.
 *
 * @param {string} imgSrc image to be used at top of card
 * @param {string} name name of project
 * @param {string} description simple description of project
 * @param {string} semester semester of the project
 * @param {string} to path to linkable item
 *
 * @example
 *
 * <DisplayCard
 *    name="Cappy"
 *    semester="Spring 2020"
 *    imgSrc={tempImg}
 *    description="This is a story of the great big wolf who blew all of the little piggies houses down!""
 *    to="/about"
 * />
 *
 */

import React from "react"
import styled from "styled-components"

import Link from "components/link"

const DisplayCard = styled.div`
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
  width: 325px;
  border-radius: 8px 8px 0 0;
  text-align: center;
  border-top: 2px solid ${props => props.theme.secondaryGreen};
  transition-duration: 0.3s;

  &:hover {
    box-shadow: 2px 2px 14px rgba(0, 0, 0, 0.4);
    transform: translateY(-5px);
  }
`

const DisplayBody = styled.div`
  padding: 1rem;
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
    -webkit-transition: all 0.25s;
    -moz-transition: all 0.25s;
    -o-transition: all 0.25s;
    transition: all 0.25s;

    text-shadow: 0 0 0.5px #333, 0 0 0.5px #333;
  }
`

export default ({ imgSrc, name, description, semester, to }) => (
  <DisplayCard>
    <DisplayImage src={imgSrc} />
    <DisplayBody>
      <DisplayName>{name}</DisplayName>
      <DisplayDescription>{description}</DisplayDescription>
      <DisplaySemester>
        {semester}
        <Link to={to}>
          <DisplayLearnMore>Learn More</DisplayLearnMore>
        </Link>
      </DisplaySemester>
    </DisplayBody>
  </DisplayCard>
)
