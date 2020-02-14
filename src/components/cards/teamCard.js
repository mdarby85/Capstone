/**
 * author: Chris Holle
 * file: teamCard.js
 *
 * Description:
 * Card to be used to display information about team members.
 *
 * Prop Usage:
 * ImgSrc       - Image to be used at top of card
 * Name         - Name of contact
 * Department   - Department contact is in
 * Role         - Contact's Role in the program
 *
 * Example usage:
 * <TeamCard ImgSrc={image} Name={"Chris Holle"} Department={"Baylor Computer Science"}
 *              Role={"Full-Stack Development"}/>
 */

import React from "react"
import styled from "styled-components"

const TeamCard = styled.div`
  padding: 1rem;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
  width: 325px;
  height: 220px;
  text-align: center;
  border-top: 2px solid ${props => props.theme.secondaryGreen};
  transition-duration: 0.3s;
  &:hover {
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
`

const TeamMemberImage = styled.img`
  border-radius: 50px;
  width: 100px;
  margin-top: -4em;
  border: 1px solid #3a3a3a;
`

const MemberName = styled.h4`
  font-family: "BioSans", sans-serif;
  color: ${props => props.theme.primaryGreen};
  margin: 0.8em 0;
`

const MemberDescription = styled.i`
  font-family: Georgia, serif;
  font-size: 20px;
  color: ${props => props.theme.primaryGreen};
`

export default ({ ImgSrc, Name, Department, Role }) => (
  <TeamCard>
    <TeamMemberImage src={ImgSrc} rounded />
    <MemberName>{Name}</MemberName>
    <MemberDescription>{Department}</MemberDescription>
    <br />
    <MemberDescription>{Role}</MemberDescription>
  </TeamCard>
)
