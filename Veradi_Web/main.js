var http = require("http");
var fs = require("fs");
var url = require("url");

const { title } = require("process");

var topic = require("./lib/topic.js");
var author = require("./lib/author.js");

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;
  if (pathname === "/") {
    topic.home(request, response);
  } else if (pathname === "/about") {
    topic.about(request, response);
  } else if (pathname === "/contact") {
    topic.contact(request, response);
  } else if (pathname === "/login") {
    topic.login(request, response);
  } else if (pathname === "/static/home.css") {
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + pathname));
  } else if (pathname === "/static/about.css") {
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + pathname));
  } else if (pathname === "/static/contact.css") {
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + pathname));
  } else if (pathname === "/static/login.css") {
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + pathname));
  } else {
    response.writeHead(404);
    response.end("Not found");
  }
});
app.listen(3000);
