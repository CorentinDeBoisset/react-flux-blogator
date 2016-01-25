var React = require('react')
var Router = require('react-router')
var Route = Router.Route
var IndexRoute = Router.IndexRoute

var PostListView =  require('./components/PostListView.jsx')
var SinglePostView =  require('./components/SinglePostView.jsx')
var App =  require('./components/App.jsx')

var routes = (
    <Route path="/" component={App}>
        <IndexRoute component={PostListView}/>
        <Route path="/post/:id/:slug" component={SinglePostView}/>
    </Route>
);

module.exports = routes;
