const {v4: uuidv4} = require('uuid')
const user = require('../models/users_model')
 
exports.allget = async (req, res) => {
    try {
        const users = await user.find()
        res.send(users)
    } catch (error) {
        res.send(error.message)
    }
}

exports.getone = async (req, res) => {
    try {
        const userone = await user.findOne({id:req.params.id})
        res.send(userone)
    } catch (error) {
        res.send(error.message)
    }
}

exports.createusers = async (req, res) => {

    try {
        const newuser = new user({
            id: uuidv4(),
            fullName: req.body.fullName,
            age: Number(req.body.age),
            description: req.body.description,
        })
        await newuser.save()
        res.send(newuser)
    } catch (error) {
        res.send(error.message)
    }
    

}
exports.updateusers = async (req, res) => {
    try {
        const userone = await user.findOne({id:req.params.id})
        userone.fullName = req.body.fullName
        userone.age = Number(req.body.age)
        userone.description = req.body.description
        await userone.save()
        res.send(userone)
    } catch (error) {
        res.send(error.message)
    }
}
exports.deleteusers = async (req, res) => {
    try {
        await user.deleteOne({id:req.params.id})
        res.send('this user is deleted')
    } catch (error) {
        res.send(error.message)
    }
}