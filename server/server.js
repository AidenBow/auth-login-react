const express = require("express")
const server = express()
const helmet = require("helmet")
const cors = require("cors")
const session = require("client-sessions")


server.use(helmet())
server.use(cors())
server.use(express.json())
server.use(session({
  cookieName: "BigMan",
  secret: "fuckkkWOW",
  duration: 24 * 60 * 60 * 1000,
  cookie: {
    secure: false,
    httpOnly: true,
    ephemeral: false,
  }
}))

module.exports = server