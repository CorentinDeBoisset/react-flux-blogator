import alt from '../alt'
import request from 'superagent'
import config from '../../config'

class PostActions {
    loadAllPosts(cb){
        var self = this;
        request.get(config.baseUrl+'/ajax/posts',function(err,response){
            self.actions.updatePosts(response.body);
            if(cb){
                cb();
            }
        });
    }

    loadSinglePost(id,cb){
        var self = this;
        request.get(config.baseUrl+'/ajax/post/'+id,function(err,response){
            self.actions.updateCurrentPost(response.body);
            if(cb){
                cb();
            }
        });
    }

    updatePosts(posts){
        this.dispatch(posts);
    }

    updateCurrentPost(post){
        this.dispatch(post);
    }
}


module.exports = alt.createActions(PostActions);
