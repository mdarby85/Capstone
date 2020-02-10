/**
 * These instructions tell Docker how to test our container to make sure it's working properly.
 *
 * Based on configuration scripts found at: https://github.com/STUkh/gatsby-strapi-docker/
 *
 * Author(s): Alex Stukh, Mario Arturo Lopez Martinez
 * File: strapi/healthcheck.js
 * Last Modified: February 10th, 2020
 */

 // Construct a quick HTTP client for testing an endpoint
const http = require("http")

const options = {
  // Uncomment for testing on local environment
  host: "localhost",
  // Uncomment for testing on prod environment
  // host: '192.168.3.202'
  port: "1337",
  path: "/_health",
  method: "HEAD",
  timeout: 2000,
}

// Testing for the status code 204 
// More info here: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204
const request = http.get(options, res => {
  console.log(`STATUS: ${res.statusCode}`)
  if (res.statusCode == 204) {
    process.exit(0)
  } else {
    process.exit(1)
  }
})

request.on("error", function (err) {
  console.error(`ERROR: ${err.message}`)
  process.exit(1)
})

request.end()
