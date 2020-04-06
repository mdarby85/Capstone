/*
Query Syntax available at https://auth0.com/docs/users/search/v3/get-users-endpoint

Example Data String (MUST INCLUDE CONNECTION)
'{
  name: 'John Smith',
  username: 'jsmith',
  email: 'jsmith@example.com',
  bio: 'This is a biography',
  graduated: false,
  confirmed: false,
  blocked: false,
  connection: Username-Password-Authentication
}'
*/

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
var request = require("request");

const AuthOptions = {
  method: 'POST',
  url: process.env.AUTH0_TOKEN_DOMAIN,
  headers: {'content-type': 'application/x-www-form-urlencoded'},
  form: {
    grant_type: 'client_credentials',
    client_id: process.env.AUTH0_MANAGE_CLIENT_ID,
    client_secret: process.env.AUTH0_MANAGE_SECRET,
    audience: 'https://bkwilcox.auth0.com/api/v2/'
  }
};

module.exports = (function(){
  return {
    getUserByID,
    createUser,
    updateUser,
    deleteUser
  };

// WORKING

  function getUserByID(id){
    request(AuthOptions, function (error, response, body) {
      if (error) throw new Error(error);
      obj_body = JSON.parse(body);
        var options = {
          method: 'GET',
          url: `https://${process.env.AUTH0_DOMAIN}/api/v2/users/${id}`,
          headers: {'Authorization': `Bearer ${obj_body.access_token}`, 'Content-Type': 'application/json'}
        };
        request(options, function (u_error, u_response, u_body) {
          if (u_error) throw new Error(u_error);
            console.log(u_body);
        });
      });
  }

// WORKING
// Must be type string
  function createUser(dataString){
    request(AuthOptions, function (error, response, body) {
      if (error) throw new Error(error);
      obj_body = JSON.parse(body);
      var options = {
        method: 'POST',
        url: `https://${process.env.AUTH0_DOMAIN}/api/v2/users`,
        body: dataString,
        headers: {'Authorization': `Bearer ${obj_body.access_token}`, 'Content-Type': 'application/json'}
      };

      request(options, function (u_error, u_response, u_body) {
        if (u_error) throw new Error(u_error);
        console.log(u_body);
      });
    });
  }

// WORKING
// Include user_id key/value pair in dataString
  function updateUser(id, dataString){
    request(AuthOptions, function (error, response, body) {
      if (error) throw new Error(error);
      obj_body = JSON.parse(body);
      var options = {
        method: 'PATCH',
        url: `https://${process.env.AUTH0_DOMAIN}/api/v2/users/${id}`,
        body: dataString,
        headers: {'Authorization': `Bearer ${obj_body.access_token}`, 'Content-Type': 'application/json'}
      };
      request(options, function (u_error, u_response, u_body) {
        if (u_error) throw new Error(u_error);
        console.log(u_body);
      });
    });
  }

// WORKING
  function deleteUser(id){
    request(AuthOptions, function (error, response, body) {
      if (error) throw new Error(error);
      obj_body = JSON.parse(body);
      var options = {
        method: 'DELETE',
        url: `https://${process.env.AUTH0_DOMAIN}/api/v2/users/${id}`,
        headers: {'Authorization': `Bearer ${obj_body.access_token}`, 'Content-Type': 'application/json'}
      };
      request(options, function (u_error, u_response, u_body) {
        if (u_error) throw new Error(u_error);
        console.log(u_response);
      });
    });
  }

})();
