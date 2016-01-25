var React = require('react')

var Header = require('./Header.jsx')

module.exports = React.createClass({
  displayName: 'App',
  render: function(){
    return (
      <div className="main-container">
        <Header/>
        <div>{this.props.children}</div>
      </div>
    )
  }
});
