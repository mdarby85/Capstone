/**
 * @name wrapRootElement.js
 * @author Mario Arturo Lopez Martinez
 * @overview Client used to gather data from sources provided
 */

import React from "react"
import { ApolloProvider } from "@apollo/react-hooks"
import { Provider } from "mobx-react"
import UserStore from "data/userModel"
import SessionCheck from "data/sessionCheck"
import { client } from "data/client"

export const wrapRootElement = ({ element }) => (
  <SessionCheck>
    <Provider store={UserStore}>
      <ApolloProvider client={client}>{element}</ApolloProvider>
    </Provider>
  </SessionCheck>
)
