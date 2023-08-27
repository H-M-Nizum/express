const { log } = require('console')
const express = require('express')
const mongoose = require('mongoose')
const multer  = require('multer')

const app = express()

// middleware that recave data from form.
app.use(express.urlencoded({extended: true}))
app.use(express.json())


// connecting to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/uploadDB')
        console.log('DB is connected');
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}


// creating Database schema and model
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    file: {
        type: String,
        required: true,
    }
})
//model 
const userModel = mongoose.model('users', userSchema)

/// file upload
const storage = multer.diskStorage({
    // where upload my image.
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    // my image file name.
    filename: function (req, file, cb) {
      const name = Date.now() + '-' + file.originalname
      cb(null, name)
    }
})
  
const upload = multer({ storage: storage })

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
app.post('/', upload.single('image'), async (req, res) => {
    try {
        const newdata = new userModel({
            name: req.body.name,
            file: req.file.filename,
        })
        await newdata.save()
        res.send(newdata)
    } catch (error) {
        console.log(error);
    }
    res.send( 'file is uploded')
})

app.listen(3000, async () => {
    console.log('server is running>>>>>>>>>');
    await connectDB()
})