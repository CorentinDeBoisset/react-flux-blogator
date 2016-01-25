var request = require('superagent'),
    shared = require('./shared');

exports.showAllPosts = function(req,res,next){
    request.get(shared.apiUrl+'/api/posts',function(err,response){
       res.locals.data = {
           "PostStore" : {
               "posts" : response.body
           }
       }
       next();
    });
}


exports.showSinglePost = function(req,res,next){
    var id = req.params.id;
    request.get(shared.apiUrl+'/api/post/'+id,function(err,response){
        var post = response.body;
        res.locals.data = {
            "PostStore" : {
                "currentPost" : post
            }
        };
        next();
    });
}
