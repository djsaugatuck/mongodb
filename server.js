
var express = require("express");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var app = express();
var routes = require("./routes");
var PORT = process.env.PORT || 3000;


app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Use bodyParser 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes);

// Mongo 
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoNYT";

// Mongoose to Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
  useMongoClient: true
});

// Listen on the port
app.listen(PORT, function() {
  console.log("Listening on port: " + PORT);
});
