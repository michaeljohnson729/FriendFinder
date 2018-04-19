var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var apiRoutes = require("./app/routing/apiRoutes");
var htmlRoutes = require("./app/routing/htmlRoutes");

var userProfiles = [
    {
        name: "Michael",
        profPic: "https://scontent.fsan1-1.fna.fbcdn.net/v/t1.0-9/23658374_1508300452558109_2647867184239099904_n.jpg?_nc_cat=0&oh=8adb5415900bc2a26eac232160c9c3c1&oe=5B638F3F",
        answers: [2,2,2,2,2,2,2,2,2,2]
    }
]


// GET routes supposed to be in html routes
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
});
app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});



//GET routes supposed to be in api routes
app.get("/api/friends", function (req, res){
    return res.json(userProfiles);
});
app.post("/api/friends", function(req, res){
    var newUser = req.body;
    console.log(newUser);
    userProfiles.push(newUser);
});





app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
