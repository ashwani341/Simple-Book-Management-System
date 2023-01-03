const express = require('express')
const app = express()
const port = 5000
require('dotenv').config()
const fs = require('fs')
const path = require('path')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
const mongodbURI = 'mongodb://127.0.0.1/booksDB'
const bodyParser = require('body-parser')


// -- START importing controllers -----------------------------------------------------------------------------------------------------
const booksController = require('./controllers/booksController')
// -- END importing controllers -----------------------------------------------------------------------------------------------------


// -- START connecting to the mognoDB using mongoose -----------------------------------------------------------------------------------------------------
mongoose.connect(mongodbURI, (err, res) => {
  if (err) return console.error(err.message)

  console.log('Connected to mognodb successfully!')
})
// -- END connecting to the mognoDB using mongoose -----------------------------------------------------------------------------------------------------


// -- START cors setup -----------------------------------------------------------------------------------------------------
const whitelist = ['http://localhost:8000']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
// -- END cors setup -----------------------------------------------------------------------------------------------------


// -- START middlewares setup -----------------------------------------------------------------------------------------------------
// morgan log saving into a file 'access.log'
// const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
// configured to save log in access.log fil
// app.use(morgan('combined', { stream: accessLogStream }))
// configured to show log on terminal
app.use(morgan('dev'))

app.use(cors(corsOptions))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// -- END middlewares setup -----------------------------------------------------------------------------------------------------


// -- START api calls -----------------------------------------------------------------------------------------------------
app.get('/', (req, res) => {
  res.send('Server is running!')
})

app.use('/api/books', booksController)
// -- END api calls -----------------------------------------------------------------------------------------------------


// -- START app.listen() -----------------------------------------------------------------------------------------------------
app.listen(port, () => console.log(`Server is listening at http://localhost:${port}/`))
// -- END app.listen() -----------------------------------------------------------------------------------------------------
