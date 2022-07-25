const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema({
    username: { type: String, required: false },
    email: { type: String, required: true },
    password: { type: String, required: true }
})

userSchema.pre("save", function (next) {
    // if (!this.isModified('password')) return next();
    var hash = bcrypt.hashSync(this.password, 6);

    this.password = hash;
    next()
})

userSchema.methods.checkPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
}
module.exports = mongoose.model("user", userSchema)
let data = "$2a$06$oyBpjGamdyOxnyY7rEuhAOcOdQHrntCvuAYh0jSvqhmzBP1eCRj3q"
let coming = "$2a$06$oyBpjGamdyOxnyY7rEuhAOcOdQHrntCvuAYh0jSvqhmzBP1eCRj3q"
// console.log(data == coming)