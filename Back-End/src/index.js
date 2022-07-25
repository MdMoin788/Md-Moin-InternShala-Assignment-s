const express = require("express");
const cors = require("cors")
const app = express();
app.use(express.json());
app.use(cors())
require("dotenv").config()
const connect = require("./config/db")
const todoController = require("./controllers/TodoController")
const { register, login, updateprofile } = require("./controllers/userController");
app.use("/todos", todoController)
app.post("/register", register)
app.post("/login", login)
app.use("/profile/:id", updateprofile)
app.listen(process.env.PORT || 5000, async () => {
    try {
        await connect();
        console.log('Server Connected Success')
    } catch (error) {
        console.log(error)
    }
})
