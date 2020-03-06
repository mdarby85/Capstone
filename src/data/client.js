/**
 * @name client.js
 *
 * @author Mario Arturo Lopez Martinez
 *
 * @overview Client used to gather data from sources provided
 */

import ApolloClient from "apollo-boost"
import fetch from "isomorphic-fetch"

export const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  fetch,
})
