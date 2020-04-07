const UserManager = require("./UserManager");

const testUser = {
  name: 'Jane Smith',
  username: 'janesmith',
  email: 'janesmith@example.com',
  connection: 'Username-Password-Authentication',
  password: 'iamjane!1234'
};

const deleteUser = {
  name: 'Delete Me',
  username: 'delme',
  email: 'delme@example.com',
  connection: 'Username-Password-Authentication',
  password: 'th!s!sgone12345'
}

const changeUser = {
  email: 'janesmith@meridian.com'
}

const userID = 'auth0|5e8baefaa366780c3298a3d1';

//console.log(JSON.stringify(testUser))

UserManager.deleteUser('auth0|5e8bb35288167b0c27e13997');
