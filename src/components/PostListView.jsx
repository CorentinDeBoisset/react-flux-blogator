import React from 'react'
import PostStore from '../stores/PostStore'
import PostPreview from './PostPreview.jsx'
import PostActions from '../actions/PostActions'

var PostListView = React.createClass({
    displayName: 'PostListView',
    getInitialState() {
        return PostStore.getState();
    },

    componentDidMount() {
        PostStore.listen(this.onChange);
        PostActions.loadAllPosts();
    },

    componentWillUnmount() {
        PostStore.unlisten(this.onChange);
    },

    onChange(state) {
        this.setState(state);
    },

    render() {
        if(this.state.posts && this.state.posts.length){
            var posts = this.state.posts.map((post) => {
               return (
                   <PostPreview key={post.id} post={post} />
               )
            });
            return (
                <div>
                    {posts}
                </div>
            )
        }
        else{
            return <div>Chargement</div>
        }
    }
});

module.exports = PostListView
