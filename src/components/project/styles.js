import React from "react"
import styled from "styled-components"

// Section 1
export const Section1Container = styled.div`
  padding: 18em 6em 8em 6em;
  margin-top: 0;
`
export const Section1Title = styled.h1`
  text-align: left;
  padding-top: 0;
  max-width: 400px;
  padding-bottom: 1rem;
  font-weight: 300;
  font-size: 48px;
  font-family: Georgia;
  border-bottom: solid 2pt ${props => props.theme.secondaryGold};
  color: ${props => props.theme.primaryGreen};
`
export const Section1p = styled.p`
  line-height: 2.5;
  font-size: 18px;
  margin: 1em 0 0 0;
  text-align: left;
  max-width: 510px;
  color: ${props => props.theme.primaryGreen};
`
export const Section1Image = styled.img`
  height: 827px;
  width: 750px;
  object-fit: cover;
  margin: 0 auto;
`

// Section 2
export const Section2ContainerPrimary = styled.div`
  padding: 6em 6em 6em 6em;
  margin-top: 0;
  background: ${props => props.theme.primaryGreen};
`
export const Section2ContainerSecondary = styled.div`
  padding: 6em 6em 6em 6em;
  margin-top: 0;
  background: ${props => props.theme.secondaryGold};
`
export const Section2TitlePrimary = styled.h1`
  text-align: center;
  padding-top: 0;
  padding-bottom: 1rem;
  font-weight: 600;
  font-size: 36px;
  font-family: Georgia;
  color: white;
`
export const Section2TitleSecondary = styled.h1`
  text-align: center;
  padding-top: 0;
  padding-bottom: 1rem;
  font-weight: 600;
  font-size: 36px;
  font-family: Georgia;
  color: ${props => props.theme.primaryGreen};
`
export const Section2HrPrimary = styled.hr`
  margin-top: -0.3em;
  margin-bottom: 2rem;
  border: 0;
  max-width: 120px;
  border-top: 2px solid ${props => props.theme.secondaryGold};
`
export const Section2HrSecondary = styled.hr`
  margin-top: -0.3em;
  margin-bottom: 2rem;
  border: 0;
  max-width: 120px;
  border-top: 2px solid ${props => props.theme.primaryGreen};
`
export const Section2pPrimary = styled.p`
  line-height: 2.5;
  font-size: 18px;
  margin: auto;
  text-align: center;
  max-width: 700px;
  color: white;
`
export const Section2pSecondary = styled.p`
  line-height: 2.5;
  font-size: 18px;
  margin: auto;
  text-align: center;
  max-width: 700px;
  color: ${props => props.theme.primaryGreen};
`

// Section 3
export const Section3Container = styled.div`
  padding: 0em 16em;
`
export const Section3Divider = styled.hr`
  margin: 2rem 0;
  border: 0;
  border-top: 2px solid ${props => props.theme.primaryGreen};
`

// Section 4
export const Section4Container = styled.div`
  margin-bottom: -7em;
  padding: 6em 6em 6em 6em;
  margin-top: 0;
  background: ${props => props.theme.secondaryGold};
`
export const Section4Image = styled.img`
  height: 400px;
  max-width: 600px;
  margin: 0 auto;
`
export const Section4TitleSub = styled.h1`
  text-align: left;
  font-weight: 600;
  font-size: 28px;
  color: ${props => props.theme.primaryGreen};
`
export const Section4TitleMain = styled.h1`
  text-align: left;
  padding-top: 0;
  padding-bottom: 1rem;
  font-weight: 600;
  font-size: 36px;
  color: ${props => props.theme.primaryGreen};
`
export const Section4Hr = styled.hr`
  margin-top: -0.3em;
  margin-bottom: 2rem;
  margin-left: 0;
  border: 0;
  max-width: 160px;
  border-top: 2px solid ${props => props.theme.primaryGreen};
`
export const Section4p = styled.p`
  line-height: 2.5;
  font-size: 18px;
  text-align: left;
  max-width: 700px;
  color: ${props => props.theme.primaryGreen};
`
