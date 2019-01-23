'use strict';
var Book = require('../models/Book');

module.exports = function (app) {

  app.route('/api/books')
    .get(function (req, res){
      Book.find({})
      .then(docs=>{
        res.json(docs.map(book=>({
          _id:book._id,
          title:book.title,
          commentcount:book.comments.length
        })));
      }).catch(err=>{
        res.json([])
      })
      //response will be array of book objects
      //json res format: [{"_id": bookid, "title": book_title, "commentcount": num_of_comments },...]
    })

    .post(function (req, res){
      var title = req.body.title;
      Book.create({title})
      .then(book=>{
        res.json(book)
      }).catch(e=>{
<<<<<<< HEAD
        res.status(404).json('missing title')
=======
        res.json(e)
>>>>>>> ecfe237d208df08252ae27b272d4b81e2659267f
      })
      //response will contain new book object including atleast _id and title
    })

    .delete(function(req, res){
      Book.deleteMany({})
      .then(()=>{
        res.render('complete delete successful')
      })
      //if successful response will be 'complete delete successful'
    });



  app.route('/api/books/:id')
    .get(function (req, res){
      var bookid = req.params.id;
      Book.find({_id:bookid}).then(b=>{
<<<<<<< HEAD
        res.json(b[0])
      }).catch(e=>{
        res.status(404).json('Not Found!')
=======
        res.json(b)
      }).catch(e=>{
        res.json('Not Found!')
>>>>>>> ecfe237d208df08252ae27b272d4b81e2659267f
      })
      //json res format: {"_id": bookid, "title": book_title, "comments": [comment,comment,...]}
    })

    .post(function(req, res){
      var bookid = req.params.id;
      var comment = req.body.comment;
      Book.findOneAndUpdate(
        {_id:bookid},
        {$push:{comments:comment}},
        {new:true}
      ).exec()
      .then(newDoc=>{
<<<<<<< HEAD
        res.status(202).json(newDoc)
=======
        res.json(newDoc)
>>>>>>> ecfe237d208df08252ae27b272d4b81e2659267f
      }).catch(err=>{
        res.json(err);
      })
      //json res format same as .get
    })

    .delete(function(req, res){
      var bookid = req.params.id;
      Book.deleteOne({_id:bookid}).exec()
      .then(d=>{
        res.json('delete successful');
      }).catch(e=>{
        res.json(e);
      })
      //if successful response will be 'delete successful'
    });

};
