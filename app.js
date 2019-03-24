var express = require('express')
, app = express()
, server = require('http').createServer(app)
, io = require('/home/.../.npm/socket.io')
, npid = require("npid")
, uuid = require('node-uuid')
, Room = require('./room.js')
, _ = require('underscore')._;


app.set('port', 3000);
app.set('ipaddr', "127.0.0.1");
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(__dirname + '/public'));
app.use('/components', express.static(__dirname + '/components'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/icons', express.static(__dirname + '/icons'));
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

/* Store process-id (as priviledged user) */
try {
    npid.create('/var/run/advanced-chat.pid', true);
} catch (err) {
    console.log(err);
    //process.exit(1);
}