var http = require("http");
var path = require(`path`);
var express = require("express");
var app = express();

let user = [];

let chat = [];

app.use(express.static(path.join(__dirname, `../chat/build`)));

const bodyParser = require("body-parser");
app.use(bodyParser.json()); //요청 본문을 json 형태로 파싱
app.use(bodyParser.urlencoded({ extended: false })); //

app.get(`/`, function (req, res) {
  res.sendFile(path.join(__dirname, `../chat/build/index.html`));
});

app.post(`/`, function (req, res) {
  var username = req.param("username");
  var cha = req.param("cha");
  var userdata = {
    username: username,
    cha: cha,
  };
  user.push(userdata);
  res.send(user);
});

app.get("/chat", function (req, res) {
  res(user);
});

app.post(`/chat`, function (req, res) {
  var text = req.param("text");
  var textData = {
    text: text,
  };
  chat.push(textData);
  res.send(chat);
});

app.listen(5000, function () {
  console.log(`listening on 5000`);
});
