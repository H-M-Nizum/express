const express = require('express')
const { getusers, postusers } = require('../Controllers/users_control')
const router = express.Router()


router.get('/users', getusers)
router.post('/users', postusers)

module.exports = router