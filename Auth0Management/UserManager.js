const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
var request = require("request");

var options = {
  method: 'GET',
  url: 'https://bkwilcox.auth0.com/api/v2/users',
  qs: {q: 'email:"john@fakeemail.com"', search_engine: 'v3'},
  headers: {authorization: `Bearer ${process.env.TEST_MANAGE_TOKEN}`}
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  console.log(body);
});
