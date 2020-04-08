/**
 * @name LoginForm
 *
 * @author Mario Arturo Lopez Martinez
 *
 * @overview @TODO
 */

import React from "react"
import { Link } from "gatsby"
import { observer, inject } from "mobx-react"
import { login, isAuthenticated, logout } from "src/utils/auth"
import Button from "components/btn"

export default inject(`store`)(
    observer(({ store }) => {
        if (!isAuthenticated()) {
            console.log("Protected")
            login()
            return <p>Redirecting to login...</p>
        } else {
            return (
                <div>
                    <p>You're already logged in.</p>
                    <Button tag={Link} to={"/dashboard/home"} style={{ margin: "auto" }} medium>
                        Continue to Dashboard
                    </Button>
                    <Button onClick={() => logout()}>Logout</Button>
                </div>
            )
        }
    })
)
