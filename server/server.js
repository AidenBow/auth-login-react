const express = require("express")
const server = express()
const session = require("client-sessions")
const helmet = require("helmet")
const cors = require("cors")
const userRouter = require("./routes/user_routes")



server.use(helmet())
server.use(cors())
server.use(express.json())
server.use(session({
  cookieName: "session",
  secret: "fuckkkWOW",
  duration: 24 * 60 * 60 * 1000,
  cookie: {
    secure: false,
    httpOnly: true,
    ephemeral: false,
  }
}))
server.use("/api", userRouter)

module.exports = server