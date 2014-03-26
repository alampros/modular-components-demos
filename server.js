#!/usr/bin/env node

var express = require('express'),
  http = require('http'),
	app = express(),
  pkginfo = require('pkginfo')(module),
  port = 3000;
require('tinycolor');

app.locals(module.exports);

app.use( express.logger('dev') );
app.use(require('connect-livereload')({
  port: 9000
}));

app.use(express.static('public'));

var server = http.createServer(app);
server.listen(port);
var addr = server.address();
console.log('%s'.yellow + ' listening at '+ 'http://%s:%d'.blue.bold, app.locals.title,addr.address,addr.port);
module.exports = app;

