// Load http module.
var http = require('http');
// Load express module.
var express = require('express');
var yaml = require('js-yaml'),
    fs   = require('fs');

var listServices = require("./data/listServices.json")
var extractService = require("./data/extractServices-45018000000110019.json")
// Initialize app object.
var app = new express();

// Let express know there's a public directory.
app.use(express.static('./public'));
 
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
  res.send(listServices)
});

app.post("/api/extractServices", function(req, res){
  res.send(extractService)
})

// Create server and listen on port 3030.
http.createServer(app).listen(3000, function() {
  console.log('Listen to server at port 3000 ...');
});


var util = require('util');
var log_file = fs.createWriteStream(__dirname + '/debug.log', {flags : 'w'});
var log_stdout = process.stdout;

console.log = function(d) { //
  log_file.write(util.format(d) + '\n');
  log_stdout.write(util.format(d) + '\n');
};