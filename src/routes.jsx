import React from 'react'
import { Route, IndexRoute } from 'react-router';
import PostListView from './components/PostListView.jsx'
import SinglePostView from './components/SinglePostView.jsx'
import App from './components/App.jsx'

var routes = (
    <Route path="/" component={App}>
        <IndexRoute component={PostListView}/>
        <Route path="/post/:id/:slug" component={SinglePostView}/>
    </Route>
);

module.exports = routes;
