var React = require('react')

var PostStore = require('../stores/PostStore')
var PostPreview = require('./PostPreview.jsx')
var PostActions = require('../actions/PostActions')

module.exports = React.createClass({
    displayName: 'PostListView',
    getInitialState: function() {
        return PostStore.getState();
    },

    componentDidMount: function() {
        PostStore.listen(this.onChange);
        PostActions.loadAllPosts();
    },

    componentWillUnmount: function() {
        PostStore.unlisten(this.onChange);
    },

    onChange: function(state) {
        this.setState(state);
    },

    render: function() {
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
