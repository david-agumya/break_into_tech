var express = require("express");
var app = express();
// Serve static files
app.use(express.static(__dirname + '/public'));

app.get('/downloadpr4', function(req, res){
	var file = __dirname + '/upload_files/problem4.py';
	res.download(file); // Set disposition and send it.
  });

app.get('/downloadpr5', function(req, res){
	var file = __dirname + '/upload_files/problem5.zip';
	res.download(file); // Set disposition and send it.
});

app.get('/', function(req, res){
	res.sendFile('/public/home.html');
})



app.listen(4040, function(){
	console.log("Server running on port 4040");
	});



