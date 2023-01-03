const express = require('express')
const app = express()
const port = 8000

const filePath = require('./util/filePath')


// -- START middleware setup -----------------------------------------------------------------------------------------------------
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist'))
app.use('/bootstrap/icons', express.static(__dirname + '/node_modules/bootstrap-icons/font'))
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'))
// -- END middleware setup -----------------------------------------------------------------------------------------------------


// -- START api calls -----------------------------------------------------------------------------------------------------
app.get('/', (req, res) => res.sendFile(filePath('index')))
// -- END api calls -----------------------------------------------------------------------------------------------------


// -- START app.listen() -----------------------------------------------------------------------------------------------------
app.listen(port, () => console.log(`Server is listening at http://localhost:${port}/`))
// -- END app.listen() -----------------------------------------------------------------------------------------------------