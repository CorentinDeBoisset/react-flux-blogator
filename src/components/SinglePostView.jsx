import React from 'react'
import PostStore from '../stores/PostStore'
import PostActions from '../actions/PostActions'

var SinglePostView = React.createClass({
    displayName: 'SinglePostView',

    getInitialState() {
        return PostStore.getState();
    },

    componentDidMount() {
        PostStore.listen(this.onChange);
        PostActions.loadSinglePost(this.props.params.id)
    },

    componentWillUnmount() {
        PostStore.unlisten(this.onChange);
    },

    onChange(state) {
        this.setState(state);
    },

    render() {
        if(this.state.currentPost)
            return (
                <div className="full-post">
                    <h1 className="post-title">{this.state.currentPost.title}</h1>
                    <div className="author-details">
                        <img src={this.state.currentPost.author.photo} className="author-photo"/>
                        <span className="author-name">{this.state.currentPost.author.name}</span>
                    </div>
                    <div className="post-content">
                        {this.state.currentPost.description}
                    </div>
                </div>
            )
        else
            return <div>Chargement...</div>
    }
});

module.exports = SinglePostView
