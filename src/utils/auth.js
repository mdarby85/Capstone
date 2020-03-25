/**
 * @name auth.js
 * @author Brandon Wilcox (CSI 43C9 Spring 2020)
 * @overview Auth0 configuration file
 *
 * If you get an error about auth0-js:
 *  1. Go into Gatsby CLI
 *  2. Run `gatsby clean`
 *  3. delete package-lock and node_modules
 *  4. re-run npm install
 *  5. manually install auth0-js (npm install --save auth0-js)
 *  6. manually run `gatsby build`
 *
 * Test Account:
 * U: john@fakeemail.com
 * P: baylorbear1234!
 *
 * @TODO Move this to .env or something, no credentials in code pls
 * @TODO Don't forget to replace domain and clientID with environment variables
 * @TODO Document what's going on in this file pls
 */

import auth0 from "auth0-js"
import { navigate } from "gatsby"

const isBrowser = typeof window !== "undefined"

const auth = isBrowser
  ? new auth0.WebAuth({
      domain: "bkwilcox.auth0.com",
      clientID: "M6em8UGXUK5zgSV4CwxWTgiGPe97wc5j",
      redirectUri: "http://localhost:8000/callback",
      responseType: "token id_token",
      scope: "openid profile email",
    })
  : {}

const tokens = {
  accessToken: false,
  idToken: false,
  expiresAt: false,
}

let user = {}

export const isAuthenticated = () => {
  if (!isBrowser) {
    return
  }

  return localStorage.getItem("isLoggedIn") === "true"
}

export const login = () => {
  if (!isBrowser) {
    return
  }

  auth.authorize()
}

const setSession = (cb = () => {}) => (err, authResult) => {
  if (err) {
    navigate("/")
    cb()
    return
  }

  if (authResult && authResult.accessToken && authResult.idToken) {
    let expiresAt = authResult.expiresIn * 1000 + new Date().getTime()
    tokens.accessToken = authResult.accessToken
    tokens.idToken = authResult.idToken
    tokens.expiresAt = expiresAt
    user = authResult.idTokenPayload
    localStorage.setItem("isLoggedIn", true)
    navigate("/dashboard/home")
    cb()
  }
}

export const handleAuthentication = () => {
  if (!isBrowser) {
    return
  }

  auth.parseHash(setSession())
}

export const getProfile = () => {
  return user
}

export const silentAuth = callback => {
  if (!isAuthenticated()) return callback()
  auth.checkSession({}, setSession(callback))
}

export const logout = () => {
  localStorage.setItem("isLoggedIn", false)
  auth.logout()
}
