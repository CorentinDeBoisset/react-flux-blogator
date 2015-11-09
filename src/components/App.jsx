import React from 'react'
import Header from './Header.jsx'

var App = React.createClass({
  displayName: 'App',
  render(){
    return (
      <div className="body-container">
        <Header/>
        <div>{this.props.children}</div>
      </div>
    )
  }
});

module.exports = App
