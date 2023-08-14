const express = require('express')
const { getusers, postusers } = require('../Controllers/admin_control')
const router = express.Router()


router.get('/admin', getusers)
router.post('/admin', postusers)

module.exports = router