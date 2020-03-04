/**
 * Author: Mario Arturo Lopez Martinez
 */

import React from "react"
import { ApolloProvider } from "@apollo/react-hooks"
import { client } from "apollo/client"

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
)
