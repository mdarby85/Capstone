// get-client.js
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const Auth0Manager = require("./Auth0Manager");
var fs = require("file-system");


Auth0Manager.init()
  .then(() => Auth0Manager.getClient())
  .then(client => {
    var data = fs.writeFileSync("./client-data.json", JSON.stringify(client), {
      encoding: "utf8"
    });
    return client;
  })
  .catch(console.error);
