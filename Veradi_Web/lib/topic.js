var db = require("./db.js");
var template = require("./template.js");
var url = require("url");
var qs = require("querystring");
//var sanitizer = require("sanitize-html"); // 사용자에 의해 가공이 되는 정보을 유통할 때는 해당 정보를 sanitizing 해야한다.

exports.home = function (request, response) {
  var title = "";
  var description = "";
  var list = template.homeTable();
  var html = template.HTML(
    title,
    list,
    `<h2>${title}</h2>${description}`,
    `home.css`
  );
  response.writeHead(200);
  response.end(html);
};
exports.about = function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  if (queryData.id === undefined) {
    queryData.id = 1;
  }
  db.query("select * from topic", function (error, topics) {
    if (error) {
      throw error;
    }
    var title = `<h2>${topics[queryData.id - 1].title}</h2>`;
    var description = `<p>${topics[queryData.id - 1].description}</p>`;
    var list = template.list(topics, "about_list");
    var html = template.HTML(
      title,
      `<div id="grid">${list}`,
      `<div id="about_desc">${title}${description}<h2>Others</h2><iframe width="550" height="400" src="${
        topics[queryData.id - 1].video_link
      }
      " title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div>`,
      `about.css`
    );
    response.writeHead(200);
    response.end(html);
  });
};
exports.contact = function (request, response) {
  var title = "";
  var description = "";
  var list = template.contactDescription();
  var html = template.HTML(
    title,
    list,
    `<h2>${title}</h2>${description}`,
    `contact.css`
  );
  response.writeHead(200);
  response.end(html);
};
exports.login = function (request, response) {
  var title = "";
  var description = "";
  var list = template.loginForm();
  var html = template.HTML(
    title,
    list,
    `<h2>${title}</h2>${description}`,
    `login.css`
  );
  response.writeHead(200);
  response.end(html);
};
