var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");

var app = express();

var routes = require("./src/routes");

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
// use it before all route definitions
app.use(cors());

routes(app);

app.set("port", 8081);

var server = app.listen(app.get("port"), function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("app listening at http://%s:%s", host, port);
});
