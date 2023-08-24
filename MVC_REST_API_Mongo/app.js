const express = require('express')
const cors = require('cors')
require('./config/db')

const routes = require('./routes/users')
const app = express()

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(routes)

app.get('/', (req, res) => {
    res.sendFile(__dirname+ '/./views/index.html')
})


// Route error handel
app.use((req, res, next) => {
    res.status(404).send('<h1>Route not found</h1>')
})

// server error handel
app.use((err, req, res, next) => {
    res.status(500).send('<h1>Server not found</h1>')
})
module.exports = app