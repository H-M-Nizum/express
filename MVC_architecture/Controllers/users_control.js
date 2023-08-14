
const path = require('path')
const users = require('../Models/users_model')


exports.getusers = (req, res) => {
    res.sendFile(path.join(__dirname+'/../views/user.html'))
}

exports.postusers = (req, res) => {
    const fullname = req.body.fullname
    const email = req.body.email
    const phone_Number = Number(req.body.phone_Number)
    const user = {
        fullname,
        email,
        phone_Number
    }
    users.push(user)
    res.status(202).json({
        success: true,
        users,
    })
}