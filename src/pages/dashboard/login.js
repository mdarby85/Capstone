/**
 * author: Chris Holle
 * file: login.js
 *
 * Description:
 * Simple login for dashboard
 *
 *
 * TODO: Finish design and remove layout
 * TODO: Link to auth0
 * TODO: Connect to DUO
 * TODO: route to correct dashboard view
 */

import React from "react"
import FormLayout from "../../components/formLayout";
import FormTitle from "../../components/formTitle";
import {NormalField} from "reactstrap-form-fields";
import Button from "../../components/btn";
import styled from "styled-components";
import logo from "../../assets/images/BU_BrandMark_Stacked_Gold.png"

const Logo = styled.img`
    display: inline-block;
    height: 4em;
`

export default () => (
    <FormLayout>
        <Logo src={logo}/>
        <FormTitle title={'Login'}/>
        <form name="Contact Form" method="POST" netlify>
            <input type="hidden" name="form-name" value="Contact Form"/>
            <NormalField name="Email"/>
            <NormalField name="Password"/>
            <br/>
            <Button type="submit" style={{margin: 'auto'}}>Submit</Button>
        </form>
    </FormLayout>
)