var Iso = require('iso')
var Router = require('react-router').Router
var ReactDOM = require('react-dom')
var React = require('react')
var createBrowserHistory = require('history/lib/createBrowserHistory')
var normalize = require('normalize.css')

var routes = require('./routes.jsx')
var alt = require('../shared').alt
var style = require('./style/app.styl')


let history = createBrowserHistory()

window.onload = function(){
    Iso.bootstrap(function (state, meta, container) {
        alt.bootstrap(state);
        ReactDOM.render(<Router history={history} routes={routes}/>, container);
    });
}
