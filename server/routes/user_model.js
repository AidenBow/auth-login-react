const db = require("./db-config")

function find() {
  return db("users")
}

function findBy(filter) {
  return db("users").where(filter)
}

function register(data) {
  return db("users").insert(data)
}


module.exports = {
  find,
  findBy,
  register
}