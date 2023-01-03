const mongoose = require('mongoose')
const schema = mongoose.Schema

const bookSchema = new schema({
  bookId: {
    type: Number,
    require: true
  },
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('Book', bookSchema)