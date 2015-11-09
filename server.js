/**
 * Express configurations.
 *
 * @type {exports|module.exports}
 */
import { match } from 'react-router';
var RoutingContext = require('react-router').RoutingContext;
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var express = require('express');
var Iso = require('iso');
var session = require('express-session');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

//Define Routes here
var posts = require('./server/post.routes');
var routes = require('./src/routes.jsx');
var alt = require('./src/alt');
var app = express();

app.set('views', __dirname+'/views');
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'www')));
app.use(session({secret: 'muchSecretVerySecurityWow', resave: false, saveUninitialized: true}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({limit : '50mb'}));
app.use(cookieParser());

//use Routes here
app.use('/',posts);

app.use(function (req, res) {

    alt.bootstrap(JSON.stringify(res.locals.data || {}));

    var iso = new Iso();

    match({routes, location: req.url}, function (err, redirectLocation, renderProps) {
        if(!err && !redirectLocation && renderProps)
            var content = ReactDOMServer.renderToString(React.createElement(RoutingContext, renderProps))

            iso.add(content, alt.flush());

            res.render('index',{content:iso.render()});
    });
});

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {

    if(!err.status || err.status !== 404){
        err.status = 500;
    }

    console.log(err.stack);

    res.status(err.status);

    res.sendFile(path.resolve(__dirname+'/views/error/'+err.status+'.html'));

});

app.listen(8080, function () {
    console.log('Listening on localhost:8080');
});
