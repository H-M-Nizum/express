
const path = require('path')
const users = require('../Models/moderat_model')


exports.getusers = (req, res) => {
    res.sendFile(path.join(__dirname+'/../views/moderat.html'))
}

exports.postusers = (req, res) => {
    const ModID = req.body.fullname
    const email = req.body.email
    const phone_Number = Number(req.body.phone_Number)
    const user = {
        ModID,
        email,
        phone_Number
    }
    users.push(user)
    res.status(202).json({
        success: true,
        users,
    })
}