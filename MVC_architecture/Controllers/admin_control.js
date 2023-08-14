
const path = require('path')
const users = require('../Models/admin_model')


exports.getusers = (req, res) => {
    res.sendFile(path.join(__dirname+'/../views/admin.html'))
}

exports.postusers = (req, res) => {
    const logID = req.body.logID
    const email = req.body.email
    const phone_Number = Number(req.body.phone_Number)
    const user = {
        logID,
        email,
        phone_Number
    }
    users.push(user)
    res.status(202).json({
        success: true,
        users,
    })
}