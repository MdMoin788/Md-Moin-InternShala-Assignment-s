const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
require("dotenv").config();
const newToken = (user) => {
    return jwt.sign({ user }, process.env.JWT_SECRET_KEY)
}
// ------------------------------------------- SignUp ---------------------------------------------------
const register = async (req, res) => {
    let user = await User.findOne({ email: req.body.email }).lean().exec()
    if (user) {
        return res.send("Please try another email")
    }
    user = await User.create(req.body)
    const token = newToken(user)
    return res.send({ user, token })
}
// --------------------------------------------- Login -----------------------------------------------------
const login = async (req, res) => {
    console.log('req', req.body);
    let user = await User.findOne({ email: req.body.email })
    if (!user) {
        return res.send("Please try another email password")
    }
    const match = user.checkPassword(req.body.password);
    console.log('match', match);
    if (!match) {
        return res.send("please try another email or password")
    }
    const token = newToken(user)
    return res.send({ user, token })
}
const updateprofile = async (req, res) => {
    // console.log('req', req.body.password);
    const {password} = req.body
    var hash = bcrypt.hashSync(req.params.id, 6);
    console.log('hash', hash);
    if (password) {
    console.log('hash', hash);

        let user = await User.findByIdAndUpdate(req.params.id, { password: hash }, { new: true })
        return res.send({ user })
    }
    else{
        let user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.send({ user })
    }
}
module.exports = { register, login, updateprofile }