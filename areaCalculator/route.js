const express = require('express')
const router = express.Router()

// for post form data.
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({extended: false}))
router.use(bodyParser.json())

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/pages/index.html')
})

router.get('/circle', (req, res) => {
    res.sendFile(__dirname + '/pages/Circle.html')
})
router.post('/circle', (req, res) => {
    const radius = req.body.radius;
    res.send(`<h1>Circle area : ${3.1416 * radius * radius}</h1>`)
})


router.get('/triangle', (req, res) => {
    res.sendFile(__dirname + '/pages/Triangle.html')
})
router.post('/triangle', (req, res) => {
    const base = req.body.base;
    const height = req.body.height
    res.send(`<h1>Triangle area : ${0.5 * base * height}</h1>`)
})


router.get('/rectangle', (req, res) => {
    res.sendFile(__dirname + '/pages/Rectangle.html')
})
router.post('/rectangle', (req, res) => {
    const length = req.body.length;
    const width = req.body.width;
    res.send(`<h1>Recrangle area : ${length * width}</h1>`)
})


router.get('/square', (req, res) => {
    res.sendFile(__dirname + '/pages/Square.html')
})
router.post('/square', (req, res) => {
    const side = req.body.side;
    res.send(`<h1>Square area : ${side * side}</h1>`)
})

module.exports = router