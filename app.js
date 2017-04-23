var express = require('express');
var app = express();

var indexRoutes = require("./routes/index");

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.use(indexRoutes);

var port = process.env.PORT || 3000
app.listen(port, process.env.IP, function() {
	console.log("Listening on port 3000!");
})