/**
 * @name userModel.js
 * @author Mario Arturo Lopez Martinez (CSI 43C9 Spring 2020)
 * @overview Data model used state info locally
 * @TODO expand upon this, create more stores(?)
 */

import { observable, action, decorate } from "mobx"

class UserModel {
  name = ""

  setName(name) {
    this.name = name
  }
}

/**
 * @overview Programatically decorates member variables and functions
 * @see https://mobx.js.org/best/decorators.html
 */
decorate(UserModel, {
  name: observable,
  setName: action,
})

const UserStore = new UserModel()

export default UserStore
