// Load http module.
var http = require('http');
// Load express module.
var express = require('express');
var yaml = require('js-yaml'),
    fs   = require('fs');

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
    try {
      var doc = yaml.safeLoad(fs.readFileSync(__dirname + '/data/asg.yaml', 'utf8'));
      console.log(doc);
      res.send(doc)
    } catch (e) {
      console.log(e);
    }
});
// Create server and listen on port 3030.
http.createServer(app).listen(3000, function() {
    console.log('Server running...');
});