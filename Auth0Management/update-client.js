// update-client.js

const path = require("path")
require("dotenv").config({ path: path.resolve(__dirname, "../.env") })
const Auth0Manager = require("./Auth0Manager")
var fs = require("file-system")

// the new data we want to set
let newData = fs.readFileSync("./client-data.json", "utf8", function(
  err,
  data
) {
  if (err) {
    throw err
  }
  return data
})
newData = JSON.parse(newData)

// Any data that needs to be updated needs to be added here
const updatedData = {
  name: `${newData.name}`,
}

Auth0Manager.init()
  .then(() => {
    return Auth0Manager.updateClient(updatedData)
  })
  .then(updatedClient => {
    console.log(updatedClient)
    return updatedClient
  })
  .catch(err => ({ message: "There was an error!", ...err }))
