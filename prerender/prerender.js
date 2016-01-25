require('babel-core/register')

var Router = require('react-router');
var match = Router.match;
var RoutingContext = Router.RoutingContext;
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var express = require('express');
var Iso = require('iso');
var session = require('express-session');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var proxy = require('express-http-proxy');

var posts = require('./post.routes');
var routes = require('./src/routes.jsx');
var shared = require('./shared');

// We setup the server
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({limit : '50mb'}));
app.use(cookieParser());
app.set('views', __dirname+'/views');
app.set('view engine', 'jade');

// The routes are added
app.use(express.static(path.join(__dirname, 'www')));
app.use('/',posts);

app.use('/api', proxy(shared.apiUrl, {
  forwardPath: function(req, res) {
    return require('url').parse(req.url).path;
  }
}));


app.use(function (req, res) {
    var iso = new Iso();
    shared.alt.bootstrap(JSON.stringify(res.locals.data || {}));

    match({routes: routes, location: req.url}, function (err, redirectLocation, renderProps) {
        if(!err && !redirectLocation && renderProps){
            var content = ReactDOMServer.renderToString(React.createElement(RoutingContext, renderProps))

            iso.add(content, shared.alt.flush());
            if(app.get('env') == 'development')
                res.render('app-dev', {content: iso.render()});
            else
                res.render('app', {content: iso.render()});
        }
    });
});

// Finally we add the production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    if(!err.status || err.status !== 404){
        err.status = 500;
    }
    console.log(err.stack);
    res.status(err.status);
    res.sendFile(path.resolve(__dirname+'/views/error/'+err.status+'.html'));
});


app.listen(8999, function () {
    console.log('Listening on ' + shared.prerenderUrl);
});
