// Load http module.
var http = require('http');
var path = require('path');

// Load express module.
var express = require('express');
var yaml = require('js-yaml'),
    fs   = require('fs');

var testData = require("./data/mysql.json")

// Initialize app object.
var app = new express();
var server = http.createServer(app);

// Let express know there's a public directory.
app.use(express.static(path.resolve(__dirname, 'public')));
 
// Basic routing.
app.get('/', function(req, res) {
    // res.send is changed to result.render in order to load the correct view.
    // res.render('index');
    res.send("index.html")
});

app.post('/api/listServices', function(req, res) {
    // try {
    //   var doc = yaml.safeLoad(fs.readFileSync(__dirname + '/data/asg.yaml', 'utf8'));
    //   console.log(doc);
    //   res.send(doc)
    // } catch (e) {
    //   console.log(e);
    // }
    res.send(testData)
});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Server listening at", addr.address + ":" + addr.port);
});