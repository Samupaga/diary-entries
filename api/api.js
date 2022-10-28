const express = require ('express')
const cors = require('cors')

const logRoutes = require('./middleware/logger')
// const postRouter = require('./routers/post')
// const userRouter = require('./routers/post')

const api = express()

api.use(cors())
api.use(express.json())
api.use(logRoutes)

api.get("/", (req, res) => {
    res.send("Welcome to the diary app!")
})

// api.use("/posts", postRouter)
// api.use("/users", userRouter)

module.exports = api
