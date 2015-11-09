import React from 'react'
import { Link } from 'react-router'
import PostActions from '../actions/PostActions'

var Header = React.createClass({
    displayName: 'Header',
    render() {
        return (
            <div className="header">
                <h1><Link to="/">React Isomorphic Blog</Link></h1>
            </div>
        )
    }
});

module.exports = Header
