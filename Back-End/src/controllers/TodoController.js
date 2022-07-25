const express = require("express");
const router = express.Router();
const Todo = require("../models/todoModel");
router.post("", async (req, res) => {
    console.log('req', req.body);
    try {
        let todo = await Todo.create(req.body);
        return res.status(200).send(todo)
    } catch (e) {
        return res.status(500).send(e.message)
    }
})
router.get("", async (req, res) => {
    // console.log('req', req);
    try {
        let todo = await Todo.find().lean().exec();
        return res.status(200).send({data :todo})
    } catch (e) {
        return res.status(500).send(e.message)
    }
})
module.exports = router;