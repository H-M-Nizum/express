const express = require("express")
const app = express()
app.use(express.urlencoded({extended: true}))

app.use(require("./route/routers"))



app.get("/" , (req, res) => {
    res.sendFile(__dirname + "/views/home.html")
})

app.use((req, res) => {
    res.send("<h1> 404! nt found this rout </h1>")
})

app.listen(4000, () => {
    console.log("server is running_______");
})