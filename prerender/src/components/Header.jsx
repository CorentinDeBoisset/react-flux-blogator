var React = require('react')
var Link = require('react-router').Link

var PostActions = require('../actions/PostActions')

module.exports = React.createClass({
    displayName: 'Header',
    render: function() {
        return (
            <div className="header">
                <h1 className='header__section header__section--title'><Link className='header__link header__link--title' to="/">Blogator</Link></h1>
                <h2 className='header__section'><Link className='header__link' to="/">Home</Link></h2>
                <h2 className='header__section'><Link className='header__link' to="/about">About me</Link></h2>
                <h2 className='header__section'><Link className='header__link' to="/links">Links</Link></h2>
            </div>
        )
    }
});
