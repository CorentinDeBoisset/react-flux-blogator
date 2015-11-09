/**
 * Created by Sandeep on 28/06/15.
 */
import Iso from 'iso'
import { Router } from 'react-router'
import React from 'react'
import ReactDOM from 'react-dom'
import routes from './routes.jsx'
import alt from './alt'
import createBrowserHistory from 'history/lib/createBrowserHistory'

let history = createBrowserHistory()

window.onload = function(){
    Iso.bootstrap(function (state, meta, container) {
        alt.bootstrap(state);
        ReactDOM.render(<Router history={history}>{routes}</Router>, container);
    });
}
