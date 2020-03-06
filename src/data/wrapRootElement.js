/**
 * @name wrapRootElement.js
 *
 * @author Mario Arturo Lopez Martinez
 *
 * @overview Client used to gather data from sources provided
 */

import React from "react"
import { ApolloProvider } from "@apollo/react-hooks"
import { client } from "apollo/client"
import SessionCheck from "./sessionCheck"

export const wrapRootElement = ({ element }) => (
  <SessionCheck>
    <ApolloProvider client={client}>{element}</ApolloProvider>
  </SessionCheck>
)
