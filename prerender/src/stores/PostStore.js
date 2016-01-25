var PostActions = require('../actions/PostActions')

var alt = require('../../shared').alt

module.exports = alt.createStore({
    displayName: 'PostStore',
    bindListeners: {
        updateCurrentPost: PostActions.UPDATE_CURRENT_POST,
        updatePosts:  PostActions.UPDATE_POSTS
    },

    state: {
        posts: [],
        currentPost: null
    },
    // Class methods
    updateCurrentPost: function(post){
        this.setState({
            currentPost: post
        })
    },

    updatePosts: function(posts){
        this.setState({
            posts: posts
        })
    }
})
