const express = require("express");
const app = express();

let port = 3000;
app.set("view engine", "ejs");
app.get("/", (req, res) => {
    res.render("home.ejs");
});
app.get("/rolldice", (req,res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", {diceVal});
})
app.get("/ig/:username", (req, res) => {
    let {username} = req.params;
    const instadata = require("./data.json");
    const data = instadata[username];
console.log(data);
    
    res.render("instagram.ejs",{data});

});
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});