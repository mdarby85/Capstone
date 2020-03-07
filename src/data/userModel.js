import { observable, action, decorate } from "mobx"

class UserModel {
  name = ""

  setName(name) {
    this.name = name
  }
}

decorate(UserModel, {
  name: observable,
  setName: action,
})

const UserStore = new UserModel()

export default UserStore
