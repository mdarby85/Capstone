/**
 * @name TeamMemberCard
 * @author Chris Holle
 *
 * @overview Card to be used to display information about team members.
 *
 * @param {string} imgSrc image to be used at top of card
 * @param {string} name name of contact
 * @param {string} department department contact is in
 * @param {string} role contact's Role in the program
 *
 * @example
 *
 * <TeamCard
 *    imgSrc={image}
 *    name="Chris Holle"
 *    department="Baylor Computer Science"
 *    role="Full-Stack Development"
 * />
 */

import React from "react"
import styled from "styled-components"

const TeamCard = styled.div`
  padding: 1rem;
  margin: auto;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
  width: 325px;
  height: 220px;
  text-align: center;
  border-top: 2px solid ${props => props.theme.secondaryGreen};
  transition-duration: 0.3s;
  &:hover {
    box-shadow: 2px 2px 14px rgba(0, 0, 0, 0.4);
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

export default ({ imgSrc, name, department, role }) => (
  <TeamCard>
    <TeamMemberImage src={imgSrc} rounded />
    <MemberName>{name}</MemberName>
    <MemberDescription>{department}</MemberDescription>
    <br />
    <MemberDescription>{role}</MemberDescription>
  </TeamCard>
)
