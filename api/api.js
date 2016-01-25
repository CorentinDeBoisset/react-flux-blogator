var express = require('express');
var app = express();

posts = require('./posts.json')

app.use(function(req, res, next){
  res.setHeader('Access-Control-Allow-Origin', '*');
  next()
})

app.get('/api/posts', function (req, res) {
  res.json(posts);
});

app.get('/api/post/:id', function (req, res) {
  var id = req.params.id;
  posts.forEach(function(post){
      if(post.id === parseInt(id,10)){
          return res.json(post);
      }
  });
});

var server = app.listen(9000);
