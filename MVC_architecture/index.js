const express = require('express')
const app = express()

app.use(express.urlencoded({extended: true}))


app.get('/', (req, res) => {
    res.sendFile(__dirname+'/views/index.html')
})

app.use(require("./Routes/users_route"))
app.use(require("./Routes/admin_route"))
app.use(require("./Routes/moderat_route"))

app.use((req, res, next) => {
    res.send('<h1> 404 not found </h1>')
})
app.listen(4000, () => {
    console.log('server is running....');
})