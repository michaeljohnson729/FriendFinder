function checkhtml (){
    console.log("html routes");
}
checkhtml();

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});