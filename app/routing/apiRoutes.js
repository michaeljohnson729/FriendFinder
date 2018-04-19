var userProfiles = require("../data/friends");
module.exports = function(app){

    app.get("/api/friends", function (req, res){
        return res.json(userProfiles);
    });    
    app.post("/api/friends", function(req, res){
        var newUser = req.body;
        console.log(newUser);
        userProfiles.push(newUser);
        res.end();
    });
}