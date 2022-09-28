var http = require("http");
var path = require(`path`);
var express = require("express");
var app = express();

let user = [];

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
  res.send(user);
});

app.listen(5000, function () {
  console.log(`listening on 5000`);
});
