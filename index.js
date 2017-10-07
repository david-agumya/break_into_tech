var express = require("express");
var app = express();
// Serve static files
app.use(express.static(__dirname + '/public'));

app.listen(4040, function(){
	console.log("Server running on port 4040");
	});
