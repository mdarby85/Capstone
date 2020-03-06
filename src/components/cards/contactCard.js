/**
 * @name ContactCard
 *
 * @author Chris Holle
 *
 * @overview Card to be used to display contact information for individuals on the contact page.
 *
 * @param {string} imgSrc image to be used at top of card
 * @param {string} name name of contact
 * @param {string} department department contact is in
 * @param {string} role contact's Role in the program
 * @param {string} email contact's Email
 * @param {string} phone contact's Phone Number
 *
 * @example
 *
 * <ContactCard
 *    imgSrc={image}
 *    name="Chris Holle"
 *    department="Baylor Computer Science"
 *    role={"Full-Stack Development"}
 *    email={"john_doe@baylor.edu"}
 *    phone={"(823) 418-2083"}
 * />
 *
 */

import React from "react"
import styled from "styled-components"

const ContactCard = styled.div`
  padding: 1rem;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
  width: 325px;
  height: 275px;
  text-align: center;
  border-top: 2px solid ${props => props.theme.secondaryGreen};
  transition-duration: 0.3s;
  &:hover {
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
`

const ContactImage = styled.img`
  border-radius: 50px;
  width: 100px;
  margin-top: -4em;
  border: 1px solid #3a3a3a;
`

const ContactName = styled.h4`
  font-family: "BioSans", sans-serif;
  color: ${props => props.theme.primaryGreen};
  margin: 0.8em 0;
`

const ContactDescription = styled.i`
  font-family: Georgia, serif;
  font-size: 20px;
  color: ${props => props.theme.primaryGreen};
`

export default ({ ImgSrc, Name, Department, Role, Email, Phone }) => (
  <ContactCard>
    <ContactImage src={ImgSrc} rounded />
    <ContactName>{Name}</ContactName>
    <ContactDescription>{Department}</ContactDescription>
    <br />
    <ContactDescription>{Role}</ContactDescription>
    <br />
    <ContactDescription>{Email}</ContactDescription>
    <br />
    <ContactDescription>{Phone}</ContactDescription>
  </ContactCard>
)
