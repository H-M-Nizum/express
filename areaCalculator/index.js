const express = require('express')
const app = express()

const router = require('./route')
app.use(router)

// use middleware for undefind rout hendal
app.use((req, res) => {
    res.send('<h1> 404 Not Found ..</h1>')
})


app.listen(4000, () => {
    console.log('server running.....');
})