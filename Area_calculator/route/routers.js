const express = require("express")
const router = express.Router()
const path = require("path")

const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({extended: false}))
router.use(bodyParser.json())


router.get("/circle" , (req, res) => {
    res.sendFile(path.join(__dirname + "/../views/circle.html"))
})
router.post("/circle" , (req, res) => {
    const radius = req.body.radius;
    res.send(`<h1>Circle area : ${3.1416 * radius * radius}</h1>`)
})



router.get("/traingel" , (req, res) => {
    res.sendFile(path.join(__dirname + "/../views/traingel.html"))
})
router.post('/traingel', (req, res) => {
    const base = req.body.base;
    const height = req.body.height
    res.send(`<h1>Triangle area : ${0.5 * base * height}</h1>`)
})



router.get("/square" , (req, res) => {
    res.sendFile(path.join(__dirname + "/../views/square.html"))
})
router.post('/square', (req, res) => {
    const side = req.body.side;
    res.send(`<h1>Square area : ${side * side}</h1>`)
})



router.get("/rectangle" , (req, res) => {
    res.sendFile(path.join(__dirname + "/../views/rectangle.html"))
})
router.post('/rectangle', (req, res) => {
    const length = req.body.length;
    const width = req.body.width;
    res.send(`<h1>Recrangle area : ${length * width}</h1>`)
})


module.exports = router