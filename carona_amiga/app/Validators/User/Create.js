'use strict'

class Create {
  get validateAll(){
    return true
  }
  get rules () {
    return {
      username: 'required|unique:users',
      email: 'required|email|unique:users',
      university_id: 'required|unique:users',
    }
  }
}

module.exports = Create
