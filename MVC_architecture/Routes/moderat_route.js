const express = require('express')
const { getusers, postusers } = require('../Controllers/moderat_control')
const router = express.Router()


router.get('/moderat', getusers)
router.post('/moderat', postusers)

module.exports = router