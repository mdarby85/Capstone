/**
 * Pre-generated
 */
import React from "react"
import { NormalField } from "reactstrap-form-fields"
import Button from "components/btn"

export default () => (
    <form name="Contact Form" method="POST">
        <input type="hidden" name="form-name" value="Contact Form" />
        <NormalField name="Full Name" />
        <NormalField name="Email" />
        <NormalField name="Phone Number" />
        <NormalField name="Comments" type="textarea" />
        <Button rounded={true} medium={true} type="submit" textColor="primary-green">
            Submit
        </Button>
    </form>
)
