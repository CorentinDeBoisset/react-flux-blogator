import request from 'superagent'

var shared = require('../../shared')

var PostActions = {
    loadAllPosts(cb){
        request.get(shared.apiUrl+'/api/posts', (err,response) => {
            this.actions.updatePosts(response.body);
            if(cb){
                cb();
            }
        });
    },

    loadSinglePost(id, cb){
        request.get(shared.apiUrl+'/api/post/'+id, (err,response) => {
            this.actions.updateCurrentPost(response.body);
            if(cb){
                cb();
            }
        });
    },

    updatePosts(posts){
        this.dispatch(posts);
    },

    updateCurrentPost(post){
        this.dispatch(post);
    }
}


module.exports = shared.alt.createActions(PostActions);
