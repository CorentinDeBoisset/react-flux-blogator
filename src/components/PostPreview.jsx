import React from 'react'
import { Link } from 'react-router'
import PostActions from '../actions/PostActions'

var PostPreview = React.createClass({
    displayName: 'PostPreview',
    render() {
        return (
            <Link to={'/post/'+this.props.post.id+'/'+this.props.post.slug} className="single-post">
                <div className="post-title">{this.props.post.title}</div>
                <div className="author-details"><img src={this.props.post.author.photo} className="author-photo"/><span className="author-name">{this.props.post.author.name}</span></div>
            </Link>
        )
    }
});

module.exports = PostPreview
