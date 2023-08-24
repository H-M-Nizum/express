// /users -> GET
// /users/:id -> GET
// /users/ -> POST
// /users/:id -> PATCH
// /users/:id -> DELETE

const { allget, getone, createusers, updateusers, deleteusers } = require('../controllers/users_controller')

const router = require('express').Router()

router.get('/users', allget)
router.get('/users/:id', getone)
router.post('/users', createusers)
router.patch('/users/:id', updateusers)
router.delete('/users/:id', deleteusers)

module.exports = router