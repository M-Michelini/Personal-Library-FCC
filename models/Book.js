var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  comments:[{
    type:String
  }]
})

var Book = mongoose.model('Book',bookSchema)
module.exports = Book
